import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Info } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Cellular Energy Stimulation",
    description:
      "Specific light wavelengths interact with cytochrome c oxidase in mitochondria, supporting adenosine triphosphate (ATP) synthesis for cellular recovery.",
  },
  {
    title: "Microvascular Perfusion Support",
    description:
      "Targeted light energy aids local vasodilation, promoting blood circulation and nutrient delivery to oxygen-deprived or fatigued tissues.",
  },
  {
    title: "Inflammatory Response Easing",
    description:
      "Helps modulate pro-inflammatory cytokines, assisting the body in reducing localized soft-tissue swelling and periarticular irritation.",
  },
  {
    title: "Conservative Outpatient Modality",
    description:
      "Administered non-invasively without skin incisions, pharmaceutical injections, or prolonged recovery downtime.",
  },
];

/**
 * LaserTreatmentIntroduction Component
 * 2-column treatment introduction and equipment profile section.
 *
 * Left: Modality equipment photo (`laser-therapy.webp`) with clinical callout.
 * Right: Detailed clinical explanation of photobiomodulation, cellular energetics, and consultation CTA.
 */
export const LaserTreatmentIntroduction: React.FC = () => {
  return (
    <Section
      id="treatment-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Treatment Overview and Clinical Photobiomodulation"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Equipment Photography & Clinical Badges (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              {/* Main Modality Image */}
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/services/laser-therapy.webp"
                  alt="Advanced Laser Treatment therapeutic photobiomodulation modality at Pain and Paralysis Clinic"
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
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
                      Equipment Capability
                    </h3>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      Calibrated photobiomodulation system configured to deliver targeted optical energy wavelengths to superficial and deeper musculoskeletal tissues under strict practitioner supervision.
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
              Targeted Photobiomodulation &amp; Cellular Rehabilitation
            </h2>

            {/* Core Explanatory Copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Advanced Laser Treatment—clinically known as photobiomodulation (PBM)—is a non-invasive physical therapy modality that utilizes specific therapeutic wavelengths of light to interact with biological tissue at the cellular level. At Pain &amp; Paralysis Clinic in Madhanandapuram, Chennai, laser therapy is employed as an adjunctive, non-surgical option for patients presenting with acute soft-tissue strains, persistent musculoskeletal aches, and localized inflammatory stiffness.
              </p>
              <p>
                Unlike surgical or ablative lasers designed to cut or cauterize tissue, therapeutic lasers operate within carefully calibrated optical parameters that do not damage cellular structures. Photons of light penetrate targeted skin and muscle layers where they are absorbed by photoreceptive enzymes within the mitochondria. This absorption supports intracellular energy synthesis, facilitates microvascular circulation, and encourages the body’s natural recuperative mechanisms without systemic medications or invasive needles.
              </p>
            </div>

            {/* Clinical Pillars Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {clinicalPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-surface-soft p-3.5 border border-black/5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-heading text-xs font-semibold text-secondary uppercase tracking-wider">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Scope Notice */}
            <div className="mt-6 rounded-xl bg-primary/5 p-4 border border-primary/15 w-full">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-secondary/90 leading-relaxed">
                  <strong>Clinical Scope Notice:</strong> Laser therapy is an adjunctive conservative modality delivered within comprehensive physical rehabilitation plans. It does not replace emergency trauma care, acute orthopedic surgery, or physician medical management. Candidacy and parameter calibration are established through an in-person physical examination.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Schedule an Evaluation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#treatment-process"
                className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-6 py-3 text-sm font-semibold text-secondary border border-black/10 transition-all duration-300 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
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

