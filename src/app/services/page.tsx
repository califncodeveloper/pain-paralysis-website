import type { Metadata } from "next";
import {
  ServicesHero,
  ServicesGrid,
  SpecializedCareAreas,
  ServicesCTA,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Hospital Inpatient Care & Specialized Rehabilitation Services - Virugambakkam",
  description:
    "Explore 25-bedded, 24-hour hospital inpatient care, robotic neuro rehabilitation, comprehensive pain management, non-surgical spine decompression, and advanced physiotherapy in Virugambakkam, Chennai.",
  alternates: {
    canonical: "https://painandparalysis.com/services",
  },
  openGraph: {
    title: "Hospital Inpatient Care & Specialized Rehabilitation Services | Pain & Paralysis Hospital",
    description:
      "Explore 25-bedded, 24-hour hospital inpatient care, robotic neuro rehabilitation, comprehensive pain management, non-surgical spine decompression, and advanced physiotherapy in Virugambakkam, Chennai.",
    url: "https://painandparalysis.com/services",
    siteName: "Pain & Paralysis Hospital",
    images: [
      {
        url: "/images/services/spine-decompression.webp",
        width: 455,
        height: 533,
        alt: "Pain and Paralysis Hospital specialized treatments and rehabilitation in Virugambakkam, Chennai",
      },
    ],
  },
};

/**
 * ServicesPage Component
 * Full reconstruction of the Services Overview page (/services/)
 *
 * Page Architecture:
 * 1. ServicesHero: "From Pain to Power — Explore Our Treatments" with semantic breadcrumbs
 * 2. ServicesGrid: "WHAT WE OFFER / SERVICES" - 14 authentic hospital and rehabilitation services
 * 3. SpecializedCareAreas: 4 clinical pillars
 * 4. ServicesCTA: Dual Consultation & Inquiries CTA ("About US" & "CONTACT US" quick inquiry)
 */
export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <ServicesHero />

      {/* 2. 14 Treatment Services Catalog Grid ("WHAT WE OFFER / SERVICES") */}
      <ServicesGrid />

      {/* 3. Specialized Care Areas ("Try today / Specialized care areas") */}
      <SpecializedCareAreas />

      {/* 4. Consultation & Inquiry Call to Action ("About US" & "CONTACT US") */}
      <ServicesCTA
        heading="Discuss Your Hospital & Consultation Options"
        description="Have questions regarding 24-hour inpatient care, robotic neuro rehabilitation, or non-surgical pain management? Consult our clinical team in Virugambakkam, Chennai to discuss tailored clinical evaluations and rehabilitation pathways."
      />
    </>
  );
}
