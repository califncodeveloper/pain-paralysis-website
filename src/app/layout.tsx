import type { Metadata, Viewport } from "next";
import { marcellusSC, poppins } from "./fonts";
import { Header, Footer } from "@/components/layout";
import { FloatingActions } from "@/components/floating-actions";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1CAAB6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://painandparalysis.com"),
  title: {
    default: "Pain & Paralysis Hospital | 25-Bed Hospital & Rehabilitation Chennai",
    template: "%s | Pain & Paralysis Hospital",
  },
  description:
    "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai specializing in inpatient rehabilitation, robotic neuro rehabilitation, non-surgical spine decompression, and comprehensive pain management.",
  keywords: [
    "Pain and Paralysis Hospital",
    "24 Hour Hospital Virugambakkam",
    "Inpatient Rehabilitation Chennai",
    "Robotic Neuro Rehabilitation",
    "Spine Decompression Chennai",
    "Pain Management Hospital Chennai",
    "Dr Dinesh Anandhan",
  ],
  authors: [{ name: "Pain and Paralysis Hospital" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://painandparalysis.com",
    siteName: "Pain & Paralysis Hospital",
    title: "Pain & Paralysis Hospital | 25-Bed Hospital & Rehabilitation Chennai",
    description:
      "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai offering inpatient rehabilitation, robotic neuro rehabilitation, and comprehensive pain management.",
    images: [
      {
        url: "/images/logo/logo-color.webp",
        width: 728,
        height: 205,
        alt: "Pain and Paralysis Hospital Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/logo/logo-crest-square.webp", type: "image/webp" },
      { url: "/images/logo/clinic-crest.webp", type: "image/webp" },
    ],
    shortcut: "/images/logo/logo-crest-square.webp",
    apple: "/images/logo/clinic-crest.webp",
  },
};

const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Pain & Paralysis Hospital",
  description:
    "25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai specializing in inpatient care, robotic neuro rehabilitation, computerized spinal decompression, and comprehensive pain management.",
  url: "https://painandparalysis.com",
  telephone: "+91-80155-59609",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Virugambakkam",
    addressLocality: "Virugambakkam",
    addressRegion: "Tamil Nadu",
    postalCode: "600092",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0489,
    longitude: 80.1916,
  },
  hasMap: "https://share.google/5VIrbuVRpNjK02RIg",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Inpatient Rehabilitation & Hospital Care",
    },
    {
      "@type": "MedicalProcedure",
      name: "Robotic Neuro Rehabilitation",
    },
    {
      "@type": "MedicalProcedure",
      name: "Comprehensive Pain Management",
    },
    {
      "@type": "MedicalProcedure",
      name: "Advanced Spine Decompression",
    },
    {
      "@type": "MedicalProcedure",
      name: "Neuro Physiotherapy",
    },
  ],
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
      <head>
        <link rel="icon" href="/images/logo/logo-crest-square.webp?v=2" type="image/webp" />
        <link rel="shortcut icon" href="/images/logo/logo-crest-square.webp?v=2" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/logo/clinic-crest.webp?v=2" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-text overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
        <Header />
        <main id="main-content" className="flex-1 flex flex-col overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
