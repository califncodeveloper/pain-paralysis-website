import type { Metadata } from "next";
import {
  ServicesHero,
  ServicesGrid,
  SpecializedCareAreas,
  ServicesCTA,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Specialized Treatments & Rehabilitation Services - Madhanandapuram",
  description:
    "Explore specialized non-surgical spine decompression, targeted chiropractic adjustments, specialized physiotherapy, aquatic therapy, and neurological rehabilitation in Chennai.",
  alternates: {
    canonical: "https://painandparalysis.com/services",
  },
  openGraph: {
    title: "Specialized Treatments & Rehabilitation Services | Pain & Paralysis Clinic",
    description:
      "Explore specialized non-surgical spine decompression, targeted chiropractic adjustments, specialized physiotherapy, aquatic therapy, and neurological rehabilitation in Chennai.",
    url: "https://painandparalysis.com/services",
    siteName: "Pain & Paralysis Clinic",
    images: [
      {
        url: "/images/services/spine-decompression.webp",
        width: 455,
        height: 533,
        alt: "Pain and Paralysis Clinic specialized physiotherapy and spine treatments in Chennai",
      },
    ],
  },
};

/**
 * ServicesPage Component
 * Full reconstruction of the original Services Overview page (/services/)
 *
 * Page Architecture (Matches Live Reference DOM & Ordering):
 * 1. ServicesHero: "From Pain to Power — Explore Our Treatments" with semantic breadcrumbs
 * 2. ServicesGrid: "WHAT WE OFFER / SERVICES" - 11 authentic treatment cards on Deep Marine Teal background
 * 3. SpecializedCareAreas: "Try today / Specialized care areas" - 4 clinical pillars
 * 4. ServicesCTA: Dual Consultation & Inquiries CTA ("About US" & "CONTACT US" quick inquiry)
 */
export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <ServicesHero />

      {/* 2. 11 Treatment Services Catalog Grid ("WHAT WE OFFER / SERVICES") */}
      <ServicesGrid />

      {/* 3. Specialized Care Areas ("Try today / Specialized care areas") */}
      <SpecializedCareAreas />

      {/* 4. Consultation & Inquiry Call to Action ("About US" & "CONTACT US") */}
      <ServicesCTA
        heading="Discuss Your Consultation Options"
        description="Have questions about your condition or treatment options? Consult our clinical team in Madhanandapuram, Chennai for non-surgical spine care, focused chiropractic adjustments, and specialized clinical rehabilitation consultations tailored to your functional needs."
      />
    </>
  );
}
