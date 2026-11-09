"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, MapPin } from "lucide-react";
import { Container, Section } from "@/components/ui";

/**
 * ServicesCTA Component
 * Reconstructs the dual-box Consultation & Inquiries CTA section from the Services Overview page.
 *
 * Verified Reference Specifications:
 * - Background: Dark image background with classic #555555 overlay (opacity 0.5)
 * - Left Column:
 *   - Eyebrow: "ABOUT US" (Marcellus SC, 18px, font-weight 600, color #FFFFFF)
 *   - Headline: "Customized treatment plans and lasting recovery" (Marcellus SC, 49px desktop, 35px mobile)
 *   - Button: "About Us" pill button (radius 26px, background #1CAAB6, text #FFFFFF)
 * - Right Column:
 *   - Background: Solid Primary Teal (#1CAAB6), border-radius 15px, padding 50px
 *   - Eyebrow: "CONTACT US" (Marcellus SC, 18px, font-weight 600, color #FFFFFF)
 *   - Headline: "Have questions? Get in touch!"
 *   - Quick Inquiry Fields: Name, Phone, Issue description with bottom-border transparent styling
 *   - Action Button: "Get In Touch" with arrow icon (white pill, dark teal text #083C45)
 *
 * Compliance Safeguards (Phase 17.1):
 * - Contact Number Safeguard: Unconfirmed phone number is not exposed as an active call action.
 * - Form Safeguard: No false success message; transparently notifies that live backend submission is not yet connected.
 * - Personal Data: No personal form data is stored or transmitted.
 */
export const ServicesCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  });
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.phone.trim()) {
      setAttemptedSubmit(true);
    }
  };

  return (
    <Section
      id="services-cta"
      background="secondary"
      spacing="default"
      className="relative scroll-mt-20 sm:scroll-mt-24 border-t border-white/10"
      aria-label="Appointment and Consultation Call to Action"
    >
      {/* Background Image & Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/clinic-procedure.webp"
          alt="Pain and Paralysis Clinic consultation and therapeutic environment"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-overlay"
        />
        <div
          className="absolute inset-0 bg-[#1C1C1C]/85"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column — About Us Pillar */}
          <div className="flex flex-col items-start justify-center text-left">
            <span className="section-badge mb-3 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              ABOUT US
            </span>

            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.2] text-white tracking-tight text-balance">
              Customized treatment plans and lasting recovery
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
              Have questions about your condition or treatment options? Consult our clinical team
              in Madhanandapuram, Chennai for non-surgical spine care, focused chiropractic adjustments,
              and specialized clinical rehabilitation tailored to your recovery goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center font-heading font-semibold text-base sm:text-lg text-white bg-primary hover:bg-white hover:text-secondary px-8 py-3.5 rounded-[26px] shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 font-heading font-semibold text-base text-white/90 hover:text-accent underline underline-offset-4 transition-colors"
              >
                <span>Book Direct Visit</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column — Signature Quick Inquiry Teal Box (.my-loca) */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white">
            <span className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              CONTACT US
            </span>

            <h3 className="mt-2 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
              Have questions? <br className="hidden sm:inline" />
              Get in touch!
            </h3>

            {attemptedSubmit ? (
              <div className="mt-6 rounded-xl bg-white/15 p-6 backdrop-blur-md border border-white/20 text-center animate-fade-in">
                <Info className="mx-auto h-10 w-10 text-white" aria-hidden="true" />
                <h4 className="mt-3 font-heading text-xl font-semibold text-white">
                  Online Submission Notice
                </h4>
                <p className="mt-2 font-sans text-sm text-white/90 leading-relaxed">
                  Online inquiry submission is currently not connected to the clinic reception system.
                  No personal details have been stored or transmitted.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 font-heading font-semibold text-[#083C45] bg-white hover:bg-secondary hover:text-white px-5 py-2.5 rounded-full text-sm shadow-sm transition-all duration-200"
                  >
                    <span>Visit Contact Page &rarr;</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setAttemptedSubmit(false)}
                    className="text-xs text-white/80 hover:text-white underline transition-colors"
                  >
                    Back to form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white pb-2.5 font-sans text-sm sm:text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      placeholder="Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white pb-2.5 font-sans text-sm sm:text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-issue" className="sr-only">
                    Tell Us Your Issue
                  </label>
                  <input
                    id="inquiry-issue"
                    type="text"
                    placeholder="Tell Us Your Issue"
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white pb-2.5 font-sans text-sm sm:text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 font-heading font-semibold text-base sm:text-lg text-[#083C45] bg-white hover:bg-secondary hover:text-white px-8 py-3 rounded-[20px] shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="text-xs text-white/85 hover:text-white underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    <span>View clinic address, timings &amp; appointment details on our Contact page</span>
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
