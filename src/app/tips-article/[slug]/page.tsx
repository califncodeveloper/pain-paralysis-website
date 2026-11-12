import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublishedArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import {
  ArticleDetailHero,
  ArticleDetailContent,
  ArticleRelatedServices,
  ArticleRelatedPosts,
} from "@/components/articles";
import { ServicesCTA } from "@/components/services";

interface ArticleDetailPageProps {
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

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.publicationStatus !== "published") {
    notFound();
  }

  const canonicalUrl = `https://painandparalysis.com/tips-article/${article.slug}`;

  return {
    title: `${article.seoTitle || article.title}`,
    description: article.seoDescription || article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.seoDescription || article.excerpt,
      url: canonicalUrl,
      siteName: "Pain and Paralysis Clinic",
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      images: [
        {
          url: article.coverImage,
          alt: article.imageAlt || article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // If article doesn't exist or is not approved/published, return 404
  if (!article || article.publicationStatus !== "published") {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);

  // Schema structured data for healthcare article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `https://painandparalysis.com${article.coverImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: "https://painandparalysis.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Pain and Paralysis Clinic",
      url: "https://painandparalysis.com",
      logo: {
        "@type": "ImageObject",
        url: "https://painandparalysis.com/images/logo/logo-color.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://painandparalysis.com/tips-article/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. Article Header Banner */}
      <ArticleDetailHero article={article} basePath="/tips-article" />

      {/* 2. Article Main Content & Disclaimer */}
      <ArticleDetailContent article={article} basePath="/tips-article" />

      {/* 3. Related Clinical Services */}
      <ArticleRelatedServices services={article.relatedServices} />

      {/* 4. Related Educational Articles */}
      <ArticleRelatedPosts articles={relatedArticles} basePath="/tips-article" />

      {/* 5. Consultation CTA Section */}
      <ServicesCTA
        badge="CONSULTATION"
        heading="Discuss Your Individual Care Options"
        description="Every condition is unique. If you are experiencing persistent back pain, neck stiffness, or movement restrictions, schedule a personalized clinical evaluation in Madhanandapuram, Chennai."
        buttonText="Book Consultation"
      />
    </div>
  );
}

