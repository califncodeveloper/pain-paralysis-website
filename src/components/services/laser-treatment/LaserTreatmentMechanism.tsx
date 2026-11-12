import React from "react";
import { 
  Zap, 
  Activity, 
  Waves, 
  ShieldCheck, 
  SlidersHorizontal, 
  Glasses,
  FlameKindling
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface MechanismCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  subtitle: string;
  description: string;
  clinicalPoint: string;
}

const mechanismsData: MechanismCard[] = [
  {
    icon: Zap,
    title: "Mitochondrial Photoreception",
    subtitle: "Cytochrome C Activation",
    description:
      "Targeted photons within therapeutic optical windows are absorbed by cytochrome c oxidase, a vital photoacceptor inside mitochondrial membranes.",
    clinicalPoint:
      "Supports cellular respiration and enhances adenosine triphosphate (ATP) production, providing essential energy for tissue maintenance.",
  },
  {
    icon: Activity,
    title: "Microvascular Perfusion",
    subtitle: "Capillary Circulation",
    description:
      "Photonic interaction encourages localized vasodilation and transient nitric oxide release along surrounding microcapillary networks.",
    clinicalPoint:
      "Enhances oxygenation and nutrient transport into irritated, fatigued, or hypoxic soft-tissue compartments.",
  },
  {
    icon: Waves,
    title: "Inflammatory Modulation",
    subtitle: "Fluid Dynamics & Edema Easing",
    description:
      "Photobiomodulation helps balance pro-inflammatory and anti-inflammatory chemical signaling in congested periarticular structures.",
    clinicalPoint:
      "Aids natural lymphatic drainage, helping reduce swelling, tissue tightness, and local fluid accumulation.",
  },
  {
    icon: FlameKindling,
    title: "Nociceptive Comfort",
    subtitle: "Neural Pathway Regulation",
    description:
      "Therapeutic light application influences peripheral nerve conduction velocity and sensory pain fiber excitability.",
    clinicalPoint:
      "Helps calm heightened pain sensitivity (hyperalgesia) and eases muscular guarding surrounding sensitized joints.",
  },
];

/**
 * LaserTreatmentMechanism Component
 * Explains the photobiological principles and optical technology behind therapeutic laser therapy.
 */
export const LaserTreatmentMechanism: React.FC = () => {
  return (
    <Section
      id="treatment-mechanism"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Photobiological Principles of Laser Therapy"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PHOTOBIOLOGICAL PRINCIPLES"
          title="How Therapeutic Laser Operates"
          description="Understanding the cellular interactions, mitochondrial energetics, and circulatory mechanisms that define photobiomodulation."
          align="center"
          theme="light"
          accent
        />

        {/* 4-Card Mechanism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {mechanismsData.map((mechanism, index) => {
            const IconComponent = mechanism.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {mechanism.subtitle}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-soft text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary mt-3">
                    {mechanism.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed mt-2">
                    {mechanism.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70 block mb-1">
                    Clinical Significance:
                  </span>
                  <p className="text-xs text-secondary/90 leading-normal">
                    {mechanism.clinicalPoint}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology & Safety Infrastructure Callout Banner */}
        <div className="mt-12 rounded-2xl bg-secondary p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none" aria-hidden="true">
            <SlidersHorizontal className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs text-accent mb-2 inline-block">
                Clinical Calibration &amp; Safety
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                Controlled Delivery &amp; Optical Protection Standards
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                Therapeutic laser delivery requires calibrated dosage controls tailored to target tissue depth, skin pigmentation, and lesion chronicity. Both patients and attending therapists wear certified optical protective goggles specific to the laser wavelength throughout the entire treatment session.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/10">
                <Glasses className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-white/90 font-medium">Mandatory certified optical safety eyewear</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/10">
                <SlidersHorizontal className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-white/90 font-medium">Continuous &amp; pulsed delivery modes tailored by therapist</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-white/90 font-medium">Non-thermal or soothing warmth without tissue ablation</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

