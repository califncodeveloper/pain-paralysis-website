"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  ChevronsLeftRight,
  MoveHorizontal,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * BeforeAfterSection Component
 * Reconstructs homepage Section 8: Interactive Before & After Posture Comparison Slider.
 *
 * Verified Reference Specifications:
 * - Container ID: .elementor-element-4269a7f (sky-image-compare.default)
 * - Section Background: #F8FBFB (Soft Surface Ice)
 * - Before Image: public/images/about/posture-before.webp (1290 x 660 px)
 * - After Image: public/images/about/posture-after.webp (1290 x 660 px)
 * - Aspect Ratio: 1290 / 660 (~1.95:1)
 * - Interaction: Draggable vertical split divider with mouse, touch, and full keyboard accessibility
 */
export const BeforeAfterSection: React.FC = () => {
  // Slider position represents percentage of the "Before" image visible (0 to 100)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  /**
   * Calculate and update the slider percentage from clientX coordinate
   */
  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;

    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(Math.round(percentage * 10) / 10);
  }, []);

  /**
   * Pointer down starts drag interaction
   */
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to primary mouse button or touch/pen contact
    if (e.button !== 0 && e.pointerType === "mouse") return;

    setIsDragging(true);
    updateSliderFromClientX(e.clientX);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback handled by global window listeners
    }
  };

  /**
   * Pointer move updates slider if currently dragging
   */
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderFromClientX(e.clientX);
  };

  /**
   * Pointer up concludes drag interaction
   */
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Safe fallback
      }
    }
  };

  /**
   * Global pointer move and up listeners to handle drag release outside bounds
   */
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalPointerMove = (e: PointerEvent) => {
      updateSliderFromClientX(e.clientX);
    };

    const handleGlobalPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    window.addEventListener("pointerup", handleGlobalPointerUp);
    window.addEventListener("pointercancel", handleGlobalPointerUp);

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      window.removeEventListener("pointercancel", handleGlobalPointerUp);
    };
  }, [isDragging, updateSliderFromClientX]);

  /**
   * Accessible keyboard navigation for the slider handle
   * Left/Down decreases Before image visible percentage (reveals more After)
   * Right/Up increases Before image visible percentage (reveals more Before)
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let step = 2; // Default 2% step
    if (e.shiftKey) step = 10; // Shift + Arrow jumps 10%

    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        setSliderPosition((prev) => Math.max(0, Math.round((prev - step) * 10) / 10));
        break;
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        setSliderPosition((prev) => Math.min(100, Math.round((prev + step) * 10) / 10));
        break;
      case "PageDown":
        e.preventDefault();
        setSliderPosition((prev) => Math.max(0, Math.round((prev - 10) * 10) / 10));
        break;
      case "PageUp":
        e.preventDefault();
        setSliderPosition((prev) => Math.min(100, Math.round((prev + 10) * 10) / 10));
        break;
      case "Home":
        e.preventDefault();
        setSliderPosition(0);
        break;
      case "End":
        e.preventDefault();
        setSliderPosition(100);
        break;
    }
  };

  return (
    <Section
      id="posture-comparison"
      background="surface"
      spacing="default"
      className="relative scroll-mt-20 border-b border-black/5"
    >
      <Container size="wide">
        {/* Section Heading */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <SectionHeading
            eyebrow="POSTURE RESTORATION"
            title="Before & After Posture Comparison"
            description="Drag the slider horizontally to view verified clinical postural alignment changes achieved through non-surgical chiropractic and spinal decompression care."
            align="center"
            theme="light"
            accent
            className="mb-8 sm:mb-10 w-full max-w-3xl"
            titleClassName="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-secondary"
            descriptionClassName="font-sans text-sm sm:text-base text-text/80 max-w-2xl mx-auto mt-3"
          />
        </div>

        {/* Comparison Slider Frame */}
        <div className="mx-auto w-full max-w-[1200px]">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={cn(
              "group relative w-full overflow-hidden select-none",
              "aspect-[1024/571] rounded-xl sm:rounded-2xl lg:rounded-3xl",
              "bg-secondary/10 shadow-[0_12px_40px_rgba(16,81,86,0.12)] border border-black/8",
              "cursor-ew-resize touch-pan-y",
              isDragging && "cursor-grabbing ring-2 ring-primary/50 shadow-[0_16px_50px_rgba(28,170,182,0.25)]",
              isFocused && "ring-2 ring-primary/40"
            )}
            style={{ touchAction: "pan-y" }}
            aria-label="Interactive posture before and after comparison frame"
          >
            {/* Layer 1: Underneath "After" Image (Right Side by default) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/about/posture-after.webp"
                alt="Post-treatment clinical posture alignment showing restored spinal curvature and biomechanical balance"
                width={1024}
                height={571}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>

            {/* Layer 2: Clipped "Before" Image (Left Side by default) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src="/images/about/posture-before.webp"
                alt="Pre-treatment clinical baseline posture assessment showing spinal misalignment and slouching"
                width={1024}
                height={571}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
              aria-hidden="true"
            >
              <div className="relative h-full w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]">
                {/* Subtle soft cyan glow on divider */}
                <div className="absolute inset-y-0 -left-1 -right-1 bg-accent/25 blur-[1.5px]" />
              </div>
            </div>

            {/* Draggable & Keyboard-Accessible Slider Thumb Handle */}
            <div
              ref={handleRef}
              role="slider"
              tabIndex={0}
              aria-label="Posture Before and After comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuetext={`Before posture: ${Math.round(sliderPosition)}%, After posture: ${100 - Math.round(sliderPosition)}%`}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
                "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full",
                "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35)]",
                "border-2 sm:border-[3px] border-primary text-secondary",
                "flex items-center justify-center cursor-ew-resize",
                "focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2",
                "transition-transform select-none touch-none",
                isDragging || isFocused
                  ? "scale-110 shadow-[0_8px_30px_rgba(28,170,182,0.45)] ring-4 ring-primary/40"
                  : "hover:scale-105 active:scale-95"
              )}
              style={{ left: `${sliderPosition}%` }}
            >
              <ChevronsLeftRight
                className="w-5 h-5 sm:w-6 sm:h-6 text-secondary transition-colors group-hover:text-primary pointer-events-none"
                aria-hidden="true"
              />
              <span className="sr-only">
                Posture comparison slider: currently {Math.round(sliderPosition)}% Before and {100 - Math.round(sliderPosition)}% After. Use Left and Right arrow keys to adjust.
              </span>
            </div>

            {/* Before Badge (Upper Left) */}
            <div
              className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none transition-opacity duration-200"
              style={{ opacity: sliderPosition < 6 ? 0.25 : 1 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-secondary/90 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg border border-white/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                Before
              </span>
            </div>

            {/* After Badge (Upper Right) */}
            <div
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 pointer-events-none transition-opacity duration-200"
              style={{ opacity: sliderPosition > 94 ? 0.25 : 1 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/95 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg border border-white/20">
                <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
                After
              </span>
            </div>
          </div>

          {/* Slider Controls Bar: Quick Views & Accessible Instructions */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-text/75 bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-black/5 shadow-xs">
            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-secondary text-xs sm:text-sm">Quick View:</span>
              <div
                className="inline-flex items-center rounded-lg bg-surface p-1 border border-black/8"
                role="group"
                aria-label="Preset comparison viewpoints"
              >
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={cn(
                    "px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer",
                    sliderPosition === 100
                      ? "bg-secondary text-white shadow-xs"
                      : "text-text/80 hover:text-secondary hover:bg-black/5"
                  )}
                  aria-pressed={sliderPosition === 100}
                >
                  100% Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={cn(
                    "px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer inline-flex items-center gap-1",
                    sliderPosition === 50
                      ? "bg-primary text-white shadow-xs"
                      : "text-text/80 hover:text-secondary hover:bg-black/5"
                  )}
                  aria-pressed={sliderPosition === 50}
                >
                  <RotateCcw className="w-3 h-3" aria-hidden="true" />
                  50/50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={cn(
                    "px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer",
                    sliderPosition === 0
                      ? "bg-secondary text-white shadow-xs"
                      : "text-text/80 hover:text-secondary hover:bg-black/5"
                  )}
                  aria-pressed={sliderPosition === 0}
                >
                  100% After
                </button>
              </div>
            </div>

            {/* Accessible Interaction Hint */}
            <div className="flex items-center gap-2 text-text/70 text-xs sm:text-sm">
              <MoveHorizontal className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span>
                Drag handle horizontally or use <kbd className="px-1.5 py-0.5 rounded bg-black/5 border border-black/10 font-mono text-[11px] text-secondary">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-black/5 border border-black/10 font-mono text-[11px] text-secondary">→</kbd> arrow keys
              </span>
            </div>
          </div>

          {/* Clinical Posture Restoration Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/5 shadow-xs">
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-secondary text-sm sm:text-base">
                  Cervical & Head Alignment
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-text/75 leading-relaxed">
                  Reduces forward head posture and eases tension along upper trapezius and suboccipital muscles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/5 shadow-xs">
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-secondary text-sm sm:text-base">
                  Thoracic Spine Decompression
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-text/75 leading-relaxed">
                  Counteracts rounded shoulders and hyperkyphosis through gentle mechanical unloading and mobilization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/5 shadow-xs">
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-secondary text-sm sm:text-base">
                  Pelvic & Lumbar Balance
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-text/75 leading-relaxed">
                  Rebalances anterior pelvic tilt and stabilizes core musculature to prevent recurring lower back strain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
