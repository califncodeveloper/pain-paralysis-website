import type {
  NavItem,
  HeaderConfig,
  FooterSection,
  ClinicContactInfo,
  SocialLink,
} from "@/types";

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Tips & Articles",
    href: "/tips-article",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

export const headerConfig: HeaderConfig = {
  mainNav: mainNavigation,
  ctaButton: {
    label: "Consult Now",
    href: "/contact-us",
  },
};

export const footerNavigation: FooterSection[] = [
  {
    title: "Links",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about-us" },
      { title: "Services", href: "/services" },
      { title: "Tips & Articles", href: "/tips-article" },
      { title: "Gallery", href: "/gallery" },
      { title: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      {
        title: "Advanced Spine Decompression",
        href: "/services/advanced-spine-decompression",
      },
      {
        title: "Advanced Chiropractor",
        href: "/services/advanced-chiropractor",
      },
      {
        title: "Advanced Physiotherapy",
        href: "/services/advanced-physiotherapy",
      },
      {
        title: "Advanced Aquatic Therapy",
        href: "/services/advanced-aquatic-therapy",
      },
      {
        title: "Advanced 3D Gait Analysis",
        href: "/services/advanced-3d-gait-analysis",
      },
    ],
  },
];

export const clinicContactInfo: ClinicContactInfo = {
  clinicName: "Pain and Paralysis Clinic",
  address: "Plot no : 5, Madha Nagar Main Road, Madhanandapuram, Chennai, Tamil Nadu - 600125",
  street: "Plot no : 5, Madha Nagar Main Road",
  area: "Madhanandapuram",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600125",
  phone: "8015559609",
  phoneDisplay: "+91 80155 59609",
  mapsUrl: "https://maps.app.goo.gl/KFe9nQc8Qc85PVAK9",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=13.0182,80.1415&hl=en&z=16&output=embed",
  facilityImage: "/images/common/clinic-exterior.webp",
  coordinates: {
    lat: 13.0182,
    lng: 80.1415,
  },
  workingHours: "Mon - Sat: 8:00 AM - 9:00 PM",
  sundayHours: "Sun: 10:00 AM - 2:00 PM",
  awaitingConfirmation: true,
  authorizationStatus:
    "Awaiting final clinic confirmation before production publication",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/painandparalysis_clinic/",
    label: "Follow Pain and Paralysis on Instagram",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61573888240184#",
    label: "Follow Pain and Paralysis on Facebook",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/feed/",
    label: "Connect with Pain and Paralysis on LinkedIn",
  },
];
