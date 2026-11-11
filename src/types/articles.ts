export interface ArticleAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface ArticleSection {
  heading?: string;
  level?: "h2" | "h3" | "h4";
  paragraphs?: string[];
  listItems?: string[];
  callout?: {
    type: "info" | "warning" | "note";
    title?: string;
    text: string;
  };
}

export interface ArticleRelatedService {
  title: string;
  href: string;
  description: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  introParagraph: string;
  sections: ArticleSection[];
  category: string;
  publishedDate: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readTime: string;
  author: ArticleAuthor;
  coverImage: string;
  imageAlt: string;
  originalUrl?: string;
  tags: string[];
  relatedServices: ArticleRelatedService[];
  seoTitle: string;
  seoDescription: string;
  publicationStatus: "published" | "pending_review" | "draft";
  educationalDisclaimer?: string;
  auditNotes?: string;
}
