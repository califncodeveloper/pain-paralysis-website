import React from "react";
import Image from "next/image";
import {
  FileSearch,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container, Badge, Button } from "@/components/ui";

export const WhatWeDoSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "In-Person Clinical Assessment",
      image: "/images/about/clinic-procedure.webp",
      alt: "Doctor reviewing clinical diagnostic parameters and patient history",
      description:
        "Detailed review of patient medical history, previous MRI/radiology imaging, neuromuscular reflexes, and joint mobility restrictions.",
    },
    {
      num: "02",
      icon: Activity,
      title: "Objective Biomechanical Diagnostics",
      image: "/images/services/3d-gait-analysis.webp",
      alt: "Objective 3D gait biomechanics and electromyography diagnostic mapping",
      description:
        "High-frequency EMG to measure nerve conduction latency and computerized 3D gait analysis to map ground-reaction forces.",
    },
    {
      num: "03",
      icon: Layers,
      title: "Targeted Computerized Therapy",
      image: "/images/services/spine-decompression.webp",
      alt: "Computerized spinal decompression traction and laser therapy",
      description:
        "Precise non-surgical spinal decompression traction, manual chiropractic mobilizations, and therapeutic laser protocols.",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Functional Re-education",
      image: "/images/services/biofeedback.webp",
      alt: "Neuromuscular re-education and functional rehabilitation",
      description:
        "Neuromuscular biofeedback, aquatic buoyancy conditioning, and spinal stabilization exercises to preserve functional independence.",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="py-20 lg:py-28 bg-[#105156] text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 border-t border-white/10"
    >
      {/* Subtle lighting accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container wide className="relative z-10">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <Badge variant="accent" dot size="md" className="mb-3">
            Our Treatment Methodology
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-white mb-4">
            A Structured, Four-Phase Clinical Pathway to Sustained Recovery.
          </h2>
          <p className="text-sm sm:text-base text-teal-100/85 leading-relaxed font-sans">
            We don’t just address immediate pain symptoms—we evaluate underlying mechanical drivers. Every patient benefits from a reproducible, four-phase clinical methodology designed for lasting functional improvement.
          </p>
        </div>

        {/* 4-Phase Pathway Cards with Industry Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 transition-all duration-300 hover:bg-white/15 hover:border-accent/40 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#105156] via-[#105156]/40 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 flex items-center justify-between w-[calc(100%-24px)]">
                    <span className="font-heading font-bold text-lg text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-accent flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-white mb-2.5 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-accent">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-accent" />
                    <span>Evidence Protocol</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pathway Action Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-white">
                Personalized Clinical Prescription
              </h4>
              <p className="text-xs sm:text-sm text-teal-100/80 m-0 leading-relaxed">
                Treatment durations, session counts, and modalities are tailored strictly following in-person clinical examination in Chennai.
              </p>
            </div>
          </div>
          <Button
            href="/contact-us"
            variant="white"
            size="md"
            rounded="full"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 font-semibold hover:bg-primary hover:!text-white shadow-md"
          >
            Start Your Clinical Evaluation
          </Button>
        </div>
      </Container>
    </section>
  );
};
