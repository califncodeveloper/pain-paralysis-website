import type { Metadata } from "next";
import { getPublishedArticles, getAllArticleCategories } from "@/data/articles";
import { ArticlesHero, ArticleArchiveView } from "@/components/articles";
import { ServicesCTA } from "@/components/services";

export const metadata: Metadata = {
  title: "Health Tips & Clinical Articles",
  description:
    "Read expert physiotherapy tips and health articles from Pain and Paralysis clinic in madhanandapuram. Stay informed with evidence-based advice for better mobility.",
  alternates: {
    canonical: "https://painandparalysis.com/tips-article",
  },
  openGraph: {
    title: "Health Tips & Clinical Articles | Pain & Paralysis Clinic",
    description:
      "Read expert physiotherapy tips and health articles from Pain and Paralysis clinic in madhanandapuram. Stay informed with evidence-based advice for better mobility.",
    url: "https://painandparalysis.com/tips-article",
    siteName: "Pain and Paralysis Clinic",
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
        badge="ABOUT US"
        heading="Discuss Your Rehabilitation Consultation Options"
        description="Have questions about persistent spinal discomfort, postural tension, or physical rehabilitation? Consult Dr. Dinesh Anandhan and our clinical team in Madhanandapuram, Chennai for tailored non-surgical guidance."
        buttonText="About Us"
      />
    </div>
  );
}

