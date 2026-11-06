"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Play,
  X,
  ArrowRight,
  Activity,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Container, Section, Button } from "@/components/ui";

/**
 * AboutSection Component (Why Pain And Paralysis?)
 * Reconstructs the homepage Section 6 with a two-column desktop layout:
 * - Left column: Clinic crest emblem, clinical introduction, 3 value propositions, CTA actions.
 * - Right column: Authentic clinical procedure photo, interactive facility preview trigger,
 *   floating lead practitioner credential card, and accessible preview modal.
 */
export const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  // Check for deep-link preview modal trigger on hashchange / search param
  useEffect(() => {
    const checkDeepLink = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "true" || window.location.hash === "#preview-modal") {
        setIsModalOpen(true);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", checkDeepLink);

    // Check on initial client mount asynchronously
    const timer = setTimeout(checkDeepLink, 0);

    return () => {
      window.removeEventListener("hashchange", checkDeepLink);
      clearTimeout(timer);
    };
  }, []);

  // Manage body scroll locking and keyboard accessibility (Escape + Focus Trap)
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus to close button
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        triggerButtonRef.current?.focus();
        return;
      }

      // Basic focus trap within modal container
      if (e.key === "Tab" && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    triggerButtonRef.current?.focus();
  };

  return (
    <Section
      id="about"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-t border-secondary/5"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Emblem, Heading, Narrative & Core Values   */}
          {/* ========================================================= */}
          <div className="flex flex-col">
            {/* Clinic Crest Emblem + Eyebrow Badge */}
            <div className="mb-4 flex items-center gap-3.5">
              <div className="relative aspect-[237/248] w-12 sm:w-14 shrink-0">
                <Image
                  src="/images/logo/clinic-crest.webp"
                  alt="Pain and Paralysis Clinic Official Crest"
                  width={237}
                  height={248}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="section-badge inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  About Our Clinic
                </span>
                <span className="text-xs font-medium text-text-muted">
                  Integrated Spine Care &amp; Neurological Rehabilitation
                </span>
              </div>
            </div>

            {/* Main Section Heading */}
            <h2 className="mb-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-[42px]">
              Why Pain And Paralysis?
            </h2>

            {/* Introductory Narrative */}
            <p className="mb-6 font-sans text-base leading-relaxed text-text sm:text-lg">
              Pain and Paralysis Clinic is dedicated to restoring mobility, relieving acute and
              chronic pain, and rehabilitating neurological deficits without invasive surgery.
              Combining internationally certified chiropractic protocols, Japanese osteopathic
              precision, and advanced robotic physiotherapy, we target the root biomechanical
              source of dysfunction to achieve lasting physical recovery.
            </p>

            {/* 3 Core Value Propositions */}
            <div className="space-y-4 sm:space-y-5">
              {/* Value 1: Understanding Your Pain */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/60 p-4 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-secondary">
                    Understanding Your Pain
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text">
                    Healing begins with precise diagnostic assessment. We evaluate spinal
                    biomechanics and neuromuscular pathways to resolve the true cause of
                    discomfort rather than temporarily masking symptoms.
                  </p>
                </div>
              </div>

              {/* Value 2: Holistic Precision */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/60 p-4 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-secondary">
                    Holistic Precision
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text">
                    Integrating Master Chiropractic protocols from Osaka, Japan, certified
                    Gonstead adjustments, and robotic spine decompression into a unified,
                    individualized care plan.
                  </p>
                </div>
              </div>

              {/* Value 3: Drug-Free & Non-Surgical */}
              <div className="flex items-start gap-4 rounded-xl border border-secondary/10 bg-surface/60 p-4 transition-colors hover:border-primary/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-secondary">
                    Drug-Free &amp; Non-Surgical
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text">
                    Our targeted non-invasive treatments eliminate reliance on opioid medications
                    and help patients avoid risky spine operations, supporting safe and enduring
                    functional independence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/about-us"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              >
                Read More
              </Button>
              <Button
                href="/contact-us"
                variant="outline"
                size="lg"
                icon={<Calendar className="h-4 w-4" aria-hidden="true" />}
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Authentic Clinical Visual & Video Preview   */}
          {/* ========================================================= */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Primary Visual Card - Native 1024x682 (3:2) Aspect Ratio */}
            <div className="group relative aspect-[1024/682] w-full overflow-hidden rounded-2xl border border-secondary/10 bg-surface shadow-2xl shadow-secondary/15">
              <Image
                src="/images/about/clinic-procedure.webp"
                alt="Dr. Dinesh Anandhan administering non-surgical spine treatment at Pain and Paralysis Clinic"
                width={1024}
                height={682}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Contrast Gradient Overlay */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-75"
                aria-hidden="true"
              />

              {/* Top Clinical Feature Badges */}
              <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-secondary shadow-md backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  Clinical Care in Action
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-secondary/90 px-3 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm">
                  Non-Surgical Spine Care
                </span>
              </div>

              {/* Central Video Preview Trigger Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <button
                  ref={triggerButtonRef}
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group/btn relative flex h-16 w-16 sm:h-20 sm:w-20 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent active:scale-95"
                  aria-label="Open clinic facility and procedure video preview modal"
                >
                  {/* Subtle Pulse Halo */}
                  <span
                    className="absolute -inset-2 rounded-full bg-primary/30 animate-pulse group-hover/btn:bg-secondary/30"
                    aria-hidden="true"
                  />
                  <Play
                    className="ml-1 h-7 w-7 text-white transition-transform group-hover/btn:scale-110 sm:h-8 sm:w-8 fill-current"
                    aria-hidden="true"
                  />
                </button>
                <span className="mt-3 rounded-full bg-black/50 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-sm drop-shadow-md sm:text-sm">
                  Facility &amp; Treatment Preview
                </span>
              </div>
            </div>

            {/* Lead Practitioner Floating Highlight Card */}
            <div className="relative z-10 mt-4 sm:-mt-8 sm:ml-6 flex items-center gap-4 rounded-xl border border-secondary/10 bg-white p-3.5 sm:p-4 shadow-xl backdrop-blur-md max-w-md">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/40 bg-surface">
                <Image
                  src="/images/doctors/dr-dinesh-anandhan.webp"
                  alt="Dr. Dinesh Anandhan portrait"
                  width={2004}
                  height={2428}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-sm sm:text-base font-semibold text-secondary">
                    Dr. Dinesh Anandhan
                  </h3>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    Lead Specialist
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-0.5">
                  Master of Chiropractic Science (Osaka, Japan) • LPT (New York)
                </p>
                <p className="text-[11px] font-medium text-primary mt-0.5 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-primary inline" aria-hidden="true" />
                  10+ Years of Spine &amp; Neuromuscular Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================= */}
      {/* VIDEO PREVIEW MODAL (Accessible Dialog Pattern)            */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            ref={modalContainerRef}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-secondary/15 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-4 bg-surface">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play className="h-4 w-4 fill-current ml-0.5" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="video-modal-title" className="font-serif text-lg font-semibold text-secondary">
                    Clinical Facility &amp; Treatment Preview
                  </h3>
                  <p className="text-xs text-text-muted">
                    Pain and Paralysis Clinic — Madhanandapuram, Chennai
                  </p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseModal}
                className="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-black/5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                aria-label="Close video preview modal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Clinical Image Preview Frame */}
              <div className="relative aspect-[1024/682] w-full overflow-hidden rounded-xl bg-surface border border-secondary/10 mb-5">
                <Image
                  src="/images/about/clinic-procedure.webp"
                  alt="Clinical treatment preview at Pain and Paralysis Clinic"
                  width={1024}
                  height={682}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  Treatment In Progress
                </div>
              </div>

              {/* Status Notice (Transparent & Compliant) */}
              <div className="rounded-xl bg-surface/80 p-4 border border-primary/20 mb-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-text space-y-1">
                    <p className="font-semibold text-secondary">
                      Clinical Demonstration &amp; Facility Documentation
                    </p>
                    <p className="text-text-muted leading-relaxed">
                      Official video documentation is undergoing compliance certification.
                      Experience our robotic decompression, Gonstead chiropractic adjustments, and
                      heated aquatic rehabilitation directly at our Chennai facility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinical Modalities Highlighted */}
              <div className="grid grid-cols-2 gap-2.5 text-xs text-text mb-6">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Advanced Spine Decompression</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Japanese Master Chiropractic</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Robotic Neuro-Physiotherapy</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Heated Aquatic Therapy Pool</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-secondary/10">
                <Button href="/services" variant="outline" size="sm" onClick={handleCloseModal}>
                  Explore All Services
                </Button>
                <Button href="/contact-us" variant="primary" size="sm" onClick={handleCloseModal}>
                  Schedule In-Person Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
