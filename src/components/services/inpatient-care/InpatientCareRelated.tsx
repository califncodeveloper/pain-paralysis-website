import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const relatedServices = [
  {
    title: "Robotic Neuro Rehabilitation",
    slug: "robotic-neuro-rehabilitation",
    route: "/services/robotic-neuro-rehabilitation",
    description: "Technology-assisted guided movement practice and task-oriented motor retraining for neurological conditions.",
    image: "/images/services/care-trauma.webp",
  },
  {
    title: "Comprehensive Pain Management",
    slug: "pain-management",
    route: "/services/pain-management",
    description: "Multidisciplinary non-surgical clinical protocols for persistent spinal, joint, and musculoskeletal discomfort.",
    image: "/images/services/care-spine.webp",
  },
  {
    title: "Neuro Physiotherapy",
    slug: "neuro-physiotherapy",
    route: "/services/neuro-physiotherapy",
    description: "Specialized functional movement re-education and neuromuscular training for stroke and movement limitations.",
    image: "/images/services/neuro-physiotherapy.webp",
  },
  {
    title: "Advanced Spine Decompression",
    slug: "advanced-spine-decompression",
    route: "/services/advanced-spine-decompression",
    description: "Computerized mechanical traction designed to relieve herniated discs, sciatica, and nerve compression.",
    image: "/images/services/spine-decompression.webp",
  },
];

export const InpatientCareRelated: React.FC = () => {
  return (
    <Section
      id="inpatient-related"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Specialized Hospital Programs"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="INTEGRATED PROGRAMS"
          title="Related Hospital Services"
          description="Explore complementary hospital-based therapies and specialized outpatient rehabilitation programs."
          align="center"
          accent
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={service.route}
              className="group rounded-2xl border border-black/5 bg-surface-soft overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base text-secondary group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-text/75 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                <span>View Program Details</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

