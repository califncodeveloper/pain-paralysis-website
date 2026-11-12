"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

const pelvicFloorFAQs: FAQItem[] = [
  {
    question: "What is pelvic floor physiotherapy?",
    answer:
      "Pelvic floor physiotherapy is a specialized, non-surgical discipline within physical therapy that evaluates and rehabilitates the supportive sling of muscles, ligaments, and connective tissues at the base of the pelvis. These muscles are essential for supporting the pelvic organs, controlling bladder and bowel continence, stabilizing the lower spine and pelvis, and working synchronously with the diaphragm during breathing. Treatment combines functional movement assessment, neuromuscular coordination retraining, customized exercises, breathing strategies, and patient education.",
  },
  {
    question: "What conditions may pelvic floor therapy help address?",
    answer:
      "Pelvic floor therapy can assist individuals experiencing stress or urge urinary incontinence, pelvic floor muscle weakness, chronic pelvic discomfort or tailbone pain (coccygodynia), postpartum abdominal and core deconditioning (such as diastasis recti), pelvic muscle coordination difficulties (dyssynergia), and lumbo-pelvic instability. It serves as a conservative, functional rehabilitation option; severe structural pathologies or acute medical conditions should always be evaluated by an appropriate medical specialist.",
  },
  {
    question: "Is pelvic floor therapy only for women?",
    answer:
      "No. Pelvic floor therapy is for all adults—men, women, and individuals of any gender. Men have the same foundational pelvic floor musculature and can experience pelvic tension, urinary dribbling, post-prostate surgery muscle weakness, tailbone aching, or pelvic girdle pain. Rehabilitation protocols are customized according to individual anatomy, symptoms, and functional baselines.",
  },
  {
    question: "Does pelvic floor therapy always involve an internal examination?",
    answer:
      "No. An internal examination is never automatically required for every patient. Standard physical therapy consultations primarily focus on external assessments: posture, spine and pelvic girdle alignment, diaphragmatic breathing excursion, abdominal wall coordination, and functional movement. If an internal assessment is ever clinically considered, its clinical purpose is explained thoroughly in advance, and it is conducted only with your explicit, voluntary consent. You always have the complete right to decline, modify, or stop an examination at any time without compromising your care.",
  },
  {
    question: "Is pelvic floor therapy painful?",
    answer:
      "Pelvic floor therapy should not be painful. Our primary clinical objective is to restore comfortable, functional movement. If you are experiencing pelvic tension or hypertonic muscles, gentle relaxation techniques and breathing strategies are used to soothe and release guarding. We maintain continuous dialogue throughout every session so that all exercises and guidance remain well within your comfort threshold.",
  },
  {
    question: "Does treatment always involve strengthening exercises?",
    answer:
      "No, and this is a critical distinction. While patients with hypotonic (weak or deconditioned) muscles benefit from progressive strengthening, individuals with hypertonic (overactive, tense, or spasming) pelvic floors can actually worsen their symptoms if they perform repetitive tightening exercises like Kegels. For hypertonic presentations, therapy prioritizes downtraining, conscious muscle release, diaphragmatic breathing, and pelvic posture alignment.",
  },
  {
    question: "How many sessions may be required?",
    answer:
      "Session requirements vary depending on the chronicity of your symptoms, individual muscle response, overall health, and consistency with home exercise recommendations. Some individuals notice meaningful improvements in muscle awareness within several sessions, whereas chronic conditions may require a graduated course over several weeks or months. We conduct periodic milestone reviews and empower you with independent self-management tools rather than requiring long-term mandatory treatment blocks.",
  },
  {
    question: "When should I seek a clinical assessment?",
    answer:
      "You should consider a clinical evaluation if you experience regular urinary leakage when coughing, exercising, or laughing; persistent urgency sensations; ongoing pelvic or tailbone aching during sitting; difficulty coordinating pelvic muscles during daily activities; or if you are navigating postpartum physical recovery. However, if you experience acute unexplained bleeding, severe sudden pain, high fever, or visible organ protrusion, seek immediate evaluation from a qualified physician, urologist, or gynaecologist first.",
  },
];

/**
 * PelvicFloorFAQ Component
 * Fully accessible accordion presenting 8 evidence-based patient questions.
 */
export const PelvicFloorFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions About Pelvic Floor Therapy"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS & TRANSPARENT ANSWERS"
          title="Frequently Asked Questions"
          description="Clear, evidence-grounded answers addressing common inquiries about pelvic floor physical therapy, assessment procedures, and patient consent."
          align="center"
        />

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {pelvicFloorFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white border border-black/5 shadow-xs transition-all duration-200 hover:border-primary/20"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle
                        className={`h-5 w-5 flex-shrink-0 transition-colors ${
                          isOpen ? "text-primary" : "text-secondary/50"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-heading text-base sm:text-lg font-semibold text-secondary">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-secondary/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 font-sans text-xs sm:text-sm leading-relaxed text-body border-t border-black/5">
                      <p>{faq.answer}</p>
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

