import type { TeamMemberItem } from "@/types";

export const teamData: TeamMemberItem[] = [
  {
    id: "dr-dinesh-anandhan",
    name: "Dr. Dinesh Anandhan",
    designation: "Chiropractor & Physiotherapist",
    department: "Pain Management & Spine Care",
    experienceYears: 10,
    featured: true,
    image: "/images/doctors/dr-dinesh-anandhan.webp",
    qualifications: [
      "Master of Chiropractic Science (Osaka, Japan)",
      "Licensed Physical Therapist (New York, LPT No: 121319)",
      "Certified Orthopaedic Manual Therapist (OMT)",
      "Certified Mulligan Concept Practitioner",
      "Gonstead Chiropractic Technique Specialist (Reg No: 295)",
      "State Coordinator – TNPA (Reg No: A-1238)",
    ],
    bio: [
      "Dr. Dinesh Anandhan is an internationally trained pain management specialist, chiropractor, and physiotherapist dedicated to non-surgical spine care and neuromuscular rehabilitation.",
      "Having earned his Master of Chiropractic Science from Palms College in Osaka, Japan, and extensive clinical credentials in New York, Dr. Dinesh combines international evidence-based techniques with advanced robotic physical therapy.",
      "He specializes in Gonstead chiropractic adjustments, spinal decompression traction, fascial distortion modeling (FDM), and heated aquatic rehabilitation, restoring function and long-term vitality without reliance on opioid medications or spinal surgeries.",
    ],
    certifications: [
      {
        title: "Master of Chiropractic Science",
        institution: "Palms College, Osaka, Japan",
        credentialId: "Cert. No: 250910",
      },
      {
        title: "Licensed Physical Therapist (LPT)",
        institution: "State of New York, USA",
        credentialId: "Reg No: 121319",
      },
      {
        title: "Gonstead Chiropractic Technique",
        institution: "Gonstead Clinical Association",
        credentialId: "Reg No: 295",
      },
      {
        title: "Advanced Osteopathic Techniques",
        institution: "I Thrust Academy",
      },
      {
        title: "Facial Distortion Model (FDM)",
        institution: "European Fascial Distortion Model Association",
      },
      {
        title: "Certified Aquatic Fitness Instructor",
        institution: "QFCAFI",
        credentialId: "QFCAFI – 25-0050",
      },
      {
        title: "State Coordinator",
        institution: "Tamil Nadu Physiotherapists Association (TNPA)",
        credentialId: "Reg No: A-1238",
      },
    ],
  },
];

