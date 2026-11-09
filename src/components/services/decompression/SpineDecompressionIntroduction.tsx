import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Disc3 } from "lucide-react";
import { Container, Section } from "@/components/ui";

/**
 * SpineDecompressionIntroduction Component
 * Reconstructs the 2-column treatment introduction and equipment profile section.
 *
 * Left: Authentic modality equipment photo (`Component.webp` / `spine-decompression-hero.webp`)
 * Right: Clinical explanation of motorized spinal distraction, negative intradiscal pressure, and consultation CTA.
 */
export const SpineDecompressionIntroduction: React.FC = () => {
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
          {/* Left Column: Equipment Photography & Clinical Badges (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              {/* Main Modality Image */}
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/services/spine-decompression-hero.webp"
                  alt="Advanced Spine Decompression motorized clinical traction table at Pain and Paralysis Clinic"
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
                      Multi-axis motorized traction equipment capable of positioning for lumbar or cervical spinal alignment.
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
              About The Treatment
            </span>

            {/* Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-[1.25]">
              Motorized Mechanical Spinal Traction Equipment
            </h2>

            {/* Core Explanatory Copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Advanced Spine Decompression is an outpatient motorized mechanical traction modality utilizing a computerized
                table designed to deliver controlled tension and release intervals. The equipment is configured by clinical
                practitioners to apply mechanical traction along selected lumbar or cervical angles.
              </p>
              <p>
                The computerized table utilizes motorized controls to alternate between programmed tension hold times and rest
                intervals. Rather than constant static pulling, the motorized system allows practitioners to configure specific
                poundage settings and cycle timing based on individual patient evaluation.
              </p>
              <p>
                Suitability for mechanical traction and any necessary clinical investigations are determined through an in-person
                assessment by an appropriately qualified practitioner. Mechanical traction is administered as an adjunct modality
                within an individualized physical therapy care plan.
              </p>
            </div>

            {/* Core Mechanism Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Motorized Traction Control</span>
                  <span className="block text-xs text-body/80 mt-0.5">Calibrated tensile settings configured by practitioner</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Programmed Pull Parameters</span>
                  <span className="block text-xs text-body/80 mt-0.5">Digital load sensors regulate applied table tension</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Configurable Rest Intervals</span>
                  <span className="block text-xs text-body/80 mt-0.5">Alternating hold and rest periods during sessions</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Adjustable Table Positioning</span>
                  <span className="block text-xs text-body/80 mt-0.5">Angles configured for lumbar or cervical placement</span>
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
              >
                <span>Book Appointment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#conditions-addressed"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-secondary hover:text-primary bg-surface-soft hover:bg-surface-soft/80 rounded-md border border-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
              >
                <span>View Conditions Addressed</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
