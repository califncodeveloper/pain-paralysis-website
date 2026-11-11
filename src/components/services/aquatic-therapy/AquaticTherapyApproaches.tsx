import React from "react";
import { FileSearch, Sliders, Activity, UserCheck, Shield, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const stepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Clinical History & Health Screening",
    description:
      "Comprehensive review of medical history, surgical background, cardiovascular stability, and contraindications before aquatic exercise.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Dry-Land Movement Observation",
    description:
      "Physical assessment of active joint mobility, weight-bearing comfort, standing balance, and functional movement patterns.",
    icon: Sliders,
  },
  {
    step: "03",
    title: "Hydrodynamic Strategy Planning",
    description:
      "Educational discussion of water depth, buoyancy aids, water temperature considerations, and appropriate movement arcs.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Safety Guidance & Program Review",
    description:
      "Clear guidance on pool entry, movement pacing, gradual progression principles, and coordination with dry-land therapy.",
    icon: UserCheck,
  },
];

/**
 * AquaticTherapyApproaches Component
 * 4-step consultation process and outpatient clinical environment overview for Aquatic Therapy.
 *
 * Adheres to:
 * - Approved Design System: 4-col step process, white background, two-column setting overview container
 * - Medical Compliance (Phase 21): Non-promissory consultation roadmap; transparently discloses facility boundaries
 */
export const AquaticTherapyApproaches: React.FC = () => {
  return (
    <Section
      id="consultation-stages"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Aquatic Therapy Consultation Stages and Setting"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CONSULTATION FRAMEWORK"
          title="Aquatic Therapy Consultation Stages"
          description="A structured overview of how clinicians evaluate candidacy, screen for health safety, and discuss water-based rehabilitation concepts."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 4-Step Process Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md hover:border-primary/30"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-5 font-heading text-base sm:text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Step Sub-label */}
                <div className="mt-6 border-t border-black/5 pt-3.5 flex items-center gap-1.5 text-[11px] font-medium text-secondary/60">
                  <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span>Stage {index + 1} Consultation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Environment & Outpatient Consultation Overview */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-black/5">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Outpatient Setting (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="section-badge text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Clinic Environment
              </span>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary leading-snug">
                Outpatient Consultation &amp; Service Scope
              </h3>
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-body leading-relaxed">
                <p>
                  Pain &amp; Paralysis Clinic in Madhanandapuram, Chennai provides an outpatient clinical setting
                  for physical evaluation, conservative care planning, and rehabilitation discussions.
                </p>
                <p>
                  During an aquatic therapy consultation, our clinical team conducts in-person physical screening,
                  reviews your physician referrals or diagnostic notes, and evaluates whether water-based movement
                  would offer a beneficial complement to your rehabilitation program.
                </p>
                <p>
                  Consultations are focused on patient safety and personalized guidance. If water exercise is recommended,
                  clinicians outline specific exercises, safety precautions, and appropriate water depth principles.
                </p>
              </div>

              <div className="mt-5 rounded-lg bg-surface-soft p-3.5 border border-black/5 w-full">
                <div className="text-xs text-secondary font-medium">
                  <strong>Facility &amp; Consultation Scope Disclosure:</strong> Pain &amp; Paralysis Clinic provides
                  in-person clinical consultations and movement evaluations in an outpatient setting in Madhanandapuram, Chennai.
                  In-house hydrotherapy pool availability has not been confirmed, and pool-based treatment is not available on-site.
                  Consultations evaluate individual movement and provide educational guidance on conservative rehabilitation options.
                </div>
              </div>
            </div>

            {/* Right Column: Overview Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative w-full rounded-xl bg-gradient-to-br from-secondary via-secondary to-[#0b3c40] p-6 sm:p-7 text-white shadow-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                    <Activity className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white">
                      Consultation Overview
                    </h4>
                    <span className="text-xs text-accent">Outpatient Consultation Setting</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-white/10 pt-4 text-xs text-white/90">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>In-person health screening &amp; history review</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Dry-land joint range &amp; balance assessment</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Outpatient consultation environment</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Individualized water-based exercise guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

