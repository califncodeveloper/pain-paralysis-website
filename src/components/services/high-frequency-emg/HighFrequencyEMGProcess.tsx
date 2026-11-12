import React from "react";
import { 
  FileText, 
  Sparkles, 
  Sliders, 
  Activity, 
  LineChart, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const journeySteps = [
  {
    step: "01",
    icon: FileText,
    title: "Clinical Consultation & Intake",
    subtitle: "Medical History & Symptom Review",
    description:
      "Your physical therapist conducts a thorough review of your neurological or musculoskeletal medical history, previous specialist consultations, imaging reports, and functional rehabilitation goals.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Movement Screening & Skin Preparation",
    subtitle: "Range of Motion & Impedance Cleansing",
    description:
      "A preliminary physical evaluation assesses joint mobility, functional motor control, and muscle tone. The skin over targeted muscle bellies is gently cleansed with an alcohol wipe to ensure minimal electrical impedance.",
  },
  {
    step: "03",
    icon: Sliders,
    title: "Procedure Briefing & Sensor Placement",
    subtitle: "Non-Invasive Surface Interface",
    description:
      "Your therapist walks you through the assessment steps to ensure total comfort. High-adhesion, medical-grade surface electrodes are precisely positioned along the anatomical orientation of specific muscle fibers.",
  },
  {
    step: "04",
    icon: Activity,
    title: "Baseline & Volitional Signal Capture",
    subtitle: "Resting Tone & Active Motor Recording",
    description:
      "Baseline electrical activity is recorded during full muscular relaxation. You are then guided through gentle, controlled volitional isometric contractions to capture real-time motor unit recruitment data.",
  },
  {
    step: "05",
    icon: LineChart,
    title: "Data Interpretation & Therapy Roadmap",
    subtitle: "Personalized Protocol Design",
    description:
      "The clinical team analyzes signal amplitude, recruitment timing, and bilateral symmetry. Findings are reviewed with you to structure a customized physical therapy plan and establish milestones for future reassessments.",
  },
];

/**
 * HighFrequencyEMGProcess Component
 * 5-step clinical journey roadmap detailing the outpatient assessment workflow.
 */
export const HighFrequencyEMGProcess: React.FC = () => {
  return (
    <Section
      id="treatment-process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="High Frequency EMG Clinical Assessment Methodology"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT JOURNEY"
          title="Clinical Assessment & Rehabilitation Roadmap"
          description="A structured, transparent 5-step workflow designed to evaluate neuromuscular activation and inform your personalized physical rehabilitation pathway."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 5-Step Roadmap Flow */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Step {step.step}
                    </span>
                    <div className="rounded-xl bg-secondary/5 p-2 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="mt-5 font-heading text-base font-semibold text-secondary leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-primary">
                    {step.subtitle}
                  </p>

                  {/* Step Narrative */}
                  <p className="mt-3 text-xs text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Indicator */}
                <div className="mt-6 pt-3 border-t border-black/5">
                  <span className="text-[11px] font-medium text-secondary/70">
                    Clinical Milestone {index + 1} of 5
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outpatient Appointment Experience Callout */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary uppercase tracking-wider">
                  Outpatient Appointment Experience
                </h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  An initial High Frequency EMG assessment typically takes approximately <strong className="text-secondary font-medium">30 to 45 minutes</strong>, including clinical intake, skin preparation, bilateral recording, and preliminary results discussion. The session is non-invasive and requires no post-procedure recovery downtime.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 rounded-full bg-surface-soft px-4 py-2 border border-black/5 text-xs font-medium text-secondary">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Zero Post-Assessment Downtime</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
