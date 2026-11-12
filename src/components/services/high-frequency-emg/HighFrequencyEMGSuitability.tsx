import React from "react";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  UserCheck, 
  Stethoscope, 
  Calendar 
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

const candidateCriteria = [
  {
    title: "Post-Stroke & Neurological Motor Deficits",
    description:
      "Individuals recovering from stroke, hemiplegia, or neurological motor impairment seeking objective evaluation of residual voluntary motor recruitment.",
  },
  {
    title: "Spinal Nerve Root Compression & Weakness",
    description:
      "Patients with cervical or lumbar radiculopathy experiencing focal muscle weakness or motor firing delays along specific spinal root distributions.",
  },
  {
    title: "Disuse Atrophy & Arthrogenic Inhibition",
    description:
      "Individuals experiencing prolonged muscle inhibition, motor shut-down, or localized muscle wasting following joint injury or orthopedic surgery.",
  },
  {
    title: "Movement Incoordination & Dyssynergia",
    description:
      "Patients demonstrating compensatory movement habits, abnormal agonist-antagonist co-contraction, or motor timing inconsistencies.",
  },
  {
    title: "Active Participation Capability",
    description:
      "Individuals able to comprehend instructions and participate in gentle, volitional isometric muscle contractions during sensor recording.",
  },
];

const contraindications = [
  {
    title: "Open Wounds & Severe Skin Breakdown",
    description:
      "Active cutaneous infections, unhealed surgical wounds, burns, or severe dermatitis directly at the intended sensor placement sites.",
  },
  {
    title: "Implanted Electronic Devices (Pacemakers / ICDs)",
    description:
      "While passive surface EMG recording is non-transmitting, patients with cardiac pacemakers or ICDs require clinical review and physician clearance prior to any combined modalities.",
  },
  {
    title: "Acute Unstable Fractures or Acute Tears",
    description:
      "Recent, unhealed bone fractures or acute complete tendon/muscle tears in the evaluation zone where active muscle contraction is medically contraindicated.",
  },
  {
    title: "Severe Cognitive or Receptive Barriers",
    description:
      "Conditions where a patient cannot comprehend verbal guidance or cooperate with active volitional contraction protocols necessary for valid data capture.",
  },
  {
    title: "Severe Continuous Involuntary Movements",
    description:
      "Uncontrolled violent dyskinesias or persistent myoclonic spasms that produce continuous kinetic artifacts, rendering surface readings uninterpretable.",
  },
];

/**
 * HighFrequencyEMGSuitability Component
 * 2-column comparative layout for candidate evaluation criteria and clinical precautions.
 */
export const HighFrequencyEMGSuitability: React.FC = () => {
  return (
    <Section
      id="suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Patient Suitability, Indications, and Clinical Precautions"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL TRIAGE"
          title="Patient Suitability & Clinical Precautions"
          description="Understanding candidate considerations, prerequisite criteria, and essential precautions prior to electromyographic assessment."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 2-Column Comparative Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Favorable Candidate Considerations */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
            <div>
              <div className="flex items-center gap-3 text-secondary pb-4 border-b border-black/5">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold">
                    Favorable Evaluation Candidates
                  </h3>
                  <p className="text-xs text-primary font-medium">
                    Presentations appropriate for surface EMG assessment
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {candidateCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="text-xs text-body leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-body/80">
              <p>
                * Suitability is confirmed during an in-person physical therapy intake and neuromuscular baseline assessment.
              </p>
            </div>
          </div>

          {/* Right Column: Precautions & Contraindications */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
            <div>
              <div className="flex items-center gap-3 text-secondary pb-4 border-b border-black/5">
                <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-600">
                  <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold">
                    Precautions &amp; Clinical Considerations
                  </h3>
                  <p className="text-xs text-amber-600 font-medium">
                    Clinical factors requiring physician clearance or protocol adaptation
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {contraindications.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="text-xs text-body leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-amber-700/80">
              <p>
                * Patients with medical history flags receive individualized screening prior to any sensor placement.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Clinical Assessment Callout Banner */}
        <div className="mt-12 rounded-2xl bg-secondary p-6 sm:p-8 text-white shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="rounded-xl bg-white/10 p-3 text-accent flex-shrink-0">
                <Stethoscope className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white">
                  Mandatory In-Person Clinical Assessment
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white/85 leading-relaxed">
                  Every electromyographic assessment is preceded by a comprehensive physical therapy consultation. Our clinical team reviews medical history, prior imaging or neurological reports, and evaluates motor function to establish whether High Frequency EMG is appropriate for your rehabilitation pathway.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex-shrink-0"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Schedule Assessment</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

