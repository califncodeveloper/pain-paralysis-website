import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Tips & Articles",
  description:
    "Read the latest health tips, medical articles, and lifestyle guidance from our specialists.",
};

export default function TipsArticlesPage() {
  return (
    <div className="container-standard section-spacing">
      <span className="section-badge">Knowledge &amp; Advice</span>
      <h1 className="text-h1 mt-2">Health Tips &amp; Articles</h1>
      <p className="text-body mt-4 max-w-2xl">
        Educational resources, recovery guides, and wellness insights from our clinical specialists.
      </p>
    </div>
  );
}
