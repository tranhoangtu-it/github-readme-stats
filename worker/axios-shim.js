/**
 * Minimal axios-compatible shim using native fetch().
 * CF Workers doesn't support axios (Node.js HTTP internals).
 * This shim implements only what github-readme-stats uses.
 */

async function axios(config) {
  const { url, method = "GET", headers = {}, data } = typeof config === "string"
    ? { url: config }
    : config;

  const fetchOptions = {
    method: method.toUpperCase(),
    headers: {
      "User-Agent": "github-readme-stats-cf-worker",
      ...headers,
    },
  };

  if (data) {
    fetchOptions.body = typeof data === "string" ? data : JSON.stringify(data);
    if (!fetchOptions.headers["Content-Type"]) {
      fetchOptions.headers["Content-Type"] = "application/json";
    }
  }

  const response = await fetch(url, fetchOptions);
  const text = await response.text();

  let responseData;
  try {
    responseData = JSON.parse(text);
  } catch {
    responseData = text;
  }

  const result = {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
  };

  // Axios throws on non-2xx — replicate this for retryer error handling
  if (response.status >= 400) {
    const error = new Error(`Request failed with status code ${response.status}`);
    error.response = result;
    throw error;
  }

  return result;
}

// axios.get / axios.post convenience methods
axios.get = (url, config = {}) => axios({ ...config, url, method: "GET" });
axios.post = (url, data, config = {}) => axios({ ...config, url, data, method: "POST" });

export default axios;
export { axios };
