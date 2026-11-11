import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Calendar, Info } from "lucide-react";
import { Container, Section } from "@/components/ui";

const consultationTopics = [
  {
    title: "Quantitative Kinematic Tracking",
    description:
      "Observing joint angular displacements across the hip, knee, and ankle through stance and swing phases.",
  },
  {
    title: "Spatial-Temporal Step Symmetry",
    description:
      "Evaluating step length, cadence, and duration differences between left and right lower extremities.",
  },
  {
    title: "Dynamic Weight-Bearing Distribution",
    description:
      "Reviewing foot-ground interaction, heel strike mechanics, and propulsive push-off balance.",
  },
  {
    title: "Data-Guided Rehabilitation Context",
    description:
      "Informing targeted physical therapy, joint mobilization, and corrective exercise conditioning.",
  },
];

/**
 * GaitAnalysisIntroduction Component
 * 2-column treatment introduction for Advanced 3D Gait Analysis.
 *
 * Adheres to:
 * - Approved Design System: 455x533px modality image card, Marcellus SC H2, Poppins body
 * - Medical Compliance (Phase 22): Educational presentation of biomechanical locomotion assessment;
 *   withholds unverified claims of clinic camera hardware, real-time diagnostic accuracy, or cure promises.
 */
export const GaitAnalysisIntroduction: React.FC = () => {
  return (
    <Section
      id="about-treatment"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="About 3D Gait Analysis and Biomechanical Movement Assessment"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Modality Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[455px] overflow-hidden rounded-2xl bg-secondary/5 p-3 shadow-md border border-black/5 transition-transform duration-300 hover:shadow-xl">
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/10">
                <Image
                  src="/images/services/3d-gait-analysis.webp"
                  alt="Educational illustration of three-dimensional human gait and movement analysis"
                  fill
                  sizes="(min-width: 1280px) 430px, (min-width: 1024px) 380px, (min-width: 640px) 455px, 90vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                {/* Floating Modality Pill */}
                <div className="absolute top-4 left-4 rounded-full bg-secondary/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                  Illustrative Concept
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-secondary/80">
                <span className="font-heading font-medium tracking-wide">
                  Biomechanical Movement
                </span>
                <span className="inline-flex items-center gap-1 text-primary font-semibold">
                  <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                  Educational Scope
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Consultation Checklist (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="section-badge font-semibold tracking-wider uppercase text-primary text-xs sm:text-sm">
              Biomechanical Evaluation
            </span>

            <h2 className="text-h2 mt-2 text-secondary font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Understanding Movement Through Objective Locomotion Analysis
            </h2>

            <div className="mt-4 space-y-3 font-sans text-sm sm:text-base text-body leading-relaxed">
              <p>
                Walking is a fundamental human activity that requires seamless neuromuscular coordination between the spine, pelvis, and lower extremities. When an injury, structural asymmetry, or habitual compensation develops, subtle discrepancies in stride mechanics can place unneeded mechanical stress on weight-bearing joints.
              </p>
              <p>
                Advanced 3D Gait Analysis is an observational biomechanical assessment method that evaluates how an individual moves during walking or running. By studying spatial-temporal parameters, joint angles, and weight-bearing timing, movement evaluations can highlight kinetic compensations that may not be apparent during standard visual observation.
              </p>
            </div>

            {/* Scope & Non-Diagnostic Notice */}
            <div className="mt-5 w-full rounded-xl bg-surface-soft p-4 border-l-4 border-primary text-xs sm:text-sm text-body/90 flex gap-3 items-start">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-secondary">
                  Clinical Scope &amp; Assessment Context
                </p>
                <p className="mt-1 leading-relaxed">
                  Gait analysis is an observational and biomechanical evaluation aid designed to assist clinical evaluation and rehabilitation planning. It does not replace medical diagnosis, independent imaging studies, or physician evaluations, nor does it guarantee specific recovery outcomes.
                </p>
              </div>
            </div>

            {/* 4-Card Topics Checklist Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {consultationTopics.map((topic, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-black/5 bg-surface-soft p-3.5 transition-all duration-200 hover:border-primary/30 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center gap-2 font-heading font-semibold text-xs sm:text-sm text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>{topic.title}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#cta"
                className="vs-btn inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>Book Movement Consultation</span>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
              >
                <span>How Gait Analysis Works</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

