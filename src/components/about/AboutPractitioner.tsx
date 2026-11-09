import React from "react";
import Image from "next/image";
import { CheckCircle2, Calendar, Activity, Users, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { teamData } from "@/data/team";

/**
 * AboutPractitioner Component
 * Reconstructs the Practitioner Spotlight section of the About Us page.
 *
 * Verified Reference Specifications:
 * - Lead Specialist: Dr. Dinesh Anandhan (Chiropractor & Physiotherapist)
 * - Department: Pain Management & Spine Care
 * - Assets:
 *   - Lead Portrait: /images/doctors/dr-dinesh-anandhan.webp
 *   - Clinical Methodology Diagram: /images/about/posture-diagram.webp
 *
 * Medical Compliance & Safeguards (Phase 12.1 / 15.1):
 * - Withholds all 8 unverified statutory registration numbers and specific degree institutions.
 * - Displays verified core clinical modalities and evidence-based non-surgical spine care focus.
 */
export const AboutPractitioner: React.FC = () => {
  const leadDoctor = teamData.find((m) => m.featured) ?? teamData[0];

  if (!leadDoctor) return null;

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
      id="practitioner-spotlight"
      background="surface"
      spacing="default"
      className="border-t border-secondary/10"
      aria-label="Lead Clinical Practitioner Feature"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLINICAL LEADERSHIP"
          title="Meet Our Lead Specialist"
          description="Experienced clinical direction in non-surgical spine care, robotic physiotherapy, and comprehensive physical rehabilitation."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase (Portrait + Posture Methodology Asset) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="group relative w-full max-w-[420px] lg:max-w-none">
              {/* Decorative Subtle Ambient Glow */}
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Main Portrait Card */}
              <div className="relative overflow-hidden rounded-2xl border border-secondary/10 bg-white p-3 sm:p-4 shadow-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={leadDoctor.image || "/images/doctors/dr-dinesh-anandhan.webp"}
                    alt="Dr. Dinesh Anandhan, Lead Chiropractor and Physiotherapist at Pain and Paralysis Clinic Chennai"
                    fill
                    sizes="(min-width: 1024px) 35vw, 90vw"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Bottom Portrait Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl border border-white/20 bg-white/95 p-3 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-secondary">
                          Clinical Director
                        </p>
                        <p className="text-[11px] text-text/75 font-medium">
                          Spine Care &amp; Rehabilitation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Methodology Diagram Inset */}
                <div className="mt-3 sm:mt-4 rounded-xl border border-secondary/10 bg-surface/80 p-3 flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-secondary/10 bg-white">
                    <Image
                      src="/images/about/posture-diagram.webp"
                      alt="Clinical posture and biomechanical analysis diagram"
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary">
                      Biomechanical Posture Analysis
                    </p>
                    <p className="text-[11px] text-text/75">
                      Targeted spinal alignment &amp; joint mobility assessment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Credentials & Core Modalities */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header info */}
            <div className="mb-4">
              <span className="section-badge mb-2 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                Featured Clinical Director
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary leading-tight tracking-tight">
                {leadDoctor.name}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-base font-semibold text-primary">
                  {leadDoctor.designation}
                </span>
                <span className="hidden sm:inline text-secondary/30" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3 py-0.5 text-xs font-medium text-secondary border border-secondary/10 shadow-xs">
                  {leadDoctor.department}
                </span>
              </div>
            </div>

            {/* Doctor Bio Narrative */}
            <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-text/90 font-sans">
              {leadDoctor.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Clinical Focus & Modalities (Verified Service Capabilities) */}
            <div className="mt-6">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" aria-hidden="true" />
                Verified Clinical Focus &amp; Modalities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {clinicalModalities.map((modality, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 rounded-lg border border-secondary/10 bg-white p-2.5 sm:p-3 text-xs sm:text-sm font-medium text-text/90 transition-colors hover:border-primary/40 shadow-xs"
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

            {/* Multidisciplinary Care Team Support Note */}
            <div className="mt-6 rounded-xl border border-secondary/10 bg-white p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-secondary">
                  Multidisciplinary Clinical Care Team
                </h4>
                <p className="mt-0.5 text-xs sm:text-sm text-text/80 leading-relaxed">
                  Collaborative clinical support comprising certified physical therapists, spine
                  care assistants, and rehabilitation therapists providing integrated treatment
                  in Chennai.
                </p>
              </div>
            </div>

            {/* CTA Action */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                icon={<Calendar className="h-4 w-4" aria-hidden="true" />}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

