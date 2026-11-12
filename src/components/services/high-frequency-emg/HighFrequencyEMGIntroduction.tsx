import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Info } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Motor Unit Action Potential Analysis",
    description:
      "Measures microvolt bioelectrical fluctuations generated during muscle contraction, evaluating motor unit recruitment and physiological firing patterns.",
  },
  {
    title: "Functional Symmetry & Recruitment Mapping",
    description:
      "Identifies neuromuscular imbalances, motor inhibition, and compensatory firing patterns between affected and unaffected muscle groups.",
  },
  {
    title: "Objective Rehabilitation Guidance",
    description:
      "Provides measurable bioelectric data to direct targeted physical therapy, motor re-education exercises, and neuro-rehabilitation protocols.",
  },
  {
    title: "Non-Invasive Surface Assessment",
    description:
      "Administered entirely using comfortable skin-surface electrodes with zero skin incisions, needle insertions, or electric shock stimulation.",
  },
];

/**
 * HighFrequencyEMGIntroduction Component
 * 2-column service introduction and equipment profile section.
 *
 * Left: Modality equipment photo (`emg-therapy.webp`) with clinical callout.
 * Right: Detailed clinical explanation of surface electromyography, terminology clarification, and consultation CTA.
 */
export const HighFrequencyEMGIntroduction: React.FC = () => {
  return (
    <Section
      id="treatment-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Service Overview and Clinical Electromyography Assessment"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Equipment Photography & Clinical Badges (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              {/* Main Modality Image */}
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/services/emg-therapy.webp"
                  alt="High Frequency EMG surface electromyography assessment instrumentation at Pain and Paralysis Clinic Chennai"
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
                {/* Floating Modality Pill */}
                <div className="absolute top-4 left-4 rounded-full bg-secondary/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
                  Clinical Equipment
                </div>
              </div>

              {/* Informational Callout Beneath Image */}
              <div className="mt-4 rounded-xl bg-white p-4 border border-black/5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0">
                    <Cpu className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
                      Bioelectric Instrumentation
                    </h3>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      High-sensitivity surface electromyographic sensors configured to capture microvolt-level motor unit action potentials, filtering noise to evaluate functional muscular engagement under trained clinical supervision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Clinical Copy & Action Triggers (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Badge */}
            <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary mb-2">
              About The Service
            </span>

            {/* Section Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary leading-tight text-balance">
              Understanding High Frequency EMG in Physical Rehabilitation
            </h2>

            {/* Narrative Paragraphs */}
            <div className="mt-4 space-y-3.5 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Electromyography (EMG) is a specialized biomedical assessment that evaluates the electrical potentials produced by skeletal muscles during rest and volitional contraction. When a motor nerve stimulates muscle fibers, depolarizing action potentials sweep across the sarcolemma, generating microvolt-level bioelectric signals that reflect motor recruitment and neuromuscular coordination.
              </p>
              <p>
                In the outpatient physical therapy setting at Pain &amp; Paralysis Clinic, <strong className="text-secondary font-medium">High Frequency EMG</strong> utilizes non-invasive surface electrodes placed over targeted muscle bellies. By capturing and filtering high-frequency muscle signals, our clinical team evaluates neuromuscular activation timing, muscular fatigue patterns, and motor unit engagement to inform customized physical rehabilitation protocols.
              </p>
              <p className="text-xs sm:text-sm text-body/90 bg-surface-soft p-3.5 rounded-xl border border-black/5">
                <strong className="text-secondary font-medium">Important Clinical Distinction:</strong> This outpatient service utilizes non-invasive surface electromyography (sEMG) for functional motor assessment. It is distinct from hospital-based diagnostic needle EMG (which involves inserting fine needle electrodes into muscles to detect denervation or fibrillations) and Nerve Conduction Studies (NCS, which deliver electrical stimulation pulses to measure nerve velocity). Surface EMG provides functional movement guidance without puncturing the skin or delivering electrical shocks.
              </p>
            </div>

            {/* 4 Clinical Pillars Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {clinicalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl bg-surface-soft p-3 border border-black/5 transition-all duration-200 hover:border-primary/30"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-semibold text-secondary">
                      {pillar.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-body leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Scope Notice */}
            <div className="mt-6 w-full rounded-xl bg-primary/5 p-4 border border-primary/20">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-body leading-relaxed">
                  <strong className="text-secondary font-medium">Clinical Scope Notice:</strong> High Frequency EMG at Pain &amp; Paralysis Clinic is an adjunctive functional evaluation tool to guide physical therapy and motor re-education. It does not replace medical diagnosis by a neurologist, radiological imaging (MRI/CT), or formal hospital electrodiagnostic studies. Individual clinical assessment determines whether this evaluation is appropriate for your rehabilitation plan.
                </p>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span>Schedule an Assessment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#treatment-process"
                className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-5 py-2.5 text-xs sm:text-sm font-semibold text-secondary border border-black/10 transition-all duration-300 hover:bg-secondary/5 hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Review Assessment Process</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

