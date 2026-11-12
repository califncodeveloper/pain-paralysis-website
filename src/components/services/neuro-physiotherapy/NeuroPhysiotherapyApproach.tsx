import React from "react";
import { 
  CheckCircle2, 
  Compass, 
  Dumbbell, 
  Footprints, 
  Home, 
  Layers, 
  Repeat, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const approaches = [
  {
    icon: Compass,
    title: "1. Comprehensive Functional Movement Assessment",
    description:
      "A thorough physical therapy evaluation assessing posture, joint range of motion, muscle strength, resting tone, coordination, and functional motor control to establish an objective baseline.",
    details: [
      "Evaluation of active and passive joint mobility",
      "Assessment of muscle tone (spasticity, flaccidity, rigidity)",
      "Screening of trunk control and postural stability",
    ],
  },
  {
    icon: Layers,
    title: "2. Posture & Trunk Stabilization Training",
    description:
      "Targeted exercises addressing core engagement, pelvic positioning, and head/neck alignment to create a stable base of support for arm and leg movements.",
    details: [
      "Supported sitting balance and pelvic tilt retraining",
      "Dynamic weight-shifting over the center of gravity",
      "Trunk rotation and lateral flexion motor activation",
    ],
  },
  {
    icon: Repeat,
    title: "3. Mobility & Transfer Retraining",
    description:
      "Practical, step-by-step movement practice focused on essential daily transitions, empowering patients to move safely between surfaces.",
    details: [
      "Bed mobility drills (rolling, bridging, supine-to-sit)",
      "Sit-to-stand transitions with appropriate weight distribution",
      "Safe surface transfers (bed, chair, wheelchair, toilet)",
    ],
  },
  {
    icon: Dumbbell,
    title: "4. Strength, Coordination & Motor Facilitation",
    description:
      "Progressive therapeutic exercises designed to facilitate voluntary motor unit recruitment, maintain soft-tissue length, and rebuild muscular endurance.",
    details: [
      "Active-assisted and active movement facilitation",
      "Proprioceptive neuromuscular guidance and coordination drills",
      "Prolonged positioning and gentle stretching to manage tightness",
    ],
  },
  {
    icon: Footprints,
    title: "5. Gait Re-Education & Locomotor Practice",
    description:
      "Structured walking re-education targeting stride symmetry, heel-strike mechanics, foot clearance, and safe integration of mobility aids.",
    details: [
      "Parallel bar and supported step-initiation practice",
      "Weight-shifting between paretic and non-paretic limbs",
      "Assessment and training with canes, quadrips, or walkers",
    ],
  },
  {
    icon: Sparkles,
    title: "6. Task-Oriented Functional Movement Drills",
    description:
      "Repetitive, goal-directed exercises that replicate practical everyday tasks—such as reaching for objects, grasping, and manipulating household items.",
    details: [
      "Context-specific reaching, grasping, and release tasks",
      "Bimanual activity practice where appropriate",
      "Movement pacing and energy conservation strategies",
    ],
  },
  {
    icon: Home,
    title: "7. Home Exercise Routines & Caregiver Guidance",
    description:
      "Personalized home program development and practical caregiver coaching to support rehabilitation gains safely between clinic appointments.",
    details: [
      "Prescribed home movement and positioning protocols",
      "Ergonomic transfer training for family members and carers",
      "Fall prevention guidelines and home environment review",
    ],
  },
];

/**
 * NeuroPhysiotherapyApproach Component
 * Outlines the clinic's 7 evidence-informed clinical rehabilitation pillars,
 * emphasizing personalized therapy selection and honest clinical expectations.
 */
export const NeuroPhysiotherapyApproach: React.FC = () => {
  return (
    <Section
      id="approach"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Neuro Physiotherapy Approach"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="REHABILITATION METHODOLOGY"
          title="Clinical Neuro Physiotherapy Approach"
          description="Evidence-informed physical therapy methods tailored to each patient's neurological condition, functional capabilities, and personal recovery goals."
          align="center"
        />

        {/* 7 Approach Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {approaches.slice(0, 6).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-surface-soft p-6 sm:p-7 border border-black/5 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/20"
              >
                <div>
                  <div className="rounded-xl bg-primary/10 p-3 text-primary w-fit mb-4">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary/70 block mb-2">
                    Key Clinical Elements
                  </span>
                  <ul className="space-y-1.5 text-xs text-body">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* 7th Item: Full-Width / Prominent Card */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-br from-secondary/5 via-white to-primary/5 p-6 sm:p-8 border border-primary/20 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                  <Home className="h-4 w-4" aria-hidden="true" />
                  <span>Continuous Care Beyond the Clinic</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary">
                  {approaches[6].title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {approaches[6].description} Neurological rehabilitation is an ongoing learning process. Equipping patients and their families with safe, manageable home routines ensures that functional movement strategies become part of daily living.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-black/5 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary/70 block mb-2">
                  Guidance Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-body">
                  {approaches[6].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Individualization Notice */}
        <div className="mt-8 rounded-xl bg-surface-soft p-4 sm:p-5 border border-black/5 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-secondary font-medium">
            <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
            <span>
              Treatment interventions are selected individually based on patient assessment; not all techniques are indicated or used for every individual.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
