export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface HeaderConfig {
  mainNav: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  platform: "Instagram" | "Facebook" | "LinkedIn" | "YouTube" | "Twitter";
  url: string;
  label: string;
}

export interface ClinicContactInfo {
  clinicName: string;
  address: string;
  street: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  phoneDisplay: string;
  mapsUrl: string;
  workingHours: string;
}
