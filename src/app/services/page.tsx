import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments & Services",
  description:
    "Explore our specialized care programs for paralysis, chronic pain, neurological disorders, and rehabilitation.",
};

export default function ServicesPage() {
  return (
    <div className="container-standard section-spacing">
      <span className="section-badge">What We Offer</span>
      <h1 className="text-h1 mt-2">Our Services &amp; Treatments</h1>
      <p className="text-body mt-4 max-w-2xl">
        Comprehensive non-invasive therapies and advanced neurological care.
      </p>
    </div>
  );
}
