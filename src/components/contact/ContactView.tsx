import React from "react";
import { Container, Section } from "@/components/ui";
import { ContactIntro } from "./ContactIntro";
import { ContactForm } from "./ContactForm";
import { ContactOfficeInfo } from "./ContactOfficeInfo";
import { ContactLocationMap } from "./ContactLocationMap";

/**
 * ContactView Component
 * Orchestrates the Contact Us page sections:
 * 1. Contact Introduction & Consultation Guidance
 * 2. Balanced 2-Column Interactive Section (Form + Office Info)
 * 3. Interactive Location Map Section
 */
export const ContactView: React.FC = () => {
  return (
    <>
      {/* 1. Introductory Consultation Context */}
      <ContactIntro />

      {/* 2. Balanced 2-Column Section: Form & Office Information */}
      <Section
        id="contact-form-section"
        background="white"
        spacing="default"
        className="border-b border-secondary/10"
        aria-label="Appointment Request and Office Information"
      >
        <Container size="standard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Interactive Contact & Inquiry Form (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col">
              <ContactForm />
            </div>

            {/* Right Column: Clinic Office Information & Qualifications (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col">
              <ContactOfficeInfo />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Interactive Map & Directions Section */}
      <ContactLocationMap />
    </>
  );
};

