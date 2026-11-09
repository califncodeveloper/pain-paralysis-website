import React from "react";
import { Stethoscope, Activity, Waves, ShieldCheck, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";

/**
 * AboutApproach Component
 * Reconstructs the Clinical Methodology section ("Our Approach to Healing")
 * from the About Us reference page.
 *
 * Verified Reference Specifications:
 * - Eyebrow: "Clinical Methodology"
 * - Title: "Our Approach to Healing"
 * - 4-Step Clinical Framework:
 *   1. Accurate assessment to identify the true source of pain
 *   2. Combination of advanced manual corrections & rehabilitation
 *   3. Drug-free, non-surgical treatment protocols
 *   4. Structured recovery plans to prevent recurrence
 */
export const AboutApproach: React.FC = () => {
  const methodologySteps = [
    {
      step: "01",
      title: "Accurate Diagnostic Assessment",
      subtitle: "Pinpointing the True Origin of Pain",
      description:
        "Every treatment begins with a comprehensive physical, postural, and neurological examination. We assess spinal curvatures, joint biomechanics, and nerve pathways to determine the exact mechanical source of your condition rather than treating isolated symptoms.",
      icon: <Stethoscope className="h-6 w-6 text-primary" aria-hidden="true" />,
    },
    {
      step: "02",
      title: "Targeted Manual Correction & Decompression",
      subtitle: "Relieving Nerve & Disc Compression",
      description:
        "Using computerized non-surgical spinal decompression tables and gentle Gonstead chiropractic adjustments, we create negative intradiscal pressure to gently retract bulging discs, relieve compressed nerves, and restore proper joint articulation.",
      icon: <Activity className="h-6 w-6 text-primary" aria-hidden="true" />,
    },
    {
      step: "03",
      title: "Drug-Free Neuromuscular Rehabilitation",
      subtitle: "Rebuilding Functional Movement & Mobility",
      description:
        "We implement progressive physical therapy, robotic neuromuscular retraining, and aquatic therapy to re-educate muscle memory, alleviate joint stress in a supportive environment, and rebuild strength without relying on opioids or pain medications.",
      icon: <Waves className="h-6 w-6 text-primary" aria-hidden="true" />,
    },
    {
      step: "04",
      title: "Postural Stabilization & Relapse Prevention",
      subtitle: "Sustaining Long-Term Physical Independence",
      description:
        "Healing extends beyond acute relief. We provide tailored ergonomic coaching, corrective posture exercises, and spinal stability maintenance routines to fortify core musculature, optimize daily biomechanics, and protect against condition recurrence.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <Section
      id="clinical-approach"
      background="white"
      spacing="default"
      className="border-t border-secondary/10"
      aria-label="Clinical Methodology and Healing Approach"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLINICAL METHODOLOGY"
          title="Our Approach to Healing"
          description="A structured, four-phase clinical pathway engineered to identify mechanical root causes, relieve acute distress, and restore enduring physical function without invasive surgery."
          align="center"
          accent
          className="mb-12 sm:mb-16"
        />

        {/* 4-Step Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {methodologySteps.map((stepItem, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-secondary/10 bg-surface/60 p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:bg-white hover:shadow-md"
            >
              <div>
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {stepItem.icon}
                  </div>
                  <span className="font-heading text-2xl sm:text-3xl font-semibold text-secondary/25 group-hover:text-primary/40 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                {/* Step Titles */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary leading-snug">
                  {stepItem.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-primary tracking-wide">
                  {stepItem.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-text/80 font-sans">
                  {stepItem.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-secondary/5 flex items-center justify-between text-xs font-semibold text-secondary/70 group-hover:text-primary transition-colors">
                <span>Phase {stepItem.step} Clinical Protocol</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Philosophy Note */}
        <div className="mt-10 sm:mt-12 rounded-xl border border-secondary/10 bg-surface p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xs">
          <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-text/85">
            <strong className="text-secondary font-semibold">Evidence-Based Treatment Standard: </strong>
            Every rehabilitation protocol is formulated based on individual patient assessment and
            clinical necessity. We do not apply generic treatment packages or make blanket guarantees,
            ensuring care is ethically guided and medically sound.
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              href="/services"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
            >
              Explore Our Treatment Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

