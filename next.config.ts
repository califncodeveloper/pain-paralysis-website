import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
    cpus: 1,
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
      // Plural articles catalog URL redirect to canonical /tips-article
      {
        source: "/tips-articles",
        destination: "/tips-article",
        permanent: true,
      },
      {
        source: "/tips-articles/:slug*",
        destination: "/tips-article/:slug*",
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
        source: "/3d-gait-analysis",
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
      {
        source: "/inpatient-care",
        destination: "/services/inpatient-care",
        permanent: true,
      },
      {
        source: "/inpatient-rehabilitation",
        destination: "/services/inpatient-care",
        permanent: true,
      },
      {
        source: "/robotic-neuro-rehabilitation",
        destination: "/services/robotic-neuro-rehabilitation",
        permanent: true,
      },
      {
        source: "/robotic-rehabilitation",
        destination: "/services/robotic-neuro-rehabilitation",
        permanent: true,
      },
      {
        source: "/pain-management",
        destination: "/services/pain-management",
        permanent: true,
      },
      {
        source: "/comprehensive-pain-management",
        destination: "/services/pain-management",
        permanent: true,
      },
      // Verified legacy redirects & SEO duplicate mappings (Phase 29)
      {
        source: "/physiotherapy-centre",
        destination: "/services/advanced-physiotherapy",
        permanent: true,
      },
      {
        source: "/physiotherapy-chennai",
        destination: "/services/advanced-physiotherapy",
        permanent: true,
      },
      {
        source: "/chiropractic-treatment-centre",
        destination: "/services/advanced-chiropractor",
        permanent: true,
      },
      {
        source: "/aquatic-therapy",
        destination: "/services/advanced-aquatic-therapy",
        permanent: true,
      },
      {
        source: "/advanced-spine-decompression-2",
        destination: "/services/advanced-spine-decompression",
        permanent: true,
      },
      {
        source: "/emg-therapy",
        destination: "/services/high-frequency-emg",
        permanent: true,
      },
      {
        source: "/biofeedback-therapy",
        destination: "/services/biofeedback",
        permanent: true,
      },
      {
        source: "/neuro-physiotherapy-2",
        destination: "/services/neuro-physiotherapy",
        permanent: true,
      },
      {
        source: "/neuro-physiotherapy-3",
        destination: "/services/neuro-physiotherapy",
        permanent: true,
      },
      // Theme Medilax CPT archive & service detail redirects
      {
        source: "/all-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/all-services/3d-gait-analysis",
        destination: "/services/advanced-3d-gait-analysis",
        permanent: true,
      },
      {
        source: "/all-services/advanced-spine-decompression",
        destination: "/services/advanced-spine-decompression",
        permanent: true,
      },
      {
        source: "/all-services/chiropractor",
        destination: "/services/advanced-chiropractor",
        permanent: true,
      },
      {
        source: "/all-services/aquatic-therapy",
        destination: "/services/advanced-aquatic-therapy",
        permanent: true,
      },
      {
        source: "/all-services/:slug*",
        destination: "/services",
        permanent: true,
      },
      // Theme appointment page aliases
      {
        source: "/appointment",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/appointments",
        destination: "/contact-us",
        permanent: true,
      },
      // Original WordPress root article URLs mapped to /tips-article/[slug]
      {
        source: "/how-does-spine-decompression-therapy-ease-back-pain",
        destination: "/tips-article/how-does-spine-decompression-therapy-ease-back-pain",
        permanent: true,
      },
      {
        source: "/the-role-of-physiotherapy-in-chronic-back-pain-management",
        destination: "/tips-article/the-role-of-physiotherapy-in-chronic-back-pain-management",
        permanent: true,
      },
      {
        source: "/deep-tissue-thermotherapy-for-neck-and-shoulder-pain",
        destination: "/tips-article/deep-tissue-thermotherapy-for-neck-and-shoulder-pain",
        permanent: true,
      },
      {
        source: "/the-benefits-of-aquatic-therapy-for-injury-prevention-and-recovery",
        destination: "/tips-article",
        permanent: true,
      },
      {
        source: "/benefits-of-physiotherapy",
        destination: "/tips-article",
        permanent: true,
      },
      // Privacy policy alias
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      // Terms and conditions aliases
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
