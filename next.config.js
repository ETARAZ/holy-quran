/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;

// next.config.js
const createNextPluginQueryCache = require("next-plugin-query-cache/config");
const withNextPluginQueryCache = createNextPluginQueryCache({
  /**
   * (optional) if you have a preferred port for the proxy server,
   * you can add it here. otherwise, it'll pick an ephemeral port.
   * This should not be the same port as your dev server.
   */
  port: 4000,

  /**
   * (optional) provide a flag that will disable the proxy
   */
  disableProxy: process.env.DISABLE_PROXY === "true",

  /**
   * (optional) provide a fetch implementation that the proxy will use
   */
  fetch: require("@vercel/fetch")(require("node-fetch")),

  /**
   * (optional) provide a function that returns a string. the response
   * result will be saved under that key in the cache.
   *
   * NOTE: ensure this matches the `calculateCacheKey` implementation
   * provided in `createQueryFetch`
   */
  calculateCacheKey: (url, options) => url,
});

module.exports =
  withNextPluginQueryCache(/* optionally add a next.js config */);
