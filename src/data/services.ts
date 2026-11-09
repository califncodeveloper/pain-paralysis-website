import type { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    title: "Advanced Spine Decompression",
    slug: "advanced-spine-decompression",
    category: "Spine Care & Traction",
    shortDescription:
      "Non-surgical spinal decompression traction therapy designed to relieve herniated, bulging, or degenerated discs and alleviate sciatica.",
    description:
      "Advanced Spine Decompression is a non-invasive mechanical traction technology that gently stretches the spine. This creates negative intradiscal pressure inside the intervertebral discs, promoting disc retraction and supporting the influx of fluids, oxygen, and nutrients into the disc tissue.",
    image: "/images/services/spine-decompression.webp",
    heroImage: "/images/services/spine-decompression-hero.webp",
    route: "/services/advanced-spine-decompression",
    originalUrl: "https://painandparalysis.com/advanced-spine-decompression/",
    benefits: [
      "Negative intradiscal pressure relieves compressed nerve roots",
      "Promotes nutrient diffusion and accelerates disc rehydration",
      "Non-invasive, drug-free alternative to spine surgery",
      "Safe and comfortable computerized traction protocols",
    ],
    conditionsTreated: [
      "Herniated or Bulging Discs",
      "Sciatica & Radiating Leg Pain",
      "Degenerative Disc Disease",
      "Spinal Stenosis",
      "Facet Syndrome",
    ],
  },
  {
    id: "service-02",
    title: "Advanced Chiropractor",
    slug: "advanced-chiropractor",
    category: "Spinal Adjustment & Alignment",
    shortDescription:
      "Targeted manual adjustments designed to support spinal mobility, joint biomechanics, and functional physical comfort.",
    description:
      "Our chiropractic care focuses on musculoskeletal health with emphasis on gentle manual adjustments of the spine. Targeted adjustments are designed to support structural alignment, ease spinal tension, and improve functional mobility.",
    image: "/images/services/chiropractic.webp",
    route: "/services/advanced-chiropractor",
    originalUrl: "https://painandparalysis.com/advanced-chiropractor/",
    benefits: [
      "Restores structural spinal alignment without medication",
      "Addresses spinal tension and associated movement discomfort",
      "Enhances joint range of motion and overall posture",
      "Immediate reduction in chronic muscle tension and spasms",
    ],
    conditionsTreated: [
      "Acute & Chronic Neck Pain",
      "Lower Back Pain & Sacroiliac Dysfunction",
      "Tension Headaches & Cervicogenic Migraines",
      "Postural Kyphosis & Scoliosis Management",
      "Shoulder & Wrist Joint Misalignments",
    ],
  },
  {
    id: "service-03",
    title: "Advanced Physiotherapy",
    slug: "advanced-physiotherapy",
    category: "Physical Rehabilitation",
    shortDescription:
      "Clinical rehabilitation integrating specialized therapeutic modalities, manual therapy techniques, and targeted conditioning.",
    description:
      "Advanced Physiotherapy at Pain and Paralysis utilizes clinical rehabilitation equipment combined with Orthopaedic Manual Therapy and Mulligan Concept mobilizations. Each program is customized to strengthen stabilizing musculature, restore fluid joint mechanics, and support long-term functional recovery.",
    image: "/images/services/physiotherapy.webp",
    route: "/services/advanced-physiotherapy",
    originalUrl: "https://painandparalysis.com/advanced-physiotherapy/",
    benefits: [
      "Targeted therapeutic equipment for guided rehabilitation progress",
      "Restores functional muscle activation patterns",
      "Rapidly reduces localized inflammatory edema",
      "Individualized home conditioning plans for long-term recovery",
    ],
    conditionsTreated: [
      "Post-Surgical Orthopedic Rehabilitation",
      "Rotator Cuff Tears & Frozen Shoulder",
      "Sports Injuries & Ligament Strains",
      "Chronic Musculoskeletal Pain Syndromes",
      "Myofascial Pain Syndrome",
    ],
  },
  {
    id: "service-04",
    title: "Advanced Aquatic Therapy",
    slug: "advanced-aquatic-therapy",
    category: "Hydrotherapy Rehabilitation",
    shortDescription:
      "Heated hydrotherapy pool rehabilitation minimizing joint gravitational loading while accelerating functional mobility.",
    description:
      "Aquatic therapy takes advantage of the physical properties of water—buoyancy, hydrostatic pressure, and hydrodynamic resistance. The buoyancy of the heated pool unloads up to 90% of body weight, enabling patients with severe pain, joint degeneration, or paralysis to perform exercises impossible on dry land.",
    image: "/images/services/aquatic-therapy.webp",
    route: "/services/advanced-aquatic-therapy",
    originalUrl: "https://painandparalysis.com/advanced-aquatic-therapy/",
    benefits: [
      "Buoyancy unloads compressive forces from hips, knees, and spine",
      "Warm water induces vasodilation and muscle relaxation",
      "Hydrostatic pressure reduces peripheral swelling and edema",
      "Low-impact resistance develops balanced neuromuscular strength",
    ],
    conditionsTreated: [
      "Severe Knee & Hip Osteoarthritis",
      "Stroke & Neurological Mobility Impairments",
      "Fibromyalgia & Chronic Pain Syndromes",
      "Post-Surgical Weight-Bearing Restrictions",
      "Balance and Gait Coordination Deficits",
    ],
  },
  {
    id: "service-05",
    title: "Advanced 3D Gait Analysis",
    slug: "advanced-3d-gait-analysis",
    category: "Diagnostic Biomechanics",
    shortDescription:
      "Computerized biomechanical sensor assessment to detect postural anomalies, walking asymmetry, and kinetic dysfunction.",
    description:
      "Our 3D Gait Analysis provides objective kinetic and kinematic tracking of human locomotion. High-speed multi-angle cameras and computerized force plates capture foot-strike dynamics, joint angles, and weight distribution phases, pinpointing the mechanical root causes of recurring spine and lower limb pain.",
    image: "/images/services/3d-gait-analysis.webp",
    route: "/services/advanced-3d-gait-analysis",
    originalUrl: "https://painandparalysis.com/advanced3d-gait-analysis/",
    benefits: [
      "Pinpoints microscopic biomechanical walking discrepancies",
      "Prevents unilateral overuse and secondary joint stress",
      "Informs precise orthotic and corrective exercise prescription",
      "Tracks comparative rehabilitation milestones over time",
    ],
    conditionsTreated: [
      "Abnormal Walking Patterns & Limping",
      "Plantar Fasciitis & Foot Arch Collapse",
      "Patellofemoral Pain & Runner's Knee",
      "Pelvic Torsion & Functional Leg Length Discrepancy",
      "Post-Stroke Hemiplegic Gait Distortions",
    ],
  },
  {
    id: "service-06",
    title: "Advanced Knee Decompression",
    slug: "advanced-knee-decompression",
    category: "Joint Decompression",
    shortDescription:
      "Mechanical unloading and non-invasive articular distraction therapy to alleviate severe osteoarthritic knee friction.",
    description:
      "Advanced Knee Decompression utilizes dedicated clinical traction technology to gently isolate and distract the knee joint compartment. By separating the femur and tibia, mechanical friction is eliminated, joint fluid circulation is stimulated, and pain-free flexion is restored without injections or knee replacement surgery.",
    image: "/images/services/knee-decompression.webp",
    route: "/services#advanced-knee-decompression",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Reduces bone-on-bone compressive friction",
      "Stimulates synovial fluid nutrition and cartilage cushioning",
      "Immediate easing of joint stiffness and walking discomfort",
      "Non-surgical therapy designed for degenerative joint discomfort",
    ],
    conditionsTreated: [
      "Knee Osteoarthritis (Grade 1 - 4)",
      "Meniscus Tears & Joint Degeneration",
      "Chronic Tendonitis & Chondromalacia",
      "Post-Operative Knee Stiffness",
    ],
  },
  {
    id: "service-07",
    title: "Advanced Laser Treatment",
    slug: "advanced-laser-treatment",
    category: "Photobiomodulation",
    shortDescription:
      "High-intensity therapeutic laser therapy to stimulate cellular regeneration and rapidly eliminate deep inflammation.",
    description:
      "High-intensity Class IV laser therapy penetrates deep into damaged soft tissues and joint capsules. The therapeutic light wavelengths trigger photobiomodulation at the mitochondrial level, dramatically increasing ATP synthesis, enhancing microcirculation, and resolving chronic inflammatory states.",
    image: "/images/services/laser-therapy.webp",
    route: "/services#advanced-laser-treatment",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Rapid anti-inflammatory and pain-relieving analgesic effect",
      "Accelerates collagen formation and tissue repair",
      "Completely painless and non-thermal treatment sessions",
      "Deep therapeutic penetration unreachable by topical modalities",
    ],
    conditionsTreated: [
      "Acute & Chronic Tendinopathies",
      "Deep Muscle Spasms & Trigger Points",
      "Bursitis & Synovitis",
      "Nerve Entrapments & Carpal Tunnel Syndrome",
    ],
  },
  {
    id: "service-08",
    title: "High Frequency EMG",
    slug: "high-frequency-emg",
    category: "Neuromuscular Diagnostics",
    shortDescription:
      "Diagnostic and therapeutic electromyography assessing muscle neuromuscular response and electrical conductivity.",
    description:
      "High-Frequency Electromyography (EMG) evaluates the electrical signals transmitted through motor neurons into skeletal muscle fibers. This high-precision system detects localized denervation, fasciculations, and conduction blocks, directing therapist interventions to the exact root nerve root.",
    image: "/images/services/emg-therapy.webp",
    route: "/services#high-frequency-emg",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Objective mapping of neuromuscular activity and conduction",
      "Differentiates between primary muscle disease and nerve injury",
      "Eliminates diagnostic guesswork in complex paralysis cases",
      "Monitors exact neurological recovery rates across sessions",
    ],
    conditionsTreated: [
      "Peripheral Neuropathies & Radiculopathy",
      "Muscle Atrophy & Unexplained Weakness",
      "Spinal Nerve Root Compression",
      "Brachial Plexus Injuries",
    ],
  },
  {
    id: "service-09",
    title: "Biofeedback",
    slug: "biofeedback",
    category: "Neuromuscular Re-education",
    shortDescription:
      "Real-time neuromuscular sensor retraining enabling conscious control of involuntary muscle hypertonicity and spasms.",
    description:
      "Biofeedback therapy uses high-sensitivity physiological sensors to translate subtle biological signals—such as muscle tension and autonomic nerve impulses—into immediate visual and auditory feedback. Patients learn to actively modulate muscle contraction, dampening involuntary spasms and restoring balanced tone.",
    image: "/images/services/biofeedback.webp",
    route: "/services#biofeedback",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Empowers patients with self-regulation over involuntary tension",
      "Reduces chronic dependence on muscle relaxant medications",
      "Re-establishes healthy neuromuscular feedback loops",
      "Effective for both orthopedic tension and neurological spasticity",
    ],
    conditionsTreated: [
      "Chronic Tension Headaches & TMJ Dysfunction",
      "Neurological Muscle Spasticity",
      "Post-Stroke Motor Re-education",
      "Postural Stress & Cervical Dystonia",
    ],
  },
  {
    id: "service-10",
    title: "Neuro Physiotherapy",
    slug: "neuro-physiotherapy",
    category: "Neurological Rehabilitation",
    shortDescription:
      "Specialized neuro-rehabilitation for stroke, hemiplegia, paraplegia, and complex neurological movement deficits.",
    description:
      "Neuro Physiotherapy leverages the human brain's natural neuroplasticity to rebuild neural pathways damaged by stroke, trauma, or central nervous system disorders. Through repetitive task-specific training, proprioceptive neuromuscular facilitation (PNF), and robotic therapy, patients regain functional motor control and dignity.",
    image: "/images/services/neuro-physiotherapy.webp",
    route: "/services#neuro-physiotherapy",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Capitalizes on neuroplasticity to rewire damaged motor pathways",
      "Prevents joint contractures and muscle spasticity deformities",
      "Improves trunk control, sitting balance, and standing endurance",
      "Compassionate, structured recovery milestones",
    ],
    conditionsTreated: [
      "Ischemic & Hemorrhagic Stroke Recovery",
      "Hemiplegia, Monoplegia & Paraplegia",
      "Spinal Cord Injuries & Traumatic Brain Injury",
      "Parkinson's Disease & Movement Disorders",
      "Bell's Palsy & Facial Nerve Rehabilitation",
    ],
  },
  {
    id: "service-11",
    title: "Pelvic Floor",
    slug: "pelvic-floor-therapy",
    category: "Pelvic Health & Core",
    shortDescription:
      "Targeted clinical rehabilitation of pelvic floor musculature designed to support core stability and functional pelvic health.",
    description:
      "Pelvic Floor Physiotherapy delivers non-surgical clinical care focused on pelvic muscle strengthening and conditioning. Using biofeedback principles, gentle manual therapy, and structured core stabilization exercises, this gentle therapy supports tone, coordination, and functional stability in pelvic support muscles.",
    image: "/images/services/pelvic-floor.webp",
    route: "/services#pelvic-floor-therapy",
    originalUrl: "https://painandparalysis.com/#",
    benefits: [
      "Restores optimal tone and coordination to pelvic floor muscles",
      "Alleviates chronic pelvic, coccyx, and lower abdominal pain",
      "Improves bladder control and functional quality of life",
      "Non-surgical, discrete, and evidence-grounded care",
    ],
    conditionsTreated: [
      "Pelvic Pain Syndrome & Coccygodynia",
      "Stress & Urge Urinary Incontinence",
      "Postpartum Pelvic Muscle Conditioning",
      "Diastasis Recti & Core Instability",
    ],
  },
];
