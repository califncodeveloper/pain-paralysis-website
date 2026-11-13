import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Disc3, Info } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Calibrated Articular Distraction",
    description:
      "Controlled tensile separation gently isolates the tibiofemoral joint compartment without twisting or abrupt loading.",
  },
  {
    title: "Synovial Fluid Mobilization",
    description:
      "Cyclical mechanical offloading encourages the diffusion of nutrient-rich synovial fluid to nourish articular cartilage.",
  },
  {
    title: "Periarticular Tension Relief",
    description:
      "Gentle axial stretching eases tight hamstrings, quadriceps tendons, and collateral ligaments surrounding the knee capsule.",
  },
  {
    title: "Conservative Non-Surgical Setting",
    description:
      "Administered as an outpatient physical therapy modality without pharmaceuticals, injections, or surgical downtime.",
  },
];

/**
 * KneeDecompressionIntroduction Component
 * 2-column treatment introduction and equipment profile section.
 *
 * Left: Modality equipment photo (`knee-decompression.webp`) with clinical callout.
 * Right: Detailed clinical explanation of mechanical knee joint distraction, synovial fluid dynamics, and consultation CTA.
 */
export const KneeDecompressionIntroduction: React.FC = () => {
  // Reusable Equipment Card (Rendered between title & description on mobile, in left column on desktop)
  const renderEquipmentCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      {/* Main Modality Image */}
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/services/knee-decompression.webp"
          alt="Advanced Knee Decompression specialized mechanical traction modality at Pain and Paralysis Clinic"
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          priority
        />
        {/* Floating Modality Pill */}
        <div className="absolute top-4 left-4 rounded-full bg-secondary/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
          Clinical Modality
        </div>
      </div>

      {/* Informational Callout Beneath Image */}
      <div className="mt-4 rounded-xl bg-white p-4 border border-black/5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0">
            <Disc3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
              Equipment Capability
            </h3>
            <p className="mt-0.5 text-xs text-body leading-relaxed">
              Specialized mechanical traction apparatus configured with secure thigh and calf restraints to isolate tibiofemoral joint distraction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="treatment-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Treatment Overview and Clinical Mechanism"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Equipment Photography & Clinical Badges (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {renderEquipmentCard(false)}
          </div>

          {/* Right Column: Detailed Clinical Copy & Action Triggers (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Badge */}
            <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary mb-2">
              About The Treatment
            </span>

            {/* Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-[1.25]">
              Targeted Mechanical Knee Distraction Therapy
            </h2>

            {/* Mobile Image: Positioned strictly between Section Title and Description */}
            <div className="block lg:hidden w-full">
              {renderEquipmentCard(true)}
            </div>

            {/* Core Explanatory Copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Advanced Knee Decompression is a specialized outpatient mechanical traction modality engineered to gently isolate and distract the knee joint compartment. By applying calibrated axial separation between the femur (thigh bone) and tibia (shin bone), the therapy counteracts compressive forces that contribute to articular wear and functional discomfort.
              </p>
              <p>
                During weight-bearing movement, osteoarthritic changes and meniscus thinning often narrow the intra-articular joint space, causing painful bone-on-bone friction. Mechanical decompression creates cyclical, controlled tension that opens the joint compartment, encouraging the diffusion of oxygen and nutrient-rich synovial fluid into articular tissues while easing periarticular soft tissue tension.
              </p>
              <p>
                Unlike pharmaceutical analgesics that temporarily mask symptoms or invasive joint injections, mechanical knee distraction offers an objective, non-invasive physical therapy approach. Suitability is confirmed through an in-person clinical assessment of joint range of motion, load tolerance, and diagnostic imaging records by a qualified practitioner.
              </p>
            </div>

            {/* Clinical Pillars Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {clinicalPillars.map((pillar, index) => (
                <div key={index} className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="block text-xs sm:text-sm font-semibold text-secondary">{pillar.title}</span>
                    <span className="block text-xs text-body/80 mt-0.5">{pillar.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Scope Note */}
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-primary/5 p-3.5 border border-primary/15 text-xs text-secondary/90 leading-relaxed">
              <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Clinical Evaluation Notice:</strong> Treatment parameters are determined during an in-person assessment. Decompression does not guarantee complete pain resolution or reverse irreversible structural deformities; it is administered as an adjunct modality within a personalized rehabilitation plan.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Book Knee Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href="#treatment-process"
                className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft px-5 py-2.5 text-xs sm:text-sm font-medium text-secondary border border-black/10 hover:border-primary/40 hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>View Treatment Journey</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
