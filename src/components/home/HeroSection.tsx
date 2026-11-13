"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Activity,
  Sparkles,
  Phone,
  Bed,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  image: string;
  alt: string;
  statBadge: string;
  statLabel: string;
  route: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "inpatient",
    tag: "25-Bed Inpatient Care",
    title: "24-Hour Inpatient Rehabilitation",
    image: "/images/hero/hero-slide-02.webp",
    alt: "Pain and Paralysis Hospital 25-bed inpatient recovery and rehabilitation facility in Virugambakkam Chennai",
    statBadge: "25 Beds • 24/7 Care",
    statLabel: "Continuous Monitoring & Clinical Rehabilitation",
    route: "/services/inpatient-care",
  },
  {
    id: "robotic",
    tag: "Robotic Neuro Rehab",
    title: "Robotic Neuro Rehabilitation",
    image: "/images/hero/slide-therapies.webp",
    alt: "Technology-assisted robotic neuro rehabilitation for stroke and paralysis recovery",
    statBadge: "Kinematic Guidance",
    statLabel: "High-Repetition Motor Retraining",
    route: "/services/robotic-neuro-rehabilitation",
  },
  {
    id: "spine",
    tag: "Spine Decompression",
    title: "Advanced Spine Decompression",
    image: "/images/services/spine-decompression-hero.webp",
    alt: "Computerized spinal decompression traction table at Pain and Paralysis Clinic",
    statBadge: "Non-Surgical Care",
    statLabel: "Targeted Disc & Sciatica Relief",
    route: "/services/advanced-spine-decompression",
  },
  {
    id: "consultation",
    tag: "Clinical Director",
    title: "Specialist Biomechanical Evaluation",
    image: "/images/about/clinic-procedure.webp",
    alt: "Dr. Dinesh Anandhan leading clinical assessment and spinal treatment",
    statBadge: "Lead Specialist",
    statLabel: "Targeted Multidisciplinary Protocols",
    route: "/contact-us",
  },
];

export const HeroSection: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = heroSlides[activeSlideIndex];

  // Auto-rotate slides gently every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#0a3134] via-[#105156] to-[#072427] text-white overflow-hidden">
      {/* Subtle ambient lighting layers */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1CAAB6]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#07CCEC]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column: Clinical Authority & Storytelling (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-7">
            {/* Clinical Eyebrow Badge with Active Pulse and Crest */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs font-semibold tracking-wider uppercase shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-white/95">25-Bedded, 24-Hour Hospital</span>
              <span className="text-accent/60">•</span>
              <span className="text-accent">Virugambakkam, Chennai</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-semibold leading-[1.12] tracking-tight text-white m-0">
              Advanced Rehabilitation &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-teal-200 to-white drop-shadow-sm">
                Specialized Hospital Care
              </span>{" "}
              in Chennai
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-sans max-w-2xl">
              Operating as a 25-bed hospital providing 24-hour inpatient rehabilitation, robotic neuro therapy, and non-surgical pain management dedicated to restoring mobility, independence, and long-term vitality.
            </p>

            {/* Action CTAs with High-Conversion Styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                rounded="full"
                icon={<Calendar className="w-5 h-5 text-white" />}
                iconPosition="left"
                className="font-semibold bg-gradient-to-r from-primary to-[#07CCEC] shadow-[0_8px_32px_rgba(7,204,236,0.4)] text-center justify-center hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(28,170,182,0.5)] border border-white/25 transition-all duration-300"
              >
                Book Clinical Consultation
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                rounded="full"
                icon={<ArrowRight className="w-5 h-5 text-accent" />}
                iconPosition="right"
                className="border-white/40 !text-white hover:bg-white/10 hover:border-white text-center justify-center backdrop-blur-md shadow-md transition-all duration-300"
              >
                Explore 14 Hospital Services
              </Button>
            </div>

            {/* Verified Clinical Trust Indicators */}
            <div className="pt-6 border-t border-white/15 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-teal-100/90">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                  <Bed className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-white block">25 Inpatient Beds</span>
                  <span className="text-[11px] text-teal-200/70 block">Full Facility Care</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                  <Activity className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-white block">24-Hour Hospital</span>
                  <span className="text-[11px] text-teal-200/70 block">Continuous Care</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Robotic Neuro</span>
                  <span className="text-[11px] text-teal-200/70 block">Precision Retraining</span>
                </div>
              </div>
            </div>

            {/* Quick 24/7 Emergency Line Callout */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-teal-100/80 backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-accent animate-pulse" />
              </div>
              <span>
                24/7 Inpatient &amp; Emergency Inquiry Line:{" "}
                <a
                  href={`tel:${clinicContactInfo.phone}`}
                  className="font-semibold text-white hover:text-accent underline transition-colors"
                >
                  {clinicContactInfo.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Layered Multi-Modality Visual Showcase (5 cols) */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto max-w-[520px] lg:max-w-none">
              {/* Main Clinical Image in Modern Architectural Framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)] border border-white/20 bg-white/5 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                  className="object-cover object-center transition-all duration-700 ease-out"
                />

                {/* Subtle gradient vignette for text legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a2729]/95 via-[#0a2729]/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Left Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a2729]/85 text-accent text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                    </span>
                    <span>{activeSlide.statBadge}</span>
                  </span>
                </div>

                {/* Top Right Modality Tag with Clinic Crest */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/90 p-1 shadow-md border border-white/40 hidden sm:flex items-center justify-center">
                    <Image
                      src="/images/logo/clinic-crest.webp"
                      alt="Hospital Crest"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a2729]/85 text-teal-100 text-xs font-medium backdrop-blur-md border border-white/20 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>{activeSlide.tag}</span>
                  </span>
                </div>

                {/* Unified Bottom Dock: Lead Specialist Highlight & Verified Hospital Care */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md text-secondary p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/60">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary relative shadow-sm">
                        <Image
                          src="/images/doctors/dr-dinesh-anandhan.webp"
                          alt="Dr. Dinesh Anandhan Lead Specialist"
                          fill
                          sizes="48px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-semibold text-sm sm:text-base text-secondary truncate">
                            Dr. Dinesh Anandhan
                          </h4>
                          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider">
                            Lead Specialist
                          </span>
                        </div>
                        <p className="text-xs text-text/80 truncate">
                          Clinical Director • 25-Bed Hospital
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                      <div className="hidden xs:flex flex-col items-end text-right">
                        <div className="flex items-center gap-0.5 text-[#FEC624] text-xs">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <span className="text-[10px] font-semibold text-secondary/80">Verified Hospital</span>
                      </div>
                      <Link
                        href="/contact-us"
                        className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all shadow-sm"
                        aria-label="Book appointment with Dr. Dinesh Anandhan"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Modality Switcher Chips below image */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeSlideIndex === idx
                        ? "bg-accent text-[#0a3134] font-semibold shadow-[0_2px_12px_rgba(7,204,236,0.35)] scale-105"
                        : "bg-white/10 hover:bg-white/20 text-white/85 border border-white/10"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeSlideIndex === idx ? "bg-[#0a3134]" : "bg-accent"
                      }`}
                    />
                    <span>{slide.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
