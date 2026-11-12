import React from "react";
import { 
  CalendarCheck, 
  CheckCircle2, 
  Clock, 
  Compass, 
  HeartHandshake, 
  Layers, 
  ShieldCheck, 
  TrendingUp 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Initial Consultation & Medical Review",
    summary:
      "Comprehensive intake reviewing medical history, hospital discharge summaries, physician recommendations, and current medications.",
    details: [
      "Discussion of neurological onset, timeline, and symptoms",
      "Review of physician and neurologist guidance",
      "Understanding patient, family, and caregiver priorities",
    ],
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Functional Movement Assessment",
    summary:
      "Physical evaluation of voluntary motor recruitment, joint range, muscle tone, balance, posture, and transfer capability.",
    details: [
      "Evaluation of resting tone and movement resistance",
      "Assessment of bed mobility, sitting balance, and transfers",
      "Gait and equilibrium evaluation if clinically safe",
    ],
    icon: Compass,
  },
  {
    step: "03",
    title: "Personalized Rehabilitation Planning",
    summary:
      "Collaborative goal-setting establishing realistic, meaningful functional milestones tailored to the patient's individual capabilities.",
    details: [
      "Defining short-term and long-term functional goals",
      "Structuring appropriate exercise intensity and rest breaks",
      "Selecting specific task-oriented therapy modalities",
    ],
    icon: Layers,
  },
  {
    step: "04",
    title: "Guided Therapy & Movement Practice",
    summary:
      "One-on-one clinician-guided rehabilitation sessions incorporating motor facilitation, task practice, and balance drills.",
    details: [
      "Facilitated movement practice with therapist guidance",
      "Postural and balance challenges within safe parameters",
      "Caregiver participation and safe handling observation",
    ],
    icon: HeartHandshake,
  },
  {
    step: "05",
    title: "Progress Review & Home Guidance",
    summary:
      "Regular reassessment of functional progress, adaptation of therapy drills, and clear home exercise recommendations.",
    details: [
      "Objective reassessment of functional mobility milestones",
      "Gradual progression of exercise difficulty and endurance",
      "Refining home exercise routines and family positioning advice",
    ],
    icon: TrendingUp,
  },
];

/**
 * NeuroPhysiotherapyProcess Component
 * 5-step structured clinical rehabilitation journey roadmap.
 */
export const NeuroPhysiotherapyProcess: React.FC = () => {
  return (
    <Section
      id="process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Patient Rehabilitation Journey"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="STRUCTURED CLINICAL JOURNEY"
          title="The Neuro Physiotherapy Rehabilitation Process"
          description="A systematic, five-stage rehabilitation pathway tailored to your neurological condition, functional capabilities, and pacing."
          align="center"
        />

        {/* 5-Step Process Timeline */}
        <div className="mt-12 space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start gap-6 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                {/* Step Number & Icon Indicator */}
                <div className="flex items-center gap-4 md:flex-col md:items-center md:justify-center flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white font-heading text-xl font-bold shadow-md shadow-primary/20">
                    {item.step}
                  </div>
                  <div className="rounded-xl bg-surface-soft p-2 text-secondary hidden md:block border border-black/5">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-3 border-t border-black/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60 block mb-2">
                      Key Activities:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-body">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outpatient Appointment Experience Callout */}
        <div className="mt-12 rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-base font-semibold text-secondary">
                Appointment Structure &amp; Fatigue Management
              </h4>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Neurological rehabilitation sessions are paced thoughtfully to prevent muscular and cognitive fatigue. Outpatient appointments typically last 45 to 60 minutes, incorporating structured rest intervals, hydration breaks, and progressive task difficulty based on real-time patient tolerance. Treatment duration and session frequency are personalized during initial consultation and continually updated based on functional progress.
              </p>
              <div className="inline-flex items-center gap-2 pt-1 text-xs text-secondary/80 font-medium">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Zero fixed session mandates; progress is evaluated on individual functional responsiveness.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
