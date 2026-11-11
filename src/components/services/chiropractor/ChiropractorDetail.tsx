import React from "react";
import { ChiropractorHero } from "./ChiropractorHero";
import { ChiropractorIntroduction } from "./ChiropractorIntroduction";
import { ChiropractorBenefits } from "./ChiropractorBenefits";
import { ChiropractorConditions } from "./ChiropractorConditions";
import { ChiropractorTechniques } from "./ChiropractorTechniques";
import { ChiropractorFAQ } from "./ChiropractorFAQ";
import { ChiropractorRelated } from "./ChiropractorRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * ChiropractorDetail Component
 * Full reconstruction of the original Advanced Chiropractor service detail page.
 *
 * Page Architecture (Matches Original Reference DOM & Approved Design System):
 * 1. ChiropractorHero: Service heading, clinical eyebrow badge, and semantic breadcrumbs
 * 2. ChiropractorIntroduction: 2-column treatment introduction, authentic modality photo, and primary CTA
 * 3. ChiropractorBenefits: 6-card clinical benefits checklist & therapeutic rationale
 * 4. ChiropractorConditions: 6-card conditions addressed grid
 * 5. ChiropractorTechniques: 4-step treatment methodology and clinical credentialing showcase
 * 6. ChiropractorFAQ: Interactive FAQ accordion with 7 verified patient questions
 * 7. ChiropractorRelated: Cross-links to the other 4 core specialized therapies
 * 8. ServicesCTA: Dual Consultation & Inquiries CTA ("About US" & "CONTACT US" quick inquiry)
 */
export const ChiropractorDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs */}
      <ChiropractorHero />

      {/* 2. Treatment Profile & Introduction */}
      <ChiropractorIntroduction />

      {/* 3. Clinical Benefits & Rationale */}
      <ChiropractorBenefits />

      {/* 4. Conditions Addressed Grid */}
      <ChiropractorConditions />

      {/* 5. Treatment Methodology & Techniques */}
      <ChiropractorTechniques />

      {/* 6. Frequently Asked Questions Accordion */}
      <ChiropractorFAQ />

      {/* 7. Related Specialized Treatments Navigation */}
      <ChiropractorRelated />

      {/* 8. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your Chiropractic Consultation Options"
        description="Have questions about your spinal mobility or chiropractic care options? Consult our clinical team in Madhanandapuram, Chennai for non-surgical care tailored to your functional needs."
      />
    </article>
  );
};

