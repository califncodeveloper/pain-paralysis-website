import React from "react";
import { 
  Activity, 
  Brain, 
  Compass, 
  Footprints, 
  Layers, 
  ShieldAlert, 
  Users 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ConditionItem {
  icon: React.ElementType;
  title: string;
  category: string;
  presentation: string;
  rehabilitationRelevance: string;
  focusArea: string;
}

const conditionsData: ConditionItem[] = [
  {
    icon: Brain,
    title: "Stroke-Related Movement Difficulties",
    category: "Cerebrovascular Rehabilitation",
    presentation:
      "Reduced voluntary movement, muscle weakness, or asymmetric coordination following ischemic or hemorrhagic stroke.",
    rehabilitationRelevance:
      "Structured task-specific movement practice assists patients in encouraging active motor recruitment, facilitating bilateral coordination, and developing functional compensation strategies under clinical supervision.",
    focusArea: "Motor recruitment & task practice",
  },
  {
    icon: Layers,
    title: "Hemiplegia & Reduced Limb Control",
    category: "Unilateral Motor Support",
    presentation:
      "Significant weakness, reduced control, or partial paralysis affecting one side of the body, limiting arm reaching, grasping, or leg weight-bearing.",
    rehabilitationRelevance:
      "Targeted physical exercises focus on upper-extremity reaching tasks, scapular stability, pelvic alignment, and lower-extremity stepping drills to support daily movement tasks.",
    focusArea: "Unilateral motor coordination",
  },
  {
    icon: Compass,
    title: "Balance & Postural Coordination Difficulties",
    category: "Proprioception & Equilibrium",
    presentation:
      "Postural instability, unsteady sitting or standing, diminished sensory awareness, and heightened fear of falls.",
    rehabilitationRelevance:
      "Graded balance challenges, core stabilization exercises, and sensory orientation drills help retrain equilibrium responses and improve postural confidence during static and dynamic activities.",
    focusArea: "Static & dynamic balance",
  },
  {
    icon: Users,
    title: "Mobility & Daily Transfer Limitations",
    category: "Functional Independence",
    presentation:
      "Difficulty with bed mobility (rolling, bridging), transitioning from sit-to-stand, wheelchair transfers, or standing endurance.",
    rehabilitationRelevance:
      "Movement coaching breaks complex transfers into manageable motor components, training safe biomechanical techniques and educating family caregivers to assist safely.",
    focusArea: "Bed mobility & safe transfers",
  },
  {
    icon: Activity,
    title: "Muscle Weakness & Altered Muscle Tone",
    category: "Tone & Muscle Management",
    presentation:
      "Muscle weakness combined with altered tone—including hypertonia, spasticity, or muscle stiffness—that impairs joint range and movement comfort.",
    rehabilitationRelevance:
      "Therapeutic positioning, sustained gentle stretching, active-assisted exercises, and joint mobilization help maintain soft-tissue length, reduce contracture risks, and support functional joint alignment.",
    focusArea: "Tone moderation & flexibility",
  },
  {
    icon: Footprints,
    title: "Functional Gait & Stepping Challenges",
    category: "Locomotor Retraining",
    presentation:
      "Altered walking patterns, foot drop, circumduction gait, reduced stride symmetry, or reliance on assistive walking aids.",
    rehabilitationRelevance:
      "Gait re-education focuses on stance-phase stability, swing-phase foot clearance, weight transference, and the appropriate selection and safe use of canes, walkers, or orthotic supports.",
    focusArea: "Stance stability & gait pacing",
  },
];

/**
 * NeuroPhysiotherapyConditions Component
 * Displays 6 structured cards of evaluated patient groups and rehabilitation needs,
 * accompanied by a comprehensive Non-Diagnostic Medical Scope Notice.
 */
export const NeuroPhysiotherapyConditions: React.FC = () => {
  return (
    <Section
      id="conditions-evaluated"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions and Rehabilitation Needs Evaluated"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PATIENT GROUPS & REHABILITATION NEEDS"
          title="Rehabilitation Areas Evaluated in Neuro Physiotherapy"
          description="Outpatient physical rehabilitation is customized for individuals navigating movement limitations resulting from central or peripheral neurological impairments."
          align="center"
        />

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditionsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="rounded-full bg-secondary/5 px-3 py-1 text-xs font-semibold text-secondary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="rounded-xl bg-primary/10 p-2.5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Clinical Presentation */}
                  <div className="mt-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60">
                      Clinical Presentation
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm text-body leading-relaxed">
                      {item.presentation}
                    </p>
                  </div>

                  {/* Rehabilitation Relevance */}
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Rehabilitation Approach
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-body/90 leading-relaxed">
                      {item.rehabilitationRelevance}
                    </p>
                  </div>
                </div>

                {/* Focus Area Pill */}
                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-secondary/70">
                  <span className="font-medium">Primary Focus:</span>
                  <span className="font-semibold text-secondary bg-surface-soft px-2.5 py-1 rounded-md border border-black/5">
                    {item.focusArea}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Non-Diagnostic Clinical Scope Notice */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 flex-shrink-0">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-base font-semibold text-secondary">
                Non-Diagnostic Clinical Disclaimer &amp; Assessment Requirements
              </h4>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                The conditions and presentations outlined above describe functional movement areas addressed during physical rehabilitation sessions at Pain &amp; Paralysis Clinic. Neuro physiotherapy is <strong>not a diagnostic service</strong> and does not replace comprehensive medical evaluations, neuroimaging (MRI/CT), electromyography, or consultation with a medical neurologist. Patients must have their underlying medical diagnosis confirmed by an authorized physician. Rehabilitation appropriateness and therapeutic intensity are determined during an in-person clinical assessment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
