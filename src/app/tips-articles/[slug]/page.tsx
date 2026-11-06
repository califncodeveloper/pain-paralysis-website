import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articlesData } from "@/data/articles";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = articlesData.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container-standard section-spacing">
      <article className="max-w-3xl">
        {article.category && (
          <span className="section-badge">{article.category}</span>
        )}
        <h1 className="text-h1 mt-2">{article.title}</h1>
        <p className="text-body mt-4 text-lg font-medium text-secondary">
          {article.excerpt}
        </p>
        <div className="mt-6 text-body">
          <p>{article.content}</p>
        </div>
      </article>
    </div>
  );
}
