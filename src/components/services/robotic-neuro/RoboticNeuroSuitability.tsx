import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const favorableCandidates = [
  "Patients recovering from stroke with unilateral weakness (hemiparesis)",
  "Individuals with incomplete spinal cord injuries with potential for ambulation",
  "Patients possessing adequate passive joint range of motion in hips, knees, and ankles",
  "Individuals with sufficient cognitive awareness to understand basic audio/visual feedback",
  "Patients cleared by their attending physician for progressive weight-bearing exercise",
];

const clinicalContraindications = [
  "Severe, fixed joint contractures or structural bone deformities",
  "Unhealed lower extremity fractures or severe osteoporosis with high fracture risk",
  "Active skin ulcers, open wounds, or infections at robotic harness or cuff contact sites",
  "Severe uncontrolled spasticity (Modified Ashworth Scale grade 4) resisting passive movement",
  "Uncontrolled cardiovascular instability, severe orthostatic hypotension, or acute DVT",
];

export const RoboticNeuroSuitability: React.FC = () => {
  return (
    <Section
      id="robotic-suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Candidacy and Safety Screening for Robotic Neuro Rehabilitation"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="SAFETY & CANDIDACY"
          title="Patient Suitability &amp; Safety Screening"
          description="A thorough clinical examination is required to determine whether robotic therapy is indicated for a patient's specific presentation."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Favorable Candidates */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Candidates for Robotic Neuro Rehab</span>
            </h3>
            <ul className="space-y-3 m-0 p-0 list-none text-xs sm:text-sm text-text/85">
              {favorableCandidates.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Precautions & Exclusions */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Safety Precautions &amp; Contraindications</span>
            </h3>
            <ul className="space-y-3 m-0 p-0 list-none text-xs sm:text-sm text-text/85">
              {clinicalContraindications.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

