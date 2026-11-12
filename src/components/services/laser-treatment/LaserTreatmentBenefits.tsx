import React from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  Maximize, 
  Sliders, 
  HeartHandshake,
  AlertOctagon
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface BenefitItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  rationale: string;
}

const benefitsData: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Non-Invasive Soft Tissue Delivery",
    description:
      "Administered entirely over the skin surface without surgical incisions, injections, or systemic pharmaceutical side effects.",
    rationale:
      "Provides a conservative outpatient alternative for individuals seeking non-pharmacological care options.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Outpatient Administration",
    description:
      "Patients experience either a gentle, soothing warmth or no perceptible sensation during calibrated laser delivery.",
    rationale:
      "Avoids tissue ablation, burning, or post-treatment soreness commonly associated with aggressive interventions.",
  },
  {
    icon: Droplets,
    title: "Cellular Energy & Repair Support",
    description:
      "Photons stimulate mitochondrial photoreceptors to enhance ATP synthesis and natural metabolic processes.",
    rationale:
      "Aids the biological mechanisms underlying soft-tissue recovery and cellular maintenance.",
  },
  {
    icon: Maximize,
    title: "Circulatory & Swelling Assistance",
    description:
      "Stimulates microcapillary blood flow and lymphatic drainage across congested muscular and periarticular tissues.",
    rationale:
      "Helps clear inflammatory by-products and eases local swelling around sensitive joints and tendons.",
  },
  {
    icon: Sliders,
    title: "Mobility & Flexibility Synergy",
    description:
      "Helps relieve protective muscular guarding, allowing tighter joints and tendons to move with greater ease.",
    rationale:
      "Prepares soft tissues for subsequent active physical therapy, stretching, and functional movement drills.",
  },
  {
    icon: HeartHandshake,
    title: "Integrated Rehabilitation Plan",
    description:
      "Laser therapy is coordinated with targeted strengthening, joint mobilizations, and postural education.",
    rationale:
      "Reinforces long-term functional recovery rather than merely masking temporary symptom discomfort.",
  },
];

/**
 * LaserTreatmentBenefits Component
 * Highlights clinical benefits, treatment capabilities, and explicit clinical limitations.
 */
export const LaserTreatmentBenefits: React.FC = () => {
  return (
    <Section
      id="treatment-benefits"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Clinical Benefits and Limitations of Laser Therapy"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="CLINICAL RATIONALE & BOUNDARIES"
          title="Potential Benefits &amp; Treatment Limitations"
          description="Evidence-guided therapeutic care balances cellular rehabilitation goals with clear clinical boundaries."
          align="center"
          theme="light"
          accent
        />

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {benefitsData.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:border-primary/40 group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-secondary mt-4">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
                    Therapeutic Rationale:
                  </span>
                  <p className="text-xs text-secondary/80 leading-normal">
                    {benefit.rationale}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Treatment Limitations & Clinical Realities Notice */}
        <div className="mt-12 rounded-2xl bg-red-50/70 p-6 sm:p-8 border border-red-200/80 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-red-100 p-2.5 text-red-600 flex-shrink-0 mt-1">
              <AlertOctagon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-secondary uppercase tracking-wider">
                Clinical Realities &amp; Treatment Limitations Notice
              </h4>
              <div className="mt-2 space-y-2 text-xs sm:text-sm text-body leading-relaxed">
                <p>
                  While advanced therapeutic laser therapy is a clinically documented supportive modality, prospective patients must understand its clear therapeutic boundaries:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-body">
                  <li>
                    <strong>No Guaranteed Pain Elimination:</strong> Laser therapy does not guarantee permanent pain resolution or instant structural cure for chronic progressive conditions.
                  </li>
                  <li>
                    <strong>Not a Surgical Substitute:</strong> It cannot realign gross bony deformities, re-anchor completely severed tendons, or replace required orthopedic reconstructive procedures.
                  </li>
                  <li>
                    <strong>Cartilage Regeneration Boundaries:</strong> Laser therapy does not rebuild completely worn-away cartilage (grade IV bone-on-bone ankylosis).
                  </li>
                  <li>
                    <strong>Active Rehabilitation Requirement:</strong> Lasting physical recovery requires patient participation in active stretching, muscular reconditioning, and postural habit adjustments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

