import React from "react";
import Image from "next/image";
import { FileSearch, Sliders, Activity, UserCheck, Shield, Cpu, Layers, BarChart2, Info } from "lucide-react";
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
    title: "Clinical History & Movement Discussion",
    description:
      "Reviewing your walking habits, past injuries, physical activity patterns, and specific areas of discomfort experienced during daily movement.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Anatomical Landmark Calibration (Laboratory Concept)",
    description:
      "In specialized motion laboratories, observational markers or inertial sensors are positioned across key anatomical landmarks including the pelvis, hips, knees, and ankles.",
    icon: Sliders,
  },
  {
    step: "03",
    title: "Locomotion Tracking & Capture (Laboratory Concept)",
    description:
      "Walking along an instrumented path or treadmill at your natural pace while synchronized multi-camera or sensor tracking records joint kinematics.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Kinematic Analysis & Planning (Laboratory Concept)",
    description:
      "Software analyzes step symmetry, joint angles, and weight-bearing phases to provide objective data for personalized rehabilitation planning.",
    icon: UserCheck,
  },
];

/**
 * GaitAnalysisMethodology Component
 * Educational overview of 3D Gait Analysis methodology and laboratory technology principles.
 *
 * Adheres to:
 * - Approved Design System: 4-col step process, soft surface background, posture diagram showcase
 * - Medical Compliance (Phase 22.1): Clearly distinguishes general laboratory methodology from confirmed
 *   on-site clinic services, and incorporates explicit technology availability disclosure.
 */
export const GaitAnalysisMethodology: React.FC = () => {
  return (
    <Section
      id="how-it-works"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Educational Overview of 3D Gait Analysis Methodology"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EDUCATIONAL METHODOLOGY"
          title="How 3D Gait Analysis Works in Biomechanical Practice"
          description="An educational overview of multi-dimensional locomotion analysis protocols and how movement parameters are studied in specialized laboratories."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Clinic Consultation vs. Laboratory Methodology Notice */}
        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-white p-4 sm:p-5 border border-primary/20 shadow-sm flex items-start gap-3.5">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-body leading-relaxed">
            <span className="font-semibold text-secondary">Clinic Consultation vs. Laboratory Scope: </span>
            Pain &amp; Paralysis Clinic provides outpatient movement consultations, clinical history reviews, and functional mobility assessments. The advanced motion capture, sensor calibration, and instrumentation steps detailed below represent general scientific methodology used in comprehensive gait laboratories; specific on-site testing tools and referral options should be confirmed directly with clinic staff.
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-primary/30 transition-colors duration-200 group-hover:text-primary">
                    {stepItem.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="mt-5 font-heading text-base font-semibold text-secondary">
                  {stepItem.title}
                </h3>
                <p className="mt-2 text-xs text-body leading-relaxed">
                  {stepItem.description}
                </p>

                {/* Connecting Border Indicator */}
                <div
                  className="mt-4 pt-3 border-t border-black/5 text-[11px] font-semibold uppercase tracking-wider text-secondary/60 flex items-center justify-between"
                  aria-hidden="true"
                >
                  <span>Protocol {stepItem.step}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Overview Container */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Diagram Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-xl bg-surface-soft border border-black/5 p-4 flex items-center justify-center">
                <Image
                  src="/images/about/posture-diagram.webp"
                  alt="Biomechanical posture alignment and movement kinematics diagram"
                  width={360}
                  height={360}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs text-body/80 font-medium">
                Biomechanical Alignment &amp; Kinematic Reference Overview
              </p>
            </div>

            {/* Right Information Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="section-badge font-semibold tracking-wider uppercase text-primary text-xs">
                Educational Technology Overview
              </span>

              <h3 className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-secondary">
                Biomechanics &amp; Laboratory Instrumentation
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                Modern gait analysis relies on the integration of kinematic measurement tools to capture human movement beyond the visual limits of the naked eye. Key principles include:
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface-soft p-3.5 border border-black/5">
                  <div className="flex items-center gap-2 font-heading font-semibold text-xs text-secondary">
                    <Cpu className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Kinematic Sensor Tracking</span>
                  </div>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    Quantifies rotational joint angles and angular velocities in three dimensions throughout locomotion.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-3.5 border border-black/5">
                  <div className="flex items-center gap-2 font-heading font-semibold text-xs text-secondary">
                    <BarChart2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Temporal-Spatial Analysis</span>
                  </div>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    Measures step duration, stance-to-swing ratios, and walking velocity to identify gait asymmetries.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-3.5 border border-black/5">
                  <div className="flex items-center gap-2 font-heading font-semibold text-xs text-secondary">
                    <Layers className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Ground Reaction Dynamics</span>
                  </div>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    Evaluates shock absorption upon heel contact, mid-stance stability, and forefoot propulsive forces.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-3.5 border border-black/5">
                  <div className="flex items-center gap-2 font-heading font-semibold text-xs text-secondary">
                    <Shield className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Clinical Correlation</span>
                  </div>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    Correlates biomechanical movement anomalies with patient clinical symptoms and postural habits.
                  </p>
                </div>
              </div>

              {/* Exact Technology Availability Disclosure */}
              <div className="mt-5 rounded-lg bg-surface-soft p-3.5 border-l-4 border-primary text-[11px] sm:text-xs text-body/90 leading-relaxed">
                <span className="font-semibold text-secondary">Technology Note: </span>
                Optical tracking systems, inertial sensors and force-measurement platforms are examples of tools used in some comprehensive gait-analysis environments. Their availability at Pain &amp; Paralysis Clinic has not been independently confirmed. Please contact the clinic to verify the assessment methods available.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
