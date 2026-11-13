import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, HeartHandshake } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Neuromuscular Awareness & Coordination",
    description:
      "Assists individuals in developing conscious awareness of the pelvic musculature, helping coordinate contraction, relaxation, and functional endurance.",
  },
  {
    title: "Balanced Muscle Tone: Activation vs. Relaxation",
    description:
      "Distinguishes between underactive muscles that require gradual strengthening and overactive, tight muscles that need gentle relaxation, breathing, and release.",
  },
  {
    title: "Lumbo-Pelvic & Core Integration",
    description:
      "Coordinates pelvic floor movement with diaphragmatic breathing, abdominal stabilization, and hip biomechanics for balanced daily functional support.",
  },
  {
    title: "Respectful, Private & Collaborative Care",
    description:
      "Prioritizes patient comfort, strict privacy, and clear communication at every step, ensuring all exercises and education proceed at a comfortable pace.",
  },
];

/**
 * PelvicFloorIntroduction Component
 * 2-column service introduction and modality profile section.
 *
 * Left: Authentic clinic service photo (`pelvic-floor.webp`) with clinical callout.
 * Right: Detailed narrative defining pelvic floor physiotherapy, explaining its
 * supportive anatomical role, presenting 4 clinical pillars, and a prominent
 * Clinical Scope Notice.
 */
export const PelvicFloorIntroduction: React.FC = () => {
  // Reusable Equipment Card (Rendered between title & description on mobile, in left column on desktop)
  const renderEquipmentCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      {/* Main Modality Image */}
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/services/pelvic-floor.webp"
          alt="Pelvic Floor Therapy clinical consultation and rehabilitation at Pain and Paralysis Clinic Chennai"
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          priority
        />
        {/* Floating Modality Pill */}
        <div className="absolute top-4 left-4 rounded-full bg-secondary/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
          Pelvic Health &amp; Core
        </div>
      </div>

      {/* Informational Callout Beneath Image */}
      <div className="mt-4 rounded-xl bg-white p-4 border border-black/5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0">
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
              Respectful &amp; Discrete Care
            </h3>
            <p className="mt-0.5 text-xs text-body leading-relaxed">
              Non-surgical, conservative outpatient rehabilitation providing a dignified and comfortable setting for individuals experiencing pelvic muscle dysfunction, discomfort, or functional control challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="pelvic-floor-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Service Overview and Clinical Pelvic Floor Therapy Principles"
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
            <span className="section-badge mb-3 font-semibold tracking-wider text-xs uppercase text-primary">
              CLINICAL SERVICE PROFILE
            </span>

            {/* Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-tight text-balance">
              Conservative Physical Rehabilitation for Pelvic Musculature
            </h2>

            {/* Mobile Image: Positioned strictly between Section Title and Description */}
            <div className="block lg:hidden w-full">
              {renderEquipmentCard(true)}
            </div>

            {/* Introduction Paragraphs */}
            <div className="mt-4 sm:mt-5 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-body">
              <p>
                Pelvic Floor Therapy is a specialized branch of physical therapy dedicated to assessing and rehabilitating the supportive sling of muscles, ligaments, and connective tissues situated at the base of the pelvis. These muscles perform critical functional roles: they provide physical support for the bladder, bowel, and pelvic organs, assist in maintaining urinary and bowel continence, and work in tandem with the deep abdominal and spinal stabilizers during movement.
              </p>
              <p>
                Because pelvic floor dysfunction can stem from diverse biomechanical causes—ranging from prolonged postural strain, surgery, childbirth, and chronic pelvic tension to sports injuries or neurological deficits—treatment is never one-size-fits-all. While some individuals present with underactive or stretched musculature requiring gradual strengthening, others present with hypertonic, overactive muscles that require conscious relaxation and gentle release techniques rather than standard strengthening drills.
              </p>
              <p>
                At Pain &amp; Paralysis Clinic in Madhanandapuram, Chennai, consultations prioritize patient dignity, comfortable dialogue, and clear clinical guidance. We assess functional movement patterns, breathing mechanics, and lumbo-pelvic coordination to construct an evidence-informed, comfortable rehabilitation plan tailored to each individual&apos;s recovery goals.
              </p>
            </div>

            {/* 4 Clinical Pillars Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {clinicalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-black/5 bg-surface-soft p-3.5 transition-all duration-200 hover:border-primary/20 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-sans text-xs sm:text-sm font-semibold text-secondary">
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

            {/* Non-Diagnostic Clinical Scope Notice */}
            <div className="mt-6 rounded-xl border border-amber-200/60 bg-amber-50/60 p-4 w-full">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <span className="font-semibold text-amber-900">Clinical Scope Notice: </span>
                  Pelvic floor physical therapy is a conservative, non-surgical physical rehabilitation modality. It does not replace comprehensive medical evaluations by qualified urologists, gynaecologists, colorectal specialists, or primary care physicians. Any acute pain, infection, unexplained bleeding, or structural prolapse requiring surgical evaluation should be formally reviewed by an appropriate medical specialist.
                </div>
              </div>
            </div>

            {/* Interaction Action Trigger */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Schedule a Confidential Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#conditions"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <span>View Evaluated Indications</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

