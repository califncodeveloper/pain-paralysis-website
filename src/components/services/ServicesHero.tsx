import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Bed, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui";

export const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a3134] via-[#105156] to-[#0d3f43] pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 text-white border-b border-white/10"
      aria-label="Services Overview Hero Banner"
    >
      {/* Background Vignette & Authentic Clinic Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Hospital treatment and rehabilitation therapies"
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
          {/* Eyebrow Badge */}
          <span className="mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            14 SPECIALIZED HOSPITAL &amp; CLINICAL MODALITIES
          </span>

          {/* Main Hero Title */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.18] tracking-tight text-white text-balance">
            From Pain to Power — Explore Our Hospital Services
          </h1>

          {/* Descriptive Subtitle */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-teal-100/90 max-w-2xl text-balance">
            Explore 25-bed 24-hour hospital inpatient care, robotic neuro rehabilitation, non-surgical spine decompression, and multidisciplinary pain management in Virugambakkam, Chennai.
          </p>

          {/* 3 Pillar Shortcut Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all"
            >
              <Bed className="w-3.5 h-3.5 text-accent" />
              <span>Inpatient Hospital (25 Beds)</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span>Robotic Neuro Rehab</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Non-Surgical Spine Decompression</span>
            </a>
          </div>

          {/* Semantic Accessible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mt-8">
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
                <span className="font-semibold text-accent">Services Directory</span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
