import type { Metadata } from "next";
import { PrivacyPolicyHero, PrivacyPolicyView } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy information for Pain & Paralysis Clinic in Chennai. Currently awaiting clinic confirmation and review.",
  alternates: {
    canonical: "https://painandparalysis.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Pain & Paralysis Clinic",
    description:
      "Privacy Policy information for Pain & Paralysis Clinic in Chennai. Currently awaiting clinic confirmation and review.",
    url: "https://painandparalysis.com/privacy-policy",
    siteName: "Pain & Paralysis Clinic",
    locale: "en_IN",
    type: "website",
  },
};

/**
 * PrivacyPolicyPage Component (/privacy-policy)
 * Phase 26.1 Implementation
 *
 * Page Architecture:
 * 1. Global Header (via RootLayout)
 * 2. PrivacyPolicyHero: Breadcrumbs (Home -> Privacy Policy), title, clinic notice tag
 * 3. PrivacyPolicyView: Focused container (max-w-[860px]) with:
 *    - Transparent Visitor-Facing Notice acknowledging that policy details are awaiting clinic confirmation
 * 4. Global Footer (via RootLayout)
 */
export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <PrivacyPolicyHero />

      {/* 2. Transparent Visitor-Facing Notice */}
      <PrivacyPolicyView />
    </div>
  );
}
