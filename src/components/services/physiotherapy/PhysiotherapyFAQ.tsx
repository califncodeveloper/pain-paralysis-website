"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    question: "Do you accept insurance?",
    answer:
      "Insurance coverage policies depend on your insurance provider, network empanelment, and individual policy terms for physiotherapy and physical rehabilitation services. Insurance acceptance remains subject to individual verification. We recommend contacting our administration desk directly with your policy details so our team can check whether cashless or reimbursement assistance applies to your plan.",
  },
  {
    question: "What is the difference between a chiropractor and a physiotherapist?",
    answer:
      "While both healthcare disciplines evaluate musculoskeletal movement and physical discomfort, their general disciplinary approaches differ. As a profession, physiotherapy broadly focuses on physical assessment, active movement guidance, and posture education. Chiropractic care typically focuses on manual adjustments directed at spinal and joint segments. At Pain & Paralysis Clinic, consultations provide an opportunity to discuss individual symptoms and identify appropriate conservative care options.",
  },
  {
    question: "Will I need X-rays or diagnostic tests before treatment?",
    answer:
      "Not necessarily. Diagnostic imaging studies (such as X-rays or MRI scans) are evaluated on an individual basis if clinically indicated by a physician or practitioner. In many mechanical presentations, an in-person consultation and history review provide sufficient information to discuss conservative care options.",
  },
  {
    question: "Can I get a same-day appointment?",
    answer:
      "Same-day appointment availability depends strictly on daily clinical scheduling and practitioner capacity, and cannot be guaranteed in advance. Patients seeking prompt consultation are advised to contact our clinic reception directly by telephone to check current slot availability.",
  },
  {
    question: "How long does a physiotherapy treatment session last?",
    answer:
      "Appointment length varies depending on whether you are attending an initial consultation or a follow-up visit. Specific timings are determined by clinical scheduling and individual consultation needs.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "Consultations at Pain & Paralysis Clinic provide clinical evaluation for common musculoskeletal movement concerns, including neck and lower back discomfort, shoulder mobility limitations, and posture-related fatigue. An in-person consultation is conducted to review your movement history and discuss whether non-surgical clinic care is appropriate.",
  },
  {
    question: "What type of services does Pain and Paralysis provide?",
    answer:
      "Pain & Paralysis Clinic provides non-surgical outpatient services, including Advanced Spine Decompression traction, Advanced Chiropractor care, Advanced Physiotherapy, Heated Aquatic Therapy, and Computerized 3D Gait Analysis.",
  },
];

/**
 * PhysiotherapyFAQ Component
 * Interactive accordion displaying 7 common patient questions regarding physiotherapy consultations.
 */
export const PhysiotherapyFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions about Physiotherapy Care"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="General information regarding physiotherapy consultations, physical assessments, and appointment policies at Pain & Paralysis Clinic."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Accordion Container */}
        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `physiotherapy-faq-panel-${index}`;
            const headerId = `physiotherapy-faq-header-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white transition-colors duration-200"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle
                        className={`h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                          isOpen ? "text-primary" : "text-secondary/40"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-heading text-base sm:text-lg font-semibold text-secondary">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-surface-soft transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-secondary/60"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-body leading-relaxed border-t border-black/5 mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Questions Notice */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 text-center max-w-3xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading text-sm sm:text-base font-semibold text-secondary">
                  Have a specific question about physical rehabilitation?
                </h4>
                <p className="text-xs text-body">
                  Our clinical team is available to explain consultation procedures and appointment policies.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="flex-shrink-0 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
