import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * PhysiotherapyHero Component
 * Hero banner for the Advanced Physiotherapy service detail page.
 *
 * Adheres to:
 * - Established Design System: Marcellus SC heading, Poppins body, Deep Marine Teal background
 * - Medical Compliance (Phase 20.2): Service-scope verified, educational and non-promissory wording
 * - Accessibility: Semantic breadcrumbs with aria-label, aria-current, and visible focus indicators
 */
export const PhysiotherapyHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 text-white border-b border-white/10"
      aria-label="Advanced Physiotherapy Hero Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-02.webp"
          alt="Pain and Paralysis Clinic physical consultation room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/90 via-secondary/95 to-secondary"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Clinical Badge */}
          <span className="section-badge mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Physical Rehabilitation
          </span>

          {/* Primary Page Heading */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.18] tracking-tight text-white text-balance">
            Advanced Physiotherapy
          </h1>

          {/* Descriptive Clinical Subtitle */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-2xl text-balance">
            Outpatient physical therapy consultations and clinical evaluations for individuals seeking guidance on physical rehabilitation, mobility concerns, and daily movement comfort.
          </p>

          {/* Key Clinical Attributes */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/90">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Non-Surgical Consultation</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <Activity className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Movement &amp; Mobility Review</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Rehabilitation Education</span>
            </span>
          </div>

          {/* Semantic Accessible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mt-8">
            <ol className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm backdrop-blur-md border border-white/15">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 font-medium text-white/80 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors duration-200"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3 w-3" />
              </li>
              <li className="inline-flex items-center">
                <Link
                  href="/services"
                  className="font-medium text-white/80 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3 w-3" />
              </li>
              <li className="inline-flex items-center">
                <span
                  className="font-semibold text-accent"
                  aria-current="page"
                >
                  Advanced Physiotherapy
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
