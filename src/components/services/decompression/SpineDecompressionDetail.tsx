import React from "react";
import { SpineDecompressionHero } from "./SpineDecompressionHero";
import { SpineDecompressionIntroduction } from "./SpineDecompressionIntroduction";
import { SpineDecompressionBenefits } from "./SpineDecompressionBenefits";
import { SpineDecompressionConditions } from "./SpineDecompressionConditions";
import { SpineDecompressionProcess } from "./SpineDecompressionProcess";
import { SpineDecompressionFAQ } from "./SpineDecompressionFAQ";
import { SpineDecompressionRelated } from "./SpineDecompressionRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * SpineDecompressionDetail Component
 * Full reconstruction of the original Advanced Spine Decompression service detail page.
 *
 * Page Architecture (Matches Original Reference DOM & Section Ordering):
 * 1. SpineDecompressionHero: Service heading, clinical eyebrow badge, and semantic breadcrumbs
 * 2. SpineDecompressionIntroduction: 2-column treatment introduction, authentic equipment photo, and primary CTA
 * 3. SpineDecompressionBenefits: 6-card clinical benefits checklist & therapeutic rationale
 * 4. SpineDecompressionConditions: 6-card conditions addressed grid
 * 5. SpineDecompressionProcess: 4-step treatment methodology and authentic biomechanical diagram
 * 6. SpineDecompressionFAQ: Interactive FAQ accordion with 5 verified patient questions
 * 7. SpineDecompressionRelated: Cross-links to the other 4 core specialized therapies
 * 8. ServicesCTA: Dual Consultation & Inquiries CTA ("About US" & "CONTACT US" quick inquiry)
 */
export const SpineDecompressionDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs */}
      <SpineDecompressionHero />

      {/* 2. Treatment Profile & Introduction */}
      <SpineDecompressionIntroduction />

      {/* 3. Clinical Benefits & Rationale */}
      <SpineDecompressionBenefits />

      {/* 4. Conditions Addressed Grid */}
      <SpineDecompressionConditions />

      {/* 5. Treatment Methodology & Biomechanical Diagram */}
      <SpineDecompressionProcess />

      {/* 6. Frequently Asked Questions Accordion */}
      <SpineDecompressionFAQ />

      {/* 7. Related Specialized Treatments Navigation */}
      <SpineDecompressionRelated />

      {/* 8. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Spine Decompression Options"
        description="Have questions about your spinal condition or decompression therapy options? Consult our clinical team in Madhanandapuram, Chennai for non-surgical spine care tailored to your functional needs."
      />
    </article>
  );
};

