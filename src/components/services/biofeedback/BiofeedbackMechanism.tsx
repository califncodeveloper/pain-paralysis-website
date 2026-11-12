import React from "react";
import { 
  Activity, 
  Cpu, 
  Eye, 
  Brain, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const mechanismPillars = [
  {
    icon: Activity,
    step: "01",
    title: "Bioelectrical Signal Detection",
    subtitle: "Microvolt Potential Capture",
    description:
      "When motor neurons activate skeletal muscle fibers, electrical action potentials propagate across muscle membranes. Non-invasive surface hydrogel electrodes detect these subtle microvolt fluctuations directly from the skin surface over targeted muscle bellies.",
    highlight: "Non-invasive skin-surface sensing",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Amplification & Artifact Filtering",
    subtitle: "High-Fidelity Signal Isolation",
    description:
      "Detected bioelectrical potentials undergo differential amplification and bandpass filtering. This process eliminates ambient 50/60 Hz powerline interference, motion artifacts, and cardiovascular noise, isolating true neuromuscular activity.",
    highlight: "Pure biological signal isolation",
  },
  {
    icon: Eye,
    step: "03",
    title: "Multi-Sensory Translation",
    subtitle: "Real-Time Visual & Auditory Cues",
    description:
      "The filtered muscle potentials are instantly translated into perceptible feedback: dynamic visual waveforms, numerical amplitude readouts, target threshold bars, and responsive auditory pitch variations reflecting contraction intensity.",
    highlight: "Instantaneous multi-sensory display",
  },
  {
    icon: Brain,
    step: "04",
    title: "Cognitive Learning & Neuroplasticity",
    subtitle: "Therapist-Guided Voluntary Control",
    description:
      "Observing the direct relationship between mental effort and physiological output enables patients to consciously modify muscle tone. With therapist coaching, patients learn to down-train spasticity or recruit inhibited motor units.",
    highlight: "Neuroplastic sensorimotor retraining",
  },
];

/**
 * BiofeedbackMechanism Component
 * 4-card breakdown of surface electromyographic feedback principles and safety infrastructure.
 */
export const BiofeedbackMechanism: React.FC = () => {
  return (
    <Section
      id="mechanism"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Biofeedback Mechanism and Physiological Principles"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PHYSIOLOGICAL PRINCIPLES"
          title="How Biofeedback Retrains Neuromuscular Control"
          description="A step-by-step biomedical overview of how surface bioelectrical detection and multi-sensory feedback facilitate neuroplastic motor learning."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 4-Card Mechanism Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mechanismPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Phase {item.step}
                    </span>
                    <div className="rounded-xl bg-secondary/5 p-2.5 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 font-heading text-lg font-semibold text-secondary leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-primary">
                    {item.subtitle}
                  </p>

                  {/* Body Text */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-medium text-secondary/80">
                  <Sparkles className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Mechanism Distinction Panel */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0 mt-1">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                  Active Retraining vs. Passive Electrical Stimulation
                </h4>
                <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
                  Biofeedback is fundamentally an active, self-directed learning modality. Unlike passive electrotherapies (such as TENS, EMS, or FES) which deliver electrical currents to stimulate nerves or contract muscles externally, biofeedback sensors never emit electrical shocks or impulses. The instrumentation functions solely as a sensitive biological listener, detecting and amplifying the patient’s own endogenous muscle potentials so their central nervous system can learn self-regulation.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary border border-black/5">
                <AlertCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                Zero Electrical Shocks
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

