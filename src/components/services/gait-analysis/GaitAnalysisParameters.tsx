import React from "react";
import { Activity, Layers, Footprints, Compass, Scale, Target, Info } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ParameterItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  category: string;
  title: string;
  description: string;
  metrics: string[];
}

const parametersData: ParameterItem[] = [
  {
    icon: Activity,
    category: "Temporal-Spatial",
    title: "Stride Length & Cadence",
    description:
      "Evaluates step length, walking rhythm, cadence (steps per minute), and velocity to observe locomotion efficiency and symmetry.",
    metrics: ["Bilateral step length", "Cadence & step rate", "Stance vs. swing duration"],
  },
  {
    icon: Layers,
    category: "Joint Kinematics",
    title: "Hip, Knee & Ankle Mobility",
    description:
      "Tracks joint angular displacement through the sagittal, frontal, and transverse planes during weight acceptance and push-off.",
    metrics: ["Knee flexion/extension arcs", "Hip rotational excursion", "Ankle dorsiflexion & plantarflexion"],
  },
  {
    icon: Footprints,
    category: "Foot-Ground Interaction",
    title: "Foot Strike & Weight Distribution",
    description:
      "Studies initial heel contact, mid-stance arch adaptation, and forefoot propulsive forces to observe pressure patterns.",
    metrics: ["Heel strike loading angle", "Pronation & supination balance", "Toe-off propulsion efficiency"],
  },
  {
    icon: Compass,
    category: "Postural Stability",
    title: "Pelvic & Trunk Alignment",
    description:
      "Observes coronal pelvic tilt, transverse rotation, and upper trunk lateral sway during single-leg weight-bearing phases.",
    metrics: ["Pelvic drop (Trendelenburg)", "Anterior/posterior pelvic tilt", "Dynamic trunk compensation"],
  },
  {
    icon: Scale,
    category: "Kinetic Balance",
    title: "Bilateral Kinetic Symmetry",
    description:
      "Compares ground reaction forces and load transfer between left and right extremities to observe unilateral guarding or overuse.",
    metrics: ["Bilateral symmetry index", "Weight-bearing time disparity", "Shock absorption variance"],
  },
  {
    icon: Target,
    category: "Equilibrium",
    title: "Dynamic Center of Mass",
    description:
      "Analyzes vertical and horizontal center of mass excursion to observe balance stability and movement efficiency.",
    metrics: ["Center of mass displacement", "Postural sway velocity", "Energy conservation index"],
  },
];

/**
 * GaitAnalysisParameters Component
 * Educational examples of key biomechanical movement parameters evaluated in comprehensive motion laboratories.
 *
 * Adheres to:
 * - Approved Design System: 3-column desktop grid, white background, Marcellus SC H3, Poppins body
 * - Medical Compliance (Phase 22.1): Explicitly clarifies that parameters are educational examples
 *   and actual measurement depends on assessment methods and available equipment.
 */
export const GaitAnalysisParameters: React.FC = () => {
  return (
    <Section
      id="movement-parameters"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Movement Parameters Observed During Gait Assessment"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="BIOMECHANICAL METRICS"
          title="Movement Parameters Observed During Gait Assessment"
          description="Educational examples of quantitative and qualitative metrics studied in biomechanical motion analysis. Actual parameters evaluated during a clinical consultation depend on individual presentation, clinical goals, and available assessment tools."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Educational Parameter Scope Callout */}
        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-surface-soft p-4 sm:p-5 border border-primary/20 shadow-sm flex items-start gap-3.5">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-body leading-relaxed">
            <span className="font-semibold text-secondary">Educational Parameter Scope: </span>
            The movement parameters below are educational examples of metrics evaluated in comprehensive biomechanical laboratories. The specific parameters observed during a consultation depend on the individual&apos;s clinical presentation, assessment goals, and the evaluation methods available. These parameters serve an educational and observational purpose and do not independently establish a medical diagnosis.
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {parametersData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                      {item.category}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 font-heading text-lg font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Example Laboratory Metrics */}
                <div className="mt-6 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70">
                    Example Laboratory Metrics
                  </span>
                  <ul className="mt-2 space-y-1.5 text-xs text-body/90">
                    {item.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
