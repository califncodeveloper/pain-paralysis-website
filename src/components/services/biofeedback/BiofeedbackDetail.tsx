import React from "react";
import { BiofeedbackHero } from "./BiofeedbackHero";
import { BiofeedbackIntroduction } from "./BiofeedbackIntroduction";
import { BiofeedbackMechanism } from "./BiofeedbackMechanism";
import { BiofeedbackApplications } from "./BiofeedbackApplications";
import { BiofeedbackBenefits } from "./BiofeedbackBenefits";
import { BiofeedbackSuitability } from "./BiofeedbackSuitability";
import { BiofeedbackProcess } from "./BiofeedbackProcess";
import { BiofeedbackFAQ } from "./BiofeedbackFAQ";
import { BiofeedbackRelated } from "./BiofeedbackRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * BiofeedbackDetail Component
 * Full bespoke reconstruction of the Biofeedback service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Standards):
 * 1. BiofeedbackHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. BiofeedbackIntroduction: 2-column service profile, authentic clinic photo, and primary CTA
 * 3. BiofeedbackMechanism: 4-card bioelectric & feedback principles with passive safety panel
 * 4. BiofeedbackApplications: 6-card evaluated indications grid with non-diagnostic scope notice
 * 5. BiofeedbackBenefits: 6-card clinical advantages checklist & comprehensive limitations panel
 * 6. BiofeedbackSuitability: 2-column candidate criteria and clinical precautions screening
 * 7. BiofeedbackProcess: 5-step clinical assessment and retraining methodology roadmap
 * 8. BiofeedbackFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. BiofeedbackRelated: Cross-links to completed, approved specialized services
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const BiofeedbackDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <BiofeedbackHero />

      {/* 2. Service Profile & Introduction */}
      <BiofeedbackIntroduction />

      {/* 3. Physiological Principles & Biofeedback Mechanism */}
      <BiofeedbackMechanism />

      {/* 4. Evaluated Clinical Applications Grid (6 Cards + Non-Diagnostic Scope Notice) */}
      <BiofeedbackApplications />

      {/* 5. Potential Benefits & Assessment Limitations (6 Cards + Limitations Panel) */}
      <BiofeedbackBenefits />

      {/* 6. Patient Suitability & Clinical Precautions */}
      <BiofeedbackSuitability />

      {/* 7. Clinical Retraining Methodology & 5-Step Process Roadmap */}
      <BiofeedbackProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <BiofeedbackFAQ />

      {/* 9. Related Specialized Services Cross-Navigation */}
      <BiofeedbackRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Neuromuscular Biofeedback Options"
        description="Have questions about muscle spasticity, post-stroke motor retraining, or chronic muscular tension? Consult our physical therapy team at Pain & Paralysis Clinic in Madhanandapuram, Chennai to discuss personalized biofeedback and rehabilitation pathways."
      />
    </article>
  );
};

