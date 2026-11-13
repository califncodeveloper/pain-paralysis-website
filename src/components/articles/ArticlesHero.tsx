import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * ArticlesHero Component
 * Reconstructs the hero banner for the Tips & Articles archive page.
 *
 * Adheres to:
 * - Approved Design System: Marcellus SC heading, Poppins body, Deep Marine Teal background (#105156)
 * - Reference Archive Content: "Helpful Tips for a Healthier You" / "Tips & Article"
 * - Semantic Breadcrumbs: Home -> Tips & Article
 */
export const ArticlesHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a3134] via-[#105156] to-[#0d3f43] pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 text-white border-b border-white/10"
      aria-label="Tips and Articles Hero Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-slide-03.webp"
          alt="Pain and Paralysis Clinic health education and clinical library background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a3134]/95 via-secondary/90 to-secondary"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Clinical Badge */}
          <span className="mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />
            EVIDENCE GUIDANCE &amp; REHABILITATION KNOWLEDGE
          </span>

          {/* Primary Page Heading */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.18] tracking-tight text-white mb-4 sm:mb-5">
            Clinical Health Guides &amp; Insights
          </h1>

          {/* Neutral Educational Description */}
          <p className="text-sm sm:text-base md:text-lg text-teal-100/90 leading-relaxed font-sans max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
            Evidence-based health guides, non-surgical spine care insights, and clinical rehabilitation resources developed by our Chennai therapy specialists.
          </p>

          {/* Accessible Semantic Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/90"
          >
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors duration-200"
                >
                  <Home className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="inline-flex items-center text-white/40" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="inline-flex items-center font-semibold text-accent" aria-current="page">
                <span>Tips &amp; Article</span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

