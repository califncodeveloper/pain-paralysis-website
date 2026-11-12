import React from "react";
import { 
  AlertCircle, 
  Layers, 
  Activity, 
  Bone, 
  Footprints, 
  Timer,
  ChevronRight,
  ShieldAlert
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
    icon: Bone,
    title: "Knee Osteoarthritis",
    subtitle: "Joint Space Narrowing",
    description:
      "Evaluated in individuals presenting with age-related or wear-induced cartilage thinning across the tibiofemoral joint compartment.",
    symptoms: [
      "Ache exacerbated by prolonged weight-bearing",
      "Stiffness upon waking or following rest",
      "Noticeable joint crepitus or clicking sounds",
    ],
  },
  {
    icon: Layers,
    title: "Chronic Knee Joint Stiffness",
    subtitle: "Restricted Range of Motion",
    description:
      "Considered for patients experiencing persistent difficulty achieving full knee extension (straightening) or deep flexion (bending).",
    symptoms: [
      "Difficulty sitting cross-legged or kneeling",
      "Hesitancy rising from seated or low positions",
      "Capsular tightness around the joint line",
    ],
  },
  {
    icon: Footprints,
    title: "Weight-Bearing Discomfort",
    subtitle: "Ambulation & Stair Navigation",
    description:
      "Assessed in individuals who experience sharp or aching sensations during daily locomotion, standing, or walking on uneven surfaces.",
    symptoms: [
      "Increased discomfort when descending stairs",
      "Fatigue during extended walking intervals",
      "Protective gait alteration or subtle limping",
    ],
  },
  {
    icon: Activity,
    title: "Degenerative Meniscus Wear",
    subtitle: "Fibrocartilaginous Strain",
    description:
      "Evaluated for non-acute, degenerative thinning of the medial or lateral meniscal cushions contributing to localized joint friction.",
    symptoms: [
      "Focal tenderness along the medial or lateral joint lines",
      "Mechanical ache following light physical activity",
      "Sensation of joint fullness or tightness",
    ],
  },
  {
    icon: AlertCircle,
    title: "Patellofemoral Sensitivity",
    subtitle: "Anterior Knee Pressure",
    description:
      "Considered for individuals reporting discomfort behind or around the kneecap associated with compressive mechanical loading.",
    symptoms: [
      "Ache behind kneecap during squats or lunges",
      "Stiffness during prolonged automobile or theater sitting",
      "Quadriceps tendon tightness and tracking strain",
    ],
  },
  {
    icon: Timer,
    title: "Post-Activity Mechanical Fatigue",
    subtitle: "Occupational & Daily Loading",
    description:
      "Assessed in patients presenting with recurrent joint fatigue, muscular guarding, and dull soreness following daily occupational demands.",
    symptoms: [
      "Persistent evening soreness after workday standing",
      "Muscular tension in the calf and hamstrings",
      "Temporary reduction in daily walking tolerance",
    ],
  },
];

/**
 * KneeDecompressionConditions Component
 * Displays the 6 structured condition cards evaluated for knee decompression,
 * accompanied by strict medical compliance disclaimers and scope notices.
 */
export const KneeDecompressionConditions: React.FC = () => {
  return (
    <Section
      id="conditions-addressed"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions Addressed by Knee Decompression"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EVALUATED INDICATIONS"
          title="Knee Conditions Evaluated for Traction"
          description="Mechanical knee decompression may be considered as an adjunct conservative modality for individuals presenting with evaluated musculoskeletal knee concerns."
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
                className="flex flex-col justify-between rounded-xl bg-surface-soft p-6 border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:bg-white group"
              >
                <div>
                  {/* Card Icon & Subtitle Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {condition.subtitle}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {condition.title}
                  </h3>

                  {/* Card Narrative */}
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {condition.description}
                  </p>

                  {/* Evaluated Clinical Features */}
                  <div className="mt-4 pt-3 border-t border-black/5">
                    <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider block mb-2">
                      Reported Clinical Features:
                    </span>
                    <ul className="space-y-1.5 text-xs text-body/90">
                      {condition.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="mt-6 pt-3 border-t border-black/5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded transition-colors duration-200"
                  >
                    <span>Request Evaluation</span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope of Practice Notice */}
        <div className="mt-10 rounded-2xl bg-surface-soft p-5 sm:p-6 border border-black/10">
          <div className="flex items-start gap-3.5">
            <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-700 flex-shrink-0 mt-0.5">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="text-xs sm:text-sm text-secondary/90 leading-relaxed">
              <h4 className="font-heading font-semibold text-secondary text-sm sm:text-base">
                Clinical Evaluation &amp; Non-Diagnostic Scope Notice
              </h4>
              <p className="mt-1 text-body/90">
                The conditions outlined above represent clinical indications commonly reviewed for conservative physical therapy and mechanical joint distraction. Advanced Knee Decompression is an adjunctive therapeutic modality; it is not an independent cure, does not guarantee complete pain resolution or cartilage regeneration, and does not replace diagnostic radiological workups (such as weight-bearing X-rays or MRI) or surgical orthopedic consultations. Candidacy is determined strictly through in-person evaluation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

