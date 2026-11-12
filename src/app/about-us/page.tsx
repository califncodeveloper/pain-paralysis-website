import type { Metadata } from "next";
import {
  AboutHero,
  AboutIntroduction,
  AboutPractitioner,
  AboutApproach,
  AboutFacilities,
  AboutCTA,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us - Spine Care & Rehabilitation Specialists",
  description:
    "Learn about Pain and Paralysis Clinic in Chennai, our lead specialist Dr. Dinesh Anandhan, evidence-based chiropractic protocols, and non-surgical spine rehabilitation.",
  alternates: {
    canonical: "https://painandparalysis.com/about-us",
  },
  openGraph: {
    title: "About Us - Spine Care & Rehabilitation Specialists | Pain & Paralysis Clinic",
    description:
      "Specialized healthcare clinic in Chennai for non-surgical spine decompression, evidence-based chiropractic alignment, and paralysis rehabilitation.",
    url: "https://painandparalysis.com/about-us",
    siteName: "Pain & Paralysis Clinic",
    images: [
      {
        url: "/images/about/clinic-procedure.webp",
        width: 1024,
        height: 682,
        alt: "Pain and Paralysis Clinic clinical procedure and patient rehabilitation in Chennai",
      },
    ],
  },
};

/**
 * AboutUsPage Component
 * Full reconstruction of the original About Us page (/about-us/)
 *
 * Page Architecture:
 * 1. AboutHero: Beyond Pain Relief title, authentic vignette, semantic breadcrumbs
 * 2. AboutIntroduction: Why Pain And Paralysis, 3 value pillars, authentic procedure photo
 * 3. AboutPractitioner: Lead specialist Dr. Dinesh Anandhan, verified modalities (credentials withheld)
 * 4. AboutApproach: 4-phase clinical methodology roadmap
 * 5. AboutFacilities: Dedicated treatment facility in Madhanandapuram, Chennai
 * 6. AboutCTA: Customized treatment plans consultation call to action
 */
export default function AboutUsPage() {
  return (
    <>
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <AboutHero />

      {/* 2. Clinic Introduction & Core Value Pillars */}
      <AboutIntroduction />

      {/* 3. Lead Practitioner Spotlight (Dr. Dinesh Anandhan) */}
      <AboutPractitioner />

      {/* 4. Clinical Methodology & Healing Approach */}
      <AboutApproach />

      {/* 5. Treatment Facilities & Healing Environment */}
      <AboutFacilities />

      {/* 6. Consultation & Appointment Call to Action Banner */}
      <AboutCTA />
    </>
  );
}
