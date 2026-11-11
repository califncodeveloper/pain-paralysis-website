import React from "react";
import {
  Droplets,
  Activity,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Compass,
  CheckCircle2
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
    icon: Droplets,
    title: "Buoyancy & Gravitational Unloading Principles",
    description:
      "Water exerts an upward buoyant force opposing downward gravity, which reduces apparent body weight when submerged in fluid.",
    rationale:
      "Physical therapy literature discusses buoyancy as a physical principle for exploring movement with reduced compressive gravitational contact.",
  },
  {
    icon: Activity,
    title: "Hydrostatic Pressure & Fluid Mechanics",
    description:
      "Hydrostatic pressure increases with depth, exerting uniform, omnidirectional fluid pressure against submerged body surfaces.",
    rationale:
      "Rehabilitation science studies this physical property for its continuous external contact and consistent surface feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Hydrodynamic Drag & Fluid Resistance",
    description:
      "Fluid drag is velocity-dependent and multi-directional, providing gentle resistance that changes based on movement speed and surface area.",
    rationale:
      "This physical dynamic allows movement at an individual's chosen pace without sudden rigid mechanical resistance changes.",
  },
  {
    icon: HeartPulse,
    title: "Water Temperature & Thermal Properties",
    description:
      "Water has high thermal conductivity and heat retention capacity, transferring ambient temperature efficiently across the skin surface.",
    rationale:
      "General physical therapy literature reviews thermal water properties as an educational topic regarding comfortable surface movement.",
  },
  {
    icon: Compass,
    title: "Multi-Planar Movement Dynamics",
    description:
      "Fluid environments allow physical movement through multiple planes without fixed mechanical tracks or rigid floor boundaries.",
    rationale:
      "Permits the observation and practice of movement arcs within the natural viscosity of water.",
  },
  {
    icon: Sparkles,
    title: "Tactile & Proprioceptive Fluid Input",
    description:
      "The motion of water across the skin delivers continuous sensory tactile input regarding body position and speed.",
    rationale:
      "Educational rehabilitation resources explore how fluid sensory feedback contributes to general movement awareness.",
  },
];

/**
 * AquaticTherapyBenefits Component
 * 6-card grid explaining the core hydrodynamic biomechanical principles of water-based physical rehabilitation.
 *
 * Adheres to:
 * - Approved Design System: Soft surface background, 3-col desktop / 2-col tablet / 1-col mobile grid, Marcellus SC H2
 * - Medical Compliance (Phase 21): Non-promissory scientific explanation of fluid physical properties
 */
export const AquaticTherapyBenefits: React.FC = () => {
  return (
    <Section
      id="aquatic-principles"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Core Physical Properties of Aquatic Therapy"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="BIOMECHANICAL PRINCIPLES"
          title="Core Physical Properties of Aquatic Therapy"
          description="Fundamental hydrodynamic principles recognized in physical rehabilitation literature that explain how water supports movement and physical comfort."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary"
              >
                <div>
                  {/* Card Header & Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-lg font-bold text-secondary/40 group-hover:text-primary transition-colors duration-200">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Biomechanical Rationale */}
                <div className="mt-6 border-t border-black/5 pt-4">
                  <div className="flex items-start gap-2 text-xs text-secondary/80">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">
                      <strong>Clinical Context: </strong>
                      {item.rationale}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Scope Notice */}
        <div className="mt-12 rounded-xl bg-white p-4 sm:p-5 border border-black/5 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs text-body leading-relaxed">
            <strong className="text-secondary font-semibold">Educational Notice: </strong>
            The hydrodynamic properties summarized above describe general physical and mechanical principles in rehabilitation literature. They do not constitute an outcome guarantee, clinical promise of healing, or an assertion that aquatic interventions are universally suitable or available on-site at Pain &amp; Paralysis Clinic.
          </p>
        </div>
      </Container>
    </Section>
  );
};

