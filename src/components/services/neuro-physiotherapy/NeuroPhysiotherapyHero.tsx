import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Activity, ShieldCheck, Brain, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * NeuroPhysiotherapyHero Component
 * Hero banner for the Neuro Physiotherapy service detail page.
 *
 * Adheres to:
 * - Established Design System: Marcellus SC heading, Poppins body, Deep Marine Teal background (#105156)
 * - Medical Compliance: Conservative neurological rehabilitation language; no cure or recovery guarantees
 * - Accessibility: Semantic breadcrumbs with aria-label, aria-current, and visible focus indicators
 * - Standards: Exactly one H1, Primary CTA (Book a Consultation) & Secondary CTA (Explore Rehabilitation)
 */
export const NeuroPhysiotherapyHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 text-white border-b border-white/10"
      aria-label="Neuro Physiotherapy Hero Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Clinic clinical consultation and neurological rehabilitation facility"
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
            Specialized Neurological Rehabilitation
          </span>

          {/* Primary Page Heading - Exactly One H1 */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.18] tracking-tight text-white text-balance">
            Neuro Physiotherapy
          </h1>

          {/* Descriptive Clinical Subtitle */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-2xl text-balance">
            Outpatient physical rehabilitation supporting functional movement re-education, postural balance, and motor retraining for individuals living with stroke, hemiplegia, and neurological mobility limitations.
          </p>

          {/* Key Clinical Attributes */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/90">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <Brain className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Functional Movement Retraining</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <Activity className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Posture &amp; Balance Support</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/15">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Individualized Clinical Planning</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#rehabilitation-overview"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <span>Explore Rehabilitation</span>
            </a>
          </div>

          {/* Semantic Accessible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mt-10 pt-6 border-t border-white/10 w-full max-w-md mx-auto">
            <ol className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="hover:text-accent transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="inline-flex items-center">
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="inline-flex items-center text-accent font-medium" aria-current="page">
                <span>Neuro Physiotherapy</span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
