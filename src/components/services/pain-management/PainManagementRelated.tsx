import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const relatedServices = [
  {
    title: "Advanced Spine Decompression",
    slug: "advanced-spine-decompression",
    route: "/services/advanced-spine-decompression",
    description: "Computerized mechanical spinal traction designed to relieve herniated, bulging discs and sciatica.",
    image: "/images/services/spine-decompression.webp",
  },
  {
    title: "Advanced Chiropractor",
    slug: "advanced-chiropractor",
    route: "/services/advanced-chiropractor",
    description: "Targeted manual adjustments supporting spinal mobility, joint biomechanics, and functional comfort.",
    image: "/images/services/chiropractic.webp",
  },
  {
    title: "Advanced Knee Decompression",
    slug: "advanced-knee-decompression",
    route: "/services/advanced-knee-decompression",
    description: "Mechanical distraction therapy reducing osteoarthritic friction and supporting knee mobility.",
    image: "/images/services/knee-decompression.webp",
  },
  {
    title: "Advanced Laser Treatment",
    slug: "advanced-laser-treatment",
    route: "/services/advanced-laser-treatment",
    description: "Targeted photobiomodulation stimulating cellular energy and easing soft-tissue inflammatory stiffness.",
    image: "/images/services/laser-therapy.webp",
  },
];

export const PainManagementRelated: React.FC = () => {
  return (
    <Section
      id="pain-related"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Pain Management Modalities"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="TARGETED MODALITIES"
          title="Related Pain Management Therapies"
          description="Explore specialized non-surgical modalities integrated into comprehensive pain treatment pathways."
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
                <span>View Modality Details</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

