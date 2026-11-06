export interface ArticleAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  publishedDate: string;
  readTime?: string;
  author: ArticleAuthor;
  coverImage: string;
  originalUrl?: string;
  tags?: string[];
}
