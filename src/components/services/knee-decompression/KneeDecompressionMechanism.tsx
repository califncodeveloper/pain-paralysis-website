import React from "react";
import { 
  MoveVertical, 
  Droplet, 
  Maximize2, 
  Timer, 
  ShieldCheck, 
  Cpu, 
  SlidersHorizontal
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
    icon: MoveVertical,
    title: "Tibiofemoral Distraction",
    subtitle: "Joint Space Separation",
    description:
      "Controlled longitudinal traction gently isolates the tibiofemoral compartment, creating millimeter-level separation between the femur and tibia.",
    clinicalPoint:
      "Relieves compressive contact pressure across degraded cartilage surfaces and meniscal cushions.",
  },
  {
    icon: Droplet,
    title: "Synovial Fluid Influx",
    subtitle: "Cartilage Hydrodynamics",
    description:
      "Cyclical distraction generates negative intracapsular pressure, creating a gentle vacuum effect within the synovial cavity.",
    clinicalPoint:
      "Encourages the diffusion of nutrient- and oxygen-rich synovial fluid into avascular cartilage tissue.",
  },
  {
    icon: Maximize2,
    title: "Capsular & Tendon Release",
    subtitle: "Periarticular Lengthening",
    description:
      "Axial tension gently elongates contracted joint capsules, patellar retinacula, and tight surrounding musculature.",
    clinicalPoint:
      "Reduces chronic protective guarding and enhances functional joint compliance for walking and bending.",
  },
  {
    icon: Timer,
    title: "Programmed Cyclical Timing",
    subtitle: "Dynamic Hold & Release",
    description:
      "Digital controls alternate between configured tension hold periods and gradual relaxation phases.",
    clinicalPoint:
      "Prevents reflex muscle contraction and protective spasm, ensuring patient comfort throughout the session.",
  },
];

/**
 * KneeDecompressionMechanism Component
 * Explains the biomechanical principles and technology operating during mechanical knee decompression.
 */
export const KneeDecompressionMechanism: React.FC = () => {
  return (
    <Section
      id="treatment-mechanism"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Biomechanical Principles of Knee Decompression"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="BIOMECHANICAL PRINCIPLES"
          title="How Knee Decompression Operates"
          description="Understanding the mechanical forces, joint space distraction, and fluid dynamics that support knee decompression therapy."
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

                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary leading-snug">
                    {mechanism.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {mechanism.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5">
                  <span className="block text-[11px] font-medium text-secondary/80 italic leading-snug">
                    <strong>Clinical Action:</strong> {mechanism.clinicalPoint}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology & Safety Integration Panel */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="section-badge font-semibold tracking-wider uppercase text-xs text-primary mb-2">
                Equipment Instrumentation
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary">
                Computerized Load Regulation &amp; Patient Safety
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                Traction parameters are digitally controlled and calibrated to each patient&apos;s physical tolerance, ensuring consistent, gradual force application without manual over-pulling.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                <SlidersHorizontal className="h-5 w-5 text-primary mb-2" aria-hidden="true" />
                <h4 className="font-heading text-sm font-semibold text-secondary">Calibrated Poundage</h4>
                <p className="mt-1 text-xs text-body leading-relaxed">
                  Tension poundage is precisely selected based on patient weight, joint severity, and clinical examination findings.
                </p>
              </div>

              <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                <Cpu className="h-5 w-5 text-primary mb-2" aria-hidden="true" />
                <h4 className="font-heading text-sm font-semibold text-secondary">Ergonomic Stabilization</h4>
                <p className="mt-1 text-xs text-body leading-relaxed">
                  Supportive thigh and lower-leg strapping cushions ensure force is directed solely through the knee joint.
                </p>
              </div>

              <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                <ShieldCheck className="h-5 w-5 text-primary mb-2" aria-hidden="true" />
                <h4 className="font-heading text-sm font-semibold text-secondary">Safety Override Control</h4>
                <p className="mt-1 text-xs text-body leading-relaxed">
                  Patients hold an immediate stop switch, allowing them to pause or release traction at any moment during therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
