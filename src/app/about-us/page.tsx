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
  title: "About Us - 25-Bed Hospital & Rehabilitation Specialists",
  description:
    "Learn about Pain & Paralysis Hospital in Virugambakkam, Chennai, our 25-bed inpatient facility, 24-hour hospital care, robotic neuro rehabilitation, and lead specialist Dr. Dinesh Anandhan.",
  alternates: {
    canonical: "https://painandparalysis.com/about-us",
  },
  openGraph: {
    title: "About Us - 25-Bed Hospital & Rehabilitation | Pain & Paralysis Hospital",
    description:
      "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai for inpatient recovery, robotic neuro rehabilitation, and non-surgical spine decompression.",
    url: "https://painandparalysis.com/about-us",
    siteName: "Pain & Paralysis Hospital",
    images: [
      {
        url: "/images/about/clinic-procedure.webp",
        width: 1024,
        height: 682,
        alt: "Pain and Paralysis Hospital clinical procedure and patient rehabilitation in Chennai",
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
