import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const favorableCandidates = [
  "Individuals with persistent lower back or neck pain lasting beyond 4–6 weeks",
  "Patients diagnosed with herniated, bulging, or degenerative intervertebral discs",
  "Individuals experiencing knee stiffness or osteoarthritic discomfort during walking",
  "Patients seeking non-surgical, drug-free conservative care before considering surgery",
  "Individuals struggling with posture-related workday fatigue, stiffness, or spasms",
];

const precautionsAndExclusions = [
  "Cauda Equina Syndrome symptoms (sudden loss of bowel or bladder control, saddle numbness)",
  "Rapidly progressive motor deficits, severe sudden foot drop, or acute spinal cord compression",
  "Unhealed spinal or pelvic fractures, acute traumatic dislocations, or severe spinal instability",
  "Suspected spinal malignancies, bone infections (osteomyelitis), or active systemic fevers",
  "Patients with severe abdominal aortic aneurysms or advanced osteopenia contraindicating traction",
];

export const PainManagementSuitability: React.FC = () => {
  return (
    <Section
      id="pain-suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Candidacy and Safety Screening for Pain Management"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="SAFETY & CANDIDACY"
          title="Patient Suitability &amp; Clinical Safety Screening"
          description="A comprehensive clinical evaluation determines whether conservative pain management is the appropriate path for your presentation."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Favorable Candidates */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Candidates for Conservative Pain Care</span>
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
              <span>Red Flags &amp; Physician Referrals</span>
            </h3>
            <ul className="space-y-3 m-0 p-0 list-none text-xs sm:text-sm text-text/85">
              {precautionsAndExclusions.map((item) => (
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

