import type { Metadata } from "next";
import { ContactHero, ContactView } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - 25-Bed Hospital & Consultations in Virugambakkam",
  description:
    "Get in touch with Pain & Paralysis Hospital in Virugambakkam, Chennai. Schedule 25-bed inpatient admissions, robotic neuro rehabilitation, non-surgical spine decompression, and pain management assessments.",
  alternates: {
    canonical: "https://painandparalysis.com/contact-us",
  },
  openGraph: {
    title: "Contact Us - Hospital Care & Consultations | Pain & Paralysis Hospital",
    description:
      "Get in touch with Pain & Paralysis Hospital in Virugambakkam, Chennai. Schedule 25-bed inpatient admissions, robotic neuro rehabilitation, non-surgical spine decompression, and pain management assessments.",
    url: "https://painandparalysis.com/contact-us",
    siteName: "Pain & Paralysis Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/common/clinic-exterior.webp",
        width: 1200,
        height: 582,
        alt: "Pain and Paralysis Hospital 25-bed facility in Virugambakkam, Chennai",
      },
    ],
  },
};

/**
 * ContactUsPage Component (/contact-us)
 * Phase 25 Implementation
 *
 * Page Architecture:
 * 1. Global Header (via RootLayout)
 * 2. ContactHero: Breadcrumbs (Home -> Contact Us), title, clinical badge, and orientation copy
 * 3. ContactIntro: Consultation principles, in-person assessment expectations, and outpatient focus
 * 4. ContactFormSection (Balanced 2-Column Layout):
 *    - Left: Accessible inquiry form with client-side validation for Name, Email, Phone (Indian format), Service, and Message
 *    - Right: Office Information card with published address, phone, schedule, and verification disclosures
 * 5. ContactLocationMap: Responsive interactive Google Maps embed with verified coordinates and directions action
 * 6. Global Footer (via RootLayout)
 */
export default function ContactUsPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <ContactHero />

      {/* 2. Structured Contact View (Intro + Form & Office + Map) */}
      <ContactView />
    </div>
  );
}
