import React from "react";
import { 
  Activity, 
  Brain, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  Info,
  Scale
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ApplicationItem {
  icon: React.ElementType;
  title: string;
  category: string;
  targetFocus: string;
  clinicalRelevance: string;
  evaluatedArea: string;
}

const applicationsData: ApplicationItem[] = [
  {
    icon: Brain,
    title: "Neurological Muscle Spasticity & Hypertonicity",
    category: "Neurological Rehabilitation",
    targetFocus: "Hypertonic muscle tone, upper motor neuron patterns, and post-stroke limb spasticity.",
    clinicalRelevance:
      "Provides real-time visual and auditory proof of resting muscle tone. Patients learn to recognize involuntary muscle guarding and practice conscious relaxation techniques to down-train hyperactive motor units.",
    evaluatedArea: "Conscious tone down-training",
  },
  {
    icon: Activity,
    title: "Post-Stroke Motor Re-education & Paresis",
    category: "Neuro-Rehabilitation",
    targetFocus: "Weakened or paretic limb musculature following cerebrovascular accidents or focal lesions.",
    clinicalRelevance:
      "Captures and amplifies trace voluntary motor unit action potentials that may be imperceptible by observation alone. Patients receive immediate confirmation of voluntary effort, fostering neuroplastic pathway retraining.",
    evaluatedArea: "Trace motor unit recruitment",
  },
  {
    icon: Headphones,
    title: "Chronic Tension Headaches & Pericranial Guarding",
    category: "Myofascial Tension Care",
    targetFocus: "Frontalis, temporalis, suboccipital, and upper trapezius sustained muscular contraction.",
    clinicalRelevance:
      "Assists individuals in identifying subtle, continuous facial and neck muscle clenching. With sensor feedback, patients learn progressive relaxation strategies that help interrupt chronic headache cycles.",
    evaluatedArea: "Pericranial tension dampening",
  },
  {
    icon: Scale,
    title: "Cervical Dystonia & Postural Asymmetry",
    category: "Postural & Movement Retraining",
    targetFocus: "Sternocleidomastoid, scalene, and levator scapulae imbalances and compensatory posture.",
    clinicalRelevance:
      "Enhances proprioceptive awareness of bilateral muscle asymmetry. Real-time visual comparison helps patients perceive asymmetrical muscle contraction and coordinate postural correction drills.",
    evaluatedArea: "Bilateral symmetry coaching",
  },
  {
    icon: Sparkles,
    title: "Post-Surgical Disuse Atrophy & Arthrogenic Inhibition",
    category: "Orthopedic Rehabilitation",
    targetFocus: "Quadriceps or shoulder girdle muscle shutdown following joint surgery or immobilization.",
    clinicalRelevance:
      "Overcomes arthrogenic muscle inhibition (AMI) by providing instant bioelectrical confirmation when target muscle fibers fire, encouraging patient confidence and motor recruitment during isometric exercise.",
    evaluatedArea: "Inhibition override & recruitment",
  },
  {
    icon: CheckCircle2,
    title: "Chronic Musculoskeletal Pain & Protective Guarding",
    category: "Musculoskeletal Rehabilitation",
    targetFocus: "Persistent lumbar, thoracic, or pelvic muscle bracing perpetuating discomfort cycles.",
    clinicalRelevance:
      "Helps patients identify and voluntarily release protective muscle bracing patterns, restoring functional movement fluidity and breaking the self-reinforcing pain-spasm-pain cycle.",
    evaluatedArea: "Protective bracing mitigation",
  },
];

/**
 * BiofeedbackApplications Component
 * 6-card grid detailing evaluated indications and rehabilitation applications.
 */
export const BiofeedbackApplications: React.FC = () => {
  return (
    <Section
      id="applications"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Applications and Evaluated Indications for Biofeedback"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL APPLICATIONS"
          title="Evaluated Indications & Rehabilitation Areas"
          description="Biofeedback is utilized as an adjunctive, sensor-guided learning tool across diverse neurological, orthopedic, and tension-related conditions."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Indications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 hover:bg-white"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="rounded-xl bg-secondary/5 p-2.5 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary leading-snug">
                    {item.title}
                  </h3>

                  {/* Target Focus */}
                  <div className="mt-2 text-xs font-medium text-body/80 bg-white/80 rounded-lg p-2.5 border border-black/5">
                    <strong className="text-secondary font-semibold">Target Presentation: </strong>
                    {item.targetFocus}
                  </div>

                  {/* Clinical Relevance Narrative */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.clinicalRelevance}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="text-secondary/70 font-medium">Rehabilitation Goal:</span>
                  <span className="font-semibold text-primary">{item.evaluatedArea}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Non-Diagnostic Scope Notice */}
        <div className="mt-10 rounded-2xl bg-secondary/5 p-5 sm:p-6 border border-secondary/15">
          <div className="flex items-start gap-3.5">
            <Info className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm text-body leading-relaxed">
              <strong className="font-semibold text-secondary block mb-1">
                Non-Diagnostic Clinical Scope Notice
              </strong>
              The applications listed above represent functional rehabilitation targets where sensor-guided feedback may assist patient motor retraining and symptom management. Biofeedback does not cure underlying pathology, reverse structural neurological damage, or replace comprehensive medical evaluations. Candidacy is determined on an individual basis during an in-person physical therapy consultation.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
