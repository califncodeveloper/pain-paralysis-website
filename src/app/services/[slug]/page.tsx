import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import {
  SpineDecompressionDetail,
  ChiropractorDetail,
  PhysiotherapyDetail,
  AquaticTherapyDetail,
  GaitAnalysisDetail,
  KneeDecompressionDetail,
  LaserTreatmentDetail,
  HighFrequencyEMGDetail,
  BiofeedbackDetail,
  NeuroPhysiotherapyDetail,
  PelvicFloorDetail,
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
    notFound();
  }

  if (slug === "advanced-spine-decompression") {
    return {
      title: "Advanced Spine Decompression",
      description:
        "Computerized mechanical spinal decompression traction therapy and clinical evaluation for back pain and disc-related care at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-spine-decompression",
      },
      openGraph: {
        title: "Advanced Spine Decompression | Pain & Paralysis Clinic",
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
      title: "Advanced Chiropractor",
      description:
        "Targeted manual adjustments, musculoskeletal joint mobilizations, and postural alignment protocols at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-chiropractor",
      },
      openGraph: {
        title: "Advanced Chiropractor | Pain & Paralysis Clinic",
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
      title: "Advanced Physiotherapy",
      description:
        "Outpatient physical therapy consultations and clinical movement evaluation at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-physiotherapy",
      },
      openGraph: {
        title: "Advanced Physiotherapy | Pain & Paralysis Clinic",
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
      title: "Advanced Aquatic Therapy",
      description:
        "Educational overview and outpatient consultation discussing the principles of water-based movement, low-impact exercise, and physical mobility at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-aquatic-therapy",
      },
      openGraph: {
        title: "Advanced Aquatic Therapy | Pain & Paralysis Clinic",
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
      title: "Advanced 3D Gait Analysis",
      description:
        "Educational overview and outpatient clinical evaluation of walking mechanics, movement symmetry, and functional biomechanics at Pain & Paralysis Clinic, Madhanandapuram, Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-3d-gait-analysis",
      },
      openGraph: {
        title: "Advanced 3D Gait Analysis | Pain & Paralysis Clinic",
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

  if (slug === "advanced-knee-decompression") {
    return {
      title: "Advanced Knee Decompression",
      description:
        "Learn about Advanced Knee Decompression at Pain & Paralysis Clinic Chennai, including mechanical joint distraction, clinical assessment, and non-surgical care options for knee discomfort.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-knee-decompression",
      },
      openGraph: {
        title: "Advanced Knee Decompression | Pain & Paralysis Clinic",
        description:
          "Learn about Advanced Knee Decompression at Pain & Paralysis Clinic Chennai, including mechanical joint distraction, clinical assessment, and non-surgical care options for knee discomfort.",
        url: "https://painandparalysis.com/services/advanced-knee-decompression",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/knee-decompression.webp",
            width: 455,
            height: 533,
            alt: "Advanced Knee Decompression mechanical traction modality at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "advanced-laser-treatment") {
    return {
      title: "Advanced Laser Treatment",
      description:
        "Non-invasive deep-tissue photobiomodulation and therapeutic laser protocols for musculoskeletal discomfort, joint stiffness, and soft tissue recovery at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/advanced-laser-treatment",
      },
      openGraph: {
        title: "Advanced Laser Treatment | Pain & Paralysis Clinic",
        description:
          "Non-invasive deep-tissue photobiomodulation and therapeutic laser protocols for musculoskeletal discomfort, joint stiffness, and soft tissue recovery at Pain & Paralysis Clinic Chennai.",
        url: "https://painandparalysis.com/services/advanced-laser-treatment",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/laser-therapy.webp",
            width: 455,
            height: 533,
            alt: "Advanced Laser Treatment therapeutic photobiomodulation modality at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "high-frequency-emg") {
    return {
      title: "High Frequency EMG",
      description:
        "Non-invasive surface electromyographic assessment and neuromuscular evaluation to analyze muscle activation, motor recruitment, and rehabilitation planning at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/high-frequency-emg",
      },
      openGraph: {
        title: "High Frequency EMG | Pain & Paralysis Clinic",
        description:
          "Non-invasive surface electromyographic assessment and neuromuscular evaluation to analyze muscle activation, motor recruitment, and rehabilitation planning at Pain & Paralysis Clinic Chennai.",
        url: "https://painandparalysis.com/services/high-frequency-emg",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/emg-therapy.webp",
            width: 455,
            height: 533,
            alt: "High Frequency EMG surface electromyography assessment instrumentation at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "biofeedback") {
    return {
      title: "Biofeedback",
      description:
        "Non-invasive neuromuscular biofeedback and surface EMG retraining for conscious muscle control, spasticity management, and motor rehabilitation at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/biofeedback",
      },
      openGraph: {
        title: "Biofeedback | Pain & Paralysis Clinic",
        description:
          "Non-invasive neuromuscular biofeedback and surface EMG retraining for conscious muscle control, spasticity management, and motor rehabilitation at Pain & Paralysis Clinic Chennai.",
        url: "https://painandparalysis.com/services/biofeedback",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/biofeedback.webp",
            width: 455,
            height: 533,
            alt: "Biofeedback neuromuscular consultation and sensor retraining at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "neuro-physiotherapy") {
    return {
      title: "Neuro Physiotherapy",
      description:
        "Outpatient neuro physiotherapy and neurological rehabilitation supporting functional mobility, balance, and motor retraining at Pain & Paralysis Clinic Chennai.",
      alternates: {
        canonical: "https://painandparalysis.com/services/neuro-physiotherapy",
      },
      openGraph: {
        title: "Neuro Physiotherapy | Pain & Paralysis Clinic",
        description:
          "Outpatient neuro physiotherapy and neurological rehabilitation supporting functional mobility, balance, and motor retraining at Pain & Paralysis Clinic Chennai.",
        url: "https://painandparalysis.com/services/neuro-physiotherapy",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/neuro-physiotherapy.webp",
            width: 455,
            height: 533,
            alt: "Neuro Physiotherapy clinical consultation and neurological rehabilitation at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  if (slug === "pelvic-floor-therapy") {
    return {
      title: "Pelvic Floor Therapy",
      description:
        "Non-surgical pelvic floor physical therapy and rehabilitation in Chennai for muscle weakness, bladder control support, pelvic discomfort, and core stability.",
      alternates: {
        canonical: "https://painandparalysis.com/services/pelvic-floor-therapy",
      },
      openGraph: {
        title: "Pelvic Floor Therapy | Pain & Paralysis Clinic",
        description:
          "Non-surgical pelvic floor physical therapy and rehabilitation in Chennai for muscle weakness, bladder control support, pelvic discomfort, and core stability.",
        url: "https://painandparalysis.com/services/pelvic-floor-therapy",
        siteName: "Pain & Paralysis Clinic",
        images: [
          {
            url: "/images/services/pelvic-floor.webp",
            width: 455,
            height: 533,
            alt: "Pelvic Floor Therapy clinical consultation and rehabilitation at Pain and Paralysis Clinic Chennai",
          },
        ],
      },
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://painandparalysis.com${service.route}`,
    },
    openGraph: {
      title: `${service.title} | Pain & Paralysis Clinic`,
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

  // Phase 30: Advanced Knee Decompression Detail Page Reconstruction
  if (slug === "advanced-knee-decompression") {
    return <KneeDecompressionDetail />;
  }

  // Phase 31: Advanced Laser Treatment Detail Page Reconstruction
  if (slug === "advanced-laser-treatment") {
    return <LaserTreatmentDetail />;
  }

  // Phase 32: High Frequency EMG Detail Page Reconstruction
  if (slug === "high-frequency-emg") {
    return <HighFrequencyEMGDetail />;
  }

  // Phase 33: Biofeedback Detail Page Reconstruction
  if (slug === "biofeedback") {
    return <BiofeedbackDetail />;
  }

  // Phase 34: Neuro Physiotherapy Detail Page Reconstruction
  if (slug === "neuro-physiotherapy") {
    return <NeuroPhysiotherapyDetail />;
  }

  // Phase 35: Pelvic Floor Therapy Detail Page Reconstruction
  if (slug === "pelvic-floor-therapy") {
    return <PelvicFloorDetail />;
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
