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
    title: "Advanced Physiotherapy",
    category: "Physical Rehabilitation",
    description:
      "Outpatient physical therapy consultations, movement evaluations, and targeted exercise rehabilitation programs.",
    image: "/images/services/physiotherapy.webp",
    route: "/services/advanced-physiotherapy",
  },
  {
    title: "Advanced Spine Decompression",
    category: "Spine Care & Traction",
    description:
      "Computerized mechanical spinal traction therapy and clinical evaluation for disc-related back discomfort.",
    image: "/images/services/spine-decompression-hero.webp",
    route: "/services/advanced-spine-decompression",
  },
  {
    title: "Advanced Knee Decompression",
    category: "Joint Decompression",
    description:
      "Mechanical unloading and non-invasive articular distraction therapy designed to reduce osteoarthritic joint friction.",
    image: "/images/services/knee-decompression.webp",
    route: "/services/advanced-knee-decompression",
  },
  {
    title: "Advanced Chiropractor",
    category: "Spinal Adjustment",
    description:
      "Targeted manual adjustments and musculoskeletal mobilizations to support spinal mobility and joint biomechanics.",
    image: "/images/services/chiropractic.webp",
    route: "/services/advanced-chiropractor",
  },
];

/**
 * LaserTreatmentRelated Component
 * Cross-navigation section linking to completed and approved clinical therapies.
 */
export const LaserTreatmentRelated: React.FC = () => {
  return (
    <Section
      id="related-services"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Specialized Treatments at Pain and Paralysis Clinic"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="COMPLEMENTARY SERVICES"
          title="Related Specialized Treatments"
          description="Explore complementary non-invasive outpatient programs available at Pain and Paralysis Clinic."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* 4-Card Horizontal Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
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
                  <h3 className="font-heading text-base font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-body leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-secondary transition-colors pt-3 border-t border-black/5">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Footer Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
          >
            <span>View All Clinical Services &amp; Specialized Care</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

