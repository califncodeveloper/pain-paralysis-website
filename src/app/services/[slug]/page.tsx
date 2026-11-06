import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";

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
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
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

