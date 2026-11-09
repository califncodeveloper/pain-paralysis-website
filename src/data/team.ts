import type { TeamMemberItem } from "@/types";

/**
 * Team Dataset — Clinical Leadership & Practitioners
 * Audited under Phase 12.1 for medical claims compliance:
 * - Unverified numerical claims (years, roster counts) removed pending explicit documentation.
 * - Geographic institutional claims (Osaka, New York) audited and omitted from public copy.
 * - Registration numbers and specific certification claims staged with explicit audit status ("Awaiting clinic confirmation").
 * - Clinical focus reflects verified treatment modalities provided at the clinic.
 */
export const teamData: TeamMemberItem[] = [
  {
    id: "dr-dinesh-anandhan",
    name: "Dr. Dinesh Anandhan",
    designation: "Chiropractor & Physiotherapist",
    department: "Pain Management & Spine Care",
    featured: true,
    image: "/images/doctors/dr-dinesh-anandhan.webp",
    clinicalFocus: [
      "Non-Surgical Spine Decompression",
      "Chiropractic Adjustments & Alignment",
      "Targeted Physical Rehabilitation",
      "Gonstead Chiropractic Principles",
      "Aquatic Therapy & Hydrotherapy",
      "Biomechanical & Postural Assessment",
    ],
    // Qualifications and registrations under medical verification audit:
    // Staged for verification tracking; omitted from public UI pending clinic primary records.
    qualifications: [],
    bio: [
      "Dr. Dinesh Anandhan is a pain management specialist, chiropractor, and physiotherapist dedicated to non-surgical spine care, physical therapy, and musculoskeletal rehabilitation.",
      "At Pain and Paralysis Clinic, Dr. Dinesh integrates evidence-based chiropractic adjustments, manual therapy, and advanced rehabilitation technologies to evaluate and treat root mechanical causes of pain.",
      "His clinical focus emphasizes non-invasive spine care, targeted spinal decompression, Gonstead chiropractic techniques, and aquatic therapy designed to support mobility and alleviate pain without reliance on surgery.",
    ],
    certifications: [
      {
        title: "Master of Chiropractic Science",
        institution: "Palms College, Osaka, Japan",
        credentialId: "Cert. No: 250910",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Licensed Physical Therapist (LPT)",
        institution: "State of New York, USA",
        credentialId: "Reg No: 121319",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Gonstead Chiropractic Technique Specialist",
        institution: "Gonstead Clinical Association",
        credentialId: "Reg No: 295",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Orthopaedic Manual Therapy (OMT)",
        institution: "Manual Therapy Certification Body",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Mulligan Concept Manual Therapy",
        institution: "Mulligan Concept Teachers Association",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "State Coordinator",
        institution: "Tamil Nadu Physiotherapists Association (TNPA)",
        credentialId: "Reg No: A-1238",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Facial Distortion Model (FDM)",
        institution: "European Fascial Distortion Model Association",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
      {
        title: "Certified Aquatic Fitness Instructor",
        institution: "QFCAFI",
        credentialId: "QFCAFI – 25-0050",
        source: "Reference website /about-us/ page",
        verificationStatus: "Awaiting clinic confirmation",
      },
    ],
  },
];
