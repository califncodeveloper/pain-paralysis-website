"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types";

export interface GalleryLightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

/**
 * GalleryLightbox Component
 * Full-screen accessible image modal viewer for awards and clinical facility assets.
 *
 * Accessibility & UX Standards:
 * - Dialog semantics: role="dialog", aria-modal="true", aria-label
 * - Keyboard navigation: Escape to exit, Left/Right arrows for prev/next
 * - Background scroll lock while open
 * - Focus preservation: restores focus to triggering element on close
 * - Mobile responsive touch targets (minimum 44x44px buttons)
 * - Zero image distortion: clean aspect-ratio preservation
 */
export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const total = items.length;
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  // Lock body scroll and capture previous focus on mount/open
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus close button on next tick
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        previouslyFocusedElementRef.current?.focus();
      };
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentItem.title} - Lightbox Viewer`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 p-4 sm:p-6 md:p-8"
      onClick={(e) => {
        // Close if clicked on the backdrop directly
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Bar: Title & Close Button */}
      <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3 text-white">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-accent text-xs font-semibold">
            {currentIndex + 1} / {total}
          </span>
          <span className="font-heading text-sm sm:text-base font-medium tracking-wide text-white/90 truncate max-w-xs sm:max-w-md md:max-w-xl">
            {currentItem.title}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Frame */}
      <div className="relative flex flex-col items-center justify-center max-w-5xl max-h-[85vh] w-full">
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-lg">
          <div
            className={`relative max-w-full max-h-[70vh] flex items-center justify-center ${
              currentItem.aspectRatio === "portrait"
                ? "aspect-[3/4] h-[65vh]"
                : currentItem.aspectRatio === "landscape"
                ? "aspect-[2.06/1] w-[85vw] max-w-4xl"
                : "aspect-square h-[65vh] max-w-full"
            }`}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1024px"
              priority
              className="object-contain drop-shadow-2xl select-none"
            />
          </div>
        </div>

        {/* Caption & Metadata Bar */}
        <div className="mt-4 text-center px-4 max-w-2xl">
          <p className="text-sm sm:text-base text-white/90 font-sans font-medium">
            {currentItem.caption}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-medium text-white/90">{currentItem.itemType}</span>
            <span aria-hidden="true">&bull;</span>
            <span className="font-mono">{currentItem.binaryFormat} ({currentItem.mimeType})</span>
            <span aria-hidden="true">&bull;</span>
            <span className="font-mono">{currentItem.width} &times; {currentItem.height} px</span>
          </div>
          <p className="mt-1 text-[11px] text-white/50 font-sans">
            {currentItem.provenance}
          </p>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      {total > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="View previous image"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-primary hover:text-white backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6" aria-hidden="true" />
        </button>
      )}

      {/* Right Navigation Arrow */}
      {total > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="View next image"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-primary hover:text-white backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
