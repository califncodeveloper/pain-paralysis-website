import type { Metadata } from "next";
import { TermsHero, TermsView } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for Pain & Paralysis Clinic in Chennai. Currently awaiting clinic confirmation and review.",
  alternates: {
    canonical: "https://painandparalysis.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Pain & Paralysis Clinic",
    description:
      "Terms & Conditions for Pain & Paralysis Clinic in Chennai. Currently awaiting clinic confirmation and review.",
    url: "https://painandparalysis.com/terms-and-conditions",
    siteName: "Pain & Paralysis Clinic",
    locale: "en_IN",
    type: "website",
  },
};

/**
 * TermsAndConditionsPage Component (/terms-and-conditions)
 * Phase 27 Implementation
 *
 * Page Architecture:
 * 1. Global Header (via RootLayout)
 * 2. TermsHero: Breadcrumbs (Home -> Terms & Conditions), title, clinic notice tag
 * 3. TermsView: Focused container (max-w-[860px]) with:
 *    - Transparent Visitor-Facing Notice acknowledging that terms are awaiting clinic confirmation
 * 4. Global Footer (via RootLayout)
 */
export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <TermsHero />

      {/* 2. Transparent Visitor-Facing Notice */}
      <TermsView />
    </div>
  );
}

