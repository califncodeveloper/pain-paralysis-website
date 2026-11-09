import React from "react";
import Image from "next/image";
import { Activity, Sparkles, ShieldCheck, CheckCircle2, HeartHandshake } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

/**
 * AboutIntroduction Component
 * Reconstructs the primary clinic introduction section of the About Us page.
 *
 * Verified Reference Specifications:
 * - Eyebrow: "Why Pain And Paralysis?"
 * - Main Title: "Global Expertise. Clinical Precision. Proven Results."
 * - Values: Understanding Your Pain, Holistic Precision, Drug-Free & Non-Surgical
 * - Authentic Procedure Image: /images/about/clinic-procedure.webp (1024 x 682 px)
 */
export const AboutIntroduction: React.FC = () => {
  return (
    <Section
      id="introduction"
      background="white"
      spacing="default"
      aria-label="Clinic Introduction and Core Philosophy"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHY PAIN AND PARALYSIS?"
          title="Global Expertise. Clinical Precision. Proven Results."
          description="Pain and Paralysis Clinic is dedicated to restoring mobility, relieving acute and chronic pain, and rehabilitating neurological deficits without invasive surgery."
          align="left"
          accent
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy & 3 Core Values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className="font-sans text-sm sm:text-base md:text-[17px] leading-relaxed text-text/90">
              At Pain and Paralysis Clinic in Madhanandapuram, Chennai, we believe genuine healing
              begins with identifying the root mechanical origin of discomfort rather than masking
              symptoms with temporary medication. By combining evidence-based chiropractic
              adjustments, computerized non-surgical spine decompression, and targeted neuromuscular
              rehabilitation, our clinical approach helps patients regain lasting physical function
              and independence.
            </p>

            {/* 3 Core Value Cards */}
            <div className="space-y-4 pt-2">
              {/* Value 1: Understanding Your Pain */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/70 p-4 sm:p-5 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-secondary">
                    Understanding Your Pain
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text/80">
                    Healing begins with thorough diagnostic evaluation. We assess spinal
                    biomechanics, joint motion, and neuromuscular pathways to uncover the true
                    mechanical driver of pain before tailoring treatment.
                  </p>
                </div>
              </div>

              {/* Value 2: Holistic Precision */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/70 p-4 sm:p-5 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-secondary">
                    Holistic Precision
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text/80">
                    Integrating Gonstead chiropractic principles, targeted physical therapy,
                    and non-surgical computerized spine decompression into a unified,
                    patient-centered care pathway.
                  </p>
                </div>
              </div>

              {/* Value 3: Drug-Free & Non-Surgical */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/70 p-4 sm:p-5 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-secondary">
                    Drug-Free &amp; Non-Surgical
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text/80">
                    Our non-invasive therapies address mechanical dysfunctions directly,
                    reducing reliance on opioid medications and helping suitable candidates avoid
                    unnecessary surgical interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Procedure Asset & Quality Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-secondary/10 bg-surface shadow-md">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="/images/about/clinic-procedure.webp"
                  alt="Pain and Paralysis Clinic authentic patient treatment and manual therapy session in Chennai"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl border border-white/20 bg-white/95 p-3.5 sm:p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <HeartHandshake className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-secondary">
                        Patient-Centered Rehabilitation
                      </p>
                      <p className="text-[11px] sm:text-xs text-text/75 font-medium">
                        Hands-on Clinical Precision in Chennai
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Credential Highlights */}
              <div className="p-5 sm:p-6 bg-white border-t border-secondary/10">
                <h4 className="font-heading text-sm sm:text-base font-semibold text-secondary mb-3">
                  Clinical Care Standards
                </h4>
                <div className="space-y-2">
                  {[
                    "Evidence-based chiropractic & spine care protocols",
                    "Computerized spinal decompression technology",
                    "Dedicated aquatic therapy rehabilitation pool",
                    "Continuous patient progress monitoring",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-text/85">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

