import React from "react";
import { 
  Compass, 
  Droplets, 
  ShieldCheck, 
  Cpu, 
  ZapOff, 
  RotateCcw,
  CheckCircle
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface BenefitCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  rationale: string;
}

const benefitsData: BenefitCard[] = [
  {
    icon: Compass,
    title: "Motorized Traction Application",
    description:
      "The computerized traction table delivers controlled mechanical tensile force along practitioner-selected axes.",
    rationale:
      "Operates according to specific poundage and angle parameters configured during the clinical appointment.",
  },
  {
    icon: Droplets,
    title: "Tension & Release Intervals",
    description:
      "The motorized table alternates between programmed tension hold times and gentle rest periods.",
    rationale:
      "Provides periodic cycles of mechanical tension rather than continuous static pulling.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Invasive Equipment Setup",
    description:
      "Patients rest comfortably on the padded motorized table secured with supportive external harnesses.",
    rationale:
      "Administered in an outpatient setting without injections, surgical incisions, or invasive instruments.",
  },
  {
    icon: Cpu,
    title: "Digital Load Regulation",
    description:
      "Integrated digital sensors continuously monitor mechanical tension levels during active cycles.",
    rationale:
      "Maintains calibrated tension within practitioner-established limits throughout the session.",
  },
  {
    icon: ZapOff,
    title: "Adjustable Table Alignment",
    description:
      "Multi-segment table sections adjust to position the patient for lumbar or cervical placement.",
    rationale:
      "Allows practitioners to align the angle of traction based on physical examination findings.",
  },
  {
    icon: RotateCcw,
    title: "Integrated Care Component",
    description:
      "Mechanical traction is administered alongside clinical physical therapy and guided exercise.",
    rationale:
      "Serves as an adjunct modality within a personalized rehabilitation plan supervised by clinic staff.",
  },
];

/**
 * SpineDecompressionBenefits Component
 * Displays the verified clinical benefits checklist and therapeutic rationale.
 */
export const SpineDecompressionBenefits: React.FC = () => {
  return (
    <Section
      id="treatment-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Benefits of Spine Decompression"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EQUIPMENT FEATURES"
          title="Traction Modality Features & Capabilities"
          description="Motorized mechanical traction designed for adjustable positioning, digital tension monitoring, and programmed cycle controls."
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
                className="group relative flex flex-col justify-between rounded-xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-xs font-semibold tracking-wider text-secondary/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Descriptive Paragraph */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Clinical Rationale Footer */}
                <div className="mt-5 pt-4 border-t border-black/5 flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-body/80 font-medium leading-relaxed">
                    {benefit.rationale}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
