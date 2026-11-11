export type GalleryAspectRatio = "square" | "portrait" | "landscape";
export type GalleryCategory = "award" | "office";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: GalleryAspectRatio;
  category: GalleryCategory;
  itemType: string;
  binaryFormat: "JPEG" | "PNG" | "WebP";
  mimeType: string;
  provenance: string;
  displayOrder: number;
}
