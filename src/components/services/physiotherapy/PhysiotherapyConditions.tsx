import React from "react";
import { 
  AlertCircle, 
  Layers, 
  Activity, 
  ShieldAlert, 
  Sparkles, 
  HeartPulse,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ConditionCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
}

const conditionsData: ConditionCard[] = [
  {
    icon: Layers,
    title: "Post-Operative Movement Concerns",
    subtitle: "General Movement Review",
    description:
      "Individuals recovering from orthopedic surgery or joint procedures often discuss movement comfort and physician guidelines.",
    symptoms: ["General joint stiffness after surgery", "Movement comfort questions", "Doctor-recommended movement precautions"],
  },
  {
    icon: ShieldAlert,
    title: "Shoulder & Arm Movement Limitations",
    subtitle: "Upper Limb Discussion",
    description:
      "Discussions regarding movement limits during overhead reaching, dressing, or everyday arm movements.",
    symptoms: ["Overhead reach discomfort", "Arm lifting limitations", "Everyday movement stiffness"],
  },
  {
    icon: Sparkles,
    title: "Neck & Lower Back Movement Discomfort",
    subtitle: "Spinal Movement Discussion",
    description:
      "Consultations addressing stiffness, posture fatigue from computer use, or discomfort after prolonged sitting.",
    symptoms: ["Stiffness from desk work", "Discomfort after prolonged sitting", "Bending movement awareness"],
  },
  {
    icon: Activity,
    title: "Soft-Tissue Strain After Activity",
    subtitle: "Activity Discussion",
    description:
      "Review of lingering discomfort or muscle fatigue following sports, recreational exercise, or sudden exertion.",
    symptoms: ["Muscle fatigue after exercise", "Post-activity movement stiffness", "Questions about returning to activity"],
  },
  {
    icon: AlertCircle,
    title: "Recurring Muscular Stiffness",
    subtitle: "Everyday Stiffness Review",
    description:
      "Conversations covering daily stiffness, posture-related tightness, and general mobility during routine work.",
    symptoms: ["End-of-day muscular tightness", "Stiffness after rest", "Movement hesitation during work"],
  },
  {
    icon: HeartPulse,
    title: "Everyday Mobility & Stepping",
    subtitle: "Mobility Discussion",
    description:
      "Discussions regarding walking comfort, stair climbing, and transitioning from sitting to standing.",
    symptoms: ["Sit-to-stand transitions", "Stair climbing awareness", "Walking pace and comfort"],
  },
];

/**
 * PhysiotherapyConditions Component
 * Displays 6 core movement concerns and physical topics commonly discussed during consultations.
 * Strictly educational and non-diagnostic; clearly distinguished from clinic-confirmed treatment guarantees.
 */
export const PhysiotherapyConditions: React.FC = () => {
  return (
    <Section
      id="conditions-treated"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Movement Concerns Discussed During Consultations"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CONSULTATION TOPICS"
          title="Movement Concerns Discussed During Consultations"
          description="An educational guide to common physical discomfort patterns and movement concerns that individuals may discuss with a healthcare practitioner during an outpatient consultation."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* Conditions 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditionsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {item.subtitle}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Condition Title */}
                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>

                  {/* Characteristic Indications List */}
                  <div className="mt-5 border-t border-black/5 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70 mb-2">
                      Discussion Points:
                    </p>
                    <ul className="space-y-1.5">
                      {item.symptoms.map((symptom, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center gap-2 text-xs text-body"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-black/5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
                  >
                    <span>Request Consultation</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Scope Notice Box */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                Consultation Scope &amp; Non-Diagnostic Notice
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-body leading-relaxed max-w-2xl">
                The topics above represent common movement concerns discussed in physical therapy consultations. Pain &amp; Paralysis Clinic provides in-person clinical consultations to review symptoms and discuss care options. The clinic does not diagnose medical conditions online, guarantee treatment outcomes, or promise specific therapeutic interventions prior to clinical examination.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="mt-2 sm:mt-0 flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
            >
              <span>Consult a Physiotherapist</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
