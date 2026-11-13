import type { Metadata } from "next";
import {
  HeroSection,
  TrustHighlights,
  ServicesSection,
  AboutSection,
  WhatWeDoSection,
  BeforeAfterSection,
  TestimonialsSection,
  TeamSection,
  StatisticsSection,
  LocationSection,
  FAQSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: {
    absolute: "Pain & Paralysis Hospital | 25-Bed Hospital & Advanced Rehabilitation Chennai",
  },
  description:
    "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai specializing in inpatient rehabilitation, robotic neuro rehabilitation, and comprehensive pain management.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. High-Impact Editorial Hero */}
      <HeroSection />

      {/* 2. Trust & Clinic Highlights Bar */}
      <TrustHighlights />

      {/* 3. Clinical Philosophy & Care Model (About Section) */}
      <AboutSection />

      {/* 4. Specialized Services Bento & Directory (All 11 Modalities) */}
      <ServicesSection />

      {/* 5. Treatment Approach & Clinical Pathway */}
      <WhatWeDoSection />

      {/* 6. Posture Evaluation & Alignment Comparison */}
      <BeforeAfterSection />

      {/* 7. Clinical Leadership & Lead Specialist Feature */}
      <TeamSection />

      {/* 8. Verified Clinical Statistics (Conditionally rendered when approved) */}
      <StatisticsSection />

      {/* 9. Patient Testimonials (Conditionally rendered when approved) */}
      <TestimonialsSection />

      {/* 10. Patient Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Facility Location, Office Hours & Inquiries */}
      <LocationSection />
    </>
  );
}
