import React from "react";
import { servicesData } from "@/data/services";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { ServiceCard } from "./ServiceCard";

/**
 * ServicesSection Component (What We Offer)
 * Reconstructs the 11-treatment service showcase on the homepage with
 * a balanced responsive multi-column layout, native aspect ratios,
 * and seamless keyboard/touch navigation.
 */
export const ServicesSection: React.FC = () => {
  return (
    <Section
      id="services"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24"
    >
      <Container size="standard">
        {/* Section Header */}
        <SectionHeading
          eyebrow="What We Offer"
          title="Services"
          description="Explore our specialized non-surgical spine decompression, robotic physiotherapy, and advanced clinical rehabilitation therapies tailored for lasting recovery."
          align="center"
          accent
        />

        {/* 11 Services Balanced Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              <ServiceCard service={service} priority={index < 4} />
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <Button href="/contact-us" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
};
