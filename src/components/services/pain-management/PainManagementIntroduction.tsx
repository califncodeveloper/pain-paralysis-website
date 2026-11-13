import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartPulse, AlertCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";

const painPillars = [
  {
    title: "Comprehensive Biomechanical Assessment",
    description:
      "Clinical evaluation examines posture, joint kinetics, disc compression signs, movement limitations, and muscular imbalances that contribute to persistent discomfort.",
  },
  {
    title: "Spine & Joint-Related Pain Protocols",
    description:
      "Targeted non-surgical therapies including computerized spinal decompression, joint mobilization, and knee distraction help offload compressed tissues.",
  },
  {
    title: "Musculoskeletal Functional Rehabilitation",
    description:
      "Integrates therapeutic exercise, core stabilization, and myofascial release to restore functional movement range and muscular endurance.",
  },
  {
    title: "Progress Review & Sustained Ergonomics",
    description:
      "Structured follow-up appointments track pain reduction scores, functional improvements, and ergonomic habit changes to prevent chronic symptom recurrence.",
  },
];

export const PainManagementIntroduction: React.FC = () => {
  // Reusable Service Photo Card (Rendered between title & description on mobile, in left column on desktop)
  const renderPhotoCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/services/care-spine.webp"
          alt="Specialized spine care and comprehensive pain management at Pain and Paralysis Hospital Chennai"
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-secondary/80 backdrop-blur-sm p-3 rounded-lg border border-white/10">
          <span className="font-bold text-accent block text-sm mb-0.5">Non-Surgical Pain Care</span>
          <span className="text-white/90">Virugambakkam Hospital • Multidisciplinary Clinical Protocols</span>
        </div>
      </div>

      {/* Verified Trust Badges */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
        <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
          <span className="font-bold text-secondary block text-sm">Non-Invasive</span>
          <span className="text-text/75 text-[11px]">Conservative Care</span>
        </div>
        <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
          <span className="font-bold text-secondary block text-sm">Targeted Relief</span>
          <span className="text-text/75 text-[11px]">Functional Restoration</span>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="pain-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Comprehensive Pain Management Overview and Scope"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Authentic Service Photo & Badges (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {renderPhotoCard(false)}
          </div>

          {/* Right Column: Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-1.5">
                <HeartPulse className="h-4 w-4" aria-hidden="true" />
                Conservative Clinical Methodology
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-secondary leading-tight">
                Addressing Root Biomechanical Causes of Persistent Pain
              </h2>

              {/* Mobile Image: Positioned strictly between Section Title and Description */}
              <div className="block lg:hidden w-full">
                {renderPhotoCard(true)}
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              At Pain &amp; Paralysis Hospital in Virugambakkam, Chennai, Comprehensive Pain Management prioritizes understanding the underlying structural, postural, and mechanical drivers of musculoskeletal and neurological pain.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              Rather than relying solely on temporary symptomatic measures, our clinical team formulates individualized, conservative care plans combining mechanical decompression, targeted chiropractic adjustments, laser therapy, and physical rehabilitation. Our goal is to relieve compressive mechanical tension, restore balanced movement, and empower patients with long-term functional independence.
            </p>

            {/* 4 Pain Management Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {painPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-black/5 bg-surface-soft p-4 shadow-xs"
                >
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-secondary flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{pillar.title}</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-text/75">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical Scope Notice */}
            <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3 w-full">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block font-semibold">Clinical Scope &amp; Medical Responsibility Notice:</strong>
                <span>
                  Our pain management programs deliver non-surgical, physical, and mechanical rehabilitation. We do not provide surgical interventions, epidural steroid injections, or prescription narcotic medications. Patients presenting with red flag symptoms (such as progressive motor loss or systemic infection) receive prompt physician referral.
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02]"
              >
                <span>Schedule a Clinical Pain Evaluation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

