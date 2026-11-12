import React from "react";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Compass, 
  HeartHandshake, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  UserCheck 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const benefitsData = [
  {
    icon: TrendingUp,
    title: "Supporting Functional Mobility & Independence",
    description:
      "Assists individuals in developing safer, more efficient motor patterns to navigate their home and community environments within their functional abilities.",
  },
  {
    icon: Compass,
    title: "Practicing Balance & Postural Stability",
    description:
      "Retrains static and dynamic equilibrium responses, helping patients develop stronger postural control and reducing anxiety related to unsteadiness.",
  },
  {
    icon: Sparkles,
    title: "Improving Movement Confidence & Stamina",
    description:
      "Encourages active patient participation and functional stamina through graded, achievable motor practice that builds everyday movement confidence.",
  },
  {
    icon: Layers,
    title: "Managing Muscle Tone & Joint Range",
    description:
      "Utilizes sustained stretching, therapeutic positioning, and active-assisted movement to help maintain joint mobility and mitigate soft-tissue tightness.",
  },
  {
    icon: UserCheck,
    title: "Personalized Functional Strategies",
    description:
      "Develops adaptive movement techniques and explores appropriate assistive mobility devices tailored specifically to the patient's physical strengths.",
  },
  {
    icon: HeartHandshake,
    title: "Caregiver Education & Safe Handling",
    description:
      "Empowers family members and caregivers with safe, ergonomic transfer techniques, positioning methods, and proactive fall prevention guidance.",
  },
];

/**
 * NeuroPhysiotherapyBenefits Component
 * Displays 6 conservative rehabilitation benefits and a prominent
 * clinical limitations notice detailing realistic expectations.
 */
export const NeuroPhysiotherapyBenefits: React.FC = () => {
  return (
    <Section
      id="benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Potential Benefits and Clinical Limitations"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="REHABILITATION GOALS & VALUE"
          title="Potential Benefits of Neuro Physiotherapy"
          description="Supportive physical rehabilitation focuses on functional gains, daily movement confidence, and individualized mobility strategies."
          align="center"
        />

        {/* 6 Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div>
                  <div className="rounded-xl bg-primary/10 p-3 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-2 text-xs text-primary font-medium">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span>Personalized functional goal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Clinical Limitations & Ethical Boundaries Panel */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 lg:p-10 border border-amber-200/80 shadow-md">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-600 flex-shrink-0">
              <AlertTriangle className="h-8 w-8" aria-hidden="true" />
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  CRITICAL MEDICAL NOTICE
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary mt-1">
                  Clinical Limitations &amp; Realistic Expectations
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-body leading-relaxed">
                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h4 className="font-heading text-sm font-semibold text-secondary mb-1">
                    Individual Response Variations
                  </h4>
                  <p>
                    Rehabilitation outcomes differ substantially between individuals. Motor progress depends on the nature, site, and severity of the neurological injury, the time elapsed since onset, patient overall health, cardiovascular endurance, and cognitive engagement.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h4 className="font-heading text-sm font-semibold text-secondary mb-1">
                    No Guarantees of Full Recovery
                  </h4>
                  <p>
                    Physical therapy does not guarantee complete reversal of paralysis, spontaneous walking, or restoration of pre-injury neurological status. It serves to optimize available motor function and train safe movement adaptations.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h4 className="font-heading text-sm font-semibold text-secondary mb-1">
                    No Nerve Regeneration Claims
                  </h4>
                  <p>
                    Rehabilitation does not physically regenerate severed peripheral nerves or structurally replace infarcted or damaged central nervous tissue. Motor re-education focuses on behavioral adaptation and neuroplastic training of surviving pathways.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-soft p-4 border border-black/5">
                  <h4 className="font-heading text-sm font-semibold text-secondary mb-1">
                    Complements Prescribed Medical Care
                  </h4>
                  <p>
                    Neuro physiotherapy does not replace ongoing medical oversight, neurologist consultations, anti-spasticity medications, radiological monitoring, or neurosurgical procedures. Always consult your medical physician regarding prescriptions and overall management.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-secondary/70 italic">
                * All clinical indications, rehabilitation techniques, and progress projections must be evaluated and reviewed by the clinic&apos;s qualified physical therapy team.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
