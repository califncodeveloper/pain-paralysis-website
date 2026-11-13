import React from "react";
import { Bed, Clock, Users, Activity, FileCheck, ShieldCheck } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const features = [
  {
    icon: Bed,
    title: "25-Bed Inpatient Capacity",
    description:
      "A dedicated 25-bed hospital environment designed specifically for individuals who need continuous recovery support and intensive, daily rehabilitation away from home distractions.",
  },
  {
    icon: Clock,
    title: "24-Hour Hospital Availability",
    description:
      "Continuous hospital operations ensure admitted patients receive round-the-clock supportive care, scheduled medication coordination, and consistent clinical supervision.",
  },
  {
    icon: Activity,
    title: "Integrated Daily Rehabilitation",
    description:
      "Inpatients participate in scheduled daily rehabilitation protocols, including neuro-physiotherapy, mechanical decompression, mobility retraining, and functional conditioning.",
  },
  {
    icon: Users,
    title: "Caregiver Education & Family Training",
    description:
      "Active caregiver involvement ensures family members learn safe patient handling, transfer mechanics, assistive device usage, and posture support before discharge.",
  },
  {
    icon: FileCheck,
    title: "Milestone-Guided Progress Tracking",
    description:
      "Objective clinical reassessments measure functional gains, muscle strength, gait endurance, and independence levels to guide individualized therapy adjustments.",
  },
  {
    icon: ShieldCheck,
    title: "Seamless Discharge Planning",
    description:
      "Coordinated transition planning prepares patients for a safe return home with customized home exercise guidelines, follow-up scheduling, and ongoing outpatient support.",
  },
];

export const InpatientCareFeatures: React.FC = () => {
  return (
    <Section
      id="inpatient-features"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Inpatient Care Features and Capabilities"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="HOSPITAL CAPABILITIES"
          title="Comprehensive Inpatient Care Features"
          description="Designed to deliver structured clinical support, intensive therapy, and caregiver readiness during every stage of hospitalization."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-secondary mb-2.5">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-text/80">
                    {item.description}
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

