import React from "react";
import { Dumbbell, RefreshCw, Compass, Clock, Shirt, Footprints, CheckCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface PillarItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  actions: string[];
}

const rehabilitationPillars: PillarItem[] = [
  {
    icon: Dumbbell,
    title: "Targeted Strengthening",
    description:
      "Addressing identified muscular imbalances by strengthening stabilizing muscles like the gluteus medius, anterior tibialis, and postural core.",
    actions: ["Pelvic stabilizer conditioning", "Ankle evertor/invertor balance", "Eccentric quadriceps control"],
  },
  {
    icon: RefreshCw,
    title: "Neuromuscular Re-Education",
    description:
      "Retraining walking cadence and proprioceptive awareness through supervised balance drills and movement cueing.",
    actions: ["Rhythmic auditory cueing", "Single-leg balance progressions", "Stride length normalization"],
  },
  {
    icon: Compass,
    title: "Ergonomics & Footwear Review",
    description:
      "Evaluating footwear structure, cushioning, and heel drop to ensure daily walking shoes complement your biomechanical profile.",
    actions: ["Footwear wear pattern audit", "Orthotic insert suitability", "Everyday walking habit coaching"],
  },
];

/**
 * GaitAnalysisRehabilitation Component
 * Personalized rehabilitation integration, lifestyle guidance, and patient preparation expectations.
 *
 * Adheres to:
 * - Approved Design System: 3-column pillar cards, soft surface background, practical preparation container
 * - Medical Compliance (Phase 22): Transparent expectations without guaranteed recovery timelines or cure claims.
 */
export const GaitAnalysisRehabilitation: React.FC = () => {
  return (
    <Section
      id="rehabilitation-planning"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Rehabilitation Planning and Consultation Preparation"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="REHABILITATION INTEGRATION"
          title="Translating Gait Data into Targeted Recovery Plans"
          description="How objective biomechanical metrics help shape personalized physical therapy, posture conditioning, and everyday movement habits."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* 3 Rehabilitation Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {rehabilitationPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70">
                    Clinical Strategies
                  </span>
                  <ul className="mt-2 space-y-1.5 text-xs text-body/90">
                    {pillar.actions.map((act, actIdx) => (
                      <li key={actIdx} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Patient Preparation & Consultation Expectations Box */}
        <div className="mt-12 rounded-2xl bg-white border border-black/5 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="section-badge font-semibold tracking-wider uppercase text-primary text-xs">
              Patient Guidance
            </span>
            <h3 className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-secondary">
              Preparing for Your Gait Analysis Consultation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
              To ensure accurate marker calibration, camera line-of-sight, and natural walking movement, please keep the following recommendations in mind:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
              <div className="flex items-center gap-2.5 text-secondary font-heading font-semibold text-xs sm:text-sm">
                <Shirt className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>What to Wear</span>
              </div>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Form-fitting shorts or athletic leggings so knee and hip joint markers can be placed accurately without fabric interference.
              </p>
            </div>

            <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
              <div className="flex items-center gap-2.5 text-secondary font-heading font-semibold text-xs sm:text-sm">
                <Footprints className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Footwear to Bring</span>
              </div>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Bring your primary everyday walking shoes and athletic footwear, along with any existing orthotic insoles or braces.
              </p>
            </div>

            <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
              <div className="flex items-center gap-2.5 text-secondary font-heading font-semibold text-xs sm:text-sm">
                <Clock className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Session Duration</span>
              </div>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Consultation length varies based on clinical history review and individual mobility assessment needs; specific timing is confirmed upon scheduling.
              </p>
            </div>

            <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
              <div className="flex items-center gap-2.5 text-secondary font-heading font-semibold text-xs sm:text-sm">
                <Compass className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span>Consultation Focus</span>
              </div>
              <p className="mt-2 text-xs text-body leading-relaxed">
                Consultations emphasize whole kinetic-chain movement observation to support individualized conservative rehabilitation planning.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

