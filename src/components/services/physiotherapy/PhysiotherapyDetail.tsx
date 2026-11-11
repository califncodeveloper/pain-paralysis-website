import React from "react";
import { PhysiotherapyHero } from "./PhysiotherapyHero";
import { PhysiotherapyIntroduction } from "./PhysiotherapyIntroduction";
import { PhysiotherapyConditions } from "./PhysiotherapyConditions";
import { PhysiotherapyWhenToSeek } from "./PhysiotherapyWhenToSeek";
import { PhysiotherapyApproaches } from "./PhysiotherapyApproaches";
import { PhysiotherapyTechniques } from "./PhysiotherapyTechniques";
import { PhysiotherapyFAQ } from "./PhysiotherapyFAQ";
import { PhysiotherapyRelated } from "./PhysiotherapyRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * PhysiotherapyDetail Component
 * Full reconstruction of the original Advanced Physiotherapy service detail page.
 *
 * Page Architecture (Matches Original Reference DOM & Approved Design System):
 * 1. PhysiotherapyHero: Service heading, clinical eyebrow badge, and semantic breadcrumbs
 * 2. PhysiotherapyIntroduction: 2-column treatment introduction, authentic modality photo, and primary CTA
 * 3. PhysiotherapyConditions: 6-card movement concerns discussed grid and non-diagnostic notice
 * 4. PhysiotherapyWhenToSeek: 6-card educational guidance on when to seek outpatient physiotherapy
 * 5. PhysiotherapyApproaches: 6-card general topics in physical therapy care
 * 6. PhysiotherapyTechniques: 4-stage consultation stages and clinic setting overview
 * 7. PhysiotherapyFAQ: Interactive FAQ accordion with 7 patient questions
 * 8. PhysiotherapyRelated: Cross-links to the other 4 core specialized therapies
 * 9. ServicesCTA: Dual Consultation & Inquiries CTA ("About US" & "CONTACT US" quick inquiry)
 */
export const PhysiotherapyDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs */}
      <PhysiotherapyHero />

      {/* 2. Treatment Profile & Introduction */}
      <PhysiotherapyIntroduction />

      {/* 3. Movement Concerns Discussed */}
      <PhysiotherapyConditions />

      {/* 4. When to Seek Physiotherapy (Educational Guidance) */}
      <PhysiotherapyWhenToSeek />

      {/* 5. General Topics in Physical Therapy Care */}
      <PhysiotherapyApproaches />

      {/* 6. Consultation Stages & Clinic Setting Overview */}
      <PhysiotherapyTechniques />

      {/* 7. Frequently Asked Questions Accordion */}
      <PhysiotherapyFAQ />

      {/* 8. Related Specialized Treatments Navigation */}
      <PhysiotherapyRelated />

      {/* 9. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Physiotherapy Consultation Options"
        description="Have questions about your mobility or physical rehabilitation options? Consult our clinical team in Madhanandapuram, Chennai for non-surgical conservative care and clinical consultations tailored to your functional needs."
      />
    </article>
  );
};

