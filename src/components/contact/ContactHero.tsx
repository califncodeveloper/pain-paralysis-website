import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, MessageSquare, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui";

export const ContactHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a3134] via-[#105156] to-[#0d3f43] pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 text-white border-b border-white/10"
      aria-label="Contact Us Hero Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero-slide-01.webp"
          alt="Pain and Paralysis Hospital contact banner background"
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
            <MessageSquare className="w-4 h-4 text-accent" aria-hidden="true" />
            24/7 INPATIENT &amp; CLINICAL INQUIRIES
          </span>

          {/* Primary Page Heading */}
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.18] tracking-tight text-white mb-4 sm:mb-5">
            Contact Our Hospital Team
          </h1>

          {/* Neutral Educational Description */}
          <p className="text-sm sm:text-base md:text-lg text-teal-100/90 leading-relaxed font-sans max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
            Get in touch with our hospital clinical team in Virugambakkam, Chennai to discuss 25-bed inpatient admissions, robotic neuro rehabilitation, non-surgical spine decompression, or outpatient consultations.
          </p>

          {/* Semantic Accessible Breadcrumb Navigation */}
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
                  Contact Us
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};
