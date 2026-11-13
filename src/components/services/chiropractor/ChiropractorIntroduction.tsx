import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import { Container, Section } from "@/components/ui";

/**
 * ChiropractorIntroduction Component
 * Reconstructs the 2-column treatment introduction and clinical modality profile.
 *
 * Left: Authentic modality image (`chiropractic.webp`) with modality badge and appointment trigger
 * Right: Clinical explanation of evidence-based chiropractic adjustments, joint mechanics, and care approach.
 */
export const ChiropractorIntroduction: React.FC = () => {
  // Reusable Modality Card (Rendered between title & description on mobile, in left column on desktop)
  const renderModalityCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      {/* Main Modality Image */}
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/services/chiropractic.webp"
          alt="Advanced Chiropractor manual adjustment at Pain and Paralysis Clinic Chennai"
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
            <Activity className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
              Adjustment Approach
            </h3>
            <p className="mt-0.5 text-xs text-body leading-relaxed">
              Targeted manual joint mobilizations and articulatory techniques applied during clinical consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Booking Action */}
      <div className="mt-4 pt-2">
        <Link
          href="/contact-us"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
        >
          <span>Book Chiropractic Consultation</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
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
          {/* Left Column: Modality Photography & Clinical Badges (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {renderModalityCard(false)}
          </div>

          {/* Right Column: Detailed Clinical Copy & Action Triggers (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Badge */}
            <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary mb-2">
              About The Treatment
            </span>

            {/* Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-[1.25]">
              Chiropractic Care &amp; Musculoskeletal Assessment
            </h2>

            {/* Mobile Image: Positioned strictly between Section Title and Description */}
            <div className="block lg:hidden w-full">
              {renderModalityCard(true)}
            </div>

            {/* Core Explanatory Copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Chiropractic care is a healthcare discipline focusing on the physical assessment and manual management
                of musculoskeletal complaints, particularly those involving the spinal column, pelvis, and peripheral joints.
              </p>
              <p>
                Practitioners utilize hands-on articulatory techniques and joint mobilizations along restricted spinal segments.
                These techniques are applied to evaluate joint movement and address musculoskeletal discomfort in an outpatient
                setting without surgery or pharmaceuticals.
              </p>
              <p>
                At Pain and Paralysis Clinic, chiropractic consultations are provided within a coordinated physical
                rehabilitation environment. Every appointment begins with an in-person physical evaluation to assess individual
                suitability and patient comfort.
              </p>
            </div>

            {/* Core Mechanism Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Spinal Joint Assessment</span>
                  <span className="block text-xs text-body/80 mt-0.5">Hands-on palpation and evaluation of segmental spinal motion</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Postural &amp; Ergonomic Review</span>
                  <span className="block text-xs text-body/80 mt-0.5">Assessment of spinal alignment and everyday workstation habits</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Soft-Tissue Palpation</span>
                  <span className="block text-xs text-body/80 mt-0.5">Evaluation of localized paraspinal muscular tension</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg bg-surface-soft p-3 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-secondary">Active Movement Guidance</span>
                  <span className="block text-xs text-body/80 mt-0.5">Practical mobility recommendations tailored to individual findings</span>
                </div>
              </div>
            </div>

            {/* Action Trigger Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm sm:text-base font-medium text-white shadow-md hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
              >
                <span>Schedule Clinical Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#conditions-treated"
                className="inline-flex items-center justify-center rounded-xl border border-secondary/20 bg-white px-6 py-3.5 text-sm sm:text-base font-medium text-secondary hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all duration-200"
              >
                View Conditions Addressed
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

