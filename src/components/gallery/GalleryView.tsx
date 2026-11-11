"use client";

import React, { useState } from "react";
import { GalleryAwards } from "./GalleryAwards";
import { GalleryOffice } from "./GalleryOffice";
import { GalleryLightbox } from "./GalleryLightbox";
import type { GalleryItem } from "@/types";

export interface GalleryViewProps {
  awards: GalleryItem[];
  officeItem: GalleryItem;
  allGalleryItems: GalleryItem[];
}

/**
 * GalleryView Component
 * Client-side interactive container coordinating the Awards grid, Office facility section,
 * and the accessible full-screen Lightbox image viewer.
 */
export const GalleryView: React.FC<GalleryViewProps> = ({
  awards,
  officeItem,
  allGalleryItems,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenAwards = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenOffice = () => {
    // Locate office item in allGalleryItems
    const officeIndex = allGalleryItems.findIndex(
      (item) => item.id === officeItem.id
    );
    setCurrentIndex(officeIndex >= 0 ? officeIndex : 0);
    setLightboxOpen(true);
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  const handleNavigate = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {/* 1. Verified AWARDS Section (5 image positions) */}
      <GalleryAwards awards={awards} onOpenLightbox={handleOpenAwards} />

      {/* 2. Verified OFFICE Facility Section */}
      <GalleryOffice
        officeItem={officeItem}
        onOpenLightbox={handleOpenOffice}
      />

      {/* 3. Accessible Image Viewer Lightbox */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        items={allGalleryItems}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
};

