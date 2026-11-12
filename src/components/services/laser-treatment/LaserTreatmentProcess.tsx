import React from "react";
import { 
  FileSearch, 
  Glasses, 
  Sparkles, 
  Activity, 
  UserCheck, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const stepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Clinical Consultation & Intake",
    subtitle: "Medical History",
    description:
      "Your physical therapist reviews your symptom duration, mechanical triggers, prior interventions, and screens for any medical contraindications.",
    focus: "Establishing clinical candidacy and baseline symptom score",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Tissue Palpation & Optical Safety",
    subtitle: "Pre-Treatment Setup",
    description:
      "The therapist gently palpates anatomical landmarks to identify tender spots and tissue depth. Both patient and clinician don certified protective goggles.",
    focus: "Ensuring optical eye protection and precise target boundaries",
    icon: Glasses,
  },
  {
    step: "03",
    title: "Calibrated Laser Application",
    subtitle: "Targeted Photobiomodulation",
    description:
      "The handpiece is applied using continuous or pulsed settings across the affected area in smooth, overlapping scanning or contact motions.",
    focus: "Delivering therapeutic light dosage without tissue overheating",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Movement & Rehabilitation Synergy",
    subtitle: "Therapeutic Integration",
    description:
      "Following laser application, your therapist guides you through gentle active mobilizations, targeted stretches, or soft-tissue releases.",
    focus: "Capitalizing on reduced guarding to restore movement patterns",
    icon: Activity,
  },
  {
    step: "05",
    title: "Progress Review & Home Coaching",
    subtitle: "Follow-Up & Self-Care",
    description:
      "Post-session response is noted, establishing treatment cadence and reinforcing home exercise routines, ergonomics, and movement habits.",
    focus: "Empowering sustained recovery and daily physical comfort",
    icon: UserCheck,
  },
];

/**
 * LaserTreatmentProcess Component
 * 5-step clinical journey roadmap detailing the treatment progression.
 */
export const LaserTreatmentProcess: React.FC = () => {
  return (
    <Section
      id="treatment-process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Treatment Process and Clinical Care Journey"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="TREATMENT METHODOLOGY"
          title="The Laser Treatment Journey"
          description="A structured, 5-step clinical pathway ensuring accurate patient assessment, strict optical safety, calibrated light delivery, and integrated rehabilitation."
          align="center"
          theme="light"
          accent
        />

        {/* 5-Step Process Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {stepsData.map((stepItem, index) => {
            const IconComponent = stepItem.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/5">
                    <span className="font-heading text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="mt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block">
                      {stepItem.subtitle}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-secondary mt-1 leading-snug">
                      {stepItem.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Step Clinical Focus */}
                <div className="mt-6 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70 block mb-1">
                    Clinical Objective:
                  </span>
                  <p className="text-xs text-secondary/90 font-medium leading-normal">
                    {stepItem.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Treatment Cadence & Session Duration Notice */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                Outpatient Experience &amp; Session Cadence
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                Comfortable 20 to 30 Minute Outpatient Sessions
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                Laser treatment sessions are brief, comfortable, and require zero post-procedural downtime. Most patients undergo 2 to 3 sessions per week during initial care, with treatment duration and total sessions calibrated to lesion chronicity, tissue depth, and ongoing recovery progress.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-secondary/90 transition-all hover:scale-[1.02]"
            >
              <span>Discuss Your Treatment Plan</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

