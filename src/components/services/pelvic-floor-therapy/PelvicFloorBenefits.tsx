import React from "react";
import { 
  Check, 
  Brain, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  AlertOctagon,
  Layers
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const clinicalGoals = [
  {
    icon: Brain,
    title: "Supporting Muscle Awareness & Proprioception",
    description:
      "Helps patients perceive and consciously control deep pelvic floor structures, bridging the gap between involuntary reflex habits and voluntary functional recruitment.",
  },
  {
    icon: Clock,
    title: "Improving Coordination & Relaxation Timing",
    description:
      "Trains muscles to contract efficiently during moments of physical exertion and release completely during voiding or rest, restoring healthy muscle excursion.",
  },
  {
    icon: ShieldCheck,
    title: "Supporting Functional Continence & Routine",
    description:
      "Provides structured behavioral strategies, urge-delaying techniques, and pelvic sphincter conditioning to manage involuntary leakage episodes during daily tasks.",
  },
  {
    icon: Sparkles,
    title: "Releasing Chronic Muscular Tension",
    description:
      "For hypertonic presentations, focused downtraining, relaxation drills, and diaphragmatic breathing help reduce persistent muscle guarding and localized discomfort.",
  },
  {
    icon: Layers,
    title: "Integrating Deep Lumbo-Pelvic Core Stability",
    description:
      "Connects pelvic muscle activation with the diaphragm and deep abdominal stabilizers, enhancing spinal support during bending, lifting, and transitional movements.",
  },
  {
    icon: Smile,
    title: "Building Confidence in Daily & Social Activities",
    description:
      "Equips individuals with self-management knowledge and reliable physical strategies, reducing anxiety associated with coughing, exercising, or traveling.",
  },
];

/**
 * PelvicFloorBenefits Component
 * 6-card conservative rehabilitation goals checklist with comprehensive
 * clinical limitations notice.
 */
export const PelvicFloorBenefits: React.FC = () => {
  return (
    <Section
      id="benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Potential Clinical Goals and Limitations"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CONSERVATIVE REHABILITATION GOALS"
          title="Potential Benefits & Realistic Expectations"
          description="Pelvic floor therapy focuses on functional neuromuscular re-education, self-management, and quality-of-life support tailored to each patient's baseline."
          align="center"
        />

        {/* 6 Structured Goals Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicalGoals.map((goal, idx) => {
            const IconComponent = goal.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
              >
                <div>
                  <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                    {goal.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-body">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Conservative functional goal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Clinical Limitations Notice */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-red-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="rounded-xl bg-red-50 p-3 text-red-600 flex-shrink-0 border border-red-200">
              <AlertOctagon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-3">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-red-950">
                Ethical Practice Disclosures &amp; Clinical Limitations
              </h4>
              <p className="text-xs sm:text-sm text-red-950/85 leading-relaxed">
                While pelvic floor physical therapy offers meaningful functional support, patient outcomes vary significantly based on the underlying etiology, chronicity of symptoms, tissue integrity, overall health, and adherence to prescribed home exercises.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-red-950/80 pt-1">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-700">•</span>
                  <span><strong>No Incontinence Guarantees:</strong> Therapy does not guarantee complete cessation of all urinary or bowel leakage episodes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-700">•</span>
                  <span><strong>No Permanent Pain Cure:</strong> Chronic pelvic discomfort may involve complex systemic, neural, or visceral factors that require multidisciplinary medical management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-700">•</span>
                  <span><strong>Not a Surgical Replacement:</strong> Structural ligamentous tears, severe uterine or rectal prolapse (Grade 3/4), or active infections require physician evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-700">•</span>
                  <span><strong>Active Participation Required:</strong> Neuromuscular retraining relies upon consistent patient engagement and daily repetition at home.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

