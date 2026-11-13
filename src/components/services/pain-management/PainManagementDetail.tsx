import React from "react";
import { PainManagementHero } from "./PainManagementHero";
import { PainManagementIntroduction } from "./PainManagementIntroduction";
import { PainManagementApproach } from "./PainManagementApproach";
import { PainManagementConditions } from "./PainManagementConditions";
import { PainManagementBenefits } from "./PainManagementBenefits";
import { PainManagementSuitability } from "./PainManagementSuitability";
import { PainManagementFAQ } from "./PainManagementFAQ";
import { PainManagementRelated } from "./PainManagementRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * PainManagementDetail Component
 * Full bespoke page implementation for Comprehensive Pain Management.
 * Non-surgical musculoskeletal assessment, mechanical traction, and functional rehabilitation.
 */
export const PainManagementDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero with Breadcrumbs & Dual CTAs */}
      <PainManagementHero />

      {/* 2. Service Profile & Principles */}
      <PainManagementIntroduction />

      {/* 3. Clinical Approach & Methodology */}
      <PainManagementApproach />

      {/* 4. Evaluated Musculoskeletal & Spine Conditions */}
      <PainManagementConditions />

      {/* 5. Clinical Advantages & Expectations */}
      <PainManagementBenefits />

      {/* 6. Patient Suitability & Safety Screening */}
      <PainManagementSuitability />

      {/* 7. Frequently Asked Questions */}
      <PainManagementFAQ />

      {/* 8. Related Modalities */}
      <PainManagementRelated />

      {/* 9. Consultation CTA */}
      <ServicesCTA
        heading="Discuss Your Conservative Pain Management Options"
        description="Our clinical physical therapy team in Virugambakkam, Chennai conducts thorough biomechanical assessments to evaluate spinal and joint conditions and construct personalized non-surgical treatment plans. Contact us today."
        buttonText="Book Clinical Evaluation"
      />
    </article>
  );
};

