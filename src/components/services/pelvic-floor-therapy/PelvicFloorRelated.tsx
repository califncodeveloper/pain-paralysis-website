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
    title: "Biofeedback",
    category: "Neuromuscular Re-Education",
    description:
      "Non-invasive surface sensor retraining to support conscious muscle regulation, tone dampening, and motor recruitment.",
    image: "/images/services/biofeedback.webp",
    route: "/services/biofeedback",
  },
  {
    title: "High Frequency EMG",
    category: "Neuromuscular Assessment",
    description:
      "Non-invasive surface electromyography evaluating motor unit action potentials and muscle firing symmetry to guide rehabilitation.",
    image: "/images/services/emg-therapy.webp",
    route: "/services/high-frequency-emg",
  },
  {
    title: "Neuro Physiotherapy",
    category: "Neurological Rehabilitation",
    description:
      "Specialized neuro-rehabilitation for stroke, hemiplegia, and neurological mobility deficits supporting balance and movement retraining.",
    image: "/images/services/neuro-physiotherapy.webp",
    route: "/services/neuro-physiotherapy",
  },
];

/**
 * PelvicFloorRelated Component
 * Cross-navigation section linking to completed and approved clinical therapies.
 */
export const PelvicFloorRelated: React.FC = () => {
  return (
    <Section
      id="related-services"
      background="surface"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Specialized Clinical Services"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="COMPLEMENTARY THERAPIES"
          title="Related Clinical Services"
          description="Explore other specialized physical therapy and non-invasive rehabilitation disciplines offered at Pain & Paralysis Clinic Chennai."
          align="center"
        />

        {/* 4-Card Related Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServicesData.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[455/320] w-full overflow-hidden bg-secondary/5">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Pain and Paralysis Clinic Chennai`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-secondary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                    {item.category}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-body line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-2">
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Directory Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-7 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:border-secondary shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span>View All Clinical Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

