"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X, ArrowRight, Award, Bed, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";

export const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Manage body scroll locking and keyboard accessibility
  useEffect(() => {
    if (!isModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        triggerButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const pillars = [
    {
      title: "Non-Surgical Preservation",
      desc: "We prioritize evidence-informed conservative decompression and joint restoration before invasive surgical pathways are considered.",
    },
    {
      title: "Objective Biomechanical Diagnostics",
      desc: "Treatment plans are grounded in 3D gait metrics, high-frequency electromyography, and computerized traction parameters.",
    },
    {
      title: "24-Hour Inpatient Continuity",
      desc: "25-bed dedicated inpatient recovery accommodations providing scheduled multi-session therapy, nursing support, and caregiver training.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FBFB] relative overflow-hidden" id="about">
      {/* Background visual accents */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container wide>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Visual Composition with Layered Inset & Video Trigger (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              {/* Main Image Framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(16,81,86,0.14)] border border-[#105156]/12 bg-white aspect-[4/4.8] group">
                <Image
                  src="/images/about/clinic-procedure.webp"
                  alt="Clinical spine procedure and rehabilitation at Pain and Paralysis Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Video Play Overlay Button */}
                <div className="absolute inset-0 bg-[#105156]/20 flex items-center justify-center transition-colors group-hover:bg-[#105156]/30">
                  <button
                    ref={triggerButtonRef}
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="group/btn relative flex items-center justify-center w-20 h-20 rounded-full bg-white text-primary shadow-2xl transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 cursor-pointer"
                    aria-label="Play hospital overview and procedure video"
                  >
                    <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75" />
                    <Play className="w-8 h-8 fill-primary stroke-none ml-1 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Floating Bottom Trust Chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-secondary text-sm block">
                        Virugambakkam Hospital
                      </span>
                      <span className="text-xs text-text/75 block">
                        25 Beds • 24-Hour Hospital Facility
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Inset Badge: 25-Bed Inpatient Care */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md text-secondary p-3.5 rounded-2xl shadow-xl border border-black/10 hidden sm:flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                    Inpatient Suites
                  </span>
                  <span className="text-xs text-secondary font-medium leading-tight block">
                    25 Dedicated Beds
                  </span>
                </div>
              </div>

              {/* Decorative Accent Background Frame */}
              <div
                className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-3xl border-2 border-primary/25 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-1 lg:order-2">
            {/* Section Tag */}
            <Badge variant="primary" dot size="md">
              Clinical Philosophy &amp; Care Model
            </Badge>

            {/* Section Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] tracking-tight text-secondary">
              A Specialized Clinical Path to Restoring Spine &amp; Neurological Function.
            </h2>

            {/* Lead Prose */}
            <p className="text-base text-text/80 leading-relaxed font-sans">
              Operating as a <strong>25-bedded, 24-hour hospital in Virugambakkam, Chennai</strong>, Pain &amp; Paralysis Hospital provides structured hospital-based inpatient care, robotic neuro rehabilitation, and specialized non-surgical pain management focused on helping patients recover mobility, functional independence, and quality of life.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="space-y-4 pt-2 w-full">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#105156]/8 shadow-sm flex items-start gap-4 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1CAAB6]/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-heading font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text/75 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                href="/about-us"
                variant="primary"
                size="md"
                rounded="full"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-semibold shadow-md"
              >
                Learn More About Our Hospital
              </Button>

              <Button
                href="/contact-us"
                variant="outline"
                size="md"
                rounded="full"
                className="border-primary/40 text-secondary hover:bg-primary/5"
              >
                Consult Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal Preview */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Hospital Video Showcase"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-secondary rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-bold uppercase text-accent tracking-wider">
                  Facility Walkthrough
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  Pain &amp; Paralysis Hospital Chennai
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close video preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black/50 rounded-xl flex flex-col items-center justify-center p-8 text-center border border-white/10">
              <Play className="w-16 h-16 text-primary mb-4" />
              <p className="text-sm sm:text-base text-teal-100/90 max-w-md leading-relaxed">
                Experience our 25-bed inpatient recovery suites, robotic neuro rehabilitation technology, and computerized spinal decompression suites in Virugambakkam, Chennai.
              </p>
              <div className="mt-6 flex gap-3">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="sm"
                  rounded="full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Schedule an In-Person Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
