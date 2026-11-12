import React from "react";
import { KneeDecompressionHero } from "./KneeDecompressionHero";
import { KneeDecompressionIntroduction } from "./KneeDecompressionIntroduction";
import { KneeDecompressionMechanism } from "./KneeDecompressionMechanism";
import { KneeDecompressionConditions } from "./KneeDecompressionConditions";
import { KneeDecompressionBenefits } from "./KneeDecompressionBenefits";
import { KneeDecompressionSuitability } from "./KneeDecompressionSuitability";
import { KneeDecompressionProcess } from "./KneeDecompressionProcess";
import { KneeDecompressionFAQ } from "./KneeDecompressionFAQ";
import { KneeDecompressionRelated } from "./KneeDecompressionRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * KneeDecompressionDetail Component
 * Full reconstruction of the bespoke Advanced Knee Decompression service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Requirements):
 * 1. KneeDecompressionHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. KneeDecompressionIntroduction: 2-column treatment introduction, authentic equipment photo, and primary CTA
 * 3. KneeDecompressionMechanism: 4-card biomechanical principles & technology overview
 * 4. KneeDecompressionConditions: 6-card evaluated indications grid with clinical scope notice
 * 5. KneeDecompressionBenefits: 6-card clinical benefits checklist & explicit limitations panel
 * 6. KneeDecompressionSuitability: 2-column candidate criteria and contraindications screening
 * 7. KneeDecompressionProcess: 5-step treatment methodology roadmap
 * 8. KneeDecompressionFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. KneeDecompressionRelated: Cross-links to completed, approved specialized therapies
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const KneeDecompressionDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <KneeDecompressionHero />

      {/* 2. Treatment Profile & Introduction */}
      <KneeDecompressionIntroduction />

      {/* 3. Biomechanical Mechanisms & Technology Overview */}
      <KneeDecompressionMechanism />

      {/* 4. Conditions Addressed Grid (6 Cards + Clinical Scope Notice) */}
      <KneeDecompressionConditions />

      {/* 5. Potential Benefits & Treatment Limitations (6 Cards + Limitations Panel) */}
      <KneeDecompressionBenefits />

      {/* 6. Patient Suitability & Clinical Contraindications */}
      <KneeDecompressionSuitability />

      {/* 7. Treatment Methodology & 5-Step Process Roadmap */}
      <KneeDecompressionProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <KneeDecompressionFAQ />

      {/* 9. Related Specialized Treatments Cross-Navigation */}
      <KneeDecompressionRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Knee Decompression Consultation Options"
        description="Have questions about knee stiffness, osteoarthritic discomfort, or non-surgical traction options? Consult our clinical team in Madhanandapuram, Chennai to discuss objective evaluation and conservative care tailored to your functional needs."
      />
    </article>
  );
};

