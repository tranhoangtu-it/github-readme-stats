// @ts-check
/**
 * Cloudflare Workers entry point for github-readme-stats.
 *
 * Routes incoming requests to the appropriate Vercel-style handler from api/*.js
 * using the vercel-adapter bridge. Original api/*.js files are untouched so
 * the Vercel deployment continues to work as-is.
 *
 * Route table:
 *   GET /                → stats card  (api/index.js)
 *   GET /api             → stats card  (api/index.js)
 *   GET /api/top-langs   → top languages card
 *   GET /api/pin         → repo pin card
 *   GET /api/gist        → gist card
 *   GET /api/wakatime    → wakatime card
 *   GET /api/status/up   → uptime probe
 *
 * Secrets (set via `wrangler secret put`):
 *   PAT_1 … PAT_N  — GitHub personal access tokens (required, at least one)
 *
 * Optional vars (set in wrangler.toml [vars] or as secrets):
 *   CACHE_SECONDS, WHITELIST, GIST_WHITELIST, EXCLUDE_REPO
 */

import { adaptVercelHandler } from "./vercel-adapter.js";

// Lazy-import handlers to keep startup fast and allow process.env to be
// populated before the retryer module counts available PAT_* tokens.
// All api/*.js files use top-level `export default async (req, res) => {}`

/** @type {Map<string, (request: Request, env: object) => Promise<Response>>} */
const handlerCache = new Map();

/**
 * Returns a cached CF-adapted handler for the given api module path.
 *
 * @param {string} modulePath  Relative path to the api module (e.g. "../api/index.js")
 * @returns {Promise<(request: Request, env: object) => Promise<Response>>}
 */
async function getHandler(modulePath) {
  if (handlerCache.has(modulePath)) {
    // @ts-ignore — map.get is always defined after has() check
    return handlerCache.get(modulePath);
  }
  const mod = await import(modulePath);
  const vercelHandler = mod.default;
  const cfHandler = adaptVercelHandler(vercelHandler);
  handlerCache.set(modulePath, cfHandler);
  return cfHandler;
}

/**
 * Resolve the api module path for the given URL pathname.
 *
 * @param {string} pathname
 * @returns {string | null}  Module path relative to this file, or null for 404.
 */
function resolveModulePath(pathname) {
  // Normalise: strip trailing slash, lower-case
  const path = pathname.replace(/\/+$/, "").toLowerCase();

  if (path === "" || path === "/api") return "../api/index.js";
  if (path === "/api/top-langs") return "../api/top-langs.js";
  if (path === "/api/pin") return "../api/pin.js";
  if (path === "/api/gist") return "../api/gist.js";
  if (path === "/api/wakatime") return "../api/wakatime.js";
  if (path === "/api/status/up") return "../api/status/up.js";
  if (path === "/api/status/pat-info") return "../api/status/pat-info.js";

  return null;
}

export default {
  /**
   * CF Workers fetch handler.
   *
   * @param {Request} request
   * @param {Record<string, string>} env  Bound secrets and vars from wrangler.toml
   * @param {ExecutionContext} _ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);
    const modulePath = resolveModulePath(url.pathname);

    if (!modulePath) {
      return new Response(
        JSON.stringify({
          error: "Not Found",
          routes: [
            "/api",
            "/api/top-langs",
            "/api/pin",
            "/api/gist",
            "/api/wakatime",
            "/api/status/up",
            "/api/status/pat-info",
          ],
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    try {
      const handler = await getHandler(modulePath);
      return handler(request, env);
    } catch (err) {
      console.error("[worker] Failed to load or run handler:", err);
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
