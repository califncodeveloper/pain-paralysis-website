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
    title: "High Frequency EMG",
    category: "Neuromuscular Assessment",
    description:
      "Non-invasive surface electromyography evaluating motor unit action potentials and muscle firing symmetry to guide rehabilitation.",
    image: "/images/services/emg-therapy.webp",
    route: "/services/high-frequency-emg",
  },
  {
    title: "Advanced Physiotherapy",
    category: "Physical Rehabilitation",
    description:
      "Outpatient physical therapy consultations, movement evaluations, and targeted exercise rehabilitation programs.",
    image: "/images/services/physiotherapy.webp",
    route: "/services/advanced-physiotherapy",
  },
  {
    title: "Advanced Laser Treatment",
    category: "Photobiomodulation",
    description:
      "Targeted deep-tissue photobiomodulation to stimulate cellular energy, ease localized inflammation, and support tissue recovery.",
    image: "/images/services/laser-therapy.webp",
    route: "/services/advanced-laser-treatment",
  },
  {
    title: "Advanced Chiropractor",
    category: "Spine & Joint Alignment",
    description:
      "Targeted joint mobilizations, spinal alignment protocols, and musculoskeletal decompression to restore joint mobility.",
    image: "/images/services/chiropractic.webp",
    route: "/services/advanced-chiropractor",
  },
];

/**
 * BiofeedbackRelated Component
 * Cross-navigation section linking to completed and approved clinical therapies.
 */
export const BiofeedbackRelated: React.FC = () => {
  return (
    <Section
      id="related-services"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Clinical Services and Therapies"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="COMPREHENSIVE CARE"
          title="Related Specialized Services"
          description="Explore synergistic rehabilitation and clinical diagnostic services offered at Pain & Paralysis Clinic."
          align="center"
          className="max-w-3xl mx-auto"
        />

        {/* 4-Card Related Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServicesData.map((service, index) => (
            <Link
              key={index}
              href={service.route}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[455/340] w-full overflow-hidden bg-secondary/5">
                  <Image
                    src={service.image}
                    alt={`${service.title} at Pain and Paralysis Clinic Chennai`}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 1024px) 240px, (min-width: 640px) 320px, 90vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-secondary/85 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-secondary transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-body leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Hub Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span>Explore All Specialized Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

