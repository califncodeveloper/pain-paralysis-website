import React from "react";
import { 
  Move, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  Zap,
  CheckCircle
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface BenefitCard {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  rationale: string;
}

const benefitsData: BenefitCard[] = [
  {
    icon: Move,
    title: "Joint Assessment & Manual Mobilization",
    description:
      "Hands-on evaluation and articulatory techniques applied to assess and address movement restrictions across spinal segments.",
    rationale:
      "Focuses on manual articulatory input along restricted segments during the clinical session.",
  },
  {
    icon: Activity,
    title: "Paraspinal Soft-Tissue Palpation",
    description:
      "Manual palpation along the spinal column to identify localized muscular tension, tightness, and postural strain.",
    rationale:
      "Assesses hypertonic muscle areas associated with mechanical joint restrictions and prolonged postures.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Invasive Outpatient Modality",
    description:
      "Administered through hands-on manual techniques in an outpatient setting without surgical procedures or injections.",
    rationale:
      "A conservative, non-invasive physical modality utilized as part of an outpatient care plan.",
  },
  {
    icon: Sparkles,
    title: "Postural & Ergonomic Review",
    description:
      "Observation of seated and standing alignment alongside practical recommendations for daily workplace ergonomics.",
    rationale:
      "Evaluates physical habits associated with prolonged sitting, forward-head tilt, and desk-related strain.",
  },
  {
    icon: HeartPulse,
    title: "Individualized Technique Calibration",
    description:
      "Manual approach and positioning calibrated according to each patient's physical build, comfort level, and clinical history.",
    rationale:
      "Allows practitioners to select appropriate manual force levels tailored to individual comfort.",
  },
  {
    icon: Zap,
    title: "Daily Movement & Mobility Guidance",
    description:
      "Practical guidance on posture and gentle active exercises to support movement during everyday work and routine tasks.",
    rationale:
      "Integrates active patient guidance with passive manual techniques to support routine mobility.",
  },
];

/**
 * ChiropractorBenefits Component
 * Displays the 6 core clinical approaches and modality characteristics of chiropractic care.
 */
export const ChiropractorBenefits: React.FC = () => {
  return (
    <Section
      id="clinical-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Approaches to Chiropractic Care"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="TREATMENT CHARACTERISTICS"
          title="Clinical Approaches &amp; Modality Characteristics"
          description="A descriptive overview of manual assessment methods, joint mobilization approaches, and postural review protocols employed in chiropractic outpatient care."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* Benefits Grid (3 columns on lg, 2 on md, 1 on sm) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
              >
                <div>
                  {/* Top Row: Icon & Step Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-xs font-semibold text-secondary/40 tracking-wider">
                      APPROACH 0{index + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Clinical Context Callout */}
                <div className="mt-6 border-t border-black/5 pt-4">
                  <div className="text-[11px] sm:text-xs text-secondary font-medium leading-relaxed">
                    <span className="text-primary font-semibold">Clinical Context: </span>
                    {item.rationale}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Evidence Verification Notice */}
        <div className="mt-12 rounded-xl bg-white p-5 border border-black/5 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              <strong>Clinical Assessment First:</strong> Chiropractic manual techniques are administered following an
              in-person musculoskeletal evaluation by an appropriately qualified practitioner. Techniques are calibrated
              to individual comfort, clinical requirements, and physical tolerance.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

