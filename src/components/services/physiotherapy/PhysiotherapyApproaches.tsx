import React from "react";
import { 
  Move, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  UserCheck,
  CheckCircle
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ApproachCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  rationale: string;
}

const approachesData: ApproachCard[] = [
  {
    icon: Move,
    title: "Mobility & Movement Observation",
    description:
      "In physical therapy, observation of active movement and joint flexibility helps evaluate physical comfort levels.",
    rationale:
      "Provides general context on how physical movement is typically reviewed.",
  },
  {
    icon: Activity,
    title: "Active Movement Principles",
    description:
      "Education on maintaining regular, comfortable physical activity suited to an individual's daily tolerance.",
    rationale:
      "Emphasizes active engagement and gradual physical movement awareness.",
  },
  {
    icon: ShieldCheck,
    title: "Passive & Manual Concepts",
    description:
      "Physical therapy disciplines often study hands-on articulatory concepts and joint positioning within conservative care.",
    rationale:
      "Represents theoretical manual therapy topics discussed within the discipline.",
  },
  {
    icon: Sparkles,
    title: "Individualized Consultation Planning",
    description:
      "Consultations generally emphasize reviewing personal physical history and discussing lifestyle-specific goals.",
    rationale:
      "Focuses discussion on an individual's unique everyday physical needs.",
  },
  {
    icon: HeartPulse,
    title: "Ergonomic & Postural Awareness",
    description:
      "Educational guidance regarding workstation arrangement, screen height, and everyday sitting habits.",
    rationale:
      "Addresses environmental and postural factors in daily routines.",
  },
  {
    icon: UserCheck,
    title: "Routine Activity Guidance",
    description:
      "General recommendations on establishing sustainable, gentle daily movement habits at home or work.",
    rationale:
      "Encourages independent awareness of regular movement throughout the day.",
  },
];

/**
 * PhysiotherapyApproaches Component
 * Displays 6 general concepts and educational topics in physical therapy.
 * Non-promissory, educational guide clearly distinguished from clinic-confirmed service claims.
 */
export const PhysiotherapyApproaches: React.FC = () => {
  return (
    <Section
      id="clinical-approaches"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="General Topics in Physical Therapy Care"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EDUCATIONAL OVERVIEW"
          title="General Topics in Physical Therapy Care"
          description="An educational guide to concepts, assessment considerations, and movement topics commonly discussed in physical therapy consultations."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* Approaches Grid (3 columns on lg, 2 on md, 1 on sm) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {approachesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-soft text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Topic 0{index + 1}
                    </span>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Descriptive Body */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* General Principle Footer */}
                <div className="mt-6 border-t border-black/5 pt-4">
                  <div className="flex items-start gap-2 text-xs text-secondary/80">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-[11px] leading-relaxed">
                      <strong className="font-semibold text-secondary">General Principle: </strong>
                      {item.rationale}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
