import React from "react";
import { PelvicFloorHero } from "./PelvicFloorHero";
import { PelvicFloorIntroduction } from "./PelvicFloorIntroduction";
import { PelvicFloorConditions } from "./PelvicFloorConditions";
import { PelvicFloorApproach } from "./PelvicFloorApproach";
import { PelvicFloorBenefits } from "./PelvicFloorBenefits";
import { PelvicFloorSuitability } from "./PelvicFloorSuitability";
import { PelvicFloorProcess } from "./PelvicFloorProcess";
import { PelvicFloorFAQ } from "./PelvicFloorFAQ";
import { PelvicFloorRelated } from "./PelvicFloorRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * PelvicFloorDetail Component
 * Full bespoke reconstruction of the Pelvic Floor Therapy service detail page.
 *
 * Page Architecture (Matches Approved Design System & Clinical Standards):
 * 1. PelvicFloorHero: Service heading, clinical eyebrow badge, breadcrumbs, and dual CTAs
 * 2. PelvicFloorIntroduction: 2-column service profile, authentic clinic photo, and primary CTA
 * 3. PelvicFloorConditions: 6-card evaluated indications grid with non-diagnostic scope notice
 * 4. PelvicFloorApproach: 7-pillar clinical rehabilitation methodology & personalization notice
 * 5. PelvicFloorBenefits: 6-card clinical advantages checklist & comprehensive limitations panel
 * 6. PelvicFloorSuitability: 2-column candidate criteria, clinical precautions, and consent policy
 * 7. PelvicFloorProcess: 5-step clinical assessment and rehabilitation journey roadmap
 * 8. PelvicFloorFAQ: Interactive FAQ accordion with 8 evidence-based patient questions
 * 9. PelvicFloorRelated: Cross-links to completed, approved specialized services
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const PelvicFloorDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs & Dual CTAs */}
      <PelvicFloorHero />

      {/* 2. Service Profile & Introduction */}
      <PelvicFloorIntroduction />

      {/* 3. Conditions & Rehabilitation Needs Grid (6 Cards + Non-Diagnostic Scope Notice) */}
      <PelvicFloorConditions />

      {/* 4. Clinical Rehabilitation Approach (7 Pillars + Individualization Notice) */}
      <PelvicFloorApproach />

      {/* 5. Potential Benefits & Limitations (6 Cards + Comprehensive Limitations Panel) */}
      <PelvicFloorBenefits />

      {/* 6. Patient Suitability, Assessment & Informed Consent */}
      <PelvicFloorSuitability />

      {/* 7. Clinical Rehabilitation Journey & 5-Step Process Roadmap */}
      <PelvicFloorProcess />

      {/* 8. Frequently Asked Questions Accordion (8 Questions) */}
      <PelvicFloorFAQ />

      {/* 9. Related Specialized Services Cross-Navigation */}
      <PelvicFloorRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Pelvic Floor Therapy Options in Confidence"
        description="Our clinical physical therapy team in Madhanandapuram, Chennai conducts discreet, thorough functional evaluations to design safe, personalized rehabilitation programs. Reach out today to schedule a private consultation."
        buttonText="About Our Clinic"
      />
    </article>
  );
};

