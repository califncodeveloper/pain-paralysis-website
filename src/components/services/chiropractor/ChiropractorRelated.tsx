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
    title: "Advanced Spine Decompression",
    category: "Spine Care & Traction",
    description:
      "Computerized motorized mechanical traction designed to relieve herniated, bulging, or degenerated discs and alleviate sciatica.",
    image: "/images/services/spine-decompression-hero.webp",
    route: "/services/advanced-spine-decompression",
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
 * ChiropractorRelated Component
 * Reconstructs the related therapies cross-navigation linking to the other 4 core clinical services.
 */
export const ChiropractorRelated: React.FC = () => {
  return (
    <Section
      id="related-services"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Specialized Therapies at Pain and Paralysis Clinic"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="COMPLEMENTARY THERAPIES"
          title="Related Specialized Treatments"
          description="Explore our complementary non-invasive rehabilitation and physical therapy programs designed to support holistic musculoskeletal recovery."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* 4-Card Horizontal Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServicesData.map((service, index) => (
            <Link
              key={index}
              href={service.route}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[455/320] w-full overflow-hidden bg-secondary/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 280px, (min-width: 1024px) 220px, (min-width: 640px) 340px, 90vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-secondary/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                  {service.category}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-heading text-base font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-body line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors duration-200 group-hover:text-secondary pt-3 border-t border-black/5">
                  <span>Explore Modality</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

