import React from "react";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  Activity,
  Phone,
  Bed,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

export const HeroSection: React.FC = () => {
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

          {/* Right Column: Clean Authentic Clinical Photograph (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            {/* Soft Ambient Depth Glow behind frame */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            {/* Authentic Architectural Photo Frame */}
            <div className="relative mx-auto max-w-[540px] lg:max-w-none rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)] border border-white/20 bg-white/5 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/hero/hero-slide-02.webp"
                alt="Pain and Paralysis Hospital 25-bed inpatient recovery and rehabilitation facility in Virugambakkam Chennai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                className="object-cover object-center"
              />
              {/* Subtle natural gradient for deep rich contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a2729]/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
