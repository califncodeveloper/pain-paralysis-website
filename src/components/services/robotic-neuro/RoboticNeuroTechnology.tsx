import React from "react";
import { RotateCcw, Activity, ShieldCheck, Gauge } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const techPillars = [
  {
    icon: RotateCcw,
    title: "High-Repetition Movement Cycles",
    description:
      "Repetitive, task-oriented motion is essential for stimulating neuroplastic adaptations. Robotic assistance facilitates hundreds of precision-guided cycles per session without inducing therapist fatigue.",
  },
  {
    icon: Gauge,
    title: "Dynamic Assist-as-Needed Protocols",
    description:
      "Motors provide active assistance only when the patient cannot complete the movement independently, encouraging active voluntary effort and preventing passive reliance.",
  },
  {
    icon: Activity,
    title: "Kinematic Sensor Feedback",
    description:
      "Real-time biofeedback displays movement accuracy, force generation, and joint range on screen, engaging the patient's visual attention and reinforcing motor learning.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Weight-Supported Practice",
    description:
      "Integrated harness or body-weight support mechanisms alleviate fear of falling, allowing early-stage patients to practice upright posture and stepping mechanics securely.",
  },
];

export const RoboticNeuroTechnology: React.FC = () => {
  return (
    <Section
      id="robotic-technology"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Robotic Rehabilitation Technology and Principles"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="TECHNOLOGY-ASSISTED CARE"
          title="How Robotic Neuro Rehabilitation Works"
          description="Combining robotic mechanics, biofeedback sensors, and physical therapy principles to maximize neuroplastic motor practice."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {techPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-xs flex flex-col justify-between"
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

