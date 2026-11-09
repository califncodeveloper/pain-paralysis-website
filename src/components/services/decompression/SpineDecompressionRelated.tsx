import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

interface RelatedService {
  title: string;
  category: string;
  description: string;
  image: string;
  route: string;
}

const relatedServicesData: RelatedService[] = [
  {
    title: "Advanced Chiropractor",
    category: "Spinal Alignment",
    description:
      "Manual adjustments focused on spinal joint mechanics, mobility, and musculoskeletal posture comfort.",
    image: "/images/services/chiropractic.webp",
    route: "/services/advanced-chiropractor",
  },
  {
    title: "Advanced Physiotherapy",
    category: "Rehabilitation",
    description:
      "Evidence-based clinical physical rehabilitation integrating targeted conditioning, joint mobilizations, and muscle re-education.",
    image: "/images/services/physiotherapy.webp",
    route: "/services/advanced-physiotherapy",
  },
  {
    title: "Advanced Aquatic Therapy",
    category: "Hydrotherapy",
    description:
      "Heated hydrotherapy pool rehabilitation that unloads body weight, easing joint gravitational pressure during movement recovery.",
    image: "/images/services/aquatic-therapy.webp",
    route: "/services/advanced-aquatic-therapy",
  },
  {
    title: "Advanced 3D Gait Analysis",
    category: "Diagnostic Biomechanics",
    description:
      "High-precision digital biomechanical evaluation capturing full-body kinematics, pressure distribution, and ambulation asymmetries.",
    image: "/images/services/3d-gait-analysis.webp",
    route: "/services/advanced-3d-gait-analysis",
  },
];

/**
 * SpineDecompressionRelated Component
 * Reconstructs the related therapies cross-navigation linking to the other 4 core clinical services.
 */
export const SpineDecompressionRelated: React.FC = () => {
  return (
    <Section
      id="related-services"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Specialized Therapies"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="COMPLEMENTARY THERAPIES"
          title="Related Specialized Treatments"
          description="Explore our complementary clinical modalities providing comprehensive multidisciplinary rehabilitation."
          align="center"
          theme="light"
          accent
        />

        {/* 4 Related Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-8">
          {relatedServicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 group"
            >
              <div>
                {/* Modality Image */}
                <div className="relative aspect-[455/320] w-full overflow-hidden bg-secondary/5">
                  <Image
                    src={service.image}
                    alt={`${service.title} specialized therapy at Pain and Paralysis Clinic`}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 340px, 90vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-secondary/85 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {service.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    <Link
                      href={service.route}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-body leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0">
                <Link
                  href={service.route}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors duration-200"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Explore Treatment</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
