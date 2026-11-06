import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our specialized treatments, experienced doctors, and our mission for holistic recovery.",
};

export default function AboutUsPage() {
  return (
    <div className="container-standard section-spacing">
      <span className="section-badge">About Our Clinic</span>
      <h1 className="text-h1 mt-2">About Us</h1>
      <p className="text-body mt-4 max-w-2xl">
        Overview of Pain &amp; Paralysis Clinic, our medical experts, and healing methodology.
      </p>
    </div>
  );
}
