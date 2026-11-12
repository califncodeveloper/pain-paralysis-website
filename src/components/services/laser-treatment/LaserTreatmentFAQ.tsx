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
    question: "What is Advanced Laser Treatment and how does it work?",
    answer:
      "Advanced Laser Treatment—also known as photobiomodulation (PBM)—is a non-invasive physical therapy modality that uses calibrated therapeutic light wavelengths to stimulate biological healing at the cellular level. Light photons penetrate targeted soft tissues where they are absorbed by photoreceptive enzymes within the mitochondria (cytochrome c oxidase). This interaction supports cellular adenosine triphosphate (ATP) synthesis, promotes microvascular circulation, and assists the body’s natural recuperative mechanisms without surgery or pharmaceuticals.",
  },
  {
    question: "Is laser therapy safe, and is the procedure painful?",
    answer:
      "Yes, therapeutic laser treatment is safe when delivered by trained healthcare professionals using calibrated equipment. The procedure is completely painless. Patients typically experience either a gentle, soothing warmth over the treated area or no perceptible sensation at all. Because therapeutic lasers operate within controlled optical parameters, they do not burn, cut, or ablate skin or soft tissue.",
  },
  {
    question: "What conditions may be evaluated for therapeutic laser treatment?",
    answer:
      "Laser therapy is evaluated as an adjunctive conservative modality for a wide range of musculoskeletal conditions, including cervical and lumbar strain, knee and hip osteoarthritic joint stiffness, tendinopathies (rotator cuff, tennis elbow, Achilles tendonitis, plantar fasciitis), athletic sprains, muscle spasms, localized peripheral nerve sensitivity, and post-surgical soft-tissue recovery.",
  },
  {
    question: "How many laser therapy sessions are typically required?",
    answer:
      "The recommended number of sessions varies depending on condition chronicity, tissue depth, and individual biological response. Acute soft-tissue strains may benefit from a brief course of 4 to 6 sessions, whereas long-standing chronic joint stiffness or deep tendinopathies may require 8 to 12 sessions scheduled across several weeks. Treatment frequency and duration are determined during your initial clinical evaluation.",
  },
  {
    question: "What safety precautions and eye protection are required?",
    answer:
      "Because therapeutic laser beams can cause retinal injury if viewed directly, mandatory certified wavelength-specific protective optical goggles must be worn by both the patient and the therapist throughout the entire session. Furthermore, laser therapy is contraindicated directly over active malignancies, during pregnancy over the pelvic/abdominal regions, over the thyroid gland, or across areas of active hemorrhage.",
  },
  {
    question: "Can laser treatment replace surgery or conventional medical interventions?",
    answer:
      "No. Laser therapy is a conservative, supportive physical therapy modality and not a universal substitute for orthopedic surgery, fracture stabilization, or emergency medical treatment. While it may help manage discomfort, ease inflammation, and improve tissue mobility in conjunction with active exercise, severe joint deformities or acute surgical conditions require direct specialist consultation.",
  },
  {
    question: "How does therapeutic laser differ from hot packs or therapeutic ultrasound?",
    answer:
      "While superficial hot packs primarily warm the outer skin and subcutaneous layers through conduction, and ultrasound delivers mechanical sound-wave vibrations, therapeutic laser operates photochemically. Light photons penetrate into deeper muscular and periarticular tissues to interact directly with mitochondrial photoreceptors, stimulating cellular energetics and microcirculation without generating excessive thermal stress.",
  },
  {
    question: "Why is an in-person clinical assessment required before starting?",
    answer:
      "An in-person consultation is mandatory to evaluate your symptom timeline, assess joint range of motion and tissue irritability, review medical history and imaging, and rule out any clinical contraindications. This ensures that laser therapy is clinically appropriate, safely applied, and integrated effectively into your broader physical rehabilitation plan.",
  },
];

/**
 * LaserTreatmentFAQ Component
 * Interactive accordion displaying verified patient questions and clinical clarifications.
 */
export const LaserTreatmentFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions about Laser Therapy"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Evidence-based, cautious answers addressing common patient questions regarding laser therapy mechanisms, safety, candidacy, and expectations."
          align="center"
          theme="light"
          accent
        />

        {/* Accordion Container */}
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-black/5 rounded-2xl bg-surface-soft p-4 sm:p-6 md:p-8 border border-black/5 shadow-sm">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-laser-treatment-${index}`;
            const headerId = `faq-laser-treatment-header-${index}`;

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between text-left gap-4 py-2 text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                >
                  <span className="font-heading text-base sm:text-lg font-semibold flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-secondary/60 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-7 sm:pl-8 pr-2">
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Clinical Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-body/70 max-w-2xl mx-auto">
          <p>
            Have additional questions regarding your specific symptoms or eligibility? Contact our clinical team at Pain &amp; Paralysis Clinic, Madhanandapuram, Chennai for personalized guidance.
          </p>
        </div>
      </Container>
    </Section>
  );
};

