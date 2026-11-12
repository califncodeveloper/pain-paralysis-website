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
    title: "Mild to Moderate Knee Osteoarthritis",
    description:
      "Individuals presenting with degenerative joint space narrowing seeking conservative non-surgical management to ease daily walking friction.",
  },
  {
    title: "Chronic Knee Joint Stiffness",
    description:
      "Patients experiencing persistent restriction in knee bending (flexion) or straightening (extension) associated with capsular tightness.",
  },
  {
    title: "Degenerative Meniscus Wear",
    description:
      "Non-acute mechanical strain on meniscal cushions where gentle joint unloading may alleviate compressive contact pressure.",
  },
  {
    title: "Weight-Bearing Ambulation Difficulty",
    description:
      "Individuals whose daily activity, standing tolerance, or stair climbing is limited by mechanical joint discomfort.",
  },
  {
    title: "Preference for Non-Invasive Care",
    description:
      "Patients looking to explore non-pharmacological, drug-free physical therapy approaches prior to considering invasive interventions.",
  },
];

const contraindications = [
  {
    title: "Acute Fractures or Unhealed Bone Trauma",
    description:
      "Active or recent bone fractures in the femur, tibia, fibula, or patella require complete orthopedic healing before traction.",
  },
  {
    title: "Active Joint Infection (Septic Arthritis)",
    description:
      "Infectious arthritis, cellulitis, or localized inflammatory infection with fever, heat, and severe redness prohibits mechanical traction.",
  },
  {
    title: "Severe Gross Ligamentous Instability",
    description:
      "Complete acute ruptures of the ACL, PCL, or collateral ligaments resulting in severe joint instability require specialized orthopedic review.",
  },
  {
    title: "Deep Vein Thrombosis (DVT) or Vascular Disease",
    description:
      "Suspected or diagnosed blood clots in the lower extremity or severe peripheral vascular compromise exclude mechanical strapping.",
  },
  {
    title: "Active Localized Bone Malignancies",
    description:
      "Neoplastic conditions or primary/metastatic bone lesions involving the knee joint area require specialized oncology clearance.",
  },
  {
    title: "Unstable Knee Arthroplasty Hardware",
    description:
      "Recent total knee replacement complications or loose prosthetic hardware without explicit orthopedic clearance preclude traction.",
  },
];

/**
 * KneeDecompressionSuitability Component
 * 2-column comparative layout detailing candidate indicators and clinical contraindications.
 */
export const KneeDecompressionSuitability: React.FC = () => {
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
          title="Patient Suitability &amp; Clinical Screening"
          description="Every patient undergoes an in-person assessment to evaluate candidacy, review medical history, and verify safety prior to therapy."
          align="center"
          theme="light"
          accent
        />

        {/* 2-Column Candidacy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Column 1: Favorable Candidate Profile */}
          <div className="flex flex-col rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-black/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                  Favorable Candidate Considerations
                </h3>
                <span className="text-xs text-body/80">Indications commonly reviewed for mechanical traction</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {candidateCriteria.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 flex-shrink-0 mt-0.5">
                    <UserCheck className="h-3 w-3" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-secondary">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <span className="text-xs text-body/80 block">
                <em>Candidacy is confirmed by physical therapists during the initial clinical examination.</em>
              </span>
            </div>
          </div>

          {/* Column 2: Precautions & Contraindications */}
          <div className="flex flex-col rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-black/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                <XCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                  Precautions &amp; Contraindications
                </h3>
                <span className="text-xs text-body/80">Conditions that preclude or require specialized medical clearance</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {contraindications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 flex-shrink-0 mt-0.5">
                    <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-secondary">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <span className="text-xs text-rose-700/80 block font-medium">
                <em>Patients presenting with red-flag symptoms are referred for immediate orthopedic evaluation.</em>
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Assessment Mandatory Callout */}
        <div className="mt-10 rounded-2xl bg-secondary text-white p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent flex-shrink-0">
                <Stethoscope className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-semibold text-white">
                  Mandatory In-Person Clinical Assessment
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
                  Treatment suitability cannot be determined over the phone. During your visit in Madhanandapuram, Chennai, our practitioners examine your knee mobility, review any existing X-rays or MRI scans, and discuss your rehabilitation history.
                </p>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary/90 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

