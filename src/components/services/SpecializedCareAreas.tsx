import React from "react";
import Image from "next/image";
import { careAreasData } from "@/data/care-areas";
import { Container, Section, SectionHeading } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const SpecializedCareAreas: React.FC = () => {
  return (
    <Section
      id="care-areas"
      background="secondary"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-b border-white/10"
      aria-label="Specialized Care Areas"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLINICAL FOCUS AREAS"
          title="Specialized Care Programs"
          description="Targeted clinical focus programs combining non-invasive technology and supportive therapeutic protocols to restore structural alignment and functional independence."
          align="center"
          theme="dark"
          accent
        />

        {/* 4 Care Area Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-6">
          {careAreasData.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0e3b3f] border border-white/12 shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_20px_45px_rgba(28,170,182,0.25)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary/30">
                <Image
                  src={item.image}
                  alt={`${item.title} specialized care area`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0e3b3f] via-[#0e3b3f]/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-accent text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-teal-100/80 mb-4">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-primary">
                  <span className="group-hover:text-white transition-colors">
                    Clinical Pathway
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
