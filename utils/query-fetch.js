// query-fetch.js
import { createQueryFetch } from "next-plugin-query-cache";

const { queryFetch, cache } = createQueryFetch({
  /**
   * REQUIRED: paste this as is. `process.env.NEXT_QUERY_CACHE_PORT`
   * is provided by `next-plugin-query-cache`
   */
  port: process.env.NEXT_QUERY_CACHE_PORT,

  /**
   * (optional) provide an underlying fetch implementation. defaults to
   * the global fetch.
   */
  fetch: fetch,

  /**
   * (optional) provide a function that determines whether or not
   * the request should be cached. the default implement is shown here
   */
  shouldCache: (url, options) => {
    const method = options?.method?.toUpperCase() || "GET";
    return method === "GET" && typeof url === "string";
  },

  /**
   * (optional) provide a function that returns whether or not to
   * use the proxy. this function should return `true` during the
   * build but false outside of the build. `process.env.CI === 'true'`
   * works in most Next.js environments
   *
   * the default implementation is shown here.
   */
  getProxyEnabled: async () =>
    (process.env.CI === "true" ||
      process.env.NEXT_PLUGIN_QUERY_CACHE_ACTIVE === "true") &&
    !!process.env.NEXT_QUERY_CACHE_PORT,

  /**
   * (optional) provide a function that determines whether or not
   * the in-memory cache should be used.
   *
   * the default implementation is shown
   */
  getInMemoryCacheEnabled: async () => true,

  /**
   * (optional) provide a function that returns a string. the response
   * result will be saved under that key in the cache.
   *
   * NOTE: ensure this matches the `calculateCacheKey` implementation
   * provided in `createNextPluginQueryCache`
   */
  calculateCacheKey: (url, options) => url,
});

// the cache is an ES6 `Map` of cache keys to saved responses.
// you can optionally modify the in-memory cache using this.
cache.clear();

// export the wrapped fetch implementation
export default queryFetch;
