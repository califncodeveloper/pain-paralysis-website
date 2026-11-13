import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Brain, ShieldAlert } from "lucide-react";
import { Container, Section } from "@/components/ui";

const clinicalPillars = [
  {
    title: "Targeted Neuromuscular Re-Education",
    description:
      "Focuses on facilitating voluntary motor recruitment, sensorimotor integration, and functional movement patterns to support everyday mobility.",
  },
  {
    title: "Posture, Balance & Stability Training",
    description:
      "Employs progressive static and dynamic balance exercises, core engagement, and weight-shifting practice to foster upright stability and reduce fall risks.",
  },
  {
    title: "Task-Oriented Functional Practice",
    description:
      "Translates therapy drills into meaningful functional activities—including bed mobility, sit-to-stand transitions, stepping, and reaching tasks.",
  },
  {
    title: "Personalized & Collaborative Planning",
    description:
      "Aligns therapeutic exercises with individual functional baselines, patient endurance, and supportive carer guidance for long-term consistency.",
  },
];

/**
 * NeuroPhysiotherapyIntroduction Component
 * 2-column service introduction and modality profile section.
 *
 * Left: Authentic clinic service photo (`neuro-physiotherapy.webp`) with clinical callout.
 * Right: Detailed narrative defining neuro physiotherapy, contrasting it with general
 * musculoskeletal physiotherapy, presenting 4 clinical pillars, and a prominent
 * Clinical Scope Notice.
 */
export const NeuroPhysiotherapyIntroduction: React.FC = () => {
  // Reusable Equipment Card (Rendered between title & description on mobile, in left column on desktop)
  const renderEquipmentCard = (isMobile = false) => (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface-soft p-3 sm:p-4 shadow-xl border border-black/5 ${isMobile ? "max-w-md mx-auto my-5" : "max-w-md mx-auto"}`}>
      {/* Main Modality Image */}
      <div className="relative aspect-[455/533] w-full overflow-hidden rounded-xl bg-secondary/5">
        <Image
          src="/images/services/neuro-physiotherapy.webp"
          alt="Neuro Physiotherapy clinical consultation and neurological rehabilitation at Pain and Paralysis Clinic Chennai"
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 450px, 92vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          priority
        />
        {/* Floating Modality Pill */}
        <div className="absolute top-4 left-4 rounded-full bg-secondary/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
          Neurological Rehabilitation
        </div>
      </div>

      {/* Informational Callout Beneath Image */}
      <div className="mt-4 rounded-xl bg-white p-4 border border-black/5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0">
            <Brain className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
              Functional Movement Re-Education
            </h3>
            <p className="mt-0.5 text-xs text-body leading-relaxed">
              Structured outpatient physical rehabilitation designed to assist individuals affected by stroke or neurological movement limitations in rebuilding functional coordination, postural balance, and movement confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="rehabilitation-overview"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Service Overview and Clinical Neuro Physiotherapy Principles"
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
              Specialized Physical Rehabilitation for Neurological Mobility
            </h2>

            {/* Mobile Image: Positioned strictly between Section Title and Description */}
            <div className="block lg:hidden w-full">
              {renderEquipmentCard(true)}
            </div>

            {/* Introduction Paragraphs */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                <strong>Neuro Physiotherapy</strong> is a specialized clinical discipline focused on evaluating and treating movement, posture, and coordination limitations resulting from conditions affecting the central and peripheral nervous systems. Following neurological events such as stroke or when living with ongoing neuromuscular conditions, disrupted signals between the brain, spinal cord, and musculoskeletal system can alter motor control, balance, and muscle tone.
              </p>
              <p>
                Unlike general orthopedic physiotherapy—which predominantly addresses localized joint sprains, post-surgical stiffness, or mechanical soft-tissue injuries—neurological rehabilitation centers on <strong>neuromuscular re-education</strong>. Therapy utilizes repeated, purposeful movement tasks and sensorimotor guidance to support functional adaptation, helping patients optimize their remaining motor control and discover safe compensatory movement strategies.
              </p>
              <p>
                Every rehabilitation program begins with an extensive individual assessment of functional mobility, muscle strength, tone, coordination, and safety. Because neurological presentations vary widely, clinical goals are tailored collaboratively with each patient and their family—prioritizing meaningful daily activities such as safe bed mobility, independent transfers, standing stability, and supported walking.
              </p>
            </div>

            {/* 4 Clinical Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {clinicalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-black/5 bg-surface-soft p-4 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-secondary">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prominent Clinical Scope & Non-Diagnostic Notice */}
            <div className="mt-8 w-full rounded-xl bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-semibold text-amber-900 uppercase tracking-wider">
                    Clinical Scope &amp; Medical Care Notice
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    Neuro physiotherapy at Pain &amp; Paralysis Clinic provides supportive physical rehabilitation. It is designed to complement—not replace—care provided by treating neurologists, neurosurgeons, or primary medical physicians. Outpatient rehabilitation does not claim to reverse permanent organic neurological lesions or guarantee complete recovery from paralysis. All treatment recommendations depend on qualified clinical evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Action Triggers */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Schedule a Clinical Assessment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#conditions-evaluated"
                className="inline-flex items-center gap-2 rounded-full bg-surface-soft border border-black/10 px-6 py-3 text-sm font-semibold text-secondary transition-all hover:bg-white hover:border-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <span>View Evaluated Needs</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
