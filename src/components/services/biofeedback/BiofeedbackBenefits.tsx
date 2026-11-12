import React from "react";
import { 
  Brain, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  RefreshCw, 
  Activity, 
  AlertTriangle 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const clinicalBenefits = [
  {
    icon: Brain,
    title: "Active Patient Empowerment",
    description:
      "Shifts the patient from a passive recipient of therapy to an active participant in their own recovery, cultivating lifelong motor self-regulation and body awareness.",
  },
  {
    icon: CheckCircle2,
    title: "Objective Real-Time Verification",
    description:
      "Provides quantifiable visual waveforms and auditory feedback, eliminating uncertainty about whether a targeted muscle is successfully contracting or relaxing.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Proprioceptive Awareness",
    description:
      "Heightens internal kinesthetic perception of subtle muscle tension, enabling patients to detect and release subconscious bracing before pain spikes occur.",
  },
  {
    icon: ShieldCheck,
    title: "Drug-Free, Non-Invasive Modality",
    description:
      "Administered entirely with gentle skin-surface sensors; involves zero needles, pharmaceutical side effects, tissue incisions, or electric shock stimulation.",
  },
  {
    icon: RefreshCw,
    title: "Disruption of Maladaptive Guarding",
    description:
      "Assists in de-escalating chronic protective muscle spasms, helping to reset baseline resting tone and alleviate secondary strain on adjacent joints.",
  },
  {
    icon: Activity,
    title: "Synergistic Rehabilitation Integration",
    description:
      "Directly enhances physical therapy protocols, allowing therapists to pair sensor feedback with active therapeutic exercise and functional movement drills.",
  },
];

/**
 * BiofeedbackBenefits Component
 * 6-card clinical advantages checklist accompanied by an explicit limitations and realistic expectations panel.
 */
export const BiofeedbackBenefits: React.FC = () => {
  return (
    <Section
      id="benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Potential Clinical Benefits and Limitations of Biofeedback"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL ADVANTAGES &amp; BOUNDARIES"
          title="Potential Benefits &amp; Realistic Expectations"
          description="Understanding the evidence-based rehabilitative advantages of sensor-guided retraining alongside essential clinical limitations."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Clinical Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-primary/10 p-2.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60">
                      Advantage 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-secondary leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>Clinical Rehabilitation Goal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Limitations & Clinical Realities Notice */}
        <div className="mt-10 rounded-2xl bg-amber-500/10 p-6 sm:p-8 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-500/20 p-2.5 text-amber-800 flex-shrink-0 mt-0.5">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-amber-900">
                Essential Clinical Limitations &amp; Realistic Expectations
              </h4>
              <p>
                Biofeedback is an educational retraining technique, not an automatic cure. Clinical outcomes vary significantly depending on the nature and chronicity of the underlying neurological or musculoskeletal diagnosis, the extent of structural tissue damage, and the patient’s cognitive engagement.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-amber-900/90">
                <li>
                  <strong>Does not reverse organic structural lesions:</strong> Biofeedback cannot regenerate transected nerves, repair torn ligaments, or replace infarcted brain parenchyma.
                </li>
                <li>
                  <strong>Active engagement required:</strong> Unlike passive modalities, biofeedback requires active cognitive attention, receptive comprehension, and consistent practice during and between sessions.
                </li>
                <li>
                  <strong>Complementary to medical care:</strong> Biofeedback does not substitute for neurological consultations, essential pharmacological management, orthopedic surgery, or multidisciplinary rehabilitation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

