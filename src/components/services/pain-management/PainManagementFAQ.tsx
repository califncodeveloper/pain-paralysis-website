"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const faqs = [
  {
    question: "What does non-surgical pain management involve?",
    answer:
      "Our non-surgical approach utilizes computerized spinal decompression traction, knee decompression, targeted manual chiropractic adjustments, laser therapy (photobiomodulation), and structured therapeutic exercise to offload compressed structures and restore movement mechanics.",
  },
  {
    question: "Do you offer steroid injections or prescribe narcotic pain medications?",
    answer:
      "No. Pain & Paralysis Hospital delivers conservative, non-invasive physical and mechanical healthcare. We do not administer epidural steroid injections or prescribe pharmaceutical narcotics. When medical pharmacology or surgical intervention is warranted, we provide coordinated referrals to appropriate medical specialists.",
  },
  {
    question: "Can I receive spinal decompression if I have had prior back surgery?",
    answer:
      "Patients with past spinal surgeries (such as laminectomy or discectomy) without metal instrumentation may be evaluated for gentle decompression protocols. However, patients with spinal fusion, surgical screws, or metal cages are screened carefully and alternative gentle physical therapy is recommended.",
  },
  {
    question: "How many sessions are typically required to feel functional improvement?",
    answer:
      "Most patients undergo a structured care plan spanning 12 to 24 sessions over 4 to 8 weeks, depending on chronicity and tissue response. Functional improvements in mobility and morning stiffness are typically monitored across the first 4 to 6 visits.",
  },
  {
    question: "Is an in-person clinical assessment mandatory before treatment starts?",
    answer:
      "Yes. A thorough physical and biomechanical assessment is necessary to examine your range of motion, evaluate neurological reflexes, review MRI/X-ray scans, and ensure complete treatment safety.",
  },
  {
    question: "Where is the clinic located, and how can I schedule an evaluation?",
    answer:
      "Our facility is located in Virugambakkam, Chennai. You can book an appointment online via our contact form or by calling our clinical helpline directly.",
  },
];

export const PainManagementFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="pain-faqs"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions about Comprehensive Pain Management"
    >
      <Container size="standard">
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions: Pain Management"
          description="Clear answers regarding our non-surgical treatment methods, session timelines, safety, and consultation booking."
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

