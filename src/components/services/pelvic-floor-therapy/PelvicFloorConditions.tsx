import React from "react";
import { 
  Activity, 
  AlertCircle, 
  Sparkles, 
  ShieldAlert, 
  Layers, 
  HelpCircle,
  Repeat,
  HeartPulse
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const evaluatedConditions = [
  {
    icon: Activity,
    title: "Pelvic Floor Muscle Weakness & Reduced Tone",
    subtitle: "Hypotonic / Underactive Musculature",
    description:
      "Weakened pelvic floor muscles often struggle to support pelvic structures adequately under physical exertion, leading to fatigue, sensation of heaviness, or involuntary leakage during coughing, sneezing, laughing, or exercising.",
    relevance:
      "Physical therapy provides structured, progressive neuromuscular conditioning to restore foundational muscle awareness, voluntary recruitment, and functional endurance.",
  },
  {
    icon: Repeat,
    title: "Bladder & Urinary Control Challenges",
    subtitle: "Stress & Urgency Incontinence Support",
    description:
      "Involuntary leakage during physical stress (running, jumping, lifting) or overwhelming urge sensations can arise when the pelvic sphincter muscles and bladder reflexes are uncoordinated or deconditioned.",
    relevance:
      "Targeted rehabilitation teaches timing strategies, voluntary urge suppression techniques, and coordinated muscle activation to improve functional bladder control in daily life.",
  },
  {
    icon: HeartPulse,
    title: "Pelvic Discomfort & Muscle Tension",
    subtitle: "Hypertonic / Overactive Muscle Presentation",
    description:
      "Not all pelvic conditions stem from weakness. Many individuals experience chronic pelvic tension, tailbone discomfort (coccygodynia), or pain during sitting caused by overactive, perpetually contracted muscles.",
    relevance:
      "In hypertonic cases, standard strengthening exercises are avoided. Instead, therapy emphasizes downtraining, gentle relaxation, diaphragmatic breathing, and releasing localized myofascial tension.",
  },
  {
    icon: Sparkles,
    title: "Postpartum Pelvic Floor Conditioning",
    subtitle: "Post-Pregnancy Recovery & Support",
    description:
      "Pregnancy and delivery place substantial stretching and strain on pelvic support tissues and the abdominal wall, frequently resulting in core weakness, diastasis recti, or altered pelvic sensation.",
    relevance:
      "A guided postpartum program safely screens core integrity, promotes balanced tissue healing, and guides a graduated, confident return to functional movement and exercise.",
  },
  {
    icon: HelpCircle,
    title: "Pelvic Muscle Coordination Difficulties",
    subtitle: "Dyssynergia & Sensorimotor Retraining",
    description:
      "Some individuals experience difficulties coordinating the contraction and relaxation phases of the pelvic floor, leading to incomplete relaxation during voiding or paradoxical tightening when trying to release.",
    relevance:
      "Proprioceptive re-education and neuromuscular training help restore the mind-muscle connection, ensuring muscles contract when stability is needed and release freely when voiding.",
  },
  {
    icon: Layers,
    title: "Core Instability & Lumbo-Pelvic Strain",
    subtitle: "Pelvic Girdle & Deep Stabilizer Integration",
    description:
      "The pelvic floor operates in continuous synergy with the diaphragm, transverse abdominis, and multifidus. Dysfunction in one segment often contributes to recurrent lower back discomfort or pelvic girdle instability.",
    relevance:
      "Therapy addresses the complete kinetic system, training integrated breathing, pelvic alignment, and coordinated deep core recruitment during daily postural and lifting tasks.",
  },
];

/**
 * PelvicFloorConditions Component
 * 6-card evaluated indications grid with non-diagnostic scope notice.
 */
export const PelvicFloorConditions: React.FC = () => {
  return (
    <Section
      id="conditions"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions and Pelvic Floor Rehabilitation Applications"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EVALUATED FUNCTIONAL INDICATIONS"
          title="Conditions & Rehabilitation Needs"
          description="Pelvic floor physical therapy addresses functional movement, muscle tone, and neuromuscular coordination deficits across diverse adult patient presentations."
          align="center"
        />

        {/* 6 Structured Condition Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {evaluatedConditions.map((condition, idx) => {
            const IconComponent = condition.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/60 bg-surface-soft px-2.5 py-1 rounded-full border border-black/5">
                      {condition.subtitle}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                    {condition.title}
                  </h3>

                  {/* Functional Presentation */}
                  <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-body">
                    {condition.description}
                  </p>
                </div>

                {/* Rehabilitation Relevance Box */}
                <div className="mt-6 pt-4 border-t border-black/5">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs font-medium text-secondary/90 leading-relaxed">
                      <span className="font-semibold text-secondary">Rehabilitation Focus: </span>
                      {condition.relevance}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Non-Diagnostic Clinical Scope Notice */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-primary/20 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                Non-Diagnostic Medical Policy &amp; Differential Evaluation
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-body leading-relaxed">
                Pelvic Floor Therapy focuses specifically on functional musculoskeletal and neuromuscular rehabilitation. Physical therapists do not provide medical diagnoses of visceral infections, interstitial cystitis, gynaecological pathologies, urological malignancies, or severe anatomical organ prolapse requiring surgical repair. If you experience active bleeding, unexplained pelvic masses, acute fever, or severe persistent pain, we require a formal evaluation and medical clearance from your treating urologist, gynaecologist, or primary care physician prior to therapy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

