import React from "react";
import { 
  FileText, 
  Eye, 
  Brain, 
  Dumbbell, 
  Wind, 
  ShieldCheck, 
  Home, 
  Info,
  CheckCircle2
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const clinicalApproachPillars = [
  {
    step: "01",
    icon: FileText,
    title: "Comprehensive Clinical History & Symptom Review",
    subtitle: "Understanding Your Unique Symptoms",
    description:
      "A detailed, confidential discussion exploring your symptom history, bladder and bowel habits, pain triggers, functional limitations, and any relevant surgical, obstetrical, or musculoskeletal background.",
  },
  {
    step: "02",
    icon: Eye,
    title: "External Functional & Biomechanical Assessment",
    subtitle: "Whole-Body Movement & Posture",
    description:
      "Evaluation of spinal alignment, pelvic girdle stability, hip mobility, and diaphragmatic breathing mechanics. We observe how everyday posture and movement strategies influence pelvic pressure.",
  },
  {
    step: "03",
    icon: Brain,
    title: "Neuromuscular Awareness & Proprioceptive Retraining",
    subtitle: "Restoring the Mind-Muscle Connection",
    description:
      "Because the pelvic floor operates out of sight, many people lose sensory feedback. We guide patients in recognizing voluntary recruitment versus relaxation, establishing vital sensorimotor control.",
  },
  {
    step: "04",
    icon: Dumbbell,
    title: "Tailored Exercise Prescription: Strengthening vs. Release",
    subtitle: "Prescribed Specifically for Your Muscle Tone",
    description:
      "Exercises are customized strictly based on clinical findings. Patients with muscle weakness receive progressive endurance conditioning, while patients with muscle spasms or tightness receive gentle downtraining and release.",
  },
  {
    step: "05",
    icon: Wind,
    title: "Diaphragmatic Breathing & Relaxation Strategies",
    subtitle: "Coordinating the Respiratory-Pelvic Rhythm",
    description:
      "The respiratory diaphragm and pelvic floor move in harmonious synchrony. Training deep, unforced diaphragmatic breathing helps naturally decompress pelvic structures and release involuntary muscular tension.",
  },
  {
    step: "06",
    icon: ShieldCheck,
    title: "Functional Movement & Pressure Management",
    subtitle: "Protecting Tissues During Daily Tasks",
    description:
      "Education on managing intra-abdominal pressure during lifting, coughing, bending, and exercising. Learning proper mechanics prevents unnecessary downward stress on pelvic organs and supportive ligaments.",
  },
  {
    step: "07",
    icon: Home,
    title: "Home Exercise Education & Self-Management Guidance",
    subtitle: "Empowering Long-Term Independence",
    description:
      "Clear, manageable daily routines, bladder habit guidance, and ergonomic advice designed for consistency at home, reinforcing clinical progress and building lasting functional confidence.",
  },
];

/**
 * PelvicFloorApproach Component
 * 7-pillar evidence-informed clinical rehabilitation methodology.
 */
export const PelvicFloorApproach: React.FC = () => {
  return (
    <Section
      id="approach"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Pelvic Floor Rehabilitation Approach"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EVIDENCE-INFORMED METHODOLOGY"
          title="Our Pelvic Floor Rehabilitation Approach"
          description="A structured, conservative rehabilitation pathway that balances individual muscle tone, breathing mechanics, and functional daily movement."
          align="center"
        />

        {/* 7 Clinical Pillars Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicalApproachPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-primary/20"
              >
                <div>
                  {/* Step Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                      {pillar.step}
                    </span>
                    <div className="rounded-xl bg-white p-2.5 text-secondary shadow-xs border border-black/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-body">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Adjunct Biofeedback Retraining Card (8th card to balance grid or callout) */}
          <div className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-secondary/5 via-white to-primary/5 p-6 sm:p-7 border border-primary/20 transition-all duration-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary px-2.5 py-1 rounded-full">
                  Adjunct Tool
                </span>
                <div className="rounded-xl bg-white p-2.5 text-primary shadow-xs border border-primary/20">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-secondary">
                Adjunct Biofeedback Principles
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                Sensorimotor Feedback Guidance
              </p>
              <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-body">
                Where clinically indicated, surface electromyographic or pressure biofeedback principles can provide real-time sensory cues, helping individuals verify whether pelvic muscles are truly contracting, holding, or relaxing. This adjunct is evaluated individually and is not mandatory for all programs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 text-[11px] text-body italic">
              Applied selectively based on therapist evaluation and clinical suitability.
            </div>
          </div>
        </div>

        {/* Clinical Individualization & Strengthening Warning Notice */}
        <div className="mt-12 rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/10">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
              <Info className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-semibold text-secondary">
                Clinical Individualization &amp; Why Kegels Are Not For Everyone
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                A common misconception in pelvic rehabilitation is that every patient should perform repetitive pelvic tightening (Kegel exercises). In reality, performing strengthening exercises on an overactive, hypertonic, or spasming pelvic floor can exacerbate pelvic pain, worsen urinary urgency, and increase muscle fatigue. Our clinical approach strictly separates hypotonic (weak) from hypertonic (tight) presentations—ensuring patients receive the exact release, breathing, or gentle conditioning their body actually requires.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

