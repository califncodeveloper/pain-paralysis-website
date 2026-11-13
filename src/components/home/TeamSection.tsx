import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Calendar,
  Users,
  Sparkles,
  Activity,
  Award,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { teamData } from "@/data/team";
import { clinicContactInfo } from "@/data/navigation";

export const TeamSection: React.FC = () => {
  const leadDoctor = teamData.find((member) => member.featured) ?? teamData[0];

  if (!leadDoctor) {
    return null;
  }

  const clinicalModalities =
    leadDoctor.clinicalFocus && leadDoctor.clinicalFocus.length > 0
      ? leadDoctor.clinicalFocus
      : [
          "Non-Surgical Spine Decompression",
          "Chiropractic Adjustments & Alignment",
          "Targeted Physical Rehabilitation",
          "Gonstead Chiropractic Principles",
          "Aquatic Therapy & Hydrotherapy",
          "Biomechanical & Postural Assessment",
        ];

  return (
    <Section
      id="our-team"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-t border-secondary/10"
      aria-labelledby="team-section-heading"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL LEADERSHIP"
          title="Meet Our Lead Specialist"
          description="Dr. Dinesh Anandhan directs clinical protocols across non-surgical spine care, robotic neuro rehabilitation, and comprehensive inpatient recovery at Pain & Paralysis Hospital."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        {/* 2-Column Doctor Feature Showcase */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Lead Doctor High-Resolution Portrait         */}
          {/* ========================================================= */}
          <div className="w-full lg:col-span-5 flex justify-center">
            <div className="group relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
              {/* Decorative Subtle Ambient Glow */}
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Doctor Portrait Card Wrapper */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-secondary/15 bg-surface shadow-[0_12px_40px_-5px_rgba(16,81,86,0.14)] transition-all duration-500 group-hover:shadow-[0_25px_50px_-5px_rgba(28,170,182,0.22)]">
                <Image
                  src={leadDoctor.image}
                  alt={`Portrait of ${leadDoctor.name}, ${leadDoctor.designation} at Pain and Paralysis Hospital`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Subtle Medical Contrast Gradient Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/15 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-75"
                  aria-hidden="true"
                />

                {/* Top Corner Badge: Clinical Leadership */}
                <div className="pointer-events-none absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-semibold text-secondary shadow-md backdrop-blur-sm border border-black/5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    Lead Specialist &amp; Founder
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl border border-white/30 bg-white/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-secondary">
                        Tamilnadu Award for Excellence
                      </p>
                      <p className="text-[11px] sm:text-xs text-text/75 font-medium">
                        Robotic Chiropractic &amp; Spine Care
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Doctor Bio, Clinical Modalities, Support    */}
          {/* ========================================================= */}
          <div className="flex flex-col lg:col-span-7">
            {/* Doctor Name & Designation */}
            <div className="mb-4">
              <span className="section-badge mb-2 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                Featured Clinical Director
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-tight tracking-tight">
                {leadDoctor.name}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-base font-semibold text-primary">
                  {leadDoctor.designation}
                </span>
                <span className="hidden sm:inline text-secondary/30" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center rounded-full bg-[#105156]/10 px-3 py-0.5 text-xs font-semibold text-secondary">
                  25-Bed Hospital Virugambakkam
                </span>
              </div>
            </div>

            {/* Doctor Biography Paragraphs */}
            <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-text/90 font-sans">
              {leadDoctor.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Clinical Focus & Modalities */}
            <div className="mt-6">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" aria-hidden="true" />
                Core Clinical Modalities &amp; Treatment Programs
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {clinicalModalities.map((modality, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 rounded-xl border border-secondary/10 bg-surface/70 p-2.5 sm:p-3 text-xs sm:text-sm font-medium text-text/90 transition-all hover:border-primary/40 hover:bg-surface hover:-translate-y-0.5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{modality}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Multidisciplinary Clinical Care Team Support Note */}
            <div className="mt-6 rounded-2xl border border-secondary/10 bg-surface p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-secondary">
                  Multidisciplinary Clinical Care Team
                </h4>
                <p className="mt-0.5 text-xs sm:text-sm text-text/80 leading-relaxed">
                  Collaborating with resident physiotherapists, neuro rehab specialists, and 24-hour nursing professionals to provide holistic inpatient and outpatient care.
                </p>
              </div>
            </div>

            {/* Accessible Consultation CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                rounded="full"
                icon={<Calendar className="h-4 w-4" aria-hidden="true" />}
                className="font-semibold shadow-md"
              >
                Schedule Consultation
              </Button>

              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-primary/10 text-secondary hover:text-primary text-sm font-semibold transition-all border border-secondary/15"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call {clinicContactInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
