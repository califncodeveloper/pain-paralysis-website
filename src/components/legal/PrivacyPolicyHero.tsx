import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * PrivacyPolicyHero Component
 *
 * Implements the hero banner for the Privacy Policy route (/privacy-policy).
 * Follows approved design system:
 * - Marcellus SC heading, Poppins body
 * - Deep marine teal (#105156) with subtle dark overlay
 * - Semantic breadcrumbs with accessible focus states
 * - No fabricated dates, status badges, or unverified claims
 */
export const PrivacyPolicyHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-18 text-white border-b border-white/10"
      aria-label="Privacy Policy Hero Banner"
    >
      {/* Background Clinical Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Clinic privacy policy background"
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Clinical Tag */}
          <span className="section-badge mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent">
            Clinic Notice
          </span>

          {/* Primary Page Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wide text-white leading-tight mb-4 sm:mb-6">
            Privacy Policy
          </h1>

          {/* Accessible Semantic Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs">
            <ol className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm backdrop-blur-md border border-white/15">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 font-medium text-white/80 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-white/40" aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-accent font-medium" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
