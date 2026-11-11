import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import {
  SpineDecompressionDetail,
  ChiropractorDetail,
  PhysiotherapyDetail,
  AquaticTherapyDetail,
  GaitAnalysisDetail,
} from "@/components/services";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Pain & Paralysis Clinic",
    };
  }

  if (slug === "advanced-spine-decompression") {
    return {
      title: "Advanced Spine Decompression | Pain & Paralysis Clinic Chennai",
      description:
        "Computerized mechanical spinal decompression traction therapy and clinical evaluation for back pain and disc-related care at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-spine-decompression",
      },
      openGraph: {
        title: "Advanced Spine Decompression | Pain & Paralysis Clinic Chennai",
        description:
          "Computerized mechanical spinal decompression traction therapy and clinical evaluation for back pain and disc-related care at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
        url: "https://painandparalysis.com/services/advanced-spine-decompression",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/spine-decompression-hero.webp",
            width: 455,
            height: 533,
            alt: "Advanced Spine Decompression mechanized traction table at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "advanced-chiropractor") {
    return {
      title: "Advanced Chiropractor | Pain & Paralysis Clinic Chennai",
      description:
        "Targeted manual adjustments, musculoskeletal joint mobilizations, and postural alignment protocols at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-chiropractor",
      },
      openGraph: {
        title: "Advanced Chiropractor | Pain & Paralysis Clinic Chennai",
        description:
          "Targeted manual adjustments, musculoskeletal joint mobilizations, and postural alignment protocols at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
        url: "https://painandparalysis.com/services/advanced-chiropractor",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/chiropractic.webp",
            width: 455,
            height: 533,
            alt: "Advanced Chiropractor manual adjustment at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "advanced-physiotherapy") {
    return {
      title: "Advanced Physiotherapy | Pain & Paralysis Clinic Chennai",
      description:
        "Outpatient physical therapy consultations and clinical movement evaluation at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-physiotherapy",
      },
      openGraph: {
        title: "Advanced Physiotherapy | Pain & Paralysis Clinic Chennai",
        description:
          "Outpatient physical therapy consultations and clinical movement evaluation at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
        url: "https://painandparalysis.com/services/advanced-physiotherapy",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/physiotherapy.webp",
            width: 455,
            height: 533,
            alt: "Advanced Physiotherapy consultation at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "advanced-aquatic-therapy") {
    return {
      title: "Advanced Aquatic Therapy | Pain & Paralysis Clinic Chennai",
      description:
        "Educational overview and outpatient consultation discussing the principles of water-based movement, low-impact exercise, and physical mobility at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-aquatic-therapy",
      },
      openGraph: {
        title: "Advanced Aquatic Therapy | Pain & Paralysis Clinic Chennai",
        description:
          "Educational overview and outpatient consultation discussing the principles of water-based movement, low-impact exercise, and physical mobility at Pain & Paralysis Clinic Chennai.",
        url: "https://painandparalysis.com/services/advanced-aquatic-therapy",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/aquatic-therapy.webp",
            width: 455,
            height: 533,
            alt: "Advanced Aquatic Therapy educational consultation overview at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "advanced-3d-gait-analysis") {
    return {
      title: "Advanced 3D Gait Analysis | Pain & Paralysis Clinic Chennai",
      description:
        "Educational overview and outpatient clinical evaluation of walking mechanics, movement symmetry, and functional biomechanics at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-3d-gait-analysis",
      },
      openGraph: {
        title: "Advanced 3D Gait Analysis | Pain & Paralysis Clinic Chennai",
        description:
          "Educational overview and outpatient clinical evaluation of walking mechanics, movement symmetry, and functional biomechanics at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
        url: "https://painandparalysis.com/services/advanced-3d-gait-analysis",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/3d-gait-analysis.webp",
            width: 455,
            height: 533,
            alt: "Educational illustration of three-dimensional human gait and movement analysis",
          },
        ],
      },
    };
  }

  return {
    title: `${service.title} | Pain & Paralysis Clinic Chennai`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://painandparalysis.com${service.route}`,
    },
    openGraph: {
      title: `${service.title} | Pain & Paralysis Clinic Chennai`,
      description: service.shortDescription,
      url: `https://painandparalysis.com${service.route}`,
      siteName: "Pain & Paralysis Clinic",
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  // Phase 18: Advanced Spine Decompression Detail Page Reconstruction
  if (slug === "advanced-spine-decompression") {
    return <SpineDecompressionDetail />;
  }

  // Phase 19: Advanced Chiropractor Detail Page Reconstruction
  if (slug === "advanced-chiropractor") {
    return <ChiropractorDetail />;
  }

  // Phase 20: Advanced Physiotherapy Detail Page Reconstruction
  if (slug === "advanced-physiotherapy") {
    return <PhysiotherapyDetail />;
  }

  // Phase 21: Advanced Aquatic Therapy Detail Page Reconstruction
  if (slug === "advanced-aquatic-therapy") {
    return <AquaticTherapyDetail />;
  }

  // Phase 22: Advanced 3D Gait Analysis Detail Page Reconstruction
  if (slug === "advanced-3d-gait-analysis") {
    return <GaitAnalysisDetail />;
  }

  // Default dynamic template for other service detail pages
  return (
    <div className="container-standard section-spacing">
      <article className="max-w-4xl">
        {service.category && (
          <span className="section-badge">{service.category}</span>
        )}
        <h1 className="text-h1 mt-2">{service.title}</h1>
        <p className="text-body mt-4 text-lg font-medium text-secondary">
          {service.shortDescription}
        </p>
        <div className="mt-6 text-body">
          <p>{service.description}</p>
        </div>
      </article>
    </div>
  );
}
