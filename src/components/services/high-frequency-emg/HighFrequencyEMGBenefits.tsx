import React from "react";
import { 
  CheckCircle, 
  AlertTriangle, 
  Cpu, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Eye, 
  Layers 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const benefitsData = [
  {
    icon: BarChart3,
    title: "Objective Neuromuscular Data",
    description:
      "Replaces subjective visual estimation with quantifiable bioelectrical metrics (microvolts, frequency spectrum) measuring motor unit recruitment and contraction amplitude.",
  },
  {
    icon: Target,
    title: "Targeted Exercise Prescription",
    description:
      "Pinpoints specific muscle groups experiencing neuromuscular inhibition or delayed firing, allowing therapists to design highly focused motor re-education drills.",
  },
  {
    icon: Cpu,
    title: "Longitudinal Recovery Tracking",
    description:
      "Establishes measurable baseline values that allow therapists and patients to track objective neuromuscular recruitment gains across sequential rehabilitation phases.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Invasive & Completely Painless",
    description:
      "Conducted exclusively with comfortable, hypoallergenic surface skin electrodes, avoiding needles, tissue puncturing, or electrical stimulation shocks.",
  },
  {
    icon: Eye,
    title: "Enhanced Biofeedback Retraining",
    description:
      "Translates invisible biological potentials into visible on-screen cues, empowering patients to consciously perceive and modulate their own muscle activation effort.",
  },
  {
    icon: Layers,
    title: "Synergistic Multi-Modal Care",
    description:
      "Integrates seamlessly with neuro-physiotherapy, targeted manual mobilization, therapeutic exercise, and gait retraining for comprehensive rehabilitation.",
  },
];

/**
 * HighFrequencyEMGBenefits Component
 * 6-card clinical benefits checklist and conservative limitations panel.
 */
export const HighFrequencyEMGBenefits: React.FC = () => {
  return (
    <Section
      id="benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Benefits and Limitations of High Frequency EMG"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL ADVANTAGES"
          title="Potential Benefits & Objective Assessment Value"
          description="How objective electromyographic data supports individualized physical therapy and informs structured rehabilitation planning."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-secondary leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Objective Assessment Benefit
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Limitations Notice & Clinical Realities */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 flex-shrink-0 mt-0.5">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary uppercase tracking-wider">
                Assessment Limitations &amp; Clinical Realities
              </h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Surface electromyography is an observational assessment tool and biofeedback aid; <strong className="text-secondary font-medium">it is not a standalone curative therapy</strong>. It does not physically reconnect severed nerves, reverse complete structural spinal cord transections, or regenerate lost motor neurons.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-body leading-relaxed pt-1">
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <span>Does not guarantee complete motor recovery or eliminate underlying neurological disease.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <span>Surface recordings may capture crosstalk from adjacent muscles in small muscle groups.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <span>Subcutaneous adipose tissue and skin impedance can influence recorded microvolt amplitude.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <span>Clinical progress depends on etiology, neural plasticity, and active exercise adherence.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
