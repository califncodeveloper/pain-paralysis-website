import { redirect } from "next/navigation";
import { getPublishedArticles } from "@/data/articles";

interface RedirectParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function TipsArticleSlugRedirect({ params }: RedirectParams) {
  const { slug } = await params;
  redirect(`/tips-article/${slug}`);
}
