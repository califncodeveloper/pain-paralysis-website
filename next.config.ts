import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Original singular articles catalog URL redirect to canonical /tips-articles
      {
        source: "/tips-article",
        destination: "/tips-articles",
        permanent: true,
      },
      {
        source: "/tips-article/:slug*",
        destination: "/tips-articles/:slug*",
        permanent: true,
      },
      // Original WordPress service URLs mapped to local /services/[slug]
      {
        source: "/advanced-spine-decompression",
        destination: "/services/advanced-spine-decompression",
        permanent: true,
      },
      {
        source: "/advanced-chiropractor",
        destination: "/services/advanced-chiropractor",
        permanent: true,
      },
      {
        source: "/advanced-physiotherapy",
        destination: "/services/advanced-physiotherapy",
        permanent: true,
      },
      {
        source: "/advanced-aquatic-therapy",
        destination: "/services/advanced-aquatic-therapy",
        permanent: true,
      },
      {
        source: "/advanced3d-gait-analysis",
        destination: "/services/advanced-3d-gait-analysis",
        permanent: true,
      },
      {
        source: "/advanced-3d-gait-analysis",
        destination: "/services/advanced-3d-gait-analysis",
        permanent: true,
      },
      {
        source: "/advanced-knee-decompression",
        destination: "/services/advanced-knee-decompression",
        permanent: true,
      },
      {
        source: "/advanced-laser-treatment",
        destination: "/services/advanced-laser-treatment",
        permanent: true,
      },
      {
        source: "/high-frequency-emg",
        destination: "/services/high-frequency-emg",
        permanent: true,
      },
      {
        source: "/biofeedback",
        destination: "/services/biofeedback",
        permanent: true,
      },
      {
        source: "/neuro-physiotherapy",
        destination: "/services/neuro-physiotherapy",
        permanent: true,
      },
      {
        source: "/pelvic-floor-therapy",
        destination: "/services/pelvic-floor-therapy",
        permanent: true,
      },
      // Original WordPress root article URLs mapped to /tips-articles/[slug]
      {
        source: "/how-does-spine-decompression-therapy-ease-back-pain",
        destination: "/tips-articles/how-does-spine-decompression-therapy-ease-back-pain",
        permanent: true,
      },
      {
        source: "/the-role-of-physiotherapy-in-chronic-back-pain-management",
        destination: "/tips-articles/the-role-of-physiotherapy-in-chronic-back-pain-management",
        permanent: true,
      },
      {
        source: "/deep-tissue-thermotherapy-for-neck-and-shoulder-pain",
        destination: "/tips-articles/deep-tissue-thermotherapy-for-neck-and-shoulder-pain",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
