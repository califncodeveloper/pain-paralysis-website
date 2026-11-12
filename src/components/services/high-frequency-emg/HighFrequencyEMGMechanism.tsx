import React from "react";
import { 
  Cpu, 
  Activity, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const mechanismPillars = [
  {
    icon: Activity,
    step: "01",
    title: "Bioelectric Signal Acquisition",
    subtitle: "Microvolt Potential Detection",
    description:
      "When motor neurons stimulate skeletal muscle fibers, electrical action potentials propagate across the sarcolemma. Non-invasive surface electrodes detect these subtle microvolt fluctuations directly from the skin overlying targeted muscle bellies.",
    highlight: "Non-invasive skin-surface sensing",
  },
  {
    icon: Sliders,
    step: "02",
    title: "High-Frequency Filtering & Processing",
    subtitle: "Noise Elimination & Artifact Isolation",
    description:
      "Raw bioelectrical data passes through high-frequency bandpass filters and differential amplifiers. This isolates physiological muscle contraction frequencies while suppressing ambient powerline interference, cardiac activity, and patient movement artifacts.",
    highlight: "Clean biological signal isolation",
  },
  {
    icon: Layers,
    step: "03",
    title: "Motor Recruitment & Symmetry Analysis",
    subtitle: "Quantitative Amplitude & Timing",
    description:
      "The filtered signal is analyzed for Root Mean Square (RMS) amplitude, recruitment onset timing, and frequency spectrum characteristics, allowing clinicians to compare neuromuscular engagement and bilateral symmetry between paired muscle groups.",
    highlight: "Comparative bilateral evaluation",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Biofeedback & Neuromuscular Retraining",
    subtitle: "Sensor-Guided Motor Re-education",
    description:
      "Real-time visual graphs and auditory feedback translate invisible muscle signals into perceptible cues. Patients visualize their contraction effort, helping them consciously recruit inhibited muscles or quiet hyperactive, spastic muscle groups.",
    highlight: "Conscious motor pathway retraining",
  },
];

/**
 * HighFrequencyEMGMechanism Component
 * 4-card breakdown of surface electromyographic principles and passive instrumentation safety.
 */
export const HighFrequencyEMGMechanism: React.FC = () => {
  return (
    <Section
      id="mechanism"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="High Frequency EMG Technology and Bioelectric Mechanism"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="BIOMEDICAL TECHNOLOGY"
          title="Surface Electromyography & Assessment Principles"
          description="How high-frequency surface electromyography records, filters, and analyzes biological electrical potentials to inform personalized physical rehabilitation."
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

                  {/* Mechanism Narrative */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary">
                    <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sensor Safety & Passive Recording Panel */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-secondary">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                <h3 className="font-heading text-base sm:text-lg font-semibold uppercase tracking-wider">
                  Passive Bioelectric Recording &amp; Patient Safety
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Surface electromyography sensors are <strong className="text-secondary font-medium">strictly passive recording instruments</strong>. They do not emit radiation, deliver electrical stimulation shocks, or puncture the skin. Prior to sensor placement, the skin surface is gently cleansed with an alcohol swab to minimize impedance. High-adhesion, medical-grade conductive hydrogel electrodes ensure clear signal acquisition with complete patient comfort.
              </p>
              <p className="text-xs text-body/80 leading-relaxed">
                All assessment procedures follow standardized clinical hygiene protocols and are adapted to the patient&apos;s physical comfort and volitional endurance.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-xl bg-surface-soft p-4 border border-black/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                <AlertCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Clinical Review Note</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Assessment parameters, sensor configurations, and interpretation of bioelectrical readings are conducted by trained clinical rehabilitation staff. Specific technical specifications are confirmed upon in-person clinical consultation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
