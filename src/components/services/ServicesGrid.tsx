import React from "react";
import { servicesData } from "@/data/services";
import { Container, Section, SectionHeading } from "@/components/ui";
import { ServicesOverviewCard } from "./ServicesOverviewCard";

/**
 * ServicesGrid Component (What We Offer / Services)
 * Reconstructs the 11-treatment service showcase on the Services Overview page
 * with the signature Deep Marine Teal (#105156) section background,
 * authentic .serv-ice-icon cards, and responsive 4-column flow.
 */
export const ServicesGrid: React.FC = () => {
  return (
    <Section
      id="services-catalog"
      background="secondary"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-b border-white/10"
      aria-label="Clinical Treatment Services Showcase"
    >
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="SERVICES"
          description="Explore our specialized non-surgical spine decompression, specialized physiotherapy, and advanced clinical rehabilitation therapies tailored for lasting recovery."
          align="center"
          theme="dark"
          accent
        />

        {/* 11 Services Responsive Multi-Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="flex h-full">
              <ServicesOverviewCard service={service} priority={index < 4} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

