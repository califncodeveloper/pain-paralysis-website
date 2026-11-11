import React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ConditionItem {
  title: string;
  category: string;
  description: string;
  observations: string[];
}

const conditionsData: ConditionItem[] = [
  {
    title: "Walking Asymmetry & Post-Injury Limping",
    category: "Locomotion Asymmetry",
    description:
      "Compensatory limp patterns and unequal stride timing developed after lower limb injury, ligament strain, or fracture healing.",
    observations: ["Shortened stance on affected side", "Trunk lean compensation", "Altered swing cadence"],
  },
  {
    title: "Lower Extremity Joint Discomfort",
    category: "Joint Biomechanics",
    description:
      "Persistent discomfort in the hips, knees, or ankles during walking, often influenced by improper joint alignment or load distribution.",
    observations: ["Knee valgus or varus deviation", "Hip internal rotation bias", "Reduced ankle mobility"],
  },
  {
    title: "Foot Arch & Plantar Mechanics",
    category: "Foot-Ankle Dynamics",
    description:
      "Biomechanical variations including excessive pronation, rigid high arches, or plantar surface pressure concentrations.",
    observations: ["Mid-foot collapse during loading", "Delayed heel lift-off", "Uneven plantar pressure zones"],
  },
  {
    title: "Post-Surgical Movement Reconditioning",
    category: "Rehabilitation Review",
    description:
      "Evaluating weight-bearing confidence, stride symmetry, and joint mobility following hip replacement, knee arthroplasty, or ligament repair.",
    observations: ["Bilateral weight transfer hesitation", "Reduced peak knee flexion", "Step-to-step variability"],
  },
  {
    title: "Neurological Locomotion Challenges",
    category: "Neuromuscular Support",
    description:
      "Observing walking adaptations in individuals managing post-stroke hemiparesis, Parkinsonian gait, or neuropathy-related sensory deficits.",
    observations: ["Circumduction swing pattern", "Reduced foot clearance", "Narrow or wide-base stance"],
  },
  {
    title: "Spinal & Pelvic Kinetic Compensations",
    category: "Axial Mechanics",
    description:
      "Assessing how leg length discrepancies, pelvic torsion, or sacroiliac joint stiffness may contribute to lumbar spine movement stress.",
    observations: ["Lateral pelvic tilt during stance", "Excessive lumbar lordosis in push-off", "Rotational trunk asymmetry"],
  },
];

/**
 * GaitAnalysisConditions Component
 * 6-card grid detailing conditions and movement patterns evaluated during 3D Gait Analysis.
 *
 * Adheres to:
 * - Approved Design System: 3-column desktop grid, soft surface background, Marcellus SC H3, Poppins body
 * - Medical Compliance (Phase 22): Educational indications without diagnostic promises or cure guarantees.
 */
export const GaitAnalysisConditions: React.FC = () => {
  return (
    <Section
      id="conditions-evaluated"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions and Movement Patterns Evaluated"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ASSESSMENT INDICATIONS"
          title="Conditions and Movement Patterns Evaluated"
          description="Common physical concerns and locomotion adaptations evaluated during outpatient biomechanical consultations."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Clinical Disclaimer Notice */}
        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-white p-4 sm:p-5 border border-primary/20 shadow-sm flex items-start gap-3.5">
          <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-body leading-relaxed">
            <span className="font-semibold text-secondary">Non-Diagnostic Clinical Notice: </span>
            Gait analysis is an observational assessment aid that measures movement patterns to support multidisciplinary rehabilitation planning. It does not replace independent radiological diagnostics, neurological workups, or medical pathology evaluations.
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditionsData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
            >
              <div>
                <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                  {item.category}
                </span>

                <h3 className="mt-4 font-heading text-lg font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                  {item.description}
                </p>

                {/* Clinical Observations */}
                <div className="mt-4 pt-3 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70">
                    Typical Movement Indicators
                  </span>
                  <ul className="mt-2 space-y-1 text-xs text-body/90">
                    {item.observations.map((obs, obsIdx) => (
                      <li key={obsIdx} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Navigation */}
              <div className="mt-6 pt-4 border-t border-black/5">
                <Link
                  href="#cta"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  <span>Discuss during consultation</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
