import React from "react";
import { LaserTreatmentHero } from "./LaserTreatmentHero";
import { LaserTreatmentIntroduction } from "./LaserTreatmentIntroduction";
import { LaserTreatmentMechanism } from "./LaserTreatmentMechanism";
import { LaserTreatmentConditions } from "./LaserTreatmentConditions";
import { LaserTreatmentBenefits } from "./LaserTreatmentBenefits";
import { LaserTreatmentSuitability } from "./LaserTreatmentSuitability";
import { LaserTreatmentProcess } from "./LaserTreatmentProcess";
import { LaserTreatmentFAQ } from "./LaserTreatmentFAQ";
import { LaserTreatmentRelated } from "./LaserTreatmentRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * LaserTreatmentDetail Component
 * Full reconstruction of the bespoke Advanced Laser Treatment service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Requirements):
 * 1. LaserTreatmentHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. LaserTreatmentIntroduction: 2-column treatment introduction, authentic modality photo, and primary CTA
 * 3. LaserTreatmentMechanism: 4-card photobiological principles & safety infrastructure panel
 * 4. LaserTreatmentConditions: 6-card evaluated indications grid with clinical scope notice
 * 5. LaserTreatmentBenefits: 6-card clinical benefits checklist & explicit limitations panel
 * 6. LaserTreatmentSuitability: 2-column candidate criteria and contraindications screening
 * 7. LaserTreatmentProcess: 5-step treatment methodology roadmap
 * 8. LaserTreatmentFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. LaserTreatmentRelated: Cross-links to completed, approved specialized therapies
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const LaserTreatmentDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <LaserTreatmentHero />

      {/* 2. Treatment Profile & Introduction */}
      <LaserTreatmentIntroduction />

      {/* 3. Photobiological Mechanisms & Technology Overview */}
      <LaserTreatmentMechanism />

      {/* 4. Conditions Addressed Grid (6 Cards + Clinical Scope Notice) */}
      <LaserTreatmentConditions />

      {/* 5. Potential Benefits & Treatment Limitations (6 Cards + Limitations Panel) */}
      <LaserTreatmentBenefits />

      {/* 6. Patient Suitability & Clinical Contraindications */}
      <LaserTreatmentSuitability />

      {/* 7. Treatment Methodology & 5-Step Process Roadmap */}
      <LaserTreatmentProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <LaserTreatmentFAQ />

      {/* 9. Related Specialized Treatments Cross-Navigation */}
      <LaserTreatmentRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Laser Therapy Consultation Options"
        description="Have questions about persistent joint stiffness, muscle strain, or non-invasive laser therapy options? Consult our clinical team in Madhanandapuram, Chennai to discuss objective evaluation and conservative care tailored to your recovery goals."
      />
    </article>
  );
};

