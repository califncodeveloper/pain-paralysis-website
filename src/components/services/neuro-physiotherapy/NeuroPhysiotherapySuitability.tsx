import React from "react";
import { 
  AlertTriangle, 
  Calendar, 
  CheckCircle, 
  FileCheck, 
  Stethoscope, 
  UserCheck, 
  XCircle 
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

const candidateCriteria = [
  {
    title: "Medically Stable Stroke Survivors",
    description:
      "Individuals cleared by their neurologist or attending physician for outpatient physical rehabilitation seeking to regain functional movement and daily independence.",
  },
  {
    title: "Individuals with Hemiplegia or Unilateral Deficits",
    description:
      "Patients experiencing one-sided weakness, impaired limb coordination, or asymmetrical weight distribution looking for structured motor re-education.",
  },
  {
    title: "Posture, Balance & Mobility Limitations",
    description:
      "Individuals experiencing unsteadiness during sitting, standing, transfers, or walking who require graded balance drills and fall prevention guidance.",
  },
  {
    title: "Altered Muscle Tone & Joint Stiffness",
    description:
      "Patients managing hypertonia, mild-to-moderate spasticity, or disuse contractures who need therapeutic positioning and active-assisted range of motion.",
  },
  {
    title: "Motivated for Active Functional Participation",
    description:
      "Patients and supportive families committed to participating in repetitive practice and following through with structured home exercise recommendations.",
  },
];

const clinicalPrecautions = [
  {
    title: "Acute, Unstable Medical Emergencies",
    description:
      "Patients experiencing active cerebrovascular events, acute progressive neurological deterioration, or hemodynamic instability requiring immediate hospital emergency care.",
  },
  {
    title: "Uncontrolled Autonomic Dysreflexia or Severe Hypertension",
    description:
      "High spinal cord injuries or autonomic instability with dangerously fluctuating blood pressure that requires acute inpatient medical stabilization.",
  },
  {
    title: "Active Deep Vein Thrombosis (DVT) or Pulmonary Embolism",
    description:
      "Unmanaged vascular thromboembolisms where active lower-limb rehabilitation and mobilizing drills are strictly contraindicated until cleared by a physician.",
  },
  {
    title: "Severe Unhealed Skeletal Fractures",
    description:
      "Recent traumatic or pathological fractures that have not been adequately consolidated or medically cleared for weight-bearing and movement therapy.",
  },
  {
    title: "Profound Receptive or Cognitive Barriers Without Support",
    description:
      "Severe delirium, acute confusion, or profound receptive aphasia where safe motor practice cannot be conducted without specialized institutional multi-disciplinary care.",
  },
];

/**
 * NeuroPhysiotherapySuitability Component
 * 2-column comparative layout detailing favorable candidate criteria
 * versus clinical precautions and medical referral criteria.
 */
export const NeuroPhysiotherapySuitability: React.FC = () => {
  return (
    <Section
      id="suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Suitability and Clinical Assessment Screening"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CANDIDACY & CLINICAL SCREENING"
          title="Suitability & Clinical Assessment"
          description="A comprehensive initial clinical evaluation determines whether outpatient neuro physiotherapy is suitable and safe for your specific recovery stage."
          align="center"
        />

        {/* 2-Column Comparative Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Favorable Indications */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-primary/20 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    REHABILITATION CANDIDATES
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-secondary">
                    Favorable Clinical Indications
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-body leading-relaxed mb-6">
                Patients who typically benefit from outpatient neuro physiotherapy at Pain &amp; Paralysis Clinic are medically stable and seek to enhance functional mobility:
              </p>

              <div className="space-y-4">
                {candidateCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-black/5 shadow-xs">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs text-secondary/70">
              <FileCheck className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span>A personal assessment verifies individual rehabilitation goals.</span>
            </div>
          </div>

          {/* Right Column: Clinical Precautions & Exclusion Factors */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-red-200/60 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-red-100 p-2.5 text-red-600">
                  <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
                    SAFETY SCREENING &amp; REFERRALS
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-secondary">
                    Precautions &amp; Considerations
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-body leading-relaxed mb-6">
                Certain presentations require acute inpatient medical management or specialized physician clearance prior to outpatient physical therapy:
              </p>

              <div className="space-y-4">
                {clinicalPrecautions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-black/5 shadow-xs">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs text-red-700 font-medium">
              <Stethoscope className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
              <span>Medical clearance from your physician may be requested.</span>
            </div>
          </div>
        </div>

        {/* Mandatory Clinical Assessment Callout */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-secondary to-[#184549] text-white p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                SAFETY FIRST AT ALL TIMES
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                An In-Person Assessment is Mandatory
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Because neurological conditions involve complex interplay between muscle tone, balance, endurance, and cardiovascular health, therapy cannot be prescribed generically. Our clinical team evaluates your medical history, current mobility, and personal goals before formulating any therapy plan.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:scale-105 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Book an Intake Assessment</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
