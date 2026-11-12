import React from "react";
import { 
  FileText, 
  Activity, 
  ClipboardCheck, 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const journeySteps = [
  {
    step: "01",
    icon: FileText,
    title: "Initial Consultation & Symptom Review",
    subtitle: "Confidential Discussion",
    description:
      "Your journey begins with an open, private discussion regarding your symptom history, daily routines, bladder or bowel habits, comfort levels, and personal rehabilitation goals.",
    focus: "Establishing a respectful, comfortable clinical dialogue",
  },
  {
    step: "02",
    icon: Activity,
    title: "Symptom & Functional Movement Assessment",
    subtitle: "Objective External Evaluation",
    description:
      "A careful evaluation of postural alignment, lumbo-pelvic spine mobility, diaphragmatic breathing mechanics, and deep abdominal coordination to identify biomechanical contributors.",
    focus: "Identifying tone characteristics (hypotonic vs. hypertonic)",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Personalized Rehabilitation Plan",
    subtitle: "Tailored Care Strategy",
    description:
      "We design a structured, individualized therapy plan tailored strictly to your evaluation findings—emphasizing relaxation, downtraining, sensorimotor awareness, or gentle conditioning.",
    focus: "Customizing exercises without one-size-fits-all assumptions",
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "Guided Therapy & Patient Education",
    subtitle: "Hands-On & Verbal Movement Guidance",
    description:
      "One-on-one sessions guiding you through proper breathing coordination, intra-abdominal pressure management during lifting, and specific pelvic floor muscle exercises.",
    focus: "Empowering you with practical biomechanical self-control",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Progress Review & Home Guidance",
    subtitle: "Long-Term Self-Management",
    description:
      "Periodic reviews assess functional improvements and update your home exercise program, providing you with sustainable lifestyle tools for lasting confidence.",
    focus: "Fostering long-term physical independence and comfort",
  },
];

/**
 * PelvicFloorProcess Component
 * 5-step clinical assessment and rehabilitation journey roadmap.
 */
export const PelvicFloorProcess: React.FC = () => {
  return (
    <Section
      id="process"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Pelvic Floor Rehabilitation Journey"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PATIENT CARE ROADMAP"
          title="The Pelvic Floor Rehabilitation Journey"
          description="A structured, dignified five-step clinical progression designed around your comfort, consent, and functional recovery needs."
          align="center"
        />

        {/* 5-Step Process Roadmap Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6">
          {journeySteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-5 sm:p-6 border border-black/5 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-primary/25 hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <div className="rounded-xl bg-white p-2 text-secondary shadow-xs border border-black/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="mt-4 font-heading text-base sm:text-lg font-semibold text-secondary group-hover:text-primary transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {step.subtitle}
                  </p>

                  {/* Step Narrative */}
                  <p className="mt-3 font-sans text-xs sm:text-xs leading-relaxed text-body">
                    {step.description}
                  </p>
                </div>

                {/* Step Key Focus Pill */}
                <div className="mt-5 pt-3 border-t border-black/5">
                  <div className="flex items-start gap-1.5 text-[11px] font-medium text-secondary/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{step.focus}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outpatient Appointment Experience Callout */}
        <div className="mt-12 rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                  Your Outpatient Experience &amp; Flexible Pacing
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
                Appointments are held in a private, quiet clinical setting. Session duration and frequency are determined based on your unique clinical presentation and comfort level. We do not enforce mandatory packages or fixed visit counts; your therapy pace progresses according to your individual response, symptom reduction, and home exercise consistency.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary bg-white px-4 py-2.5 rounded-full border border-black/10 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Strict Confidentiality Guaranteed</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

