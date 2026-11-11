import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Award } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * GalleryHero Component
 * Reconstructs the hero banner for the Gallery page (/gallery/).
 *
 * Adheres to:
 * - Approved Design System: Marcellus SC heading, Poppins body, Deep Marine Teal (#105156)
 * - Reference Structure: "Gallery" title, clinical badge, semantic breadcrumbs
 * - Provenance Safeguards: Neutral, evidence-aligned copy without inflated accreditation claims
 */
export const GalleryHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 text-white border-b border-white/10"
      aria-label="Gallery Hero Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Clinic gallery background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-overlay"
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
            <Award className="w-4 h-4 text-accent" aria-hidden="true" />
            Public Honors &amp; Recognitions
          </span>

          {/* Primary Page Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wide text-white leading-tight mb-4 sm:mb-5">
            Gallery
          </h1>

          {/* Neutral Educational Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl mx-auto mb-6 sm:mb-8 font-light">
            Visual showcase of public honors, event felicitations, and clinic facility imagery as published on the clinic website.
          </p>

          {/* Accessible Semantic Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs">
            <ol className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm backdrop-blur-md border border-white/15">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 font-medium text-white/80 hover:text-accent transition-colors duration-200"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="inline-flex items-center">
                <span
                  className="font-semibold text-accent"
                  aria-current="page"
                >
                  Gallery
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
