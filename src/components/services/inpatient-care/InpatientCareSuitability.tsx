import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const suitableProfiles = [
  "Patients requiring multiple structured rehabilitation sessions per day",
  "Individuals with post-stroke hemiparesis or severe mobility limitations",
  "Post-surgical spine or joint patients needing initial supervised mobilization",
  "Patients whose home environment lacks accessible support for safe daily transfers",
  "Individuals needing dedicated caregiver instruction prior to independent home care",
];

const clinicalPrecautions = [
  "Acute medical emergencies requiring intensive care unit (ICU) life support",
  "Patients requiring surgical trauma intervention or acute ventilator care",
  "Uncontrolled unstable cardiac or pulmonary conditions without physician clearance",
  "Severe cognitive or behavioral disorders preventing safe participation in therapy",
];

export const InpatientCareSuitability: React.FC = () => {
  return (
    <Section
      id="inpatient-suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Inpatient Care Candidacy and Clinical Precautions"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="PATIENT CRITERIA"
          title="Inpatient Suitability &amp; Clinical Precautions"
          description="Understanding when 24-hour hospital care is indicated versus outpatient rehabilitation."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Column 1: Favorable Candidates */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Candidates for Inpatient Hospital Care</span>
            </h3>
            <ul className="space-y-3 m-0 p-0 list-none text-xs sm:text-sm text-text/85">
              {suitableProfiles.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Clinical Precautions & Exclusions */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Clinical Precautions &amp; Referrals</span>
            </h3>
            <ul className="space-y-3 m-0 p-0 list-none text-xs sm:text-sm text-text/85">
              {clinicalPrecautions.map((item) => (
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

