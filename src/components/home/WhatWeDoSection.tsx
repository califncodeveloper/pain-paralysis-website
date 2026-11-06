import React from "react";
import { Container, Section, SectionHeading } from "@/components/ui";

/**
 * WhatWeDoSection Component
 * Reconstructs homepage Section 7: "What We Do" statement section.
 *
 * Verified Reference Specifications:
 * - Container ID: .elementor-element-ac0744f
 * - Background Color: #105156 (Deep Marine Teal, CSS verified in post-8030.css)
 * - Eyebrow / Subtitle: "What We Do" (Marcellus SC, 18px, font-weight: 600)
 * - Main Heading: "Comprehensive rehabilitation center offering personalized care for complete Treatment"
 *   (Marcellus SC, 49px desktop / 35px mobile, font-weight: 600, color: #FFFFFF)
 * - Supporting Statement: Verified authentic clinic philosophy copy from connected container
 * - Text Alignment: Centered (text-align: center)
 * - Layout: Responsive single-column statement block with subtle brand atmospheric glow
 */
export const WhatWeDoSection: React.FC = () => {
  return (
    <Section
      id="what-we-do"
      background="secondary"
      spacing="default"
      className="relative scroll-mt-20 sm:scroll-mt-24 border-t border-white/10"
    >
      {/* Subtle Atmospheric Lighting Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Section Heading Component */}
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive rehabilitation center offering personalized care for complete Treatment"
            description="We don't just treat the symptom — we correct the source. Our posture correction program is designed using a combination of science-backed techniques and hands-on therapies that retrain your body for long-term alignment and relief."
            align="center"
            theme="dark"
            accent
            className="mb-0 w-full max-w-3xl"
            titleClassName="font-heading font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[45px] xl:leading-[1.22] !text-white tracking-tight w-full text-balance px-2"
            descriptionClassName="font-sans text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto mt-4 sm:mt-6 w-full text-balance px-2"
          />

          {/* Decorative Clinical Accent Divider */}
          <div
            className="mt-8 flex items-center justify-center gap-3 sm:mt-10"
            aria-hidden="true"
          >
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
