import React from "react";
import { Brain, ShieldAlert } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const evaluatedConditions = [
  {
    title: "Post-Stroke Hemiplegia & Hemiparesis",
    description:
      "Assists in retraining unilateral arm reach or leg stepping following ischemic or hemorrhagic stroke, supporting early functional gait and transfer practice.",
  },
  {
    title: "Incomplete Spinal Cord Injury",
    description:
      "For patients with preserved motor or sensory pathways, guided robotic motion helps activate dormant spinal reflex circuits and retrain reciprocal stepping patterns.",
  },
  {
    title: "Paralysis & Severe Motor Weakness",
    description:
      "Provides motorized movement for limbs with minimal voluntary muscle activity, maintaining joint range of motion, reducing spasticity, and promoting circulation.",
  },
  {
    title: "Traumatic Brain Injury (TBI) Recovery",
    description:
      "Structured task-oriented repetition assists in re-establishing neuromuscular coordination, postural balance, and bilateral movement symmetry.",
  },
  {
    title: "Parkinsonian & Movement Disorders",
    description:
      "Rhythmic, sensor-driven movement practice addresses stride freezing, step cadence irregularities, and postural instability under therapist supervision.",
  },
  {
    title: "Post-Neurosurgical Reconditioning",
    description:
      "Following spine or brain surgery, progressive robotic assistance provides controlled, safe mobilization without overstressing recovering tissues.",
  },
];

export const RoboticNeuroConditions: React.FC = () => {
  return (
    <Section
      id="robotic-conditions"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions Evaluated for Robotic Neuro Rehabilitation"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="CLINICAL INDICATIONS"
          title="Neurological Conditions Evaluated for Robotic Therapy"
          description="Robotic physical therapy is indicated as an adjunctive, technology-assisted intervention for individuals presenting with significant mobility limitations."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {evaluatedConditions.map((condition) => (
            <div
              key={condition.title}
              className="rounded-2xl border border-black/5 bg-surface-soft p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-accent flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary">
                    {condition.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-text/80 leading-relaxed">
                  {condition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Diagnostic Scope Notice */}
        <div className="mt-8 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">Non-Diagnostic &amp; Individualized Treatment Notice:</strong>
            <span>
              The clinical categories listed above represent conditions evaluated for adjunctive robotic physical therapy. Robotic therapy is not a standalone cure or surgical replacement. Individual candidacy, intensity, and achievable functional outcomes depend strictly upon clinical assessment by our rehabilitation team.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

