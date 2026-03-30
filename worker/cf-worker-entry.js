/**
 * Cloudflare Workers entry point for github-readme-stats.
 *
 * Injects env vars before any module reads process.env,
 * then routes to the appropriate API handler.
 */

import { adaptVercelHandler } from "./vercel-adapter.js";

// Static imports — wrangler bundles these at build time
import statsHandler from "../api/index.js";
import topLangsHandler from "../api/top-langs.js";
import pinHandler from "../api/pin.js";
import gistHandler from "../api/gist.js";
import wakatimeHandler from "../api/wakatime.js";

const routes = {
  "/": statsHandler,
  "/api": statsHandler,
  "/api/top-langs": topLangsHandler,
  "/api/pin": pinHandler,
  "/api/gist": gistHandler,
  "/api/wakatime": wakatimeHandler,
};

// Pre-adapt all handlers
const adaptedRoutes = {};
for (const [path, handler] of Object.entries(routes)) {
  adaptedRoutes[path] = adaptVercelHandler(handler);
}

export default {
  async fetch(request, env, ctx) {
    // Inject secrets into process.env FIRST
    // This ensures retryer.js PAT_* detection works
    if (env) {
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "").toLowerCase() || "/";

    const handler = adaptedRoutes[path];
    if (!handler) {
      return new Response(JSON.stringify({
        error: "Not Found",
        routes: Object.keys(routes),
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const resp = await handler(request, env);
      const body = await resp.clone().text();
      if (body.includes("Something went wrong")) {
        console.error("[worker] PAT count:", Object.keys(process.env).filter(k => /PAT_\d/.test(k)).length);
        console.error("[worker] PAT_1 exists:", !!process.env.PAT_1);
        console.error("[worker] PAT_1 prefix:", process.env.PAT_1?.substring(0, 8));
        console.error("[worker] SVG body:", body.substring(0, 500));
      }
      return resp;
    } catch (err) {
      console.error("[worker] Error:", err.message, err.stack);
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
