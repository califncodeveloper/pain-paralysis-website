import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * ServicesHero Component
 * Reconstructs the hero banner of the Services Overview page (/services/)
 *
 * Verified Reference Specifications:
 * - Title: "From Pain to Power — Explore Our Treatments" (Marcellus SC font-heading)
 * - Heading Size: 60px (desktop), 30px (mobile), font-weight 400/semi-bold
 * - Eyebrow Badge: "WHAT WE OFFER"
 * - Breadcrumbs: Home / Services (accessible semantic navigation)
 * - Background: Dark image background with classic dark overlay (#1C1C1CDB / #105156)
 */
export const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 text-white border-b border-white/10"
      aria-label="Services Overview Hero Banner"
    >
      {/* Background Vignette & Authentic Clinic Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Clinic treatment and rehabilitation therapies"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
        {/* Dark Vignette Overlay (#1C1C1CDB to Secondary Deep Teal) */}
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
          {/* Eyebrow Badge */}
          <span className="section-badge mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            WHAT WE OFFER
          </span>

          {/* Main Hero Title */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.18] tracking-tight text-white text-balance">
            From Pain to Power — Explore Our Treatments
          </h1>

          {/* Descriptive Subtitle */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-2xl text-balance">
            Explore our specialized non-surgical spine decompression, focused chiropractic care,
            specialized physiotherapy, and clinical rehabilitation therapies tailored for lasting recovery.
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
                <span className="font-semibold text-accent">Services</span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

