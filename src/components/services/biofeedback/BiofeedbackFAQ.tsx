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
    question: "What is biofeedback and how does it support physical rehabilitation?",
    answer:
      "Biofeedback is a non-invasive therapeutic learning modality that translates subtle internal physiological signals—primarily muscle action potentials captured through surface electromyography (sEMG)—into immediate visual and auditory feedback. By watching waveforms or listening to pitch-modulated tones, patients become aware of subconscious muscle states. Under clinical guidance, patients learn voluntary self-regulation: relaxing hyperactive, spastic muscles or recruiting weakened motor units to restore balanced movement patterns.",
  },
  {
    question: "Is biofeedback painful, and does it deliver electrical shocks or currents?",
    answer:
      "No. Biofeedback at Pain & Paralysis Clinic is completely non-invasive, gentle, and painless. It does not use needles and does not puncture the skin. Furthermore, unlike electrical stimulation machines (such as TENS or EMS) that deliver external currents into muscles, biofeedback sensors are purely passive receivers. They function like sensitive microphones, detecting your body's natural bioelectrical impulses with zero electrical shock, tingling, or discomfort.",
  },
  {
    question: "What happens during a typical biofeedback appointment?",
    answer:
      "During a typical 30- to 45-minute outpatient session, you will sit or recline comfortably. Your therapist cleanses the skin over the target muscles and applies adhesive hydrogel surface sensors. You will view a display monitor showing your muscle activity in real time. Guided by your physical therapist, you will perform specific relaxation or activation exercises, learning how mental intention and breathing modulate the feedback display. The session concludes with recommendations for functional practice at home.",
  },
  {
    question: "How does biofeedback differ from High Frequency EMG assessment?",
    answer:
      "High Frequency EMG is primarily an evaluative diagnostic assessment tool used to objectively measure motor unit action potentials, recruitment timing, and bilateral symmetry to direct therapy planning. Biofeedback, in contrast, is an active therapeutic retraining modality. It utilizes surface EMG technology as a live educational mirror, enabling the patient to actively learn and practice voluntary neuromuscular control during the session.",
  },
  {
    question: "Which neurological and musculoskeletal conditions can benefit from biofeedback?",
    answer:
      "Biofeedback is commonly utilized for patients recovering from stroke (paretic limb motor re-education), neurological muscle spasticity, chronic tension-type headaches, temporomandibular clenching (TMJ), cervical dystonia, postural muscle guarding, and arthrogenic muscle inhibition following orthopedic surgery. Candidacy depends on your specific diagnosis and functional mobility, which is evaluated during an initial clinical intake.",
  },
  {
    question: "How many biofeedback sessions will I need to experience progress?",
    answer:
      "Because biofeedback relies on neuroplastic motor learning, response times vary by individual. Some patients report enhanced awareness of muscle guarding within 3 to 6 sessions, while neurological rehabilitation for stroke or chronic spasticity typically involves a structured multi-week program (often 10 to 15 sessions) paired with active physical therapy. Your physical therapist establishes a customized schedule based on your clinical assessment and reassessment milestones.",
  },
  {
    question: "Is biofeedback suitable for every patient?",
    answer:
      "Biofeedback requires a degree of cognitive attention and the ability to perceive sensory cues (visual displays or audio tones) and follow verbal instructions. It is exceptionally well-tolerated because it is passive and non-invasive. However, patients with severe cognitive impairment, active skin breakdown directly over the sensor site, or violent involuntary dyskinesias may require alternative physical therapy approaches. Individual suitability is screened during your consultation.",
  },
  {
    question: "Does biofeedback replace prescribed medications, injections, or surgery?",
    answer:
      "No. Biofeedback is an adjunctive rehabilitation modality designed to complement, not replace, comprehensive medical care. It works synergistically alongside prescribed physical therapy exercises, physician-directed medications (such as muscle relaxants or antispasmodics), and neurological management. Any changes to medical prescriptions or surgical interventions must be directed solely by your medical physician.",
  },
];

/**
 * BiofeedbackFAQ Component
 * Interactive accordion displaying verified patient questions and clinical clarifications.
 */
export const BiofeedbackFAQ: React.FC = () => {
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
      aria-label="Frequently Asked Questions about Biofeedback"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT QUESTIONS"
          title="Frequently Asked Questions"
          description="Evidence-based, conservative answers addressing common patient questions regarding Biofeedback therapy, safety, candidacy, and clinical expectations."
          align="center"
          theme="light"
          accent
        />

        {/* Accordion Container */}
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-black/5 rounded-2xl bg-surface-soft p-4 sm:p-6 md:p-8 border border-black/5 shadow-sm">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-biofeedback-${index}`;
            const headerId = `faq-biofeedback-header-${index}`;

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
                  <span className="font-heading text-base sm:text-lg font-semibold leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 rounded-full p-1.5 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-black/5 text-secondary"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </button>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-body leading-relaxed pl-1 pr-2 pt-1 pb-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Help Note */}
        <div className="mt-8 text-center text-xs text-body">
          <p className="inline-flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>
              Have specific questions about your condition?{" "}
              <a
                href="/contact-us"
                className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              >
                Contact our clinical team for personalized guidance
              </a>
              .
            </span>
          </p>
        </div>
      </Container>
    </Section>
  );
};

