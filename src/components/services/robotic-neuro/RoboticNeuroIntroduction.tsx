import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, ShieldAlert, Award } from "lucide-react";
import { Container, Section } from "@/components/ui";

const principles = [
  {
    title: "Guided Kinematic Movement Retraining",
    description:
      "Technology-assisted motorized guidance delivers controlled, repeatable motion trajectories for upper or lower limb joints, facilitating neuromotor stimulation.",
  },
  {
    title: "High-Repetition Task-Oriented Cycles",
    description:
      "Enables patients to achieve significantly higher movement repetitions than manual therapy alone allows, providing the sensorimotor input needed to engage neuroplasticity.",
  },
  {
    title: "Objective Sensor Effort & Resistance Tracking",
    description:
      "Integrated electronic sensors measure patient-initiated effort, joint range of motion, and movement symmetry across every therapy session.",
  },
  {
    title: "Clinical Adaptation & Patient Safety",
    description:
      "Assistance levels adjust dynamically according to individual fatigue, muscle tone, and progress under direct physical therapist supervision.",
  },
];

export const RoboticNeuroIntroduction: React.FC = () => {
  return (
    <Section
      id="robotic-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Overview of Robotic Neuro Rehabilitation"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Authentic Clinic Award & Modality Asset (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/awards/award-robotic-physio.webp"
                  alt="Official award recognition for excellence in robotic physiotherapy and neuro rehabilitation at Pain and Paralysis Clinic Chennai"
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
                  className="object-contain object-center p-4 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-secondary/85 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <span className="font-bold text-accent block text-sm mb-0.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-accent" />
                    Excellence in Robotic Physiotherapy
                  </span>
                  <span className="text-white/90">Clinical Recognition for Advanced Neuro Rehabilitation</span>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
                  <span className="font-bold text-secondary block text-sm">Technology-Assisted</span>
                  <span className="text-text/75 text-[11px]">Motor Relearning</span>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
                  <span className="font-bold text-secondary block text-sm">Sensor-Guided</span>
                  <span className="text-text/75 text-[11px]">Objective Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-1.5">
                <Cpu className="h-4 w-4" aria-hidden="true" />
                Technology-Assisted Neurological Recovery
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-secondary leading-tight">
                Precision Guided Movement Retraining for Neurological Conditions
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              Robotic Neuro Rehabilitation represents an advanced, technology-assisted discipline in neurological physical therapy. Designed for individuals experiencing motor impairment following a stroke, spinal cord injury, traumatic nerve trauma, or hemiparesis, robotic rehabilitation introduces precise, repetitive movement practice that assists neuroplastic recovery.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              By supporting the patient&apos;s limbs with guided mechanical assistance, robotic devices allow patients to perform meaningful task-oriented cycles—such as stepping, knee articulation, and reaching motions—with greater frequency and consistency than conventional manual therapy alone can deliver.
            </p>

            {/* 4 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-black/5 bg-surface-soft p-4 shadow-xs"
                >
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-secondary flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-text/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical Disclaimer on Robotic Claims */}
            <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3 w-full">
              <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block font-semibold">Important Clinical &amp; Ethical Disclaimer:</strong>
                <span>
                  Robotic neuro rehabilitation is an assistive physical therapy modality and does not claim to cure paralysis or guarantee independent walking. Neurological recovery is influenced by lesion location, chronicity, and individual patient physiology. Candidacy is determined strictly via clinical assessment. Specific robotic equipment brand and operational models are verified during initial evaluation.
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02]"
              >
                <span>Request Clinical Suitability Evaluation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

