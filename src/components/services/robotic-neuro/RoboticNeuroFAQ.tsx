"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const faqs = [
  {
    question: "Does robotic neuro rehabilitation guarantee a cure for paralysis?",
    answer:
      "No. Robotic neuro rehabilitation is an assistive physical therapy modality and does not cure paralysis or guarantee independent ambulation. Its role is to deliver high-repetition, guided kinematic motion that encourages neuroplastic reorganization, maintains joint mobility, and assists motor relearning within the patient's physiological potential.",
  },
  {
    question: "How does robotic rehabilitation differ from conventional neuro physiotherapy?",
    answer:
      "Conventional therapy relies on manual therapist support, which often limits the total repetitions due to physical fatigue. Robotic devices assist movement trajectories with consistent mechanical precision, enabling hundreds of repetitive cycles per session while tracking exact sensor feedback.",
  },
  {
    question: "How many sessions are typically required?",
    answer:
      "A typical protocol ranges from 15 to 30 sessions depending on condition chronicity, baseline mobility, and individual progress velocity. Treatment plans are reviewed regularly with objective metric reassessments.",
  },
  {
    question: "Is robotic neuro rehabilitation painful or unsafe?",
    answer:
      "Therapy is non-invasive and generally comfortable. All equipment features built-in force sensors, mechanical emergency stop controls, and soft padded interfaces. Therapy is continuously supervised by a trained physical therapist.",
  },
  {
    question: "Can robotic therapy be combined with other rehabilitation treatments?",
    answer:
      "Yes. Robotic rehabilitation is most effective when integrated into a comprehensive care pathway that includes neuro-physiotherapy, biofeedback, functional gait retraining, and home exercise guidance.",
  },
  {
    question: "How do I schedule an evaluation at the Virugambakkam hospital?",
    answer:
      "You can arrange an in-person assessment at Pain & Paralysis Hospital in Virugambakkam, Chennai by contacting our admissions desk. Bringing recent medical records, MRI scans, and specialist summaries helps our clinical team determine suitability.",
  },
];

export const RoboticNeuroFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="robotic-faqs"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Frequently Asked Questions about Robotic Neuro Rehabilitation"
    >
      <Container size="standard">
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions: Robotic Neuro Rehab"
          description="Clear, responsible answers regarding robotic technology, safety, session frequency, and realistic recovery expectations."
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

