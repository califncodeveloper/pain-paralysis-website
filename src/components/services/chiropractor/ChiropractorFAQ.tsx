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
      "Insurance coverage policies depend on your insurance provider, network empanelment, and individual policy terms for chiropractic and physical therapy services. Insurance acceptance remains subject to individual verification. We recommend contacting our administration desk directly with your policy details so our team can check whether cashless or reimbursement assistance applies to your plan.",
  },
  {
    question: "What is the difference between a chiropractor and a physiotherapist?",
    answer:
      "While both healthcare disciplines evaluate musculoskeletal discomfort and movement restrictions, their clinical approaches differ. A chiropractor focuses primarily on hands-on manual adjustments and articulatory techniques directed at spinal and joint restrictions. A physiotherapist emphasizes exercise therapy, active movement retraining, strengthening, and functional rehabilitation. At Pain & Paralysis Clinic, both disciplines collaborate to evaluate the most appropriate care path for each individual.",
  },
  {
    question: "Will I need X-rays or diagnostic tests before treatment?",
    answer:
      "Not necessarily. Diagnostic tests or imaging studies (such as X-rays or MRI scans) are evaluated on an individual basis during physical examination if clinically indicated. Diagnostic requirements are not uniform, and in many mechanical presentations, an in-person physical assessment and health history review provide the necessary information to evaluate suitability for manual care.",
  },
  {
    question: "Can I Get a Same Day Appointment?",
    answer:
      "Same-day appointment availability depends strictly on daily clinical scheduling and practitioner capacity, and cannot be guaranteed in advance. Patients seeking prompt consultation are advised to contact our clinic reception directly by telephone to check current slot availability.",
  },
  {
    question: "How Long does a chiropractic Treatment session last?",
    answer:
      "Session duration varies depending on individual clinical requirements, whether you are attending an initial consultation, physical assessment, or subsequent follow-up appointment. Specific session timings are determined by the practitioner following the initial physical evaluation.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "Consultations evaluate common musculoskeletal concerns, including neck discomfort, lower back strain, tension-type and cervicogenic headaches, upper back stiffness, and posture-related joint restrictions.",
  },
  {
    question: "What type of Services does Pain and Paralysis provide?",
    answer:
      "Pain & Paralysis Clinic provides a comprehensive suite of advanced non-surgical rehabilitation modalities, including Advanced Spine Decompression traction, Advanced Chiropractor care, Advanced Physiotherapy, Heated Aquatic Therapy, and Computerized 3D Gait Analysis.",
  },
];

/**
 * ChiropractorFAQ Component
 * Interactive accordion displaying the 7 verified patient questions and clinical answers.
 */
export const ChiropractorFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions about Chiropractic Care"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Evidence-based answers to common questions regarding chiropractic care, clinical assessments, and appointment policies at Pain & Paralysis Clinic."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Accordion Container */}
        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `chiropractic-faq-panel-${index}`;
            const headerId = `chiropractic-faq-header-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-black/5 bg-surface-soft transition-colors duration-200"
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
                    <span className="flex items-center gap-3 pr-4 font-heading text-base sm:text-lg font-semibold text-secondary">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <span>{faq.question}</span>
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-primary text-white" : "text-secondary"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                {/* Animated Collapsible Panel */}
                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-black/5 p-5 sm:p-6 pt-2 sm:pt-3 text-xs sm:text-sm text-body leading-relaxed bg-white/60">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inquiries Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-body">
            Have additional questions regarding chiropractic procedures or appointment scheduling?
          </p>
          <div className="mt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-colors duration-200"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span>Contact Clinic Reception</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

