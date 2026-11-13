import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";

const inpatientPillars = [
  {
    title: "Hospital-Based Inpatient Admission",
    description:
      "Structured admission for patients requiring round-the-clock supportive care, continuous recovery supervision, and intensive physical therapy during hospitalization.",
  },
  {
    title: "Rehabilitation During Hospital Stay",
    description:
      "Integrated daily therapy sessions including neurological retraining, posture re-education, mobility drills, and targeted joint care tailored to each patient's tolerance.",
  },
  {
    title: "Coordinated Care & Progress Monitoring",
    description:
      "Regular functional assessments track recovery milestones, functional independence, and mobility gains across the patient's hospital stay.",
  },
  {
    title: "Caregiver Training & Discharge Continuity",
    description:
      "Empowers family members and caregivers with hands-on transfer techniques, home exercise plans, and structured follow-up guidance for smooth continuity of care.",
  },
];

export const InpatientCareIntroduction: React.FC = () => {
  // Reusable Facility Card (Rendered between title & description on mobile, in left column on desktop)
  const renderFacilityCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/common/clinic-exterior.webp"
          alt="Pain and Paralysis Hospital 25-bed inpatient facility facade in Virugambakkam Chennai"
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-secondary/80 backdrop-blur-sm p-3 rounded-lg border border-white/10">
          <span className="font-bold text-accent block text-sm mb-0.5">25-Bed Inpatient Hospital</span>
          <span className="text-white/90">Hospital Care Available 24 Hours • Virugambakkam, Chennai</span>
        </div>
      </div>

      {/* Verified Trust Badges */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
        <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
          <span className="font-bold text-secondary block text-sm">25 Beds</span>
          <span className="text-text/75 text-[11px]">Hospital Capacity</span>
        </div>
        <div className="rounded-lg bg-primary/5 border border-primary/15 p-2.5">
          <span className="font-bold text-secondary block text-sm">24 Hours</span>
          <span className="text-text/75 text-[11px]">Operating Availability</span>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="inpatient-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Inpatient Care Overview and Hospital Facilities"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Authentic Facility Image & Badges (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {renderFacilityCard(false)}
          </div>

          {/* Right Column: Detailed Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <span className="section-badge font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-primary inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Hospital Positioning &amp; Inpatient Standards
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-secondary leading-tight">
                25-Bedded Hospital Care Focused on Restoring Function and Independence
              </h2>

              {/* Mobile Image: Positioned strictly between Section Title and Description */}
              <div className="block lg:hidden w-full">
                {renderFacilityCard(true)}
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              Operating as a <strong>25-bedded, 24-hour hospital in Virugambakkam, Chennai</strong>, Pain &amp; Paralysis Hospital provides structured hospital-based care for patients whose conditions require more intensive supervision and therapeutic attention than standard outpatient visits can deliver.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-text/85">
              Our inpatient setting is designed to support individuals recovering from acute stroke episodes, spinal conditions, severe neurological weakness, or post-surgical movement limitations. By combining comfortable hospital accommodations with coordinated multidisciplinary physical therapy, computerized traction, and technology-assisted rehabilitation, patients receive focused daily recovery support.
            </p>

            {/* 4 Inpatient Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {inpatientPillars.map((pillar) => (
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

            {/* Clinical Notice on Hospital Scope */}
            <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3 w-full">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block font-semibold">Hospital Care Scope &amp; Operating Availability:</strong>
                <span>
                  Hospital care is available 24 hours for admitted inpatients. Outpatient consultations, non-emergency evaluations, and specific therapy departments operate during designated clinical hours. Candidacy for inpatient admission is determined through comprehensive clinical examination.
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02]"
              >
                <span>Discuss Inpatient Admission Options</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

