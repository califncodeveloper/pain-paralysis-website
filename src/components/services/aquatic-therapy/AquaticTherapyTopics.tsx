import React from "react";
import Link from "next/link";
import { 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  Activity, 
  AlertCircle, 
  HeartPulse, 
  ArrowRight,
  Info
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface TopicCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  category: string;
  description: string;
  considerations: string[];
}

const topicsData: TopicCard[] = [
  {
    icon: Layers,
    title: "Weight-Bearing Joint Sensitivity",
    category: "Lower Limb & Hip",
    description:
      "Individuals experiencing knee, hip, or ankle sensitivity where dry-land gravitational loading causes discomfort during walking or exercise.",
    considerations: [
      "Review of weight-bearing tolerance",
      "Discussion of buoyancy-assisted unloading",
      "Evaluation of comfortable joint range of motion",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Post-Surgical Reconditioning Review",
    category: "Post-Operative Recovery",
    description:
      "Patients in physician-approved post-surgical phases seeking educational guidance on low-impact movement and gentle reconditioning.",
    considerations: [
      "Verification of physician clearance and healing",
      "Screening of surgical incision and skin integrity",
      "Gradual movement progression principles",
    ],
  },
  {
    icon: Sparkles,
    title: "Spinal Movement & Axial Comfort",
    category: "Cervical & Lumbar Spine",
    description:
      "Individuals with persistent spinal tension or disc-related discomfort seeking active physical movement without axial compressive stress.",
    considerations: [
      "Review of seated vs. upright posture tolerance",
      "Hydrodynamic unloading discussion",
      "Coordination with dry-land spine care",
    ],
  },
  {
    icon: Activity,
    title: "Balance & Gait Coordination",
    category: "Functional Locomotion",
    description:
      "Persons with balance hesitation, unsteadiness, or fear of falling where water viscosity provides a safe, supportive medium for movement practice.",
    considerations: [
      "Observation of standing balance and confidence",
      "Slowed movement mechanics in fluid environment",
      "Gradual progression toward independent stability",
    ],
  },
  {
    icon: AlertCircle,
    title: "Generalized Deconditioning & Fatigue",
    category: "Physical Activity Tolerance",
    description:
      "Individuals recovering from extended periods of reduced mobility, injury convalescence, or chronic inactivity seeking gentle re-entry into exercise.",
    considerations: [
      "Assessment of baseline physical endurance",
      "Gentle low-impact endurance building concepts",
      "Fatigue management and pacing strategies",
    ],
  },
  {
    icon: HeartPulse,
    title: "Recurring Musculoskeletal Stiffness",
    category: "Soft-Tissue & Joint Care",
    description:
      "Individuals experiencing morning joint tightness, fibromyalgia-related muscular discomfort, or chronic soft-tissue stiffness.",
    considerations: [
      "Discussion of thermal water properties",
      "Continuous supportive resistance awareness",
      "Gentle stretching and mobility concepts",
    ],
  },
];

/**
 * AquaticTherapyTopics Component
 * 6-card grid detailing movement concerns and physical considerations discussed during aquatic consultations.
 *
 * Adheres to:
 * - Approved Design System: 3-col desktop / 2-col tablet / 1-col mobile grid, soft surface background
 * - Medical Compliance (Phase 21): Non-diagnostic educational topics replacing theme demo TCM conditions
 */
export const AquaticTherapyTopics: React.FC = () => {
  return (
    <Section
      id="aquatic-topics"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Physical Movement Considerations for Aquatic Consultations"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="MOVEMENT CONSIDERATIONS"
          title="Physical Movement Considerations for Aquatic Consultations"
          description="An educational overview of common mobility challenges and physical considerations evaluated during an outpatient consultation to discuss water-based movement principles."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topicsData.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-surface-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary/70">
                      {topic.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Considerations List */}
                  <div className="mt-5 border-t border-black/5 pt-4">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-secondary/60">
                      Consultation Discussion Points:
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-body/90">
                      {topic.considerations.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 border-t border-black/5 pt-4 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Consultation Topic {index + 1}</span>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm"
                  >
                    <span>Discuss Condition</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Scope Notice */}
        <div className="mt-12 rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs text-body leading-relaxed">
              <strong className="text-secondary font-semibold">Educational Notice:</strong> The considerations outlined above represent general physical topics discussed in physical rehabilitation. Consultations provide an opportunity to discuss individual symptoms and safety considerations; they do not constitute a diagnostic determination or a guarantee of treatment.
            </div>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 inline-flex items-center justify-center font-heading font-semibold text-xs sm:text-sm text-secondary hover:text-primary transition-colors underline underline-offset-4"
          >
            <span>Schedule Clinical Consultation &rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

