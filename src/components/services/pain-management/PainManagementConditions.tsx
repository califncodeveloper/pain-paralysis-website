import React from "react";
import { Activity, ShieldAlert } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const conditions = [
  {
    title: "Herniated, Bulging & Degenerated Discs",
    description:
      "Mechanical spinal traction and conservative therapy help alleviate compressive disc bulges and nourish intervertebral structures.",
  },
  {
    title: "Sciatica & Radicular Nerve Irritation",
    description:
      "Targeted decompression of the lumbar spine relieves paraspinal nerve root impingement that causes sharp shooting leg pain.",
  },
  {
    title: "Cervical Spine Pain & Postural Strain",
    description:
      "Gentle manual adjustments, ergonomic re-education, and cervical decompression address forward-head carriage and neck tension.",
  },
  {
    title: "Knee Osteoarthritis & Joint Stiffness",
    description:
      "Mechanical knee decompression reduces bone-on-bone friction, promotes synovial nutrient exchange, and assists walking comfort.",
  },
  {
    title: "Myofascial Pain & Chronic Muscle Spasms",
    description:
      "Combines therapeutic laser, manual trigger point mobilizations, and gentle stretching to ease contracted paraspinal bands.",
  },
  {
    title: "Sacroiliac Joint & Pelvic Discomfort",
    description:
      "Evaluates lumbo-pelvic alignment, restoring balanced weight distribution through manual therapy and stabilizing core exercises.",
  },
];

export const PainManagementConditions: React.FC = () => {
  return (
    <Section
      id="pain-conditions"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Conditions Evaluated for Pain Management"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="EVALUATED CONDITIONS"
          title="Musculoskeletal &amp; Spine Conditions We Evaluate"
          description="Conservative care pathways designed to address acute flare-ups and chronic pain patterns across the spine and peripheral joints."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {conditions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-surface-soft p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-accent flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-text/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Scope Notice */}
        <div className="mt-8 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">Clinical Scope &amp; Medical Responsibility Notice:</strong>
            <span>
              The conditions cataloged above represent presentations evaluated for conservative physical and mechanical care. Treatment suitability is determined during an individualized clinical examination. If diagnostic findings indicate conditions requiring surgical management or oncology review, appropriate medical referrals are arranged.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

