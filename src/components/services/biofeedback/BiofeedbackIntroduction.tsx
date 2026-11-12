import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Brain, Info, Activity } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Multi-Sensory Signal Translation",
    description:
      "Converts microvolt-level muscle action potentials into immediate visual waveforms, dynamic bar graphs, and responsive auditory pitch variations.",
  },
  {
    title: "Conscious Motor Self-Regulation",
    description:
      "Enables patients to perceive subtle involuntary muscle guarding or faint voluntary motor recruitment, learning conscious control under therapist coaching.",
  },
  {
    title: "Sensorimotor & Proprioceptive Retraining",
    description:
      "Re-establishes healthy neuromuscular feedback loops, helping the brain recalibrate resting muscle tone and coordination after neurological or orthopedic trauma.",
  },
  {
    title: "Non-Invasive & Non-Pharmacological",
    description:
      "Conducted entirely using gentle, passive skin-surface electrodes with zero needles, electric shocks, radiation, or pharmaceutical dependency.",
  },
];

/**
 * BiofeedbackIntroduction Component
 * 2-column service introduction and equipment profile section.
 *
 * Left: Authentic clinic service photo (`biofeedback.webp`) with clinical callout.
 * Right: Detailed narrative defining biofeedback in physical rehabilitation,
 * distinguishing measurement from feedback learning, presenting 4 clinical pillars,
 * and a prominent Clinical Scope Notice.
 */
export const BiofeedbackIntroduction: React.FC = () => {
  return (
    <Section
      id="treatment-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Service Overview and Clinical Biofeedback Principles"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Equipment Photography & Clinical Badges (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              {/* Main Modality Image */}
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/services/biofeedback.webp"
                  alt="Biofeedback clinical consultation and neuromuscular sensor retraining at Pain and Paralysis Clinic Chennai"
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
                {/* Floating Modality Pill */}
                <div className="absolute top-4 left-4 rounded-full bg-secondary/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
                  Neuromuscular Retraining
                </div>
              </div>

              {/* Informational Callout Beneath Image */}
              <div className="mt-4 rounded-xl bg-white p-4 border border-black/5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0">
                    <Brain className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
                      Sensor-Guided Motor Learning
                    </h3>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      High-sensitivity surface electromyographic sensors detect microvolt-level bioelectric potentials, translating subconscious muscle activity into real-time sensory feedback for targeted motor retraining under qualified therapist supervision.
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
              Understanding Biofeedback in Neuromuscular Rehabilitation
            </h2>

            {/* Narrative Paragraphs */}
            <div className="mt-4 space-y-3.5 text-sm sm:text-base text-body leading-relaxed">
              <p>
                In neurological and musculoskeletal conditions, the body’s internal awareness of muscle tension often becomes disrupted. Following a stroke, spinal nerve trauma, or chronic pain episodes, muscles may remain chronically hypertonic (involuntary guarding and spasms) or become functionally inhibited (unable to generate voluntary recruitment). Biofeedback bridges this gap by translating internal physiological signals into immediate, perceptible visual and auditory information.
              </p>
              <p>
                At Pain &amp; Paralysis Clinic in Madhanandapuram, Chennai, our Biofeedback service utilizes non-invasive surface electromyography (sEMG) sensors placed over targeted muscle bellies. These sensors detect microvolt-level electrical impulses generated during muscle fiber activation. By watching real-time displays and listening to pitch-modulated auditory tones, patients learn to actively modulate their muscle activity—practicing conscious relaxation to dampen spasticity or targeted recruitment to awaken weakened muscle groups.
              </p>
              <p>
                A vital distinction exists between merely <em>measuring</em> a biological signal and using <em>feedback</em> for active rehabilitation. While diagnostic instrumentation passively records microvolts, biofeedback operates as an interactive educational modality. It engages the central nervous system’s neuroplastic learning capacity, empowering patients to regain voluntary motor control and self-regulation over processes previously deemed involuntary.
              </p>
            </div>

            {/* 4 Clinical Pillars Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {clinicalPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-surface-soft p-3.5 border border-black/5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-secondary">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs text-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Scope Notice Banner */}
            <div className="mt-6 w-full rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <strong className="font-semibold block mb-0.5 text-amber-900">
                    Clinical Scope &amp; Medical Boundaries
                  </strong>
                  Biofeedback is an active rehabilitative learning modality designed to complement physical therapy and motor retraining. It does not constitute an independent medical diagnosis, nor does it guarantee the recovery of paralyzed limbs or regenerate damaged nerve tissue. It does not replace medical consultations with neurologists, radiological imaging (MRI/CT), prescribed antispasmodics, or indicated surgical interventions. All treatment plans are individualized following comprehensive clinical assessment.
                </div>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Consult Our Clinical Team</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#mechanism"
                className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-5 py-3 text-sm font-semibold text-secondary border border-black/10 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>How Feedback Works</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

