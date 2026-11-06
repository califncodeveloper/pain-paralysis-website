import type { Metadata, Viewport } from "next";
import { marcellusSC, poppins } from "./fonts";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1CAAB6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://painandparalysis.com"),
  title: {
    default: "Pain & Paralysis Clinic | Integrated Spine Care & Rehabilitation",
    template: "%s | Pain & Paralysis Clinic",
  },
  description:
    "Specialized healthcare clinic in Chennai offering non-surgical spine decompression, paralysis rehabilitation, advanced chiropractic care, and physiotherapy.",
  keywords: [
    "Pain and Paralysis Clinic",
    "Spine Decompression Chennai",
    "Chiropractor Chennai",
    "Physiotherapy Chennai",
    "Paralysis Rehabilitation",
    "Dr Dinesh Anandhan",
  ],
  authors: [{ name: "Pain and Paralysis Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://painandparalysis.com",
    siteName: "Pain & Paralysis Clinic",
    title: "Pain & Paralysis Clinic | Integrated Spine Care & Rehabilitation",
    description:
      "Specialized clinic in Chennai offering non-surgical spinal decompression, chiropractic adjustments, and holistic neurological rehabilitation.",
    images: [
      {
        url: "/images/logo/logo-color.webp",
        width: 728,
        height: 205,
        alt: "Pain and Paralysis Clinic Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo/clinic-crest.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marcellusSC.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text overflow-x-hidden">
        <Header />
        <main id="main-content" className="flex-1 flex flex-col overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
