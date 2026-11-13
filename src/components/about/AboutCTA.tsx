import React from "react";
import { Calendar, ArrowRight, Phone } from "lucide-react";
import { Container, Section, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

/**
 * AboutCTA Component
 * Reconstructs the Consultation Call to Action section from the About Us reference page.
 *
 * Verified Reference Specifications:
 * - Headline: "Customized treatment plans and lasting recovery — Have questions? Get in touch!"
 * - Primary Action: Schedule consultation linking to /contact-us/
 * - Secondary Action: Explore treatment services linking to /services/
 */
export const AboutCTA: React.FC = () => {
  return (
    <Section
      id="about-cta"
      background="transparent"
      spacing="default"
      className="relative scroll-mt-20 sm:scroll-mt-24 bg-gradient-to-b from-[#0a3134] via-[#105156] to-[#072427] text-white border-t border-white/10 overflow-hidden"
      aria-label="Appointment and Consultation Call to Action"
    >
      {/* Subtle Atmospheric Radial Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="standard" className="relative z-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Eyebrow Badge */}
          <span className="section-badge mb-3 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            START YOUR RECOVERY
          </span>

          {/* Main Headline */}
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight text-white tracking-tight text-balance max-w-3xl">
            Customized Treatment Plans and Lasting Recovery
          </h2>

          {/* Subtitle */}
          <p className="mt-4 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-teal-100/90 max-w-2xl text-balance">
            Have questions about your condition or treatment options? Consult our clinical team
            in Virugambakkam, Chennai to discuss 25-bed inpatient care, robotic neuro rehab, or specialized non-surgical spine care tailored to your recovery goals.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact-us"
              variant="primary"
              size="lg"
              icon={<Calendar className="h-4 w-4" aria-hidden="true" />}
            >
              Book Consultation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-secondary"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Explore Services
            </Button>
          </div>

          {/* Direct Telephone Prompt */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
            <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>
              Direct Inquiries:{" "}
              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="font-medium text-white hover:text-accent underline transition-colors"
              >
                {clinicContactInfo.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

