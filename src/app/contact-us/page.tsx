import type { Metadata } from "next";
import { ContactHero, ContactView } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Consultations & Appointments",
  description:
    "Get in touch with Pain & Paralysis Clinic in Madhanandapuram, Chennai. Schedule non-surgical spine decompression, chiropractic consultations, and rehabilitation assessments.",
  alternates: {
    canonical: "https://painandparalysis.com/contact-us",
  },
  openGraph: {
    title: "Contact Us - Consultations & Appointments | Pain & Paralysis Clinic",
    description:
      "Get in touch with Pain & Paralysis Clinic in Madhanandapuram, Chennai. Schedule non-surgical spine decompression, chiropractic consultations, and rehabilitation assessments.",
    url: "https://painandparalysis.com/contact-us",
    siteName: "Pain & Paralysis Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/common/clinic-exterior.webp",
        width: 1200,
        height: 582,
        alt: "Pain and Paralysis Clinic facility in Madhanandapuram, Chennai",
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
