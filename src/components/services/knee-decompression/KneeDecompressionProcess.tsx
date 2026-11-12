import React from "react";
import { 
  FileSearch, 
  Activity, 
  SlidersHorizontal, 
  ShieldCheck, 
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
    title: "Clinical Consultation & Imaging Review",
    subtitle: "Medical History",
    description:
      "Your physical therapist reviews your symptom timeline, functional walking limitations, prior treatments, and any available knee X-rays or MRI scans.",
    focus: "Determining clinical candidacy and safety profile",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Joint Mobility & Biomechanical Evaluation",
    subtitle: "Functional Baseline",
    description:
      "Physical examination evaluates active and passive knee flexion/extension angles, patellofemoral glide, ligament stability, and weight-bearing mechanics.",
    focus: "Establishing objective baseline range-of-motion metrics",
    icon: Activity,
  },
  {
    step: "03",
    title: "Parameter Programming & Harness Fitting",
    subtitle: "Custom Equipment Setup",
    description:
      "You are seated or semi-reclined comfortably. Padded ergonomic restraints secure the distal thigh and upper calf to direct distraction purely through the knee joint.",
    focus: "Configuring calibrated tension poundage and cycle intervals",
    icon: SlidersHorizontal,
  },
  {
    step: "04",
    title: "Supervised Decompression Session",
    subtitle: "Gentle Articular Distraction",
    description:
      "The specialized apparatus delivers smooth, computerized cycles of tension hold and gentle rest, while you maintain full control via an emergency pause switch.",
    focus: "Promoting synovial fluid exchange and easing joint friction",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Progress Review & Movement Coaching",
    subtitle: "Rehabilitation Integration",
    description:
      "Post-session evaluation checks joint comfort and ease of movement, coordinating mechanical therapy with guided exercises to strengthen stabilizing knee musculature.",
    focus: "Reinforcing joint mobility with active home guidance",
    icon: UserCheck,
  },
];

/**
 * KneeDecompressionProcess Component
 * 5-step clinical journey roadmap detailing the treatment progression.
 */
export const KneeDecompressionProcess: React.FC = () => {
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
          title="The Knee Decompression Journey"
          description="A structured, 5-step clinical process ensuring diagnostic evaluation, safe mechanical distraction, and progressive rehabilitation."
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
                className="relative flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-bold text-primary/80 group-hover:text-primary transition-colors duration-200">
                      {stepItem.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-soft text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Subtitle Badge */}
                  <span className="mt-3 block text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {stepItem.subtitle}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-1 font-heading text-base sm:text-lg font-semibold text-secondary leading-snug">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Step Clinical Focus */}
                <div className="mt-5 pt-3 border-t border-black/5">
                  <span className="block text-[11px] font-medium text-secondary/80 leading-snug">
                    <strong className="text-secondary">Key Focus:</strong> {stepItem.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Appointment Experience Callout */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                Comfort-Oriented Outpatient Experience
              </h4>
              <p className="text-xs sm:text-sm text-body max-w-2xl leading-relaxed">
                Sessions require no hospital admission and patients remain fully clothed throughout. Most appointments typically take between 30 to 45 minutes from initial check-in to post-session mobility review.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>Consult Our Clinical Team</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
