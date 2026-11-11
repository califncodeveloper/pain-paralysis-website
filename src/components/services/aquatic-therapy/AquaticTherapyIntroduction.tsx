import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Calendar, Info } from "lucide-react";
import { Container, Section } from "@/components/ui";

const consultationTopics = [
  {
    title: "Buoyancy & Joint Gravitational Unloading",
    description:
      "Water provides upward buoyant force that reduces compressive body weight on lower extremity and spinal joints.",
  },
  {
    title: "Hydrodynamic Drag & Supportive Resistance",
    description:
      "Fluid drag offers gentle, velocity-dependent resistance in every direction of active movement without hard mechanical impact.",
  },
  {
    title: "Hydrostatic Pressure & Circulatory Awareness",
    description:
      "Ambient water pressure provides gentle continuous compression surrounding submerged tissues, aiding spatial stability.",
  },
  {
    title: "Clinical Candidacy & Safety Screening",
    description:
      "Outpatient clinical review of medical history, skin integrity, balance, and physical tolerance before water-based activities.",
  },
];

/**
 * AquaticTherapyIntroduction Component
 * 2-column treatment introduction for Advanced Aquatic Therapy.
 *
 * Adheres to:
 * - Approved Design System: 455x533px modality image card, Marcellus SC H2, Poppins body
 * - Medical Compliance (Phase 21): Educational presentation of hydrodynamic principles clearly separated from facility claims
 */
export const AquaticTherapyIntroduction: React.FC = () => {
  return (
    <Section
      id="about-treatment"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="About Water-Based Movement and Aquatic Therapy Principles"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Modality Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[455px] overflow-hidden rounded-2xl bg-secondary/5 p-3 shadow-md border border-black/5 transition-transform duration-300 hover:shadow-xl">
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/10">
                <Image
                  src="/images/services/aquatic-therapy.webp"
                  alt="Educational illustration of water-based movement and aquatic therapy principles"
                  fill
                  sizes="(min-width: 1280px) 430px, (min-width: 1024px) 380px, (min-width: 640px) 455px, 90vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                {/* Floating Modality Pill */}
                <div className="absolute top-4 left-4 rounded-full bg-secondary/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                  Illustrative Concept
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-secondary/80">
                <span className="font-heading font-medium tracking-wide">
                  Hydrodynamic Principles
                </span>
                <span className="inline-flex items-center gap-1 text-primary font-semibold">
                  <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                  Educational Scope
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Consultation Checklist (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="section-badge mb-3 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              CONSULTATION &amp; PRINCIPLES
            </span>

            <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-secondary tracking-tight text-balance">
              Water-Based Movement &amp; Aquatic Rehabilitation Principles
            </h2>

            <div className="mt-5 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-body">
              <p>
                Aquatic therapy is an established discipline in physical rehabilitation that explores the unique
                biomechanical properties of water to facilitate movement. By combining buoyancy, hydrostatic pressure,
                and fluid viscosity, water provides a supportive environment for individuals experiencing weight-bearing discomfort.
              </p>
              <p>
                At Pain &amp; Paralysis Clinic in Madhanandapuram, Chennai, outpatient consultations provide individuals
                with an opportunity to review their movement limitations, discuss physical history, and learn how
                hydrodynamic principles can be safely applied as part of conservative recovery planning.
              </p>
              <p>
                Clinical consultations prioritize personal safety and individual screening. A clinician reviews
                medical indications, joint range of motion, and physical goals to determine whether water-based exercises
                or clinic-based conservative therapies offer the most appropriate approach.
              </p>
            </div>

            {/* Checklist of Consultation Discussion Topics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {consultationTopics.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-surface-soft p-4 border border-black/5"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scope Transparency Notice */}
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-primary/5 p-4 border border-primary/15 w-full">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-secondary/85 leading-relaxed">
                <strong>Facility Transparency Disclosure:</strong> Pain &amp; Paralysis Clinic provides outpatient clinical consultations
                and movement evaluations in Madhanandapuram, Chennai. In-house hydrotherapy pool availability has not been confirmed, and
                pool-based treatment is not offered on-site. Consultations provide educational guidance on water-based movement principles
                and evaluate whether dry-land physical therapy or external activity is appropriate.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center font-heading font-semibold text-sm sm:text-base text-white bg-primary hover:bg-secondary px-7 py-3 rounded-full shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                Book Outpatient Consultation
              </Link>

              <a
                href="#aquatic-topics"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm sm:text-base text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-2"
              >
                <span>View Movement Considerations</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

