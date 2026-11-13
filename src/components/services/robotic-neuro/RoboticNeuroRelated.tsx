import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

const relatedServices = [
  {
    title: "Inpatient Rehabilitation & Hospital Care",
    slug: "inpatient-care",
    route: "/services/inpatient-care",
    description: "25-bed, 24-hour hospital-based inpatient care supporting continuous recovery and intensive therapy in Virugambakkam, Chennai.",
    image: "/images/common/clinic-exterior.webp",
  },
  {
    title: "Neuro Physiotherapy",
    slug: "neuro-physiotherapy",
    route: "/services/neuro-physiotherapy",
    description: "Specialized functional movement re-education and neuromuscular training for stroke and movement limitations.",
    image: "/images/services/neuro-physiotherapy.webp",
  },
  {
    title: "High Frequency EMG",
    slug: "high-frequency-emg",
    route: "/services/high-frequency-emg",
    description: "Non-invasive surface electromyographic assessment of muscle activation, motor recruitment, and functional progress.",
    image: "/images/services/emg-therapy.webp",
  },
  {
    title: "Biofeedback",
    slug: "biofeedback",
    route: "/services/biofeedback",
    description: "Real-time neuromuscular sensor retraining enabling conscious control over involuntary muscle hypertonicity.",
    image: "/images/services/biofeedback.webp",
  },
];

export const RoboticNeuroRelated: React.FC = () => {
  return (
    <Section
      id="robotic-related"
      background="white"
      spacing="default"
      className="scroll-mt-20 border-b border-black/5"
      aria-label="Related Neurological Rehabilitation Services"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="INTEGRATED MODALITIES"
          title="Related Neurological &amp; Advanced Services"
          description="Explore complementary diagnostic and therapeutic modalities designed to support sustained neurological recovery."
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

