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
    question: "What is neuro physiotherapy and how does it work?",
    answer:
      "Neuro Physiotherapy is a specialized branch of physical therapy dedicated to assessing and supporting individuals with movement, posture, and balance impairments resulting from neurological conditions. When the central or peripheral nervous system is damaged or disrupted—such as following a stroke or in neuromuscular conditions—signals between the brain and muscles can become altered. Neuro physiotherapy utilizes structured, repetitive movement practice, task-oriented drills, and sensorimotor guidance to help facilitate voluntary motor recruitment, manage abnormal muscle tone, and train safe, functional movement adaptations.",
  },
  {
    question: "Who may benefit from neurological rehabilitation at the clinic?",
    answer:
      "Neurological rehabilitation may benefit medically stable individuals experiencing movement difficulties, altered muscle tone, balance impairments, or reduced functional independence due to conditions such as stroke, hemiplegia, paraplegia, spinal cord injuries, or other central and peripheral neurological challenges. Candidacy is determined during an initial in-person clinical assessment to ensure the therapy is appropriate and safe for the patient's current health status.",
  },
  {
    question: "Can neuro physiotherapy help after a stroke?",
    answer:
      "Yes, neuro physiotherapy is a foundational element of outpatient post-stroke care. Following medical stabilization by a physician, physical therapy can assist stroke survivors in practicing functional tasks—such as bed mobility, sitting upright, standing, and reaching. Therapy focuses on supporting available motor control, encouraging bilateral limb awareness, managing spasticity, and retraining balance. Progress varies widely depending on the stroke's severity, location, and the individual's overall physical condition.",
  },
  {
    question: "Does neuro physiotherapy help with paralysis or hemiplegia?",
    answer:
      "While physical therapy cannot reverse permanent structural damage to nervous tissue or guarantee complete recovery from paralysis, it plays a vital role in maximizing a patient's functional potential. For individuals experiencing hemiplegia (weakness affecting one side of the body), therapy focuses on facilitating trace voluntary muscle recruitment, preventing joint contractures and muscle shortening, practicing weight-bearing, and developing safe compensatory movement techniques to enhance independence in daily living.",
  },
  {
    question: "Can rehabilitation improve walking, mobility, and balance?",
    answer:
      "Rehabilitation may help support walking mechanics, postural control, and dynamic balance depending on the individual's baseline abilities and neurological stability. Physical therapists assess stride symmetry, foot clearance, weight shifting, and trunk stability. When appropriate, therapists work on parallel-bar walking, stepping practice, and the safe prescription and use of assistive mobility devices such as canes, walkers, or orthoses to promote safer mobility and lower fall risks.",
  },
  {
    question: "How is a neuro physiotherapy rehabilitation plan personalised?",
    answer:
      "Every treatment plan is developed following a comprehensive initial clinical assessment. The physical therapist evaluates muscle strength, resting muscle tone (spasticity or flaccidity), joint range of motion, postural stability, transfer capabilities, and endurance. Together with the patient and their family or caregivers, the therapist establishes practical, realistic functional goals—such as standing up independently or transferring safely—and tailors exercise difficulty and pacing accordingly.",
  },
  {
    question: "How many sessions may be required?",
    answer:
      "Because neurological rehabilitation depends on individual motor learning, tissue adaptation, and the nature of the condition, there is no predetermined or fixed session count. Some patients benefit from a short course of targeted mobility coaching and caregiver training, while others engage in structured, multi-week or periodic maintenance programs. Session frequency and expected milestones are discussed transparently during your initial consultation and reviewed periodically.",
  },
  {
    question: "Does neuro physiotherapy replace medical treatment or neurologist care?",
    answer:
      "No. Neuro physiotherapy is a supportive physical rehabilitation discipline designed to work alongside medical care, not replace it. It does not replace medical diagnoses, neuroimaging, surgical consultations, or medications prescribed by your neurologist or medical physician (such as anti-spasticity agents or cardiovascular medications). Any modifications to your medical management must be directed by your treating medical doctor.",
  },
];

/**
 * NeuroPhysiotherapyFAQ Component
 * Interactive accordion displaying 8 evidence-based patient questions and clinical clarifications.
 */
export const NeuroPhysiotherapyFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions about Neuro Physiotherapy"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Evidence-based, conservative answers addressing common patient questions regarding Neuro Physiotherapy, candidacy, expectations, and safety."
          align="center"
        />

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-black/5 bg-surface-soft overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span className="font-heading text-base sm:text-lg font-semibold text-secondary pr-4 flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <span>{faq.question}</span>
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-white border border-black/5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-primary text-white border-primary" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-body leading-relaxed border-t border-black/5 bg-white ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-body">
            Have a question regarding neurological rehabilitation not listed here?{" "}
            <a
              href="/contact-us"
              className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded px-1"
            >
              Contact our clinical team directly
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
};
