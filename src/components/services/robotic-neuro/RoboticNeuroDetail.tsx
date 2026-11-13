import React from "react";
import { RoboticNeuroHero } from "./RoboticNeuroHero";
import { RoboticNeuroIntroduction } from "./RoboticNeuroIntroduction";
import { RoboticNeuroTechnology } from "./RoboticNeuroTechnology";
import { RoboticNeuroConditions } from "./RoboticNeuroConditions";
import { RoboticNeuroBenefits } from "./RoboticNeuroBenefits";
import { RoboticNeuroSuitability } from "./RoboticNeuroSuitability";
import { RoboticNeuroFAQ } from "./RoboticNeuroFAQ";
import { RoboticNeuroRelated } from "./RoboticNeuroRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * RoboticNeuroDetail Component
 * Full bespoke page implementation for Robotic Neuro Rehabilitation.
 * Prominently presents technology-assisted neurological physical therapy with responsible medical guidelines.
 */
export const RoboticNeuroDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero with Breadcrumbs & Dual CTAs */}
      <RoboticNeuroHero />

      {/* 2. Service Profile & Principles */}
      <RoboticNeuroIntroduction />

      {/* 3. Technology & How It Works */}
      <RoboticNeuroTechnology />

      {/* 4. Evaluated Clinical Indications */}
      <RoboticNeuroConditions />

      {/* 5. Potential Benefits & Limitations Panel */}
      <RoboticNeuroBenefits />

      {/* 6. Patient Suitability & Safety Screening */}
      <RoboticNeuroSuitability />

      {/* 7. Frequently Asked Questions */}
      <RoboticNeuroFAQ />

      {/* 8. Related Neurological Modalities */}
      <RoboticNeuroRelated />

      {/* 9. Clinical Consultation CTA */}
      <ServicesCTA
        heading="Discuss Your Robotic Neuro Rehabilitation Options"
        description="Our clinical team in Virugambakkam, Chennai conducts thorough functional evaluations to assess robotic rehabilitation candidacy and design safe, personalized recovery programs. Reach out today."
        buttonText="Book Clinical Evaluation"
      />
    </article>
  );
};

