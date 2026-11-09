import React from "react";
import Image from "next/image";
import { careAreasData } from "@/data/care-areas";
import { Container, Section, SectionHeading } from "@/components/ui";

/**
 * SpecializedCareAreas Component
 * Reconstructs the "Try today / Specialized care areas" section from the Services Overview page.
 *
 * Verified Reference Specifications:
 * - Background: #105156 (Deep Marine Teal)
 * - Eyebrow: "Try today" (Marcellus SC, 18px, font-weight 600, color #FFFFFF)
 * - Main Title: "Specialized care areas" (Marcellus SC, 49px desktop, 35px mobile, color #FFFFFF)
 * - 4 Pillars:
 *   1. Posture Correction ("Restore spinal alignment and body balance")
 *   2. Spinal Therapy ("Non-invasive care for back and neck pain")
 *   3. Injury & Trauma Recovery ("Heal from accidents, falls or surgeries")
 *   4. Rehab & Fitness Integration ("Functional training tailored to your recovery stage")
 * - 4-Column Layout: 25% width on desktop, 50% on tablet, 100% on mobile
 * - Card Background: Dark charcoal (#333333 / #1C2E30) with centered square image (500x500px)
 */
export const SpecializedCareAreas: React.FC = () => {
  return (
    <Section
      id="care-areas"
      background="secondary"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-b border-white/10"
      aria-label="Specialized Care Areas"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Try today"
          title="Specialized care areas"
          description="Targeted clinical focus areas combining non-invasive technology and supportive therapeutic protocols to assist functional alignment."
          align="center"
          theme="dark"
          accent
        />

        {/* 4 Care Area Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {careAreasData.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl bg-[#1C2E30] border border-white/10 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(28,170,182,0.2)]"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-transparent transition-colors duration-300 group-hover:bg-primary"
                aria-hidden="true"
              />

              {/* Centered Image (55% width of card matching reference CSS) */}
              <div className="relative mb-6 w-[55%] max-w-[200px] aspect-square overflow-hidden rounded-2xl bg-secondary/30 shadow-md">
                <Image
                  src={item.image}
                  alt={`${item.title} specialized care area`}
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 55vw, (max-width: 1024px) 30vw, 20vw"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-primary">
                {item.title}
              </h3>

              {/* Tagline / Description */}
              <p className="mt-3 font-sans text-sm sm:text-[15px] leading-relaxed text-white/80">
                {item.tagline}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

