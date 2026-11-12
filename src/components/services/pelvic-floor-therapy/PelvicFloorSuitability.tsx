import React from "react";
import { 
  AlertTriangle, 
  CheckCircle, 
  FileCheck, 
  Stethoscope, 
  UserCheck, 
  XCircle,
  Calendar,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

const candidateCriteria = [
  {
    title: "Individuals Experiencing Stress or Urgency Leakage",
    description:
      "Adults experiencing involuntary urine loss during coughing, laughing, exercise, or sudden urgent sensations who seek non-surgical behavioral and neuromuscular strategies.",
  },
  {
    title: "Patients Managing Pelvic Discomfort or Coccygodynia",
    description:
      "Individuals with localized tailbone aching, pelvic floor muscular tightness, or sitting discomfort who require gentle downtraining, relaxation, and myofascial release.",
  },
  {
    title: "Postpartum Mothers Rebuilding Core Integrity",
    description:
      "Mothers who have given birth and wish to safely assess abdominal separation (diastasis recti), re-engage deep core stabilizers, and return to physical activity safely.",
  },
  {
    title: "Individuals with Pelvic Muscle Coordination Difficulties",
    description:
      "Patients who have difficulty relaxing or activating pelvic muscles synchronously during voiding, transitional movements, or physical exertion.",
  },
  {
    title: "Adults of All Genders Seeking Conservative Care",
    description:
      "Men and women experiencing pelvic muscle strain, post-surgical muscular deconditioning, or postural compensations impacting the pelvic girdle.",
  },
];

const clinicalPrecautions = [
  {
    title: "Active Urinary Tract or Systemic Infections",
    description:
      "Acute bacterial infections causing severe dysuria, fever, hematuria, or systemic symptoms require primary antibiotic therapy from a physician prior to therapy.",
  },
  {
    title: "Unexplained Vaginal, Urethral, or Rectal Bleeding",
    description:
      "Any unexpected or undiagnosed bleeding requires urgent diagnostic evaluation by a gynaecologist, urologist, or colorectal specialist to rule out pathology.",
  },
  {
    title: "Acute, Severe, or Rapidly Worsening Pelvic Pain",
    description:
      "Sudden, unrelenting, or excruciating pain could signify acute pelvic inflammation, appendicitis, ovarian torsion, or other surgical emergencies requiring hospital care.",
  },
  {
    title: "High-Grade Structural Pelvic Organ Prolapse",
    description:
      "Advanced anatomical prolapse (Grade 3 or 4) with significant organ protrusion through the introitus requires specialist uro-gynaecological evaluation for surgical or pessary intervention.",
  },
  {
    title: "Recent Unhealed Pelvic or Perineal Surgery",
    description:
      "Patients within the acute post-operative healing window without explicit clearance from their operating surgeon should defer active physical therapy.",
  },
];

/**
 * PelvicFloorSuitability Component
 * 2-column comparative layout detailing candidate criteria vs precautions,
 * paired with a comprehensive Patient Comfort, Consent & Internal Assessment panel.
 */
export const PelvicFloorSuitability: React.FC = () => {
  return (
    <Section
      id="suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Suitability, Clinical Screening, and Patient Consent"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CANDIDACY & CLINICAL SCREENING"
          title="Suitability, Assessment & Informed Consent"
          description="A comprehensive initial clinical evaluation determines whether conservative pelvic floor therapy is appropriate and safe for your specific health goals."
          align="center"
        />

        {/* 2-Column Comparison Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Favorable Clinical Indications */}
          <div className="rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-black/5">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                    Favorable Indications for Evaluation
                  </h3>
                  <p className="text-xs text-body">
                    Adults who may benefit from structured conservative rehabilitation
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {candidateCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-secondary">
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

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-secondary/80 flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Program suitability is established during your initial physical therapy consultation.</span>
            </div>
          </div>

          {/* Clinical Precautions & Red Flags */}
          <div className="rounded-2xl bg-surface-soft p-6 sm:p-8 border border-amber-200/50 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-black/5">
                <div className="rounded-xl bg-amber-100 p-2.5 text-amber-800">
                  <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                    Precautions &amp; Specialist Referral Criteria
                  </h3>
                  <p className="text-xs text-body">
                    Presentations requiring physician evaluation or prior medical clearance
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {clinicalPrecautions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-secondary">
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

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-amber-900/90 flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-amber-700 flex-shrink-0" aria-hidden="true" />
              <span>Medical conditions must be reviewed and cleared by your treating medical doctor.</span>
            </div>
          </div>
        </div>

        {/* Critical Patient Comfort, Consent & Internal Assessment Policy Panel */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border-2 border-primary/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="rounded-xl bg-primary/10 p-3.5 text-primary flex-shrink-0">
              <HeartHandshake className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-3">
              <h4 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                Patient Privacy, Voluntary Consent &amp; Assessment Principles
              </h4>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                We understand that discussing pelvic symptoms involves sensitive and personal health concerns. Our clinic is committed to maintaining the highest ethical standards of dignity, comfort, and voluntary participation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h5 className="font-sans text-xs sm:text-sm font-semibold text-secondary flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    External Assessment First
                  </h5>
                  <p className="mt-1 text-xs text-body leading-relaxed">
                    Standard physical therapy evaluations focus on external biomechanics: spine and pelvic alignment, posture, diaphragmatic breathing mechanics, and functional movement. Internal evaluation is <strong>never automatically required</strong> for care.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h5 className="font-sans text-xs sm:text-sm font-semibold text-secondary flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    Strict Voluntary Consent
                  </h5>
                  <p className="mt-1 text-xs text-body leading-relaxed">
                    If an internal assessment is ever clinically considered, its clinical purpose is explained in full detail beforehand. You have the absolute right to decline, pause, or withdraw consent at any time without altering your care.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h5 className="font-sans text-xs sm:text-sm font-semibold text-secondary flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    Inclusive Care for All Adults
                  </h5>
                  <p className="mt-1 text-xs text-body leading-relaxed">
                    Pelvic floor dysfunction affects people of all genders and walks of life—including men, women, athletes, and older adults. Our clinic provides non-judgmental, inclusive care tailored to every individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Scheduling Banner */}
        <div className="mt-8 rounded-2xl bg-secondary p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-semibold text-white">
              Schedule an In-Person Clinical Assessment
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Our clinical physical therapy team in Chennai evaluates your functional history and designs a gentle, individualized rehabilitation plan in complete confidence.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>Schedule Assessment</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

