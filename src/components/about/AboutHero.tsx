import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * AboutHero Component
 * Reconstructs the hero banner of the About Us page (/about-us/)
 *
 * Verified Reference Specifications:
 * - Title: "Beyond Pain Relief — Toward Total Wellness" (Marcellus SC font-heading)
 * - Breadcrumbs: Home / About Us (accessible semantic navigation)
 * - Background: Full width with subtle treatment vignette and deep marine teal overlay
 */
export const AboutHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 text-white border-b border-white/10"
      aria-label="About Us Hero Banner"
    >
      {/* Background Vignette & Authentic Clinic Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Clinic treatment environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-overlay"
        />
        {/* Atmospheric Radial Gradients */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/95 to-secondary"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <span className="section-badge mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            ABOUT US
          </span>

          {/* Main Hero Title */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.18] tracking-tight text-white text-balance">
            Beyond Pain Relief — Toward Total Wellness
          </h1>

          {/* Descriptive Subtitle */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-2xl text-balance">
            Specialized non-surgical spine decompression, evidence-based chiropractic alignment,
            and targeted neurological rehabilitation dedicated to restoring pain-free mobility.
          </p>

          {/* Semantic Accessible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mt-6 sm:mt-8">
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
                <ChevronRight className="h-3 w-3" />
              </li>
              <li aria-current="page">
                <span className="font-semibold text-accent">About Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

