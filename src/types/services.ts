export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  originalUrl: string;
  route: string;
  category: string;
  heroImage?: string;
  benefits?: string[];
  features?: string[];
  conditionsTreated?: string[];
}

export interface CareAreaItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  originalUrl: string;
}
