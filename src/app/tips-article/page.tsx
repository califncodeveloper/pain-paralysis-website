import type { Metadata } from "next";
import { getPublishedArticles, getAllArticleCategories } from "@/data/articles";
import { ArticlesHero, ArticleArchiveView } from "@/components/articles";
import { ServicesCTA } from "@/components/services";

export const metadata: Metadata = {
  title: "Health Tips & Clinical Articles",
  description:
    "Read expert physiotherapy tips and health articles from Pain & Paralysis Hospital in Virugambakkam, Chennai. Stay informed with evidence-based advice for better mobility.",
  alternates: {
    canonical: "https://painandparalysis.com/tips-article",
  },
  openGraph: {
    title: "Health Tips & Clinical Articles | Pain & Paralysis Hospital",
    description:
      "Read expert physiotherapy tips and health articles from Pain & Paralysis Hospital in Virugambakkam, Chennai. Stay informed with evidence-based advice for better mobility.",
    url: "https://painandparalysis.com/tips-article",
    siteName: "Pain & Paralysis Hospital",
    locale: "en_US",
    type: "website",
  },
};

export default function TipsArticleArchivePage() {
  const publishedArticles = getPublishedArticles();
  const categories = getAllArticleCategories();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Archive Hero with Breadcrumbs */}
      <ArticlesHero />

      {/* 2. Interactive Archive Grid with Search, Categories, Pagination & Verified Sidebar */}
      <ArticleArchiveView
        initialArticles={publishedArticles}
        categories={categories}
        basePath="/tips-article"
      />

      {/* 3. Global Consultation CTA Section */}
      <ServicesCTA
        badge="HOSPITAL CONSULTATION"
        heading="Discuss Your Inpatient or Outpatient Care Options"
        description="Have questions about persistent spinal discomfort, stroke rehabilitation, or 24-hour inpatient care? Consult Dr. Dinesh Anandhan and our clinical team in Virugambakkam, Chennai for tailored non-surgical guidance."
        buttonText="About Our Hospital"
      />
    </div>
  );
}

