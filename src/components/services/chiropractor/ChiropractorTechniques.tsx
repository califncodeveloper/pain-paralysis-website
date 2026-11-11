import React from "react";
import { FileSearch, Sliders, Activity, UserCheck, Shield, Award, CheckCircle2 } from "lucide-react";
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
    title: "Comprehensive Clinical Consultation",
    description:
      "Detailed symptom history, postural observation, and physical examination of spinal segments to evaluate individual movement and complaints.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Physical Assessment & Technique Selection",
    description:
      "Evaluation of spinal alignment, curvature symmetry, and paraspinal muscle tone to plan appropriate manual positioning and table setup.",
    icon: Sliders,
  },
  {
    step: "03",
    title: "Targeted Manual Session",
    description:
      "Application of gentle manual articulatory techniques or mobilizations along restricted spinal segments on specialized treatment tables.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Postural Review & Home Guidance",
    description:
      "Post-session check of movement comfort followed by practical ergonomic recommendations and gentle active mobility exercises.",
    icon: UserCheck,
  },
];

/**
 * ChiropractorTechniques Component
 * Reconstructs the 4-step treatment methodology and clinical environment overview.
 */
export const ChiropractorTechniques: React.FC = () => {
  return (
    <Section
      id="treatment-process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Treatment Process and Clinical Protocol"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="TREATMENT METHODOLOGY"
          title="Chiropractic Techniques &amp; Clinical Assessment"
          description="A structured 4-stage outpatient protocol combining physical assessment, manual spinal positioning, and active postural guidance."
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
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-300">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
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
                  <span>Phase {index + 1} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Environment & Facility Standards Showcase */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-black/5">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Outpatient Manual Procedures (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="section-badge text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Clinical Consultation
              </span>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary leading-snug">
                Outpatient Manual Procedures &amp; Clinical Environment
              </h3>
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-body leading-relaxed">
                <p>
                  During chiropractic appointments, practitioners perform hands-on articulatory techniques on specialized
                  examination tables. These tables feature adjustable sections to support comfortable positioning for cervical,
                  thoracic, or lumbar evaluation.
                </p>
                <p>
                  Manual techniques are applied to restricted spinal segments following an in-person physical assessment.
                  The practitioner selects appropriate manual force levels and positioning based on the patient&apos;s physical
                  presentation, comfort, and clinical history.
                </p>
                <p>
                  Chiropractic appointments are conducted in an outpatient setting as part of conservative musculoskeletal care,
                  with emphasis on patient comfort throughout each procedure.
                </p>
              </div>

              <div className="mt-5 rounded-lg bg-surface-soft p-3.5 border border-black/5 w-full">
                <div className="text-xs text-secondary font-medium">
                  <strong>Clinical Scope:</strong> Chiropractic appointments at Pain &amp; Paralysis Clinic involve conservative, non-invasive physical assessments and manual techniques delivered in an outpatient setting.
                </div>
              </div>
            </div>

            {/* Right Column: Facility Standards & Consultation Environment (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative w-full rounded-xl bg-gradient-to-br from-secondary via-secondary to-[#0b3c40] p-6 sm:p-7 text-white shadow-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white">
                      Consultation Standards
                    </h4>
                    <span className="text-xs text-accent">Outpatient Clinical Facility</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-white/10 pt-4 text-xs text-white/90">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Dedicated clinical examination and adjustment tables</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Comprehensive in-person physical evaluation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Multidisciplinary outpatient rehabilitation facility</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Individualized care plans tailored to patient comfort</span>
                  </div>
                </div>

                <div className="mt-5 rounded-lg bg-white/10 p-3 text-[11px] text-white/80 backdrop-blur-sm border border-white/10">
                  Appointments are conducted in an outpatient physical therapy facility, coordinating manual techniques with active rehabilitation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

