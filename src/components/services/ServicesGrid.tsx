"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { Container, Section, SectionHeading, Badge } from "@/components/ui";
import { ServicesOverviewCard } from "./ServicesOverviewCard";

const filterCategories = [
  { id: "all", label: "All 14 Hospital Services" },
  { id: "hospital", label: "Hospital & Inpatient Care" },
  { id: "neuro", label: "Neurological & Advanced Rehab" },
  { id: "pain", label: "Pain Management & Spine Care" },
];

export const ServicesGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "hospital") {
      return service.slug === "inpatient-care";
    }
    if (selectedFilter === "neuro") {
      return (
        service.slug === "robotic-neuro-rehabilitation" ||
        service.slug === "neuro-physiotherapy" ||
        service.slug === "advanced-physiotherapy" ||
        service.slug === "advanced-3d-gait-analysis" ||
        service.slug === "biofeedback" ||
        service.slug === "high-frequency-emg"
      );
    }
    if (selectedFilter === "pain") {
      return (
        service.slug === "pain-management" ||
        service.slug === "advanced-spine-decompression" ||
        service.slug === "advanced-chiropractor" ||
        service.slug === "advanced-knee-decompression" ||
        service.slug === "advanced-laser-treatment" ||
        service.slug === "advanced-aquatic-therapy" ||
        service.slug === "pelvic-floor-therapy"
      );
    }
    return true;
  });

  return (
    <Section
      id="services-catalog"
      background="secondary"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-b border-white/10"
      aria-label="Clinical Treatment Services Showcase"
    >
      <Container wide>
        {/* Section Header */}
        <SectionHeading
          layout="split"
          eyebrow="Hospital Facilities &amp; Specialized Services"
          title="Clinical Directory: All 14 Specialized Programs"
          description="Explore our 24-hour hospital inpatient care, robotic neurological rehabilitation, computerized spinal decompression, and comprehensive pain management services in Virugambakkam, Chennai."
          theme="dark"
          accent
          action={
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" dot size="sm">
                14 Bespoke Services
              </Badge>
              <Badge variant="surface" size="sm">
                25 Beds • 24 Hours
              </Badge>
              <Badge variant="surface" size="sm">
                Virugambakkam, Chennai
              </Badge>
            </div>
          }
        />

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 11 Services Responsive Multi-Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="flex h-full">
              <ServicesOverviewCard service={service} priority={index < 4} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
