import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import { Container, Section } from "@/components/ui";

/**
 * PhysiotherapyIntroduction Component
 * 2-column treatment introduction and educational modality profile.
 *
 * Left: Authentic modality image (`physiotherapy.webp`) with modality badge and appointment trigger
 * Right: Factual, educational explanation of physiotherapy consultations and general consultation topics.
 */
export const PhysiotherapyIntroduction: React.FC = () => {
  return (
    <Section
      id="treatment-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Treatment Overview and Consultation Profile"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Modality Photography & Clinical Badges (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5">
              {/* Main Modality Image */}
              <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
                <Image
                  src="/images/services/physiotherapy.webp"
                  alt="Advanced Physiotherapy consultation at Pain and Paralysis Clinic Chennai"
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
                      Consultation Overview
                    </h3>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      Clinical consultation and movement discussion offered in an outpatient clinic setting.
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
                  <span>Book Physiotherapy Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Clinical Copy & Action Triggers (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Badge */}
            <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary mb-2">
              General Overview
            </span>

            {/* Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-[1.25]">
              Physiotherapy &amp; Physical Rehabilitation
            </h2>

            {/* Core Explanatory Copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Physiotherapy is an allied healthcare discipline focused on the physical assessment, movement education,
                and conservative support of musculoskeletal function and mobility.
              </p>
              <p>
                In general clinical practice, physiotherapy consultations involve reviewing an individual&apos;s physical history,
                observing movement patterns, and discussing conservative approaches such as physical activity, postural awareness,
                and movement education. These non-surgical approaches encourage active patient engagement in everyday physical well-being.
              </p>
              <p>
                At Pain &amp; Paralysis Clinic, consultations provide an outpatient setting where patients can discuss mobility
                limitations, review physical discomfort, and learn about appropriate non-surgical care options available to them.
              </p>
            </div>

            {/* Structured Consultation Topics */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 rounded-xl bg-surface-soft p-3.5 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-secondary">
                    Movement History &amp; Discussion
                  </h4>
                  <p className="text-xs text-body mt-0.5">
                    Review of physical symptoms, daily activity patterns, and prior medical history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-surface-soft p-3.5 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-secondary">
                    Active Movement Education
                  </h4>
                  <p className="text-xs text-body mt-0.5">
                    General discussions on staying active and understanding daily physical movement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-surface-soft p-3.5 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-secondary">
                    Postural &amp; Ergonomic Awareness
                  </h4>
                  <p className="text-xs text-body mt-0.5">
                    Educational guidance on workplace seating habits, screen height, and daily alignment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-surface-soft p-3.5 border border-black/5">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-secondary">
                    Care Option Review
                  </h4>
                  <p className="text-xs text-body mt-0.5">
                    Discussion of conservative care paths and individualized suitability for therapy.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Callout & Secondary Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 transition-all duration-200"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#conditions-treated"
                className="inline-flex items-center gap-2 rounded-xl border border-secondary/20 bg-white px-5 py-3 text-sm font-semibold text-secondary hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all duration-200"
              >
                <span>View Topics Discussed</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
