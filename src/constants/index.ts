/**
 * Application constants and site-wide metadata definitions.
 */

export const SITE_CONFIG = {
  name: "Pain and Paralysis Clinic",
  description:
    "Specialized Ayurvedic & Integrated Healthcare Clinic for Pain and Paralysis Management.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://painandparalysis.com",
  ogImage: "/images/common/og-image.jpg",
  contact: {
    phone: "",
    email: "",
    address: "",
  },
} as const;

export const ROUTES = {
  home: "/",
  aboutUs: "/about-us",
  services: "/services",
  tipsArticles: "/tips-articles",
  gallery: "/gallery",
  faqs: "/faqs",
} as const;

