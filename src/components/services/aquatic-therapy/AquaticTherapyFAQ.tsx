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
    question: "Does Pain and Paralysis Clinic accept health insurance for aquatic therapy consultations?",
    answer:
      "Insurance coverage policies depend on your insurance provider, network empanelment, and individual policy terms for physical rehabilitation and outpatient consultations. Insurance acceptance remains subject to individual verification. We recommend contacting our administrative desk with your insurance details prior to your visit to confirm applicable coverage.",
  },
  {
    question: "What is the difference between aquatic therapy and standard physiotherapy?",
    answer:
      "Standard physiotherapy is conducted primarily in an outpatient clinical setting on dry land, focusing on active therapeutic exercises, movement retraining, and posture education. Aquatic therapy refers to physical exercises performed in a water environment, utilizing buoyancy to unload compressive gravitational forces and hydrodynamic drag for gentle multi-directional resistance. Both approaches can be complementary depending on individual recovery needs.",
  },
  {
    question: "Are diagnostic tests or medical clearance required before an aquatic therapy consultation?",
    answer:
      "A prior diagnostic report (such as an X-ray or MRI) is helpful but not always mandatory for an initial consultation. However, individuals with significant cardiovascular, respiratory, post-surgical, or neurological conditions may require formal physician clearance prior to participating in pool-based exercise to ensure personal safety.",
  },
  {
    question: "Can I book a same-day consultation for aquatic therapy?",
    answer:
      "Same-day appointment availability depends strictly on daily clinical scheduling and practitioner capacity, and cannot be guaranteed in advance. Patients seeking prompt consultation are advised to contact our clinic reception directly by telephone to check current slot availability.",
  },
  {
    question: "How long does an aquatic therapy consultation take?",
    answer:
      "Consultation duration varies depending on individual clinical requirements, whether you are attending an initial physical screening, comprehensive history review, or follow-up discussion. Specific session timings are determined by the practitioner following the initial physical evaluation.",
  },
  {
    question: "What conditions can be discussed during an aquatic therapy consultation?",
    answer:
      "Consultations evaluate common musculoskeletal and mobility concerns, including weight-bearing joint discomfort in hips and knees, post-operative movement rehabilitation, lower back tension, balance hesitancy, and generalized muscular deconditioning. An in-person assessment is conducted to determine whether water-based movement principles are appropriate.",
  },
  {
    question: "Does the clinic have an in-house heated hydrotherapy pool?",
    answer:
      "In-house heated hydrotherapy pool availability has not been confirmed at Pain & Paralysis Clinic, and pool-based treatments are not offered on-site. Our clinic in Madhanandapuram, Chennai provides outpatient clinical evaluations, movement screening, and conservative rehabilitation planning. Practitioners discuss whether water-based exercises at external community facilities or dry-land physical rehabilitation alternatives are best suited to your needs.",
  },
];

/**
 * AquaticTherapyFAQ Component
 * Interactive FAQ accordion featuring 7 patient questions.
 *
 * Adheres to:
 * - Approved Design System: Soft surface background, centered accordion max-w-3xl, Marcellus SC H2
 * - Accessibility: WAI-ARIA accordion pattern with aria-expanded, aria-controls, and keyboard focus
 * - Medical Compliance (Phase 21): Non-promissory factual answers addressing insurance, pool scope, and safety
 */
export const AquaticTherapyFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faqs"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions About Aquatic Therapy"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="General information regarding aquatic therapy consultations, water-based movement principles, and appointment policies at Pain & Paralysis Clinic."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Accordion Container */}
        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm transition-colors duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-heading text-base sm:text-lg font-semibold text-secondary transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-secondary/60 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {/* Animated Collapsible Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 font-sans text-xs sm:text-sm text-body leading-relaxed border-t border-black/5 mt-1 pt-4">
                      {faq.answer}
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

