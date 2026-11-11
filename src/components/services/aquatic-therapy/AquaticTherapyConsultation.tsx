import React from "react";
import { 
  Move, 
  Clock, 
  ShieldCheck, 
  Activity, 
  UserCheck, 
  HelpCircle 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface GuidanceItem {
  number: string;
  title: string;
  observation: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  note: string;
}

const guidanceData: GuidanceItem[] = [
  {
    number: "01",
    title: "Gravitational Load Discomfort on Dry Land",
    observation:
      "When standard dry-land walking, stair climbing, or weight-bearing standing produces sharp joint discomfort in the hips, knees, or lumbar spine.",
    icon: Move,
    note: "A clinician can review whether buoyancy-assisted exercise would help you practice active movement comfortably.",
  },
  {
    number: "02",
    title: "Transitioning from Rest to Active Rehabilitation",
    observation:
      "When recovering from an acute injury episode or prolonged convalescence, and standard gym equipment feels too demanding or intimidating.",
    icon: Clock,
    note: "Consultations evaluate safe baseline conditioning strategies suited to gradual physical progression.",
  },
  {
    number: "03",
    title: "Balance Hesitation & Fall Anxiety",
    observation:
      "When fear of falling limits your confidence to perform standing or balance exercises on hard clinical surfaces.",
    icon: ShieldCheck,
    note: "Water provides continuous viscous support, offering a reassuring medium for balance assessment.",
  },
  {
    number: "04",
    title: "Morning Joint Tightness & Movement Hesitancy",
    observation:
      "When joint stiffness in the morning or after prolonged sitting significantly restricts your natural movement arc.",
    icon: Activity,
    note: "A therapist can discuss hydrodynamic warm-water properties that facilitate gentle joint mobility.",
  },
  {
    number: "05",
    title: "Physician Advice to Explore Hydrotherapy",
    observation:
      "When an orthopedic surgeon, neurologist, or rheumatologist has suggested water-based movement as a safe conservative adjunct.",
    icon: UserCheck,
    note: "We review your physician's clinical notes and coordinate appropriate movement recommendations.",
  },
  {
    number: "06",
    title: "Seeking Low-Impact Active Conditioning",
    observation:
      "When you desire an active physical workout that minimizes compressive impact forces on aging or post-traumatic joints.",
    icon: HelpCircle,
    note: "Educational guidance clarifies how fluid resistance creates progressive conditioning without high joint impacts.",
  },
];

/**
 * AquaticTherapyConsultation Component
 * 6-card educational guidance detailing everyday movement observations and consultation perspectives.
 *
 * Adheres to:
 * - Approved Design System: White background, 3x2 responsive card grid, Marcellus SC H2
 * - Medical Compliance (Phase 21): Non-promissory consultation perspectives replacing demo template copy
 */
export const AquaticTherapyConsultation: React.FC = () => {
  return (
    <Section
      id="when-to-seek"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="When to Consider an Aquatic Movement Consultation"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EDUCATIONAL GUIDANCE"
          title="When to Consider an Aquatic Movement Consultation"
          description="Observations regarding everyday physical comfort, mobility hurdles, and when discussing water-based movement concepts with a clinician is beneficial."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Guidance Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guidanceData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary"
              >
                <div>
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-primary/40 group-hover:text-primary transition-colors duration-300">
                      {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-base sm:text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Observation Text */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.observation}
                  </p>
                </div>

                {/* Consultation Perspective Note */}
                <div className="mt-5 border-t border-black/5 pt-3.5">
                  <p className="text-[11px] font-sans italic text-secondary/70 leading-normal">
                    <strong className="font-semibold text-primary not-italic">Consultation Focus: </strong>
                    {item.note}
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

