import React from "react";
import { 
  Move, 
  Clock, 
  ShieldCheck, 
  Activity, 
  UserCheck, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface IndicatorCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  observation: string;
  guidance: string;
}

const indicatorsData: IndicatorCard[] = [
  {
    icon: Move,
    title: "Persistent Movement Limitations",
    observation:
      "Experiencing noticeable stiffness or restriction when turning your neck, reaching overhead, bending, or rotating your torso during everyday tasks.",
    guidance:
      "A healthcare consultation can evaluate movement comfort and discuss everyday mobility factors.",
  },
  {
    icon: Clock,
    title: "Discomfort Following Physical Strain",
    observation:
      "Musculoskeletal discomfort or localized joint stiffness that persists for several weeks after a sports mishap, fall, or heavy lifting incident.",
    guidance:
      "A clinical assessment reviews your physical history and discusses gradual return to routine tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Operative Movement Guidance",
    observation:
      "Following orthopedic surgery, joint repair, or spinal procedures where structured movement restoration has been suggested by your surgeon.",
    guidance:
      "A therapist can evaluate movement tolerance and discuss physician-recommended exercises.",
  },
  {
    icon: Activity,
    title: "Reduced Muscular Strength & Endurance",
    observation:
      "Noticeable difficulty lifting moderate weights, carrying objects, or experiencing rapid muscular fatigue during ordinary daily activities.",
    guidance:
      "Healthcare consultations can discuss active lifestyle habits and comfortable movement routines.",
  },
  {
    icon: UserCheck,
    title: "Postural Fatigue from Seated Work",
    observation:
      "End-of-day muscular tension, forward head carriage, or dull aching in the upper back and neck after prolonged hours at a computer workstation.",
    guidance:
      "Ergonomic suggestions and posture education provide practical strategies for seated workday alignment.",
  },
  {
    icon: HelpCircle,
    title: "Everyday Functional Transitions",
    observation:
      "Hesitation, unsteadiness, or joint stiffness when rising from low seating, climbing stairs, or walking longer distances outdoors.",
    guidance:
      "Physical assessment reviews everyday movement habits, step coordination, and chair transitions.",
  },
];

/**
 * PhysiotherapyWhenToSeek Component
 * Educational guidance module describing everyday movement signs and mobility limitations.
 * Non-diagnostic, educational content.
 */
export const PhysiotherapyWhenToSeek: React.FC = () => {
  return (
    <Section
      id="when-to-seek"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Educational Guidance on When to Seek Physiotherapy"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EDUCATIONAL GUIDANCE"
          title="When to Seek a Physiotherapy Consultation"
          description="Understanding everyday movement signs, physical discomfort patterns, and functional recovery milestones where an outpatient physical therapy evaluation may be helpful."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {indicatorsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-primary/30"
              >
                <div>
                  {/* Icon & Counter */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-secondary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-secondary/40 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-base sm:text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Observation */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.observation}
                  </p>
                </div>

                {/* Consultation Guidance Footnote */}
                <div className="mt-5 border-t border-black/5 pt-3.5">
                  <p className="text-[11px] text-secondary/80 leading-relaxed font-medium">
                    <span className="font-semibold text-primary">Consultation Perspective: </span>
                    {item.guidance}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            Not sure if physiotherapy is the right modality for your symptoms? Our clinic offers in-person consultations to discuss your movement concerns and assess individual suitability for care.
          </p>
          <div className="mt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
            >
              <span>Speak with Our Clinical Desk</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
