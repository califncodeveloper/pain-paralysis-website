import React from "react";
import { Brain, ShieldAlert } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const rehabFocusAreas = [
  {
    title: "Neurological Functional Recovery",
    description:
      "For patients recovering from stroke, hemiparesis, or acute nerve injuries, inpatient rehabilitation emphasizes neuro-facilitation, repetitive movement practice, and sitting/standing balance re-education.",
  },
  {
    title: "Post-Surgical Movement Restoration",
    description:
      "Patients recovering from spinal or major orthopedic procedures receive structured joint mobilization, safe weight-bearing progression, and scar/muscle tissue recovery protocols.",
  },
  {
    title: "Intensive Spine & Decompression Therapy",
    description:
      "Admitted patients with severe disc prolapse, radiculopathy, or sciatica can receive scheduled mechanized spinal traction sessions paired with supervised postural stabilizing exercises.",
  },
  {
    title: "Transfer & Functional Independence",
    description:
      "Targeted daily practice on vital everyday transitions—such as bed mobility, sit-to-stand, wheelchair transfers, and supervised walking—fostering patient self-confidence.",
  },
];

export const InpatientCareRehab: React.FC = () => {
  return (
    <Section
      id="inpatient-rehabilitation"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Rehabilitation Protocols During Hospital Stay"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="REHABILITATION FOCUS"
          title="Clinical Rehabilitation During Hospital Stay"
          description="Inpatient hospitalization allows clinicians to deliver coordinated, multi-session therapy each day, accelerating functional progress in a safe, controlled environment."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {rehabFocusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-black/5 bg-surface-soft p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-accent flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary">
                    {area.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-text/80">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Disclaimer Notice */}
        <div className="mt-8 rounded-2xl bg-secondary/5 border border-secondary/15 p-5 text-xs sm:text-sm text-secondary/90 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">Individualized Clinical Assessment Required:</strong>
            <span>
              Treatment plans, therapy intensity, and duration of inpatient hospitalization depend strictly on pre-admission clinical evaluation, patient stamina, and medical history. The hospital does not offer emergency trauma surgery or intensive care unit (ICU) services.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

