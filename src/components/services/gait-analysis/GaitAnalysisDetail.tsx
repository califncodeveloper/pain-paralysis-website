import React from "react";
import { GaitAnalysisHero } from "./GaitAnalysisHero";
import { GaitAnalysisIntroduction } from "./GaitAnalysisIntroduction";
import { GaitAnalysisMethodology } from "./GaitAnalysisMethodology";
import { GaitAnalysisParameters } from "./GaitAnalysisParameters";
import { GaitAnalysisConditions } from "./GaitAnalysisConditions";
import { GaitAnalysisContext } from "./GaitAnalysisContext";
import { GaitAnalysisRehabilitation } from "./GaitAnalysisRehabilitation";
import { GaitAnalysisFAQ } from "./GaitAnalysisFAQ";
import { GaitAnalysisRelated } from "./GaitAnalysisRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * GaitAnalysisDetail Component
 * Full reconstruction of the original Advanced 3D Gait Analysis service detail page.
 *
 * Page Architecture (Matches Original Reference DOM & Approved Design System):
 * 1. GaitAnalysisHero: Service heading, clinical eyebrow badge, and semantic breadcrumbs
 * 2. GaitAnalysisIntroduction: 2-column treatment introduction, authentic modality photo, and primary CTA
 * 3. GaitAnalysisMethodology: 4-step evaluation process roadmap and posture diagram technology overview
 * 4. GaitAnalysisParameters: 6-card grid of key movement and kinematic metrics evaluated
 * 5. GaitAnalysisConditions: 6-card indications and movement patterns evaluated with non-diagnostic notice
 * 6. GaitAnalysisContext: 2-column comparative analysis for athletic biomechanics and neurological rehabilitation
 * 7. GaitAnalysisRehabilitation: 3-pillar care translation and patient preparation expectations
 * 8. GaitAnalysisFAQ: Interactive FAQ accordion with 7 patient questions
 * 9. GaitAnalysisRelated: 4-card cross-navigation linking to all 4 approved, completed specialized therapies
 * 10. ServicesCTA: Dual Consultation & Inquiries CTA ("ABOUT US" & "CONTACT US" quick inquiry)
 */
export const GaitAnalysisDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero / Banner with Breadcrumbs */}
      <GaitAnalysisHero />

      {/* 2. Treatment Profile & Introduction */}
      <GaitAnalysisIntroduction />

      {/* 3. Evaluation Process & Technology Overview */}
      <GaitAnalysisMethodology />

      {/* 4. Movement Parameters Observed (6 Metrics Cards) */}
      <GaitAnalysisParameters />

      {/* 5. Conditions & Movement Patterns Evaluated (6 Cards + Scope Notice) */}
      <GaitAnalysisConditions />

      {/* 6. Sports Performance & Neurological Locomotion Context */}
      <GaitAnalysisContext />

      {/* 7. Rehabilitation Translation & Preparation Expectations */}
      <GaitAnalysisRehabilitation />

      {/* 8. Frequently Asked Questions Accordion */}
      <GaitAnalysisFAQ />

      {/* 9. Related Specialized Treatments Navigation */}
      <GaitAnalysisRelated />

      {/* 10. Consultation & Quick Inquiry CTA */}
      <ServicesCTA
        heading="Discuss Your 3D Gait Analysis Consultation Options"
        description="Have questions about walking mechanics, postural asymmetry, or movement rehabilitation? Consult our clinical team in Madhanandapuram, Chennai to discuss objective evaluation and conservative care tailored to your functional needs."
      />
    </article>
  );
};

