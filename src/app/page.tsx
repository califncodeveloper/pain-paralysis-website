import type { Metadata } from "next";
import {
  HeroSlider,
  ServicesSection,
  AboutSection,
  WhatWeDoSection,
  BeforeAfterSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Specialized Healthcare Clinic in Chennai for Pain Management and Paralysis Rehabilitation.",
};

export default function HomePage() {
  return (
    <>
      {/* Section 3: Homepage Hero Slider */}
      <HeroSlider />

      {/* Section 4 & 5: What We Offer – Services Section */}
      <ServicesSection />

      {/* Section 6: Why Pain And Paralysis? – About Section */}
      <AboutSection />

      {/* Section 7: What We Do – Statement Section */}
      <WhatWeDoSection />

      {/* Section 8: Before & After Posture Comparison Slider */}
      <BeforeAfterSection />
    </>
  );
}

