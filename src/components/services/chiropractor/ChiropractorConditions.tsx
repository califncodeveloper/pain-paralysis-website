import React from "react";
import { 
  AlertCircle, 
  Layers, 
  Activity, 
  ShieldAlert, 
  Sparkles, 
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
    title: "Neck & Cervical Discomfort",
    subtitle: "Cervical Movement Assessment",
    description:
      "Evaluated during physical consultation for individuals reporting cervical stiffness, muscle tension, or discomfort during neck movement.",
    symptoms: ["Stiffness with neck rotation", "Tension in upper shoulder area", "Postural tightness from desk work"],
  },
  {
    icon: ShieldAlert,
    title: "Lower Back & Lumbar Discomfort",
    subtitle: "Lumbar Region Assessment",
    description:
      "Considered during consultation for individuals presenting with localized lower back tightness or movement discomfort.",
    symptoms: ["Stiffness after prolonged sitting", "Discomfort with bending or lifting", "Muscular tightness across lower back"],
  },
  {
    icon: Sparkles,
    title: "Head & Neck Postural Tension",
    subtitle: "Upper Cervical Assessment",
    description:
      "Evaluated for individuals reporting tension sensations associated with neck stiffness, screen use, or sustained postures.",
    symptoms: ["Discomfort at base of skull", "Tension associated with neck stiffness", "Screen-induced postural fatigue"],
  },
  {
    icon: Activity,
    title: "Postural Fatigue & Forward Carriage",
    subtitle: "Postural Habit Review",
    description:
      "Assessed through postural observation for individuals experiencing fatigue from prolonged seated desk work.",
    symptoms: ["Forward head tilt and shoulder rounding", "Mid-back fatigue during seated work", "Reduced upright endurance"],
  },
  {
    icon: AlertCircle,
    title: "Upper Back & Interscapular Tightness",
    subtitle: "Thoracic Movement Review",
    description:
      "Evaluated in individuals presenting with upper back stiffness and localized muscular tightness between the shoulder blades.",
    symptoms: ["Tightness between shoulder blades", "Movement stiffness with twisting", "Localized muscular fatigue"],
  },
  {
    icon: MoonStar,
    title: "Pelvic & Lower Spine Strain",
    subtitle: "Pelvic Region Review",
    description:
      "Considered during physical examination for individuals presenting with localized lower pelvic or walking discomfort.",
    symptoms: ["Unilateral lower spine tightness", "Discomfort transitioning from sit to stand", "Uneven pelvic weight bearing"],
  },
];

/**
 * ChiropractorConditions Component
 * Displays the 6 core musculoskeletal areas evaluated during chiropractic consultation.
 */
export const ChiropractorConditions: React.FC = () => {
  return (
    <Section
      id="conditions-treated"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Musculoskeletal Areas Evaluated During Chiropractic Consultation"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL AREAS EVALUATED"
          title="Musculoskeletal Areas Evaluated"
          description="Clinical consultation and physical assessment considerations for individuals presenting with neck discomfort, lumbar strain, and posture-related joint restrictions."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* Conditions 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditionsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/30"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-secondary shadow-sm border border-black/5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-secondary/5 px-3 py-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Condition Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Condition Clinical Context */}
                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>

                  {/* Observed Symptoms Checklist */}
                  <div className="mt-5 border-t border-black/5 pt-4">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-secondary/70 mb-2">
                      Typical Presentation:
                    </span>
                    <ul className="space-y-1.5 text-xs text-body">
                      {item.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-3 border-t border-black/5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-secondary focus-visible:outline-none focus-visible:underline transition-colors duration-200"
                  >
                    <span>Request clinical consultation</span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Clinical Evaluation Notice */}
        <div className="mt-12 rounded-2xl bg-secondary p-6 sm:p-8 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="section-badge text-xs uppercase tracking-wider text-accent font-semibold mb-2 block">
                In-Person Evaluation
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                Comprehensive In-Person Assessment First
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                Chiropractic procedures are preceded by an in-person physical consultation. An examination and symptom history
                review are conducted by the practitioner to evaluate individual suitability before recommending any manual techniques.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-secondary hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-200"
              >
                <span>Book Clinical Evaluation</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

