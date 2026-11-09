import React from "react";
import Image from "next/image";
import { MapPin, Shield, Waves, Activity, Stethoscope, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

/**
 * AboutFacilities Component
 * Highlights the clinic's dedicated healing facility and rehabilitation environment in Chennai.
 *
 * Verified Reference Specifications:
 * - Location: Plot no : 5, Madha Nagar Main Road, Madhanandapuram, Chennai - 600125
 * - Asset: /images/common/clinic-exterior.webp
 * - Modalities: Spine decompression suite, chiropractic bays, aquatic therapy pool, robotic physiotherapy
 */
export const AboutFacilities: React.FC = () => {
  const facilityHighlights = [
    {
      title: "Non-Surgical Spine Decompression Suite",
      description:
        "Computerized decompression tables specifically engineered to create gentle negative intradiscal vacuum pressure for lumbar and cervical disc care.",
      icon: <Activity className="h-5 w-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Chiropractic & Postural Alignment Bays",
      description:
        "Ergonomic treatment stations designed for Gonstead manual adjustments, spinal mobilization, and targeted joint biomechanical correction.",
      icon: <Stethoscope className="h-5 w-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Aquatic Therapy Hydrotherapy Pool",
      description:
        "Specialized warm water hydrotherapy pool enabling buoyant, low-gravity movement therapy to restore mobility without joint impact.",
      icon: <Waves className="h-5 w-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Robotic Physiotherapy & Motion Rehab",
      description:
        "Modern neuromuscular sensor technologies, advanced laser, and electrotherapy units to accelerate musculoskeletal tissue recovery.",
      icon: <Shield className="h-5 w-5 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <Section
      id="facilities"
      background="surface"
      spacing="default"
      className="border-t border-secondary/10"
      aria-label="Clinic Facilities and Treatment Environment"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FACILITIES & CARE ENVIRONMENT"
          title="Our Dedicated Healing Facility in Chennai"
          description="Purpose-built in Madhanandapuram, Chennai, our specialized facility offers dedicated treatment suites, computerized decompression units, and hydrotherapy rehabilitation resources."
          align="center"
          accent
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Facility Photo & Address Badge */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-md">
              <Image
                src={clinicContactInfo.facilityImage || "/images/common/clinic-exterior.webp"}
                alt="Pain and Paralysis Clinic modern exterior facade and treatment facility in Madhanandapuram, Chennai"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Bottom Address Inset */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/95 p-3.5 shadow-md backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-secondary">
                      {clinicContactInfo.clinicName}
                    </p>
                    <p className="text-[11px] text-text/80 leading-snug mt-0.5">
                      Plot no : 5, Madha Nagar Main Road, Madhanandapuram, Chennai - 600125
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-text/70 italic text-center">
              Clinic exterior and dedicated patient consultation facility in Chennai
            </p>
          </div>

          {/* Right Column: 4 Facilities Highlight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {facilityHighlights.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl border border-secondary/10 bg-white p-5 shadow-xs transition-colors hover:border-primary/40 hover:shadow-sm"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    {facility.icon}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-secondary leading-snug">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text/80 font-sans">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Action Link */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Button
            href="/contact-us"
            variant="outline"
            size="md"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Get Directions &amp; Contact Details
          </Button>
        </div>
      </Container>
    </Section>
  );
};

