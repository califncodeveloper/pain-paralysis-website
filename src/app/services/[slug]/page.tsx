import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { SpineDecompressionDetail } from "@/components/services";

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
