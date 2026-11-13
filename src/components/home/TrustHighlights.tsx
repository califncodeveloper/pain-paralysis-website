import React from "react";
import { Bed, Clock, MapPin, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Bed,
      stat: "25 Beds",
      title: "Hospital Bed Capacity",
      description:
        "Dedicated 25-bed inpatient hospital care designed for coordinated recovery, intensive rehabilitation, and sustained clinical monitoring.",
      link: "/services/inpatient-care",
    },
    {
      icon: Clock,
      stat: "24 Hours",
      title: "Hospital Availability",
      description:
        "Hospital care available 24 hours in Virugambakkam, supporting round-the-clock rehabilitation needs and continuity of patient care.",
      link: "/contact-us",
    },
    {
      icon: MapPin,
      stat: "Virugambakkam",
      title: "Chennai Location",
      description:
        "Centrally accessible hospital facility located in Virugambakkam, Chennai, serving patients across the metropolitan region.",
      link: "/contact-us#location",
    },
    {
      icon: Cpu,
      stat: "Robotic Care",
      title: "Robotic Neuro Rehab",
      description:
        "Technology-assisted guided movement practice and task-oriented motor retraining for stroke, paralysis, and neurological conditions.",
      link: "/services/robotic-neuro-rehabilitation",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 lg:-mt-14 container-wide" aria-label="Hospital Capacity and Capabilities">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_25px_60px_rgba(16,81,86,0.12)] border border-[#105156]/15 p-6 sm:p-8 lg:p-10 transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#105156]/10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.link}
                className={`group flex flex-col items-start transition-all duration-300 hover:-translate-y-1.5 p-3 rounded-2xl hover:bg-[#F8FBFB] ${
                  index !== 0 ? "pt-6 md:pt-3 md:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1CAAB6]/15 to-[#07CCEC]/10 text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/20">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/25 group-hover:text-primary transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="text-2xl font-heading font-bold text-primary mb-1">
                  {item.stat}
                </span>
                <h3 className="font-heading font-semibold text-base text-secondary mb-1.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
