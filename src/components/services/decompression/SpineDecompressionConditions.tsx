import React from "react";
import { 
  AlertCircle, 
  Layers, 
  Activity, 
  GitFork, 
  Bone, 
  MoonStar,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

interface ConditionCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
}

const conditionsData: ConditionCard[] = [
  {
    icon: Layers,
    title: "Herniated & Bulging Discs",
    subtitle: "Intervertebral Disc Concerns",
    description:
      "Evaluated in individuals presenting with focal intervertebral disc concerns as identified during clinical practitioner assessment.",
    symptoms: ["Localized lumbar or cervical discomfort", "Discomfort with forward movement", "Functional movement restriction"],
  },
  {
    icon: GitFork,
    title: "Sciatica & Radiating Symptoms",
    subtitle: "Lower Extremity Discomfort",
    description:
      "Considered for individuals reporting discomfort radiating along the lower back, hip, or leg during physical evaluation.",
    symptoms: ["Discomfort traveling along the leg", "Sensations influenced by postural changes", "Lower back and leg stiffness"],
  },
  {
    icon: Bone,
    title: "Degenerative Disc Changes",
    subtitle: "Age-Related Spinal Changes",
    description:
      "Evaluated in patients presenting with stiffness and reduced spinal flexibility associated with age-related spinal changes.",
    symptoms: ["Dull ache in lower back or neck", "Stiffness after prolonged sitting", "Discomfort with extended standing"],
  },
  {
    icon: Activity,
    title: "Spinal Canal Stenosis Concerns",
    subtitle: "Postural Ambulation Discomfort",
    description:
      "Assessed individually for patients experiencing walking fatigue or discomfort related to canal narrowing.",
    symptoms: ["Lower extremity fatigue during walking", "Postural discomfort eased by resting", "Muscular stiffness in lumbar region"],
  },
  {
    icon: AlertCircle,
    title: "Posterior Facet Joint Strain",
    subtitle: "Posterior Joint Stiffness",
    description:
      "Evaluated in individuals presenting with localized tenderness and stiffness along the posterior spinal joints.",
    symptoms: ["Focal lower back tenderness", "Discomfort during backward movement", "Paraspinal muscle tension"],
  },
  {
    icon: MoonStar,
    title: "Mechanical Postural Strain",
    subtitle: "Occupational & Ergonomic Fatigue",
    description:
      "Considered for persistent spinal tightness and muscular fatigue related to repetitive occupational loading or desk posture.",
    symptoms: ["Ache following sustained desk work", "Restricted spinal flexibility", "Generalized postural tiredness"],
  },
];

/**
 * SpineDecompressionConditions Component
 * Reconstructs the 6-card "Conditions Addressed" grid from the original service detail structure.
 * Formulated with strictly compliant clinical language and neutral medical terminology.
 */
export const SpineDecompressionConditions: React.FC = () => {
  return (
    <Section
      id="conditions-addressed"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions Addressed by Spine Decompression"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EVALUATED INDICATIONS"
          title="Spinal Conditions Evaluated for Traction"
          description="Mechanical spinal decompression may be considered as an adjunct modality for individuals presenting with evaluated musculoskeletal spine conditions."
          align="center"
          theme="light"
          accent
        />

        {/* 6 Conditions Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {conditionsData.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/40 group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white transition-colors duration-300 group-hover:bg-primary">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-[11px] font-semibold text-secondary/70">
                      Condition 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary leading-snug">
                    {condition.title}
                  </h3>
                  <p className="text-xs font-medium text-primary tracking-wide uppercase mt-0.5">
                    {condition.subtitle}
                  </p>

                  {/* Clinical Description */}
                  <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {condition.description}
                  </p>
                </div>

                {/* Typical Symptoms Checklist */}
                <div className="mt-6 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/60 block mb-2">
                    Common Symptoms:
                  </span>
                  <ul className="space-y-1.5">
                    {condition.symptoms.map((symptom, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-body">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Note on Medical Evaluation */}
        <div className="mt-10 rounded-xl bg-secondary/5 p-4 sm:p-5 border border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-body text-center sm:text-left">
            <strong className="text-secondary">Clinical Consultation Notice:</strong> Suitability for mechanical spinal traction and any necessary clinical investigations are determined through an in-person assessment by an appropriately qualified practitioner.
          </p>
          <Link
            href="/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200"
          >
            <span>Schedule Consultation</span>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

