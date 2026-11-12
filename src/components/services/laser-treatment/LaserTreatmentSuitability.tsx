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
    title: "Localized Soft Tissue Irritation",
    description:
      "Individuals presenting with acute or subacute muscle sprains, ligamentous strain, or tendon soreness seeking non-invasive recovery support.",
  },
  {
    title: "Persistent Joint Stiffness & Aches",
    description:
      "Patients experiencing osteoarthritis-related stiffness or periarticular tightness where easing inflammation supports functional movement.",
  },
  {
    title: "Sports & Occupational Overuse Injuries",
    description:
      "Athletes and active individuals experiencing repetitive strain, tennis elbow, runner's knee, or Achilles irritation.",
  },
  {
    title: "Post-Surgical Healing Support",
    description:
      "Patients with mature, closed surgical incisions seeking to improve scar pliability and reduce surrounding localized edema.",
  },
  {
    title: "Preference for Drug-Free Outpatient Care",
    description:
      "Individuals seeking non-pharmacological, non-invasive physical therapy options prior to or alongside medical management.",
  },
];

const contraindications = [
  {
    title: "Active Localized Malignancy or Tumors",
    description:
      "Direct application over primary neoplasms, active malignant lesions, or undiagnosed tissue masses is strictly prohibited.",
  },
  {
    title: "Pregnancy (Abdominal & Pelvic Regions)",
    description:
      "Laser therapy is contraindicated over the pregnant uterus, lower abdomen, or lumbosacral spine during pregnancy.",
  },
  {
    title: "Direct Irradiation of Endocrine Glands",
    description:
      "Therapeutic laser must not be directed over the anterior neck, thyroid, parathyroid, or other endocrine structures.",
  },
  {
    title: "Active Hemorrhaging or Bleeding Disorders",
    description:
      "Direct application over active bleeding sites, severe coagulopathies, or unhealed hematomas is contraindicated due to circulatory stimulation.",
  },
  {
    title: "Photosensitizing Medications",
    description:
      "Patients currently taking pharmaceutical agents known to induce abnormal cutaneous photosensitivity require physician clearance.",
  },
  {
    title: "Direct Optical Exposure (Eyes)",
    description:
      "Direct or scattered optical beam exposure to the eyes is dangerous. Certified wavelength-specific optical goggles are mandatory for everyone present.",
  },
];

/**
 * LaserTreatmentSuitability Component
 * 2-column comparative layout detailing candidate indicators and clinical contraindications.
 */
export const LaserTreatmentSuitability: React.FC = () => {
  return (
    <Section
      id="patient-suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Patient Suitability and Clinical Contraindications"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL CANDIDACY"
          title="Patient Suitability &amp; Safety Screening"
          description="Careful clinical screening ensures laser therapy is applied appropriately, safely, and comfortably."
          align="center"
          theme="light"
          accent
        />

        {/* 2-Column Grid: Candidates vs Contraindications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Column 1: Favorable Candidates */}
          <div className="rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 pb-5 border-b border-black/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-primary">
                <CheckCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                  Favorable Candidate Considerations
                </h3>
                <p className="text-xs text-body">
                  Presentations where adjunctive laser therapy is routinely evaluated
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {candidateCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 text-primary flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-secondary">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-white p-4 border border-black/5 flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
              <p className="text-xs text-secondary/90 leading-relaxed">
                Suitability is confirmed following a comprehensive physical assessment, palpation, and symptom review.
              </p>
            </div>
          </div>

          {/* Column 2: Precautions & Contraindications */}
          <div className="rounded-2xl bg-amber-50/40 p-6 sm:p-8 border border-amber-200/60 shadow-sm">
            <div className="flex items-center gap-3 pb-5 border-b border-amber-200/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700">
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                  Precautions &amp; Contraindications
                </h3>
                <p className="text-xs text-body">
                  Conditions requiring physician clearance or prohibiting laser therapy
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {contraindications.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/15 p-1 text-amber-700 flex-shrink-0 mt-0.5">
                    <XCircle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-secondary">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-white p-4 border border-amber-200/60 flex items-center gap-3">
              <Stethoscope className="h-5 w-5 text-amber-700 flex-shrink-0" aria-hidden="true" />
              <p className="text-xs text-secondary/90 leading-relaxed">
                If you have an active medical condition or take photosensitizing medications, disclose them prior to therapy.
              </p>
            </div>
          </div>
        </div>

        {/* Assessment Callout Banner */}
        <div className="mt-12 rounded-2xl bg-primary/10 p-6 sm:p-8 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-primary p-3 text-white flex-shrink-0 shadow-md shadow-primary/25">
              <Calendar className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                Mandatory In-Person Clinical Assessment
              </h4>
              <p className="text-xs sm:text-sm text-body leading-relaxed max-w-xl">
                Every laser treatment plan begins with an in-person physical examination to evaluate tissue irritability, verify eligibility, and calibrate optical parameters for safe, targeted care.
              </p>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-[1.02]"
          >
            <span>Book Clinical Assessment</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

