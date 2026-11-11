import React from "react";
import { Zap, Brain, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

/**
 * GaitAnalysisContext Component
 * Comparative deep-dive on sports biomechanics and neurological rehabilitation contexts.
 *
 * Adheres to:
 * - Approved Design System: 2-column container, white background, Marcellus SC H3, Poppins body
 * - Medical Compliance (Phase 22): Balanced, non-promissory analysis; withholds promises of guaranteed injury prevention
 *   or complete recovery from paralysis.
 */
export const GaitAnalysisContext: React.FC = () => {
  return (
    <Section
      id="clinical-applications"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Sports Performance and Neurological Rehabilitation Context"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLINICAL APPLICATIONS"
          title="Sports Movement &amp; Neurological Rehabilitation Context"
          description="How objective locomotion analysis provides valuable context across athletic conditioning and neurological mobility support."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* 2-Column Comparative Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Sports & Running Biomechanics */}
          <div className="rounded-2xl bg-surface-soft border border-black/5 p-7 sm:p-9 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Sports &amp; Athletics
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold text-secondary">
                Running Economy &amp; Movement Efficiency
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                For runners and active individuals, repetitive impact against hard surfaces can magnify subtle mechanical imbalances. 3D gait assessment helps athletes observe how their body distributes forces during high-cadence locomotion.
              </p>

              {/* 4 Sports Application Pillars */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Cadence &amp; Ground Contact Time: </span>
                    Evaluating step frequency and time spent on the ground to understand running economy.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Bilateral Impact Asymmetry: </span>
                    Measuring differences in landing forces between the dominant and non-dominant legs.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Footwear &amp; Insole Interaction: </span>
                    Observing how different athletic shoes or custom orthotic inserts modify foot strike posture.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Hip &amp; Core Stability Demands: </span>
                    Identifying pelvic sway or dynamic knee valgus that occurs under prolonged aerobic fatigue.
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Promissory Sports Scope Notice */}
            <div className="mt-8 rounded-xl bg-white p-4 border border-black/5 text-xs text-body/90 leading-relaxed">
              <span className="font-semibold text-secondary">Athletic Scope Disclaimer: </span>
              Biomechanical evaluations provide educational movement feedback. Gait analysis does not guarantee injury immunity, cure chronic overuse conditions, or promise specific athletic performance outcomes.
            </div>
          </div>

          {/* Column 2: Neurological Locomotion Support */}
          <div className="rounded-2xl bg-surface-soft border border-black/5 p-7 sm:p-9 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                  Neurological Support
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-white shadow-sm">
                  <Brain className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold text-secondary">
                Neuromuscular Coordination &amp; Balance Retraining
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                Neurological conditions such as post-stroke hemiparesis, Parkinsonian movement disorders, and peripheral neuropathies frequently impair the rhythm, clearance, and safety of daily walking.
              </p>

              {/* 4 Neurological Application Pillars */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Weight-Bearing Confidence: </span>
                    Tracking bilateral stance-phase duration and single-leg support stability.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Foot Clearance &amp; Drop Foot: </span>
                    Evaluating toe clearance during swing phase to understand tripping tendencies.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Locomotion Rhythm Regularity: </span>
                    Quantifying stride time variability and hesitation across multiple walking trials.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-body">
                    <span className="font-semibold text-secondary">Progressive Rehabilitation Tracking: </span>
                    Providing objective movement data to inform structured rehabilitation planning and assistive device adjustments.
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Promissory Neurological Scope Notice */}
            <div className="mt-8 rounded-xl bg-white p-4 border border-black/5 text-xs text-body/90 leading-relaxed">
              <span className="font-semibold text-secondary">Neurological Scope Disclaimer: </span>
              Gait assessment serves as an objective observational aid to inform physical rehabilitation. It does not reverse neurological pathology, promise complete recovery from paralysis, or replace specialist medical neurological management.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
