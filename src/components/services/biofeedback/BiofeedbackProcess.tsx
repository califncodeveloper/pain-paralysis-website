import React from "react";
import { 
  ClipboardList, 
  Activity, 
  Sliders, 
  Brain, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  milestone: string;
  icon: React.ElementType;
}

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Clinical Consultation & Intake",
    subtitle: "Medical History & Functional Movement Screening",
    description:
      "Your physical therapist reviews your medical history, neurological or orthopedic diagnosis, prior imaging reports, and current symptoms. A physical movement screening identifies target muscle groups exhibiting spasticity, inhibition, or compensatory tension.",
    milestone: "Baseline History & Rehabilitation Goals",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Skin Preparation & Sensor Placement",
    subtitle: "Low-Impedance Sensor Application",
    description:
      "The skin overlying targeted muscle bellies is gently cleansed to ensure optimal signal transmission. Comfortable, adhesive hydrogel surface electrodes and a reference ground sensor are placed with precision over specific muscle motor points.",
    milestone: "Artifact-Free Signal Capture",
    icon: Activity,
  },
  {
    step: "03",
    title: "Feedback Orientation & Threshold Setting",
    subtitle: "Customized Target Calibration",
    description:
      "Your clinician introduces the visual feedback monitor and auditory tone system. Customized target threshold bands—either relaxation ceilings for hypertonic muscles or activation targets for paretic muscles—are calibrated to your current baseline.",
    milestone: "Personalized Visual & Auditory Cues",
    icon: Sliders,
  },
  {
    step: "04",
    title: "Guided Sensorimotor Retraining",
    subtitle: "Interactive Therapist-Coached Practice",
    description:
      "Under continuous clinical coaching, you perform structured mental and physical drills. Watching the real-time visual curves and listening to responsive tone changes teaches your brain how voluntary effort and relaxation modulate bioelectrical output.",
    milestone: "Active Neuroplastic Motor Learning",
    icon: Brain,
  },
  {
    step: "05",
    title: "Progress Tracking & Functional Transfer",
    subtitle: "Real-World Application & Home Integration",
    description:
      "Your therapist reviews bioelectrical amplitude trends, records longitudinal improvements, and prescribes specific cognitive and movement cues to help transfer conscious muscle self-regulation into daily postures, walking, and tasks.",
    milestone: "Functional Independence & Carryover",
    icon: CheckCircle2,
  },
];

/**
 * BiofeedbackProcess Component
 * 5-step clinical assessment and neuromuscular retraining methodology roadmap.
 */
export const BiofeedbackProcess: React.FC = () => {
  return (
    <Section
      id="process"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Methodology and 5-Step Biofeedback Patient Journey"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PATIENT ROADMAP"
          title="The Biofeedback Rehabilitation Journey"
          description="A structured, patient-centered clinical pathway guiding you from comprehensive assessment to independent neuromuscular self-regulation."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 5-Step Roadmap Timeline */}
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {journeySteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6 rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40"
              >
                {/* Step Number & Icon Badge */}
                <div className="flex-shrink-0 flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-secondary text-white font-heading text-lg sm:text-xl font-bold shadow-md group-hover:bg-primary transition-colors duration-300">
                    {item.step}
                  </div>
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-primary">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-body leading-relaxed pt-1">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-black/5 flex items-center gap-2 text-xs font-medium text-secondary/80">
                    <Sparkles className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="text-secondary font-semibold">Clinical Milestone: </strong>
                      {item.milestone}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Outpatient Experience Callout */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8 border border-black/5 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary flex-shrink-0">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-secondary">Session Duration</h4>
                <p className="text-xs text-body">30 to 45 minutes per visit</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start border-t md:border-t-0 md:border-l border-black/5 pt-4 md:pt-0 md:pl-6">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary flex-shrink-0">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-secondary">Outpatient Care</h4>
                <p className="text-xs text-body">Zero recovery downtime</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start border-t md:border-t-0 md:border-l border-black/5 pt-4 md:pt-0 md:pl-6">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary flex-shrink-0">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-secondary">Customized Schedule</h4>
                <p className="text-xs text-body">Individualized physical therapy plan</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

