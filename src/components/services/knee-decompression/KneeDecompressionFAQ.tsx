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
    question: "What is Advanced Knee Decompression?",
    answer:
      "Advanced Knee Decompression is a specialized, non-invasive outpatient mechanical traction modality. Using calibrated computerized equipment with supportive thigh and calf strapping, it gently distracts the tibiofemoral joint of the knee. This controlled axial separation reduces compressive bone-on-bone friction, facilitates the natural circulation of nutrient-rich synovial fluid into articular cartilage, and eases periarticular muscle tightness.",
  },
  {
    question: "Who may benefit from knee decompression therapy?",
    answer:
      "Individuals presenting with mild-to-moderate knee osteoarthritis, chronic joint stiffness, degenerative meniscus wear, patellofemoral sensitivity, or difficulty walking and navigating stairs may benefit. Suitability is always determined through an in-person clinical assessment where our physical therapy team evaluates joint range of motion, load tolerance, and previous imaging records.",
  },
  {
    question: "Is the knee decompression procedure painful or uncomfortable?",
    answer:
      "No. Most patients experience a gentle, soothing pulling sensation across the knee joint compartment. The equipment is computerized to apply tension in smooth, calibrated cycles rather than sudden or aggressive pulls. Padded ergonomic cuffs ensure even pressure distribution, and patients hold an emergency-stop switch at all times to pause or adjust the session instantly.",
  },
  {
    question: "How long does a session take, and how many may be required?",
    answer:
      "An outpatient appointment generally takes approximately 30 to 45 minutes, with active cyclical traction typically lasting between 15 to 25 minutes depending on the patient's individual tolerance and clinical protocol. The total course of care varies according to joint degeneration grade, symptom duration, and individual response, which is reviewed during your initial consultation.",
  },
  {
    question: "Can knee decompression replace total knee replacement surgery?",
    answer:
      "No. Knee decompression is a conservative physical therapy modality designed to manage mechanical discomfort and support functional mobility, not a surgical alternative. While it may help individuals delay or avoid surgery by improving conservative function in mild-to-moderate joint wear, advanced structural deformities, severe bone-on-bone fusion (ankylosis), or acute traumatic fractures require direct orthopedic surgical evaluation.",
  },
  {
    question: "How does knee decompression differ from knee braces or injections?",
    answer:
      "Knee braces provide external stabilization during walking but do not actively create joint space separation or facilitate intracapsular fluid circulation. Corticosteroid or viscosupplementation injections introduce pharmacological agents into the joint to temporarily reduce inflammation. In contrast, mechanical knee decompression is an entirely drug-free, non-invasive physical therapy that gently unloads joint surfaces without needles or systemic medications.",
  },
  {
    question: "Is an in-person clinical assessment necessary before starting?",
    answer:
      "Yes. An in-person consultation is mandatory before any decompression protocol begins. Our practitioners evaluate joint stability, measure active and passive flexion/extension angles, review existing X-rays or MRI reports, and rule out any clinical contraindications—such as acute fractures or active infections—to ensure patient safety and therapy efficacy.",
  },
  {
    question: "What should patients expect immediately following a session?",
    answer:
      "There is no post-treatment recovery downtime, and patients typically walk out of the clinic and resume daily activities immediately. Many individuals report a sensation of increased lightness and reduced stiffness in the knee joint. Practitioners often provide guidance on complementary quadriceps strengthening and low-impact movement habits to maintain joint mobility between visits.",
  },
];

/**
 * KneeDecompressionFAQ Component
 * Interactive accordion displaying verified patient questions and clinical clarifications.
 */
export const KneeDecompressionFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions about Knee Decompression"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Evidence-based, cautious answers addressing common patient questions regarding knee decompression mechanisms, safety, candidacy, and expectations."
          align="center"
          theme="light"
          accent
        />

        {/* Accordion Container */}
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-black/5 rounded-2xl bg-surface-soft p-4 sm:p-6 md:p-8 border border-black/5 shadow-sm">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-knee-decompression-${index}`;
            const headerId = `faq-knee-decompression-header-${index}`;

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
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-body leading-relaxed pl-6.5 pr-2">
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

