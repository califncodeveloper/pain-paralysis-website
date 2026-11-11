import React from "react";
import { AquaticTherapyHero } from "./AquaticTherapyHero";
import { AquaticTherapyIntroduction } from "./AquaticTherapyIntroduction";
import { AquaticTherapyTopics } from "./AquaticTherapyTopics";
import { AquaticTherapyConsultation } from "./AquaticTherapyConsultation";
import { AquaticTherapyBenefits } from "./AquaticTherapyBenefits";
import { AquaticTherapyApproaches } from "./AquaticTherapyApproaches";
import { AquaticTherapyFAQ } from "./AquaticTherapyFAQ";
import { AquaticTherapyRelated } from "./AquaticTherapyRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * AquaticTherapyDetail Component
 * Full reconstruction of the original Advanced Aquatic Therapy service detail page.
 *
 * Page Architecture (Matches Original Reference DOM & Approved Design System):
 * 1. AquaticTherapyHero: Service heading, clinical eyebrow badge, and semantic breadcrumbs
 * 2. AquaticTherapyIntroduction: 2-column treatment introduction, authentic modality photo, and primary CTA
 * 3. AquaticTherapyTopics: 6-card movement considerations discussed grid and non-diagnostic notice
 * 4. AquaticTherapyConsultation: 6-card educational guidance on when to consider an aquatic consultation
 * 5. AquaticTherapyBenefits: 6-card core physical properties and biomechanical principles of water
 * 6. AquaticTherapyApproaches: 4-stage consultation roadmap and outpatient setting overview
 * 7. AquaticTherapyFAQ: Interactive FAQ accordion with 7 patient questions
 * 8. AquaticTherapyRelated: Cross-links to the other 4 core specialized therapies
 * 9. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const AquaticTherapyDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs */}
      <AquaticTherapyHero />

      {/* 2. Treatment Profile & Introduction */}
      <AquaticTherapyIntroduction />

      {/* 3. Movement Considerations Discussed */}
      <AquaticTherapyTopics />

      {/* 4. When to Consider Aquatic Consultation (Educational Guidance) */}
      <AquaticTherapyConsultation />

      {/* 5. Core Biomechanical Properties & Principles */}
      <AquaticTherapyBenefits />

      {/* 6. Consultation Stages & Setting Overview */}
      <AquaticTherapyApproaches />

      {/* 7. Frequently Asked Questions Accordion */}
      <AquaticTherapyFAQ />

      {/* 8. Related Specialized Treatments Navigation */}
      <AquaticTherapyRelated />

      {/* 9. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Aquatic Therapy Consultation Options"
        description="Have questions about water-based movement principles or physical rehabilitation options? Consult our clinical team in Madhanandapuram, Chennai to discuss conservative care and consultation planning tailored to your functional needs."
      />
    </article>
  );
};

