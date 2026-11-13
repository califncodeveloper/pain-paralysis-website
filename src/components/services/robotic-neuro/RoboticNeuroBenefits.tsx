import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const benefits = [
  {
    title: "High-Dosage Repetitive Movement",
    description: "Enables hundreds of guided movement repetitions per session to stimulate neuromuscular motor learning.",
  },
  {
    title: "Symmetrical Kinematic Alignment",
    description: "Maintains optimal joint trajectories during walking or reaching practice, reducing abnormal compensatory habits.",
  },
  {
    title: "Real-Time Sensorimotor Feedback",
    description: "Provides visual and audio performance cues that encourage patient engagement and active neural activation.",
  },
  {
    title: "Objective Measurable Benchmarking",
    description: "Tracks precise metrics including range of motion, resistance force, and active contribution over time.",
  },
  {
    title: "Safe Early-Stage Mobilization",
    description: "Supports body weight safely, allowing upright movement practice earlier in the rehabilitation journey.",
  },
  {
    title: "Adjunctive Multidisciplinary Care",
    description: "Works synergistically with manual physical therapy, gait analysis, and biofeedback for well-rounded recovery.",
  },
];

export const RoboticNeuroBenefits: React.FC = () => {
  return (
    <Section
      id="robotic-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Benefits and Limitations of Robotic Therapy"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="CLINICAL ADVANTAGES"
          title="Potential Benefits &amp; Treatment Scope"
          description="Robotic physical therapy delivers unique advantages in precision, dosage, and objective tracking when integrated into an individualized care plan."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-heading font-semibold text-base text-secondary">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-text/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Expectations Panel */}
        <div className="mt-8 rounded-2xl bg-white border border-black/10 p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-base text-secondary">
                Realistic Expectations &amp; Therapy Limitations
              </h4>
              <p className="font-sans text-xs sm:text-sm text-text/80 leading-relaxed">
                Robotic neuro rehabilitation is an assistive technology, not an automatic guarantee of independent walking or complete functional restoration. Functional outcomes depend on initial neurological severity, time since injury, spasticity severity, and patient consistency. At Pain &amp; Paralysis Hospital, robotic sessions are always paired with skilled hands-on physical therapy, functional task training, and home guidance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

