import React from "react";
import { Stethoscope, Activity, Sparkles, ShieldCheck, Flame, Dumbbell } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const approaches = [
  {
    icon: Stethoscope,
    title: "Detailed Clinical History & Examination",
    description:
      "Reviewing onset triggers, radiating pain pathways, previous imaging reports, and prior treatment responses to build an objective baseline.",
  },
  {
    icon: Activity,
    title: "Biomechanical Motion & Posture Analysis",
    description:
      "Evaluating spinal curvature, weight distribution, pelvic tilt, and gait asymmetry to pinpoint compensatory stresses exacerbating pain.",
  },
  {
    icon: ShieldCheck,
    title: "Computerized Mechanical Traction",
    description:
      "Utilizing calibrated traction tables to gently distract spinal discs or knee joint spaces, creating negative pressure to offload compressed nerves.",
  },
  {
    icon: Flame,
    title: "Targeted Photobiomodulation",
    description:
      "Adjunctive therapeutic laser application delivers cellular light energy into deep periarticular tissues to ease localized inflammation and muscle spasms.",
  },
  {
    icon: Dumbbell,
    title: "Core & Postural Stabilization",
    description:
      "Gradual introduction of deep stabilizing exercises, lumbo-pelvic control, and gentle stretches to protect vulnerable joints against re-injury.",
  },
  {
    icon: Sparkles,
    title: "Ergonomic & Lifestyle Guidance",
    description:
      "Customized workstation adjustments, sleep posture recommendations, and daily activity pacing strategies for lasting symptom control.",
  },
];

export const PainManagementApproach: React.FC = () => {
  return (
    <Section
      id="pain-approach"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Pain Management Methodology"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="TREATMENT METHODOLOGY"
          title="Our Non-Surgical Pain Care Pathway"
          description="A structured, conservative approach combining advanced mechanical modalities, manual techniques, and functional movement education."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {approaches.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text/75 leading-relaxed">
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

