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
  clinicName: "Pain & Paralysis Hospital",
  address: "Virugambakkam, Chennai, Tamil Nadu - 600092",
  street: "Virugambakkam (Exact street address awaiting client confirmation)",
  area: "Virugambakkam",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600092",
  phone: "8015559609",
  phoneDisplay: "+91 80155 59609",
  mapsUrl: "https://share.google/5VIrbuVRpNjK02RIg",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=PAIN+%26+PARALYSIS+HOSPITAL+Virugambakkam+Chennai&hl=en&t=&z=15&ie=UTF8&iwloc=&output=embed",
  facilityImage: "/images/common/clinic-exterior.webp",
  coordinates: {
    lat: 13.0489,
    lng: 80.1916,
  },
  workingHours: "Hospital Care Available 24 Hours",
  sundayHours: "24 Hours (25-Bed Hospital Care)",
  awaitingConfirmation: false,
  authorizationStatus:
    "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai",
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
