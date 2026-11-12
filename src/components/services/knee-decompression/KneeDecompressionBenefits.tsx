import React from "react";
import { 
  ShieldCheck, 
  RotateCcw, 
  Droplets, 
  Maximize, 
  Sliders, 
  HeartHandshake,
  AlertOctagon
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface BenefitItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  rationale: string;
}

const benefitsData: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Non-Invasive Articular Unloading",
    description:
      "Administered externally on a specialized traction table without injections, pharmaceuticals, or surgical trauma.",
    rationale:
      "Provides a conservative outpatient alternative for individuals seeking non-pharmacological care options.",
  },
  {
    icon: RotateCcw,
    title: "Controlled Tension Intervals",
    description:
      "The equipment alternates between programmed tension hold times and gentle rest periods to prevent muscle spasm.",
    rationale:
      "Allows targeted joint space distraction while keeping surrounding periarticular tissues relaxed.",
  },
  {
    icon: Droplets,
    title: "Synovial Fluid Nutrition",
    description:
      "Mechanical offloading encourages natural hydrodynamic circulation of lubricating synovial fluid.",
    rationale:
      "Facilitates nutrient delivery and waste exchange across articular cartilage surfaces.",
  },
  {
    icon: Maximize,
    title: "Range of Motion Support",
    description:
      "Eases capsular tightness to assist everyday knee flexion (bending) and extension (straightening).",
    rationale:
      "Aims to improve functional ease during stair navigation, walking, and chair transfers.",
  },
  {
    icon: Sliders,
    title: "Ergonomic Padded Harnessing",
    description:
      "Custom-fitted straps secure the distal thigh and upper calf with soft, supportive cushioning.",
    rationale:
      "Directs mechanical distraction exclusively across the knee joint without putting strain on the hip or spine.",
  },
  {
    icon: HeartHandshake,
    title: "Integrated Physical Therapy",
    description:
      "Decompression is coordinated with targeted quadriceps strengthening, hamstring flexibility, and gait education.",
    rationale:
      "Builds supportive musculature to reinforce long-term functional stability during weight-bearing activity.",
  },
];

/**
 * KneeDecompressionBenefits Component
 * Highlights clinical benefits, equipment capabilities, and explicit clinical limitations.
 */
export const KneeDecompressionBenefits: React.FC = () => {
  return (
    <Section
      id="treatment-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Benefits and Limitations of Knee Decompression"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL RATIONALE & BOUNDARIES"
          title="Potential Benefits &amp; Treatment Limitations"
          description="Evidence-guided conservative care balances functional mobility goals with realistic clinical expectations."
          align="center"
          theme="light"
          accent
        />

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefitsData.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5">
                  <span className="block text-[11px] font-medium text-secondary/80 italic leading-snug">
                    <strong>Therapeutic Rationale:</strong> {benefit.rationale}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Clinical Limitations & Boundaries Panel */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border border-amber-500/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-700 flex-shrink-0">
              <AlertOctagon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                Treatment Limitations &amp; Clinical Realities
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                While mechanical knee decompression provides meaningful non-surgical offloading for many individuals with mild-to-moderate osteoarthritis and joint stiffness, it is essential to understand clinical boundaries:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-secondary/90">
                <div className="rounded-lg bg-surface-soft p-3.5 border border-black/5">
                  <strong className="block text-secondary font-semibold mb-1">No Guaranteed Cure</strong>
                  <span>Decompression does not guarantee total pain elimination. Individual response varies depending on joint degeneration grade, overall bone density, and compliance with rehabilitation.</span>
                </div>
                <div className="rounded-lg bg-surface-soft p-3.5 border border-black/5">
                  <strong className="block text-secondary font-semibold mb-1">No Cartilage Regeneration</strong>
                  <span>Mechanical distraction relieves friction and aids fluid exchange, but it does not regrow completely eroded hyaline cartilage or rebuild fused joint margins.</span>
                </div>
                <div className="rounded-lg bg-surface-soft p-3.5 border border-black/5">
                  <strong className="block text-secondary font-semibold mb-1">Surgery Evaluation Boundary</strong>
                  <span>Knee decompression is not a universal substitute for orthopedic surgery. Severe bone-on-bone deformity, advanced mechanical malalignment, or unstable fractures require orthopedic surgical review.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
