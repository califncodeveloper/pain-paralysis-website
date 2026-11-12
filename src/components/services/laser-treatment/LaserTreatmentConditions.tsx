import React from "react";
import { 
  Bone, 
  Activity, 
  Layers, 
  Zap, 
  Footprints, 
  Timer,
  ShieldAlert,
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
    title: "Cervical & Lumbar Strain",
    subtitle: "Paraspinal & Postural Tension",
    description:
      "Evaluated in individuals presenting with persistent muscular tightness, postural fatigue, or acute spasms along the neck and lower back paraspinal regions.",
    symptoms: [
      "Stiffness and restricted rotation in the cervical spine",
      "Dull paraspinal muscular ache after prolonged sitting",
      "Muscle guarding associated with postural strain",
    ],
  },
  {
    icon: Bone,
    title: "Joint Discomfort & Stiffness",
    subtitle: "Arthritis & Capsular Irritation",
    description:
      "Considered for patients experiencing osteoarthritis-related stiffness and periarticular sensitivity in weight-bearing joints such as knees, hips, or shoulders.",
    symptoms: [
      "Morning stiffness and initial movement hesitancy",
      "Periarticular joint line tenderness during ambulation",
      "Reduced functional range of motion in daily tasks",
    ],
  },
  {
    icon: Activity,
    title: "Tendinopathies & Overuse Strain",
    subtitle: "Tendinous Irritation & Enthesopathy",
    description:
      "Assessed for localized tendon irritability, such as rotator cuff tendinopathy, tennis/golfer’s elbow (epicondylitis), Achilles irritation, or plantar fasciitis.",
    symptoms: [
      "Focal discomfort during resisted tendon loading",
      "Post-activity soreness and morning heel or elbow stiffness",
      "Tenderness along tendon sheaths and insertion points",
    ],
  },
  {
    icon: Zap,
    title: "Sports & Soft Tissue Injuries",
    subtitle: "Ligament Sprains & Muscle Strains",
    description:
      "Evaluated following non-displaced athletic injuries, ankle sprains, hamstring pulls, or traumatic contusions to support tissue recovery.",
    symptoms: [
      "Localized swelling and tissue tenderness following physical exertion",
      "Guarding during muscle contraction or elongation",
      "Difficulty resuming athletic drills and full stride mechanics",
    ],
  },
  {
    icon: Footprints,
    title: "Peripheral Nerve Sensitivity",
    subtitle: "Nerve Pathway Discomfort",
    description:
      "Assessed as an adjunctive conservative modality for localized nerve entrapment discomfort, such as mild carpal tunnel syndrome or peripheral neuropathy symptoms.",
    symptoms: [
      "Tingling or heightened sensitivity along distal extremity pathways",
      "Nocturnal hand or foot ache associated with tissue swelling",
      "Nerve sheath tightness aggravated by repetitive movements",
    ],
  },
  {
    icon: Timer,
    title: "Post-Surgical Soft Tissue Care",
    subtitle: "Rehabilitation & Scar Support",
    description:
      "Considered following surgical healing and suture closure to support scar tissue pliability, enhance local microcirculation, and ease persistent swelling.",
    symptoms: [
      "Residual tightness and resistance across mature incision sites",
      "Localized tissue induration and persistent fluid retention",
      "Sluggish mobility recovery following orthopedic procedures",
    ],
  },
];

/**
 * LaserTreatmentConditions Component
 * Displays the 6 structured condition cards evaluated for laser therapy,
 * accompanied by an explicit clinical scope and evaluation disclaimer.
 */
export const LaserTreatmentConditions: React.FC = () => {
  return (
    <Section
      id="conditions-treated"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions Evaluated for Laser Therapy"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="EVALUATED CONDITIONS"
          title="Conditions Addressed with Laser Therapy"
          description="Assessing patient presentation, tissue irritability, and rehabilitation candidacy for adjunctive laser therapy."
          align="center"
          theme="light"
          accent
        />

        {/* 6-Card Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {conditionsData.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {condition.subtitle}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-secondary mt-3">
                    {condition.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                    {condition.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-black/5">
                    <span className="text-xs font-semibold text-secondary block mb-2">
                      Typical Presentation:
                    </span>
                    <ul className="space-y-1.5 text-xs text-body">
                      {condition.symptoms.map((symptom, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>Request Condition Review</span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Scope & Non-Diagnostic Notice */}
        <div className="mt-12 rounded-2xl bg-surface-soft p-6 border border-black/10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 flex-shrink-0">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
                Clinical Evaluation &amp; Treatment Boundaries
              </h4>
              <p className="mt-1 text-xs text-body leading-relaxed">
                The conditions outlined above represent clinical categories evaluated for adjunctive laser therapy. Laser treatment is not a stand-alone cure or replacement for medical care. Patients with unexplained systemic symptoms, fever, unhealed fractures, or progressive neurological deficits receive physician referral. Candidacy is determined via an individualized clinical consultation at our Madhanandapuram clinic.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="mt-2 sm:mt-0 flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              <span>Consult Our Team</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

