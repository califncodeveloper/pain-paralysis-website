import React from "react";
import Image from "next/image";
import { Activity, Sparkles, ShieldCheck, CheckCircle2, HeartHandshake, Bed } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

export const AboutIntroduction: React.FC = () => {
  // Reusable Procedure Media Asset (Rendered between title and description on mobile, in right column on desktop)
  const renderProcedureImage = (isMobile = false) => (
    <div className={`group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-secondary/15 bg-surface shadow-xl ${isMobile ? "max-w-md sm:max-w-lg mx-auto my-2" : ""}`}>
      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
        <Image
          src="/images/about/clinic-procedure.webp"
          alt="Pain and Paralysis Hospital authentic patient treatment and manual therapy session in Chennai"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/25 to-transparent"
          aria-hidden="true"
        />

        {/* Top Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/90 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-md border border-white/20">
            <Bed className="w-3.5 h-3.5 text-accent" />
            25-Bed Inpatient Hospital
          </span>
        </div>

        {/* Bottom Overlay Card */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HeartHandshake className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-secondary">
                Patient-Centered Hospital Rehabilitation
              </p>
              <p className="text-[10px] sm:text-xs text-text/75 font-medium">
                Hands-on Clinical Precision in Virugambakkam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="introduction"
      background="white"
      spacing="default"
      aria-label="Hospital Introduction and Core Philosophy"
    >
      <Container size="standard">
        {/* Section Heading with mobileMedia positioned between title & description on mobile */}
        <SectionHeading
          eyebrow="WHY PAIN AND PARALYSIS HOSPITAL?"
          title="Global Expertise. Clinical Precision. Proven Results."
          mobileMedia={renderProcedureImage(true)}
          description="Operating as a 25-bedded, 24-hour hospital in Virugambakkam, Chennai, we are dedicated to restoring mobility, relieving acute and chronic pain, and rehabilitating neurological deficits without invasive surgery."
          align="left"
          accent
          className="mb-8 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy & 3 Core Values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className="font-sans text-sm sm:text-base md:text-[17px] leading-relaxed text-text/90">
              At Pain and Paralysis Hospital in Virugambakkam, Chennai, we believe genuine healing
              begins with identifying the root mechanical and neurological origin of discomfort rather than masking
              symptoms with temporary medication. By combining evidence-based chiropractic
              adjustments, computerized non-surgical spine decompression, robotic neuro rehabilitation, and 24-hour inpatient care, our clinical approach helps patients regain lasting physical function
              and independence.
            </p>

            {/* 3 Core Value Cards */}
            <div className="space-y-4 pt-2">
              {/* Value 1: Understanding Your Pain */}
              <div className="flex items-start gap-4 rounded-2xl border border-secondary/10 bg-[#F8FBFB] p-4 sm:p-5 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary">
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
              <div className="flex items-start gap-4 rounded-2xl border border-secondary/10 bg-[#F8FBFB] p-4 sm:p-5 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                    Holistic Precision &amp; Robotic Rehab
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text/80">
                    Integrating Gonstead chiropractic principles, targeted physical therapy,
                    robotic neuro rehabilitation, and non-surgical computerized spine decompression into a unified,
                    patient-centered care pathway.
                  </p>
                </div>
              </div>

              {/* Value 3: Drug-Free & Non-Surgical */}
              <div className="flex items-start gap-4 rounded-2xl border border-secondary/10 bg-[#F8FBFB] p-4 sm:p-5 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                    Drug-Free &amp; Non-Surgical Preservation
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

          {/* Right Column: Authentic Procedure Asset & Quality Badges (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center">
            {renderProcedureImage(false)}
          </div>
        </div>
      </Container>
    </Section>
  );
};
