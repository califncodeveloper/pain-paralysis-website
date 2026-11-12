import React from "react";
import { 
  Activity, 
  Layers, 
  Zap, 
  ShieldAlert, 
  ChevronRight,
  TrendingUp,
  Brain,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ConditionCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  subtitle: string;
  description: string;
  observations: string[];
}

const conditionsData: ConditionCard[] = [
  {
    icon: Brain,
    title: "Stroke & Hemiplegia Rehabilitation",
    subtitle: "Motor Recovery & Voluntary Activation",
    description:
      "Evaluated in individuals recovering from stroke or hemiplegia to assess residual voluntary motor unit recruitment in paretic upper and lower extremities.",
    observations: [
      "Asymmetrical limb recruitment compared to the unaffected side",
      "Delayed motor onset timing during attempted movement",
      "Difficulty sustaining voluntary motor unit firing without early fatigue",
    ],
  },
  {
    icon: Layers,
    title: "Peripheral Nerve Irritation Support",
    subtitle: "Radiculopathy & Spinal Nerve Weakness",
    description:
      "Considered for patients experiencing muscle weakness, altered sensation, or motor deficits associated with cervical or lumbar spinal nerve root irritation.",
    observations: [
      "Decreased motor recruitment amplitude across myotomal distributions",
      "Compensatory muscular guarding around irritated spinal segments",
      "Persistent weakness despite alleviation of acute radicular pain",
    ],
  },
  {
    icon: TrendingUp,
    title: "Muscle Weakness & Disuse Atrophy",
    subtitle: "Post-Immobilization & Post-Surgical Recovery",
    description:
      "Assessed following prolonged limb casting, joint immobilization, or surgical convalescence to quantify motor unit recruitment deficits and muscle inhibition.",
    observations: [
      "Measurable reduction in motor unit firing amplitude during contraction",
      "Arthrogenic muscle inhibition preventing full volitional effort",
      "Rapid neuromuscular fatigue during light functional loading",
    ],
  },
  {
    icon: Zap,
    title: "Neuromuscular Incoordination",
    subtitle: "Motor Timing & Agonist-Antagonist Balance",
    description:
      "Evaluated in individuals demonstrating abnormal co-contraction, timing delays, or movement dyssynergia during gait or upper-limb tasks.",
    observations: [
      "Simultaneous co-contraction of opposing agonist and antagonist muscles",
      "Premature muscular exhaustion during repetitive motor tasks",
      "Compensatory recruitment of secondary muscles to accomplish movement",
    ],
  },
  {
    icon: Sparkles,
    title: "Facial Weakness & Peripheral Palsy",
    subtitle: "Neuromuscular Retraining Guidance",
    description:
      "Utilized to detect subtle microvolt motor unit activity during physical rehabilitation for conditions like Bell's palsy or peripheral facial nerve weakness.",
    observations: [
      "Asymmetrical facial movement during voluntary smiling or eye closure",
      "Sub-threshold motor recruitment undetectable to visual inspection alone",
      "Guidance for biofeedback-assisted facial neuromuscular retraining",
    ],
  },
  {
    icon: Activity,
    title: "Paralysis & Complex Motor Deficits",
    subtitle: "Baseline Functional Mapping",
    description:
      "Considered for individuals undergoing intensive neuro-rehabilitation to provide objective baseline electrical metrics for longitudinal recovery tracking.",
    observations: [
      "Profound motor recruitment deficit requiring sensitive microvolt detection",
      "Tracking minute increments in motor unit recruitment across therapy sessions",
      "Directing customized assistive exercise and passive-to-active transitions",
    ],
  },
];

/**
 * HighFrequencyEMGConditions Component
 * 6-card grid detailing clinical applications evaluated with surface electromyography.
 */
export const HighFrequencyEMGConditions: React.FC = () => {
  return (
    <Section
      id="conditions"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions and Clinical Indications Evaluated with High Frequency EMG"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL APPLICATIONS"
          title="Conditions Evaluated With High Frequency EMG"
          description="Explore common neuromuscular indications and motor recovery presentations evaluated using non-invasive surface electromyography to guide physical therapy."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditionsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 hover:bg-white"
              >
                <div>
                  {/* Card Icon & Subtitle */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-secondary/5 p-3 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {item.subtitle}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-secondary leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="mt-4 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>

                  {/* Characteristic Observations */}
                  <div className="mt-5 space-y-2 border-t border-black/5 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/70">
                      Evaluated Indicators:
                    </span>
                    <ul className="space-y-1.5">
                      {item.observations.map((obs, obsIdx) => (
                        <li key={obsIdx} className="flex items-start gap-2 text-xs text-body leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                          <span>{obs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Assessment Trigger */}
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                  <span>In-Person Consultation Required</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Scope & Non-Diagnostic Notice */}
        <div className="mt-12 rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-heading text-base font-semibold text-secondary uppercase tracking-wider">
                Clinical Evaluation &amp; Non-Diagnostic Scope Notice
              </h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                The conditions outlined above represent clinical presentations where surface electromyography may serve as an observational assessment aid to structure physical rehabilitation programs. High Frequency EMG does not provide a definitive medical diagnosis, nor does it replace physician neurological examinations, neuroimaging (MRI/CT), or diagnostic electrodiagnostic studies (such as needle EMG or Nerve Conduction Studies). Suitability is determined during an in-person physical therapy consultation.
              </p>
            </div>
            <div className="flex-shrink-0 sm:self-center mt-2 sm:mt-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Book Evaluation</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

