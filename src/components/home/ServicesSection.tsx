"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { Container, Button, SectionHeading, Badge } from "@/components/ui";
import { ServiceCard } from "./ServiceCard";

const categories = [
  { id: "all", label: "All Hospital Services (14)" },
  { id: "hospital", label: "Hospital & Inpatient Care" },
  { id: "neuro", label: "Neurological & Advanced Rehab" },
  { id: "pain", label: "Pain Management & Spine Care" },
];

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "hospital") {
      return service.slug === "inpatient-care";
    }
    if (activeCategory === "neuro") {
      return (
        service.slug === "robotic-neuro-rehabilitation" ||
        service.slug === "neuro-physiotherapy" ||
        service.slug === "advanced-physiotherapy" ||
        service.slug === "advanced-3d-gait-analysis" ||
        service.slug === "biofeedback" ||
        service.slug === "high-frequency-emg"
      );
    }
    if (activeCategory === "pain") {
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

  const featuredService = servicesData.find(
    (s) => s.slug === "inpatient-care"
  );
  const remainingServices =
    activeCategory === "all"
      ? servicesData.filter((s) => s.slug !== "inpatient-care")
      : filteredServices;

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <Container wide>
        {/* Editorial Split Header */}
        <SectionHeading
          layout="split"
          eyebrow="Hospital Care & Specialized Services"
          title="Hospital Inpatient & Specialized Rehabilitation Directory"
          description="Providing 24-hour hospital inpatient care, robotic neurological rehabilitation, and 14 specialized clinical programs designed to treat acute spinal disorders, stroke paralysis, and chronic musculoskeletal pain in Virugambakkam, Chennai."
          accent
          action={
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge variant="primary" dot size="sm">
                14 Hospital &amp; Specialized Services
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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-secondary text-white shadow-md"
                  : "bg-[#F8FBFB] text-text hover:bg-black/5 hover:text-secondary border border-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Marquee Service Card (Displayed when 'All' is active) */}
        {activeCategory === "all" && featuredService && (
          <div className="mb-8">
            <ServiceCard service={featuredService} featured priority />
          </div>
        )}

        {/* Grid of Remaining / Filtered Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {remainingServices.map((service, index) => (
            <div key={service.id} className="flex">
              <ServiceCard service={service} priority={index < 4} />
            </div>
          ))}
        </div>

        {/* Bottom Banner: View Full Services Catalog & Consultation */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#105156] to-[#0c3d41] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
              Unsure which clinical therapy is indicated for your condition?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/80 max-w-xl">
              Schedule a comprehensive clinical assessment with Dr. Dinesh Anandhan to evaluate your MRI, symptoms, and functional movement goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/contact-us"
              variant="white"
              size="md"
              rounded="full"
              className="font-semibold shadow hover:bg-primary hover:!text-white"
            >
              Request Consultation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="md"
              rounded="full"
              className="border-white/30 !text-white hover:bg-white/10"
            >
              Full Catalog Details
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
