"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { faqsData } from "@/data/faqs";
import { cn } from "@/lib/utils";

/**
 * FAQSection Component (Homepage Section 13)
 *
 * Reconstructs Section 13: Frequently Asked Questions from the original reference website.
 *
 * Verified Reference Specifications:
 * - Reference Elementor ID: .elementor-element-53a76f2
 * - Widget: Sky Advanced Accordion (sky-advanced-accordion.default)
 * - Eyebrow / Tag: "FAQ" (color: #1CAAB6)
 * - Section Title: "General Questions" (color: #105156, Marcellus SC font-heading)
 * - Subtitle / Description: "Know More, Heal Better"
 * - Section Background: #F8FBFB (Soft Surface Ice)
 * - Container Max-Width: ~860px - 900px (Narrow centered reader container)
 * - Interactive Accordion: Smooth animated expand/collapse, rotating chevron indicator (180deg)
 * - Questions Source: All 7 verified clinical questions from src/data/faqs.ts
 *
 * Accessibility & Usability (WAI-ARIA Accordion Pattern):
 * - Native <button> triggers with aria-expanded and aria-controls
 * - Region panels with matching aria-labelledby and unique IDs
 * - Full keyboard support: Enter, Space, ArrowDown, ArrowUp, Home, End
 * - Clear focus-visible rings for keyboard users
 * - Respects prefers-reduced-motion via motion-reduce:transition-none
 * - Zero layout clipping or horizontal overflow on small viewports
 */
export const FAQSection: React.FC = () => {
  // First verified item expanded by default per reference sky-advanced-accordion behavior
  const [expandedId, setExpandedId] = useState<string | null>("faq-01");
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /**
   * Toggle accordion item expansion
   */
  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  /**
   * Keyboard navigation between accordion triggers per ARIA APG pattern
   */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const total = faqsData.length;
    let nextIndex: number | null = null;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        nextIndex = (index + 1) % total;
        break;
      case "ArrowUp":
        e.preventDefault();
        nextIndex = (index - 1 + total) % total;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = total - 1;
        break;
      default:
        break;
    }

    if (nextIndex !== null && triggerRefs.current[nextIndex]) {
      triggerRefs.current[nextIndex]?.focus();
    }
  };

  // Structured schema for search engine eligibility strictly matching visible content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section
      id="faq"
      background="surface"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-t border-secondary/10"
      aria-label="Frequently Asked Questions"
    >
      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container size="narrow">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FAQ"
          title="General Questions"
          description="Know More, Heal Better — Find verified answers to common questions about our non-surgical spinal treatments, appointment scheduling, and clinical procedures."
          align="center"
          accent
          className="mb-8 sm:mb-12"
        />

        {/* Accordion List */}
        <div
          className="w-full space-y-3.5 sm:space-y-4"
          role="presentation"
        >
          {faqsData.map((faq, index) => {
            const isExpanded = expandedId === faq.id;
            const triggerId = `faq-trigger-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={cn(
                  "overflow-hidden rounded-xl bg-white border transition-all duration-200",
                  isExpanded
                    ? "border-primary/50 shadow-sm ring-1 ring-primary/20"
                    : "border-secondary/10 hover:border-primary/30 shadow-xs"
                )}
              >
                {/* Accordion Question Trigger */}
                <h3>
                  <button
                    ref={(el) => {
                      triggerRefs.current[index] = el;
                    }}
                    type="button"
                    id={triggerId}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => handleToggle(faq.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={cn(
                      "group w-full flex items-center justify-between text-left gap-4",
                      "px-5 py-4 sm:px-6 sm:py-5 min-h-[56px] cursor-pointer",
                      "transition-colors duration-200 select-none",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      isExpanded ? "bg-primary/[0.02]" : "hover:bg-primary/[0.02]"
                    )}
                  >
                    <div className="flex flex-col gap-1 pr-2">
                      {faq.category && (
                        <span className="text-[11px] font-medium uppercase tracking-wider text-primary">
                          {faq.category}
                        </span>
                      )}
                      <span
                        className={cn(
                          "font-sans font-semibold text-sm sm:text-base md:text-[17px] leading-snug transition-colors duration-200",
                          isExpanded
                            ? "text-secondary"
                            : "text-text group-hover:text-secondary"
                        )}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Rotating Indicator */}
                    <div
                      className={cn(
                        "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none",
                        isExpanded
                          ? "bg-primary text-white rotate-180 shadow-xs"
                          : "bg-surface text-secondary/70 group-hover:bg-primary/10 group-hover:text-primary rotate-0"
                      )}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </button>
                </h3>

                {/* Accordion Answer Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out motion-reduce:transition-none",
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-secondary/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-3">
                      <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-text/85">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full FAQ Navigation CTA Bar */}
        <div className="mt-10 sm:mt-12 rounded-xl bg-white border border-secondary/10 p-5 sm:p-6 md:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-secondary">
                  Have More Questions?
                </h4>
                <p className="font-sans text-xs sm:text-sm text-text/75 mt-0.5">
                  Explore our complete FAQ archive or schedule a personal clinical consultation.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                href="/faqs"
                icon={<ArrowRight className="h-3.5 w-3.5" />}
                className="w-full sm:w-auto"
              >
                View All FAQs
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/contact-us"
                className="w-full sm:w-auto"
              >
                Consult Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

