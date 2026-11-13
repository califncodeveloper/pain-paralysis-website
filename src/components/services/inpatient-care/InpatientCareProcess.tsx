import React from "react";
import { Container, Section, SectionHeading } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Clinical Admission Assessment",
    description:
      "A thorough physical, neurological, and mobility examination determines inpatient suitability, baseline independence scores, and medical stabilization requirements.",
  },
  {
    step: "02",
    title: "Personalized Care Pathway Design",
    description:
      "A tailored inpatient rehabilitation schedule is formulated, combining daily physical therapy, scheduled decompression or electrotherapy, and rest intervals.",
  },
  {
    step: "03",
    title: "Daily Coordinated Therapy",
    description:
      "The patient undergoes regular daily therapy sessions focused on gait re-education, transfer practice, strength building, and posture stabilization in our hospital setting.",
  },
  {
    step: "04",
    title: "Caregiver Training & Review",
    description:
      "Family members and caregivers receive direct practical guidance on assisting transfers, managing mobility aids, and providing positive encouragement at home.",
  },
  {
    step: "05",
    title: "Discharge & Home Transition",
    description:
      "A structured discharge summary is prepared with an individualized home exercise program, outpatient follow-up dates, and direct contact access for continued guidance.",
  },
];

export const InpatientCareProcess: React.FC = () => {
  return (
    <Section
      id="inpatient-process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Inpatient Care Process Roadmap"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="CARE ROADMAP"
          title="The 5-Step Inpatient Care Pathway"
          description="A clear, structured clinical progression from initial hospital admission through daily recovery and safe transition home."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-black/5 bg-white p-5 sm:p-6 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-heading font-bold text-2xl text-accent block mb-2">
                  {item.step}
                </span>
                <h3 className="font-heading font-semibold text-base text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-text/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

