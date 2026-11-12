import React from "react";
import { NeuroPhysiotherapyHero } from "./NeuroPhysiotherapyHero";
import { NeuroPhysiotherapyIntroduction } from "./NeuroPhysiotherapyIntroduction";
import { NeuroPhysiotherapyConditions } from "./NeuroPhysiotherapyConditions";
import { NeuroPhysiotherapyApproach } from "./NeuroPhysiotherapyApproach";
import { NeuroPhysiotherapyBenefits } from "./NeuroPhysiotherapyBenefits";
import { NeuroPhysiotherapySuitability } from "./NeuroPhysiotherapySuitability";
import { NeuroPhysiotherapyProcess } from "./NeuroPhysiotherapyProcess";
import { NeuroPhysiotherapyFAQ } from "./NeuroPhysiotherapyFAQ";
import { NeuroPhysiotherapyRelated } from "./NeuroPhysiotherapyRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * NeuroPhysiotherapyDetail Component
 * Full bespoke reconstruction of the Neuro Physiotherapy service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Standards):
 * 1. NeuroPhysiotherapyHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. NeuroPhysiotherapyIntroduction: 2-column service profile, authentic clinic photo, and primary CTA
 * 3. NeuroPhysiotherapyConditions: 6-card evaluated indications grid with non-diagnostic scope notice
 * 4. NeuroPhysiotherapyApproach: 7-pillar clinical rehabilitation methodology & personalization notice
 * 5. NeuroPhysiotherapyBenefits: 6-card clinical advantages checklist & comprehensive limitations panel
 * 6. NeuroPhysiotherapySuitability: 2-column candidate criteria and clinical precautions screening
 * 7. NeuroPhysiotherapyProcess: 5-step clinical assessment and rehabilitation journey roadmap
 * 8. NeuroPhysiotherapyFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. NeuroPhysiotherapyRelated: Cross-links to completed, approved specialized services
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const NeuroPhysiotherapyDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <NeuroPhysiotherapyHero />

      {/* 2. Service Profile & Introduction */}
      <NeuroPhysiotherapyIntroduction />

      {/* 3. Conditions & Rehabilitation Needs Grid (6 Cards + Non-Diagnostic Scope Notice) */}
      <NeuroPhysiotherapyConditions />

      {/* 4. Clinical Rehabilitation Approach (7 Pillars + Individualization Notice) */}
      <NeuroPhysiotherapyApproach />

      {/* 5. Potential Benefits & Limitations (6 Cards + Comprehensive Limitations Panel) */}
      <NeuroPhysiotherapyBenefits />

      {/* 6. Patient Suitability & Clinical Precautions */}
      <NeuroPhysiotherapySuitability />

      {/* 7. Clinical Rehabilitation Journey & 5-Step Process Roadmap */}
      <NeuroPhysiotherapyProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <NeuroPhysiotherapyFAQ />

      {/* 9. Related Specialized Services Cross-Navigation */}
      <NeuroPhysiotherapyRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Neuro Physiotherapy Consultation Options"
        description="Our clinical team in Madhanandapuram, Chennai conducts thorough functional evaluations to design safe, personalized rehabilitation programs. Reach out today to discuss your neurological mobility and recovery needs."
        buttonText="About Our Clinic"
      />
    </article>
  );
};
