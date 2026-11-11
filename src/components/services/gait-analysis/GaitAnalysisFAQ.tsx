"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    question: "What is the difference between visual observation and 3D gait analysis?",
    answer:
      "Visual observation relies on subjective naked-eye impressions, which can miss subtle micro-movements occurring within split-second phases of the gait cycle. 3D gait analysis utilizes quantitative tracking to measure exact joint angles, angular velocities, spatial-temporal symmetry, and step timing across multiple strides, providing objective data to inform conservative physical rehabilitation planning.",
  },
  {
    question: "Do I need a doctor's referral to schedule a gait analysis consultation?",
    answer:
      "In most outpatient situations, you can schedule a clinical movement and gait evaluation directly. However, if you are actively recovering from recent orthopedic surgery, managing an acute fracture, or seeking coverage under specific insurance policies, a medical clearance note or referral from your attending physician is recommended.",
  },
  {
    question: "Can 3D gait analysis diagnose the exact medical cause of my pain?",
    answer:
      "Gait analysis is an observational biomechanical assessment tool, not an independent medical diagnostic test. It measures how your body moves and identifies functional compensations, but it does not replace medical imaging (such as MRIs or X-rays) or clinical examinations required to diagnose structural pathologies such as disc herniations, ligament tears, or fractures.",
  },
  {
    question: "How long does a gait analysis consultation take and what should I wear?",
    answer:
      "Consultation duration varies depending on individual clinical presentation, history review, and specific evaluation needs. Appointment lengths are determined by clinical staff. For your consultation, we recommend wearing comfortable, form-fitting athletic shorts and a t-shirt to facilitate easy visual assessment of joint movement. Please also bring your primary walking shoes, athletic sneakers, and any orthotics or braces you regularly wear.",
  },
  {
    question: "Is gait analysis suitable for neurological conditions like stroke or Parkinson's?",
    answer:
      "Yes, movement assessment can be very informative for individuals with neurological locomotion challenges such as hemiparesis, Parkinsonian gait, or sensory neuropathy. It provides objective tracking of step symmetry, foot clearance, and base-of-support stability to help inform individualized movement retraining and balance exercises.",
  },
  {
    question: "Does health insurance cover 3D gait analysis and biomechanical evaluation?",
    answer:
      "Insurance coverage depends strictly on your individual insurance provider, policy terms, and whether the service is categorized under physical therapy evaluation or specialized diagnostics. Coverage and cashless empanelment remain subject to individual policy terms, and patients are advised to confirm applicable benefits with their insurer or our reception desk.",
  },
  {
    question: "Can gait analysis guarantee that my running injury or back pain will never return?",
    answer:
      "No medical or biomechanical evaluation can guarantee permanent pain relief or complete injury prevention. Gait analysis provides valuable objective movement data to guide targeted strengthening, joint mobilization, and postural education, but long-term outcomes depend on ongoing exercise adherence, tissue healing, ergonomic habits, and overall health factors.",
  },
];

/**
 * GaitAnalysisFAQ Component
 * Interactive FAQ accordion featuring 7 patient questions.
 *
 * Adheres to:
 * - Approved Design System: White background, centered accordion max-w-3xl, Marcellus SC H2
 * - Accessibility: WAI-ARIA accordion pattern with aria-expanded, aria-controls, and keyboard focus
 * - Medical Compliance (Phase 22): Non-promissory factual answers addressing referral, diagnostic limits, insurance, and realistic outcomes.
 */
export const GaitAnalysisFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faqs"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions About 3D Gait Analysis"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="General information regarding 3D gait analysis consultations, biomechanical evaluation procedures, and appointment expectations at Pain & Paralysis Clinic."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Accordion List */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-surface-soft shadow-sm"
                    : "border-black/5 bg-white hover:border-black/15 hover:shadow-xs"
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle
                      className={`h-5 w-5 shrink-0 mt-0.5 transition-colors duration-200 ${
                        isOpen ? "text-primary" : "text-secondary/50"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-heading text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary/10 text-primary"
                        : "bg-black/5 text-secondary/60"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </button>

                {/* Animated Accordion Panel */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-xs sm:text-sm text-body leading-relaxed border-t border-black/5">
                      <p className="mt-3 text-balance">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

