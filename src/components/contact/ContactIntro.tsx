import React from "react";
import { Stethoscope, CalendarCheck, FileText } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { contactIntroPoints } from "@/data/contact";

/**
 * ContactIntro Component
 * Introductory section for the Contact Us page.
 * Provides clear expectations for clinical consultations and appointment inquiries.
 */
export const ContactIntro: React.FC = () => {
  const icons = [CalendarCheck, Stethoscope, FileText];

  return (
    <Section
      id="contact-intro"
      background="white"
      spacing="default"
      className="border-b border-secondary/10"
      aria-label="Clinical Consultation Expectations"
    >
      <Container size="standard">
        <SectionHeading
          eyebrow="PATIENT CONSULTATION"
          title="Outpatient Inquiries & Information"
          description="General information regarding clinic location, appointment inquiries, and non-surgical care modalities at our Madhanandapuram, Chennai center."
          align="center"
          accent
          className="mb-8 sm:mb-12"
        />

        {/* 3-Card Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactIntroPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="rounded-xl p-6 bg-surface border border-secondary/10 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-lg font-semibold text-secondary mb-2">
                  {point.title}
                </h2>
                <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
