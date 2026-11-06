import type { TestimonialItem } from "@/types";

/**
 * Verified patient testimonials from reference website.
 * Note: Subject to client privacy verification and patient consent approval before production release.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-01",
    patientName: "Dharshini Andal V",
    conditionOrTreatment: "Consultation & Clinical Care",
    testimonialText:
      "I had an excellent experience with Dr. Dinesh during my visit. From the moment I walked into the clinic, he was friendly, and the environment was calm and welcoming. Dr. Dinesh took the time to listen to my concerns and thoroughly explained the diagnosis and treatment options. His knowledge and professionalism made me feel comfortable and confident in the care I received.",
    rating: 5,
    avatarUrl: "/images/testimonials/dharshini.webp",
    authorizationStatus: "Awaiting client confirmation",
  },
  {
    id: "testimonial-02",
    patientName: "Annadurai S",
    conditionOrTreatment: "Hand Rehabilitation (7–8 Sessions)",
    testimonialText:
      "I struggled with a hand issue for over a year, but Dinesh resolved it in just 7–8 sessions! His expertise, quick diagnosis, and warm approach make him outstanding. I’ve referred many friends and family, all equally appreciative. His efficiency is remarkable. Best wishes, Dinesh! Keep up the great work and keep spreading positivity!",
    rating: 5,
    avatarUrl: "/images/testimonials/annadurai.webp",
    authorizationStatus: "Awaiting client confirmation",
  },
  {
    id: "testimonial-03",
    patientName: "Sudha Seshadri",
    conditionOrTreatment: "Chronic Shoulder Pain & Robotic Physiotherapy",
    testimonialText:
      "I’m Mrs. Sudha Seshadri from Adyar, Chennai. Dr. Dinesh Anand’s expertise in robotic physiotherapy and his positive approach are exceptional. I suffered from shoulder pain for three years despite treatment. Referred by my uncle, I consulted Dr. Dinesh, who accurately diagnosed and treated it. Now, I’m pain-free. Thank you, Dr. Dinesh!",
    rating: 5,
    avatarUrl: "/images/testimonials/sudha.webp",
    location: "Adyar, Chennai",
    authorizationStatus: "Awaiting client confirmation",
  },
];
