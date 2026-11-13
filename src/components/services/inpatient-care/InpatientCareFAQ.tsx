"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const faqs = [
  {
    question: "What is the bed capacity of the inpatient facility?",
    answer:
      "Pain & Paralysis Hospital operates a dedicated 25-bed hospital facility in Virugambakkam, Chennai, specifically configured to provide structured inpatient rehabilitation and supportive recovery care.",
  },
  {
    question: "What does 24-hour hospital care include?",
    answer:
      "Admitted inpatients have 24-hour supportive care and continuous hospital supervision. Daily rehabilitation sessions, consultations, and specialized therapeutic procedures occur during scheduled daytime clinical hours.",
  },
  {
    question: "How long does a typical inpatient stay last?",
    answer:
      "Length of stay varies based on individual clinical evaluation, diagnosis severity, and recovery velocity. Subacute stroke recovery or intensive post-surgical reconditioning typically ranges from one to three weeks, guided by objective milestone reviews.",
  },
  {
    question: "Can family members or caregivers stay with the patient?",
    answer:
      "Yes. We encourage caregiver involvement as part of our rehabilitation model. Caregivers receive hands-on instruction in safe transfer methods, mobility aid management, and home exercise assistance prior to discharge.",
  },
  {
    question: "How is inpatient care different from outpatient physical therapy?",
    answer:
      "Outpatient care involves periodic visits (e.g. 2–3 times weekly) for specific treatments. Inpatient hospital care provides an immersive recovery environment with 24-hour supportive care, multi-session daily therapy, supervised meals, and zero travel-related strain.",
  },
  {
    question: "How do we arrange an inpatient admission evaluation?",
    answer:
      "An in-person clinical assessment or medical record review (including recent MRI/CT scans and discharge summaries) is conducted at our Virugambakkam hospital to determine clinical suitability and tailor the initial care plan.",
  },
];

export const InpatientCareFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="inpatient-faqs"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions about Inpatient Hospital Care"
    >
      <Container size="standard">
        <SectionHeading
          eyebrow="INPATIENT QUESTIONS"
          title="Frequently Asked Questions: Inpatient Care"
          description="Common questions about hospital admission, accommodations, and our 24-hour care model in Virugambakkam, Chennai."
          align="center"
          accent
        />

        <div className="mt-10 space-y-3.5 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-secondary flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-text/60 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-text/80 leading-relaxed border-t border-black/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

