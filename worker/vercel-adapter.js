// @ts-check

/**
 * Adapts a Vercel-style (req, res) => void handler into a
 * Cloudflare Workers (Request, Env) => Response handler.
 *
 * The Vercel req/res interface used by api/*.js:
 *   req.query  — URL search params as a plain object
 *   res.setHeader(key, value) — set response header
 *   res.status(code) — set status code, returns res (chainable)
 *   res.send(body)  — send response body (string)
 *
 * @param {(req: object, res: object) => Promise<void>} handler
 * @returns {(request: Request, env: object) => Promise<Response>}
 */
export function adaptVercelHandler(handler) {
  return async (request, env) => {
    // Inject CF Worker secrets into process.env so existing code can read them.
    // This must happen on every request because the CF runtime may reuse the
    // same isolate across requests with different bindings.
    if (env && typeof env === "object") {
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
    }

    const url = new URL(request.url);

    // Build mock req compatible with Vercel handler expectations.
    const req = {
      query: Object.fromEntries(url.searchParams),
      method: request.method,
      url: request.url,
    };

    // Capture state written through the mock res interface.
    let statusCode = 200;
    const responseHeaders = new Headers();
    let body = "";
    let settled = false;

    const res = {
      /**
       * @param {string} key
       * @param {string | string[]} value
       */
      setHeader(key, value) {
        if (Array.isArray(value)) {
          // Replace existing values for this header name.
          responseHeaders.delete(key);
          for (const v of value) {
            responseHeaders.append(key, v);
          }
        } else {
          responseHeaders.set(key, value);
        }
      },

      /**
       * @param {number} code
       * @returns {typeof res}
       */
      status(code) {
        statusCode = code;
        return res; // chainable: res.status(404).send(...)
      },

      /**
       * @param {string} data
       */
      send(data) {
        if (!settled) {
          body = data ?? "";
          settled = true;
        }
        return res; // some handlers return res.send(...)
      },
    };

    try {
      await handler(req, res);
    } catch (err) {
      // Unhandled errors become 500 responses so the worker doesn't crash.
      console.error("[worker] Unhandled handler error:", err);
      return new Response("Internal Server Error", { status: 500 });
    }

    return new Response(body, {
      status: statusCode,
      headers: responseHeaders,
    });
  };
}
