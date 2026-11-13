/**
 * Application constants and site-wide metadata definitions.
 */

export const SITE_CONFIG = {
  name: "Pain and Paralysis Hospital",
  description:
    "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai specializing in Inpatient Care, Robotic Neuro Rehabilitation, and Comprehensive Pain Management.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://painandparalysis.com",
  ogImage: "/images/common/og-image.jpg",
  contact: {
    phone: "+91 80155 59609",
    email: "info@painandparalysis.com",
    address: "Virugambakkam, Chennai, Tamil Nadu - 600092",
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

