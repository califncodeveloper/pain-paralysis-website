import React from "react";
import Image from "next/image";
import { FileSearch, Sliders, Activity, UserCheck, Shield } from "lucide-react";
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
    title: "Clinical Practitioner Assessment",
    description:
      "The clinical practitioner conducts an in-person assessment of your symptom history, physical mobility, and existing records to determine suitability for mechanical traction.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Equipment Parameter Configuration",
    description:
      "Traction settings—including tension poundage, hold times, rest intervals, and table angle—are programmed according to the practitioner's clinical judgment.",
    icon: Sliders,
  },
  {
    step: "03",
    title: "Motorized Traction Session",
    description:
      "You rest comfortably on the padded motorized table secured with supportive external harnesses while the equipment operates through programmed tension cycles.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Post-Session Guidance",
    description:
      "Following the session, the practitioner reviews posture recommendations, home movement guidance, or complementary physical therapy exercises.",
    icon: UserCheck,
  },
];

/**
 * SpineDecompressionProcess Component
 * Reconstructs the treatment methodology, clinical process roadmap, and authentic biomechanical diagram.
 */
export const SpineDecompressionProcess: React.FC = () => {
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
          title="The Decompression Care Protocol"
          description="A systematic, patient-centered progression from diagnostic calibration to gentle robotic traction and post-therapy stabilization."
          align="center"
          theme="light"
          accent
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-8">
          {stepsData.map((stepItem, index) => {
            const IconComponent = stepItem.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-bold text-primary/80 group-hover:text-primary transition-colors duration-200">
                      {stepItem.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-soft text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-4 font-heading text-base sm:text-lg font-semibold text-secondary leading-snug">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
                  <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Phase {index + 1} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Biomechanical Diagram Showcase */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-black/5">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Diagram Text Explanation (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="section-badge text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Educational Diagram
              </span>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary leading-snug">
                Mechanical Principles of Spinal Traction Equipment
              </h3>
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-body leading-relaxed">
                <p>
                  The spinal column supports body weight and movement throughout upright daily activities. In physical therapy
                  practices, motorized traction equipment is utilized to apply linear tensile forces along the spine in a supported,
                  monitored position.
                </p>
                <p>
                  Educational illustrations depict the direction of motorized tensile forces applied along the spinal axis during
                  active equipment operation. The computerized system cycles through programmed tension and release intervals
                  according to practitioner-configured settings.
                </p>
                <p>
                  Mechanical traction is utilized as an adjunct equipment modality alongside guided rehabilitation, mobility
                  training, and posture education under clinical supervision.
                </p>
              </div>

              <div className="mt-5 rounded-lg bg-surface-soft p-3.5 border border-black/5 w-full">
                <div className="text-xs text-secondary font-medium">
                  <strong>Clinical Context:</strong> Mechanical decompression equipment provides an external, motorized traction modality operated under clinical practitioner supervision.
                </div>
              </div>
            </div>

            {/* Right Educational Graphic / Diagram (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <figure className="relative w-full max-w-lg overflow-hidden rounded-xl bg-surface-soft p-2 sm:p-3 border border-black/5 shadow-md">
                <div className="relative aspect-[1101/932] w-full overflow-hidden rounded-lg bg-white">
                  <Image
                    src="/images/articles/spine-decompression-article.webp"
                    alt="Educational diagram illustrating mechanical traction forces and spinal positioning"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-contain object-center"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[11px] text-body/70 font-medium">
                  Educational diagram illustrating mechanical tension forces along the spinal axis.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
