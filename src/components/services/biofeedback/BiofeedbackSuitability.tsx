import React from "react";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  UserCheck, 
  Stethoscope, 
  Calendar 
} from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";

const candidateCriteria = [
  {
    title: "Post-Stroke & Neurological Motor Deficits",
    description:
      "Individuals recovering from stroke, hemiparesis, or focal neurological lesions who demonstrate trace voluntary muscle activity and seek to strengthen motor recruitment.",
  },
  {
    title: "Chronic Tension Headaches & Facial Clenching",
    description:
      "Patients experiencing persistent pericranial muscular tension, temporomandibular joint (TMJ) clenching, or stress-induced upper trapezius guarding.",
  },
  {
    title: "Focal Muscle Spasticity & Hypertonicity",
    description:
      "Neurological patients presenting with involuntary muscle hyper-reflexia who possess the cognitive capacity to learn voluntary relaxation and down-training.",
  },
  {
    title: "Arthrogenic Muscle Inhibition (AMI)",
    description:
      "Individuals experiencing post-surgical muscle shutdown (such as quadriceps inhibition following knee ligament or joint surgery) requiring bioelectric feedback to reactivate motor firing.",
  },
  {
    title: "Motivated Cognitive Engagement",
    description:
      "Patients with sufficient cognitive and communicative capacity to comprehend visual graphs or auditory tones and actively follow therapist-guided movement cues.",
  },
];

const clinicalPrecautions = [
  {
    title: "Severe Cognitive or Receptive Barriers",
    description:
      "Advanced dementia, severe receptive aphasia, or profound cognitive impairments that prevent the patient from understanding feedback cues or executing volitional instructions.",
  },
  {
    title: "Open Cutaneous Wounds & Skin Breakdown",
    description:
      "Active skin infections, unhealed surgical incisions, open ulcers, or severe dermatitis directly over the intended electrode placement sites.",
  },
  {
    title: "Violent Involuntary Dyskinesias",
    description:
      "Continuous severe choreiform, ballistic, or uncontrolled myoclonic movements that produce pervasive motion artifacts, obscuring true bioelectrical readings.",
  },
  {
    title: "Severe Dual Sensory Impairment",
    description:
      "Profound combined visual and hearing impairment where neither screen-based visual displays nor pitch-modulated audio tones can be perceived without specialized assistive accommodation.",
  },
  {
    title: "Acute Unstable Fractures or Acute Tears",
    description:
      "Unhealed bone fractures or acute complete tendon ruptures in the target area where voluntary muscle contraction is strictly contraindicated by orthopedic protocol.",
  },
];

/**
 * BiofeedbackSuitability Component
 * 2-column comparative layout for candidate evaluation criteria and clinical precautions.
 */
export const BiofeedbackSuitability: React.FC = () => {
  return (
    <Section
      id="suitability"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Patient Suitability, Indications, and Clinical Precautions"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CANDIDACY &amp; SAFETY"
          title="Patient Suitability &amp; Clinical Precautions"
          description="Suitability for biofeedback therapy is determined through comprehensive clinical evaluation by our physical therapy team."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 2-Column Comparative Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Favorable Candidates */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                    Favorable Rehabilitation Candidates
                  </h3>
                  <p className="text-xs text-primary font-medium">
                    Clinical presentations frequently evaluated for biofeedback
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {candidateCriteria.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-secondary/70 italic">
              *All candidates undergo comprehensive motor screening prior to initiating biofeedback sessions.
            </div>
          </div>

          {/* Right Column: Precautions & Considerations */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-8 border border-black/5">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-700">
                  <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary">
                    Precautions &amp; Clinical Considerations
                  </h3>
                  <p className="text-xs text-amber-800 font-medium">
                    Situations requiring clinical modification or alternative therapies
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {clinicalPrecautions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="text-sm font-semibold text-secondary">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-secondary/70 italic">
              *Passive surface electrodes do not emit electrical currents; precautions focus on skin health and cognitive ability.
            </div>
          </div>
        </div>

        {/* Clinical Assessment Callout Banner */}
        <div className="mt-10 rounded-2xl bg-secondary p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3 text-accent flex-shrink-0">
                <Stethoscope className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-heading text-lg sm:text-xl font-semibold text-white">
                  Mandatory Clinical Physical Therapy Evaluation
                </h4>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
                  Biofeedback suitability is confirmed only after an in-person physical therapy intake in Madhanandapuram, Chennai, reviewing your medical records, neurological presentation, and functional movement capacity.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Schedule an Assessment</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

