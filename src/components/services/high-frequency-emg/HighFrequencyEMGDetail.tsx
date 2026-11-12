import React from "react";
import { HighFrequencyEMGHero } from "./HighFrequencyEMGHero";
import { HighFrequencyEMGIntroduction } from "./HighFrequencyEMGIntroduction";
import { HighFrequencyEMGMechanism } from "./HighFrequencyEMGMechanism";
import { HighFrequencyEMGConditions } from "./HighFrequencyEMGConditions";
import { HighFrequencyEMGBenefits } from "./HighFrequencyEMGBenefits";
import { HighFrequencyEMGSuitability } from "./HighFrequencyEMGSuitability";
import { HighFrequencyEMGProcess } from "./HighFrequencyEMGProcess";
import { HighFrequencyEMGFAQ } from "./HighFrequencyEMGFAQ";
import { HighFrequencyEMGRelated } from "./HighFrequencyEMGRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * HighFrequencyEMGDetail Component
 * Full reconstruction of the bespoke High Frequency EMG service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Requirements):
 * 1. HighFrequencyEMGHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. HighFrequencyEMGIntroduction: 2-column service introduction, authentic equipment photo, and primary CTA
 * 3. HighFrequencyEMGMechanism: 4-card bioelectrical principles & passive sensor safety infrastructure panel
 * 4. HighFrequencyEMGConditions: 6-card evaluated indications grid with clinical scope notice
 * 5. HighFrequencyEMGBenefits: 6-card clinical benefits checklist & explicit limitations panel
 * 6. HighFrequencyEMGSuitability: 2-column candidate criteria and clinical precautions screening
 * 7. HighFrequencyEMGProcess: 5-step clinical assessment methodology roadmap
 * 8. HighFrequencyEMGFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. HighFrequencyEMGRelated: Cross-links to completed, approved specialized services
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const HighFrequencyEMGDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <HighFrequencyEMGHero />

      {/* 2. Service Profile & Introduction */}
      <HighFrequencyEMGIntroduction />

      {/* 3. Bioelectric Mechanisms & Assessment Principles */}
      <HighFrequencyEMGMechanism />

      {/* 4. Evaluated Clinical Applications Grid (6 Cards + Non-Diagnostic Scope Notice) */}
      <HighFrequencyEMGConditions />

      {/* 5. Potential Benefits & Assessment Limitations (6 Cards + Limitations Panel) */}
      <HighFrequencyEMGBenefits />

      {/* 6. Patient Suitability & Clinical Precautions */}
      <HighFrequencyEMGSuitability />

      {/* 7. Clinical Assessment Methodology & 5-Step Process Roadmap */}
      <HighFrequencyEMGProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <HighFrequencyEMGFAQ />

      {/* 9. Related Specialized Services Cross-Navigation */}
      <HighFrequencyEMGRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Neuromuscular Assessment Options"
        description="Have questions about muscle weakness, motor recovery, or non-invasive electromyographic assessment? Consult our clinical team in Madhanandapuram, Chennai to discuss objective evaluation and personalized rehabilitation options."
      />
    </article>
  );
};

