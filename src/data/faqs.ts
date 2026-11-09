import type { FaqItem } from "@/types";

/**
 * Frequently Asked Questions Dataset
 * Audited under Phase 15.1 for clinical evidence, operational accuracy, and authorization status.
 *
 * Authorization Protocol & Medical Compliance:
 * - Content is reproduced verbatim from the published reference website (https://painandparalysis.com/, Section 13).
 * - Historical website publication does NOT constitute formal clinic sign-off or primary clinical authorization.
 * - All operational statements (insurance empanelment, same-day scheduling, slot duration)
 *   and clinical scopes (diagnostic testing, treated conditions, therapy modalities)
 *   are tracked with explicit `awaitingConfirmation: true` and documented audit status.
 * - No fabricated medical claims, guarantees, recovery percentages, or diagnostic advice are present.
 */
export const faqsData: FaqItem[] = [
  {
    id: "faq-01",
    question: "Do you accept insurance?",
    answer:
      "Yes. Pain and Paralysis accepts most major insurance plans. We recommend checking with your insurance provider or contacting our clinic directly to verify your coverage for chiropractic care and therapy services.",
    category: "Insurance & Payment",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; awaiting primary clinic administrative verification of active insurance partner network and cashless empanelment.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-02",
    question: "What is the difference between a chiropractor and a physiotherapist?",
    answer:
      "While both professionals treat musculoskeletal conditions, their approaches and focus areas differ. A chiropractor primarily focuses on diagnosing and treating issues related to the spine, joints, and nervous system through manual adjustments, spinal manipulation, and corrective therapies. A physiotherapist typically uses exercises, stretches, and physical therapies to improve movement, strength, and function after injury or surgery. At Pain and Paralysis, we emphasize collaborative care and will guide you to the most appropriate treatment path based on your specific needs.",
    category: "Treatment Differences",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; standard clinical educational statement; awaiting final clinical director sign-off.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-03",
    question: "Will I need X-rays or diagnostic tests before treatment?",
    answer:
      "Not necessarily. Diagnostic tests or X-rays are recommended only if clinically required to better understand your condition or rule out underlying issues. In most cases, your chiropractor will conduct a thorough physical examination and history assessment to determine whether additional tests are needed before proceeding with treatment.",
    category: "Diagnosis & Clinical Assessment",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; conservative diagnostic assessment protocol; awaiting formal clinic protocol confirmation.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-04",
    question: "Can I Get a Same Day Appointment?",
    answer:
      "Yes. We understand how urgent pain management can be. Pain and Paralysis offers same-day appointments based on availability. Please contact our clinic by phone or through our website to schedule your visit at the earliest possible time.",
    category: "Appointments & Scheduling",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; operational scheduling policy awaiting active front-desk appointment capacity confirmation.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-05",
    question: "How Long does a chiropractic Treatment session last?",
    answer:
      "Each treatment session typically lasts between 45 minutes to 1 hour, depending on the complexity of your condition, the type of therapy being administered, and your personalized treatment plan. Our goal is to provide comprehensive care while respecting your time.",
    category: "Session Duration",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; clinical session duration awaiting current operational schedule confirmation.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-06",
    question: "What conditions do you treat?",
    answer:
      "At Pain and Paralysis, we specialize in treating a wide range of conditions, including: Neck pain, Shoulder pain, Lower back pain, Wrist pain.",
    category: "Conditions Treated",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; clinical scope of musculoskeletal conditions awaiting comprehensive diagnostic index confirmation.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
  {
    id: "faq-07",
    question: "What type of Services does Pain and Paralysis provide?",
    answer:
      "Pain and Paralysis offers a comprehensive suite of services, including: Neck pain management, Shoulder pain relief, Lower back pain care, Wrist pain treatment, Extended neck pain therapy, Joint pain management, Aquatic therapy — water-based rehabilitation designed to improve mobility, reduce joint stress, and promote healing in a supportive environment.",
    category: "Clinical Services",
    awaitingConfirmation: true,
    authorizationStatus:
      "Documented on reference website; clinical rehabilitation service list aligned with clinic modalities; awaiting primary clinic service registry verification.",
    sourceDocument:
      "Reference website https://painandparalysis.com/ (Elementor widget sky-advanced-accordion.default, item .sa-ac-item)",
  },
];
