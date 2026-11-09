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
    question: "How does a mechanical decompression session feel?",
    answer:
      "Mechanical decompression delivers controlled tensile force along the spine according to practitioner settings. Most individuals experience a gentle pulling sensation across the lower back or neck area. Settings are monitored throughout the appointment and can be modified or paused at any point to maintain comfort.",
  },
  {
    question: "How does computerized decompression differ from traditional traction?",
    answer:
      "Traditional traction commonly delivers continuous static pulling force throughout a session. In contrast, computerized decompression tables feature programmed tension and release intervals, alternating between configured hold times and rest periods at practitioner-selected table angles.",
  },
  {
    question: "How is suitability for spinal decompression determined?",
    answer:
      "Suitability for mechanical spinal decompression and any necessary clinical investigations are determined through an in-person assessment by an appropriately qualified practitioner. The practitioner reviews individual health history, physical examination findings, and clinical appropriateness before recommending mechanical traction.",
  },
  {
    question: "Is spinal decompression a substitute for surgical spine care?",
    answer:
      "No. Mechanical spinal decompression is an outpatient physical therapy modality, not a substitute or replacement for surgical evaluation. Surgical determinations are made exclusively by qualified spine specialists and surgeons. Urgent medical symptoms—such as rapidly worsening weakness or loss of bowel or bladder function—require emergency hospital evaluation.",
  },
  {
    question: "What occurs during a typical decompression session?",
    answer:
      "Patients remain fully clothed and rest on the padded motorized table fitted with supportive external harnesses. The clinical practitioner selects tension parameters, hold periods, and rest intervals based on the initial assessment. The motorized table operates through programmed cycles under clinical supervision.",
  },
];

/**
 * SpineDecompressionFAQ Component
 * Interactive accordion displaying verified patient questions and clinical clarifications.
 */
export const SpineDecompressionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions about Spine Decompression"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Common questions regarding non-surgical decompression mechanisms, patient comfort, and clinical candidacy."
          align="center"
          theme="light"
          accent
        />

        {/* Accordion Container */}
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-black/5 rounded-2xl bg-surface-soft p-4 sm:p-6 md:p-8 border border-black/5 shadow-sm">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-decompression-${index}`;
            const headerId = `faq-decompression-header-${index}`;

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 text-left font-heading text-base sm:text-lg font-semibold text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 transition-colors duration-200"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-secondary/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-body leading-relaxed pl-6 sm:pl-7 pr-2">
                      {faq.answer}
                    </p>
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
