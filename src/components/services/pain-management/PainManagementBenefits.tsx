import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const benefits = [
  {
    title: "100% Non-Surgical Care",
    description: "Prioritizes conservative mechanical and physical modalities, avoiding surgical risks, incisions, and extended hospital downtime.",
  },
  {
    title: "Root Cause Biomechanical Focus",
    description: "Investigates posture, disc compression, and muscle imbalances rather than relying solely on temporary chemical pain masking.",
  },
  {
    title: "Computerized Precision Traction",
    description: "Decompression tables provide smooth logarithmic distraction force calibrated precisely to individual patient tolerance.",
  },
  {
    title: "Integrated Multidisciplinary Protocols",
    description: "Care pathways blend decompression, laser photobiomodulation, chiropractic adjustments, and physical therapy synergistically.",
  },
  {
    title: "Functional Movement Recovery",
    description: "Restores comfortable range of motion, walking endurance, and daily activity stamina to enhance everyday quality of life.",
  },
  {
    title: "Ergonomic Self-Care Education",
    description: "Patients learn practical posture preservation habits, home exercises, and pacing techniques to sustain long-term relief.",
  },
];

export const PainManagementBenefits: React.FC = () => {
  return (
    <Section
      id="pain-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Advantages of Comprehensive Pain Management"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="TREATMENT ADVANTAGES"
          title="Clinical Benefits &amp; Treatment Scope"
          description="Conservative, evidence-guided pain management designed to support structural comfort and functional mobility."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-heading font-semibold text-base text-secondary">
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

        {/* Realistic Expectations Panel */}
        <div className="mt-8 rounded-2xl bg-white border border-black/10 p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-base text-secondary">
                Clinical Expectations &amp; Care Scope
              </h4>
              <p className="font-sans text-xs sm:text-sm text-text/80 leading-relaxed">
                Conservative pain management aims to reduce symptoms, decompress compromised tissues, and restore function. It does not promise instant cures or guarantee permanent freedom from all pain. Patient adherence to prescribed home exercises, postural modifications, and scheduled therapy sessions plays a crucial role in sustained long-term outcomes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

