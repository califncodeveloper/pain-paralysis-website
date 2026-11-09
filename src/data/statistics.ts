import type { StatisticItem } from "@/types";

/**
 * Clinical Statistics Dataset
 * Audited under Phase 13 for clinical evidence and authorization compliance.
 *
 * Authorization Protocol:
 * - Only numerical claims with verified primary documentation and explicit clinic sign-off
 *   may have `isApproved: true`.
 * - All unverified figures, estimated headcounts, and unconfirmed patient volumes
 *   are flagged with `isApproved: false` and withheld from the public UI.
 */
export const statisticsData: StatisticItem[] = [
  {
    id: "stat-experience",
    value: "10+",
    numericValue: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "A decade of dedicated non-invasive spine and paralysis rehabilitation care.",
    awaitingConfirmation: true,
    authorizationStatus: "Awaiting clinic documentation and authorization",
    sourceDocument: "Reference website https://painandparalysis.com/ (Elementor widget .counter.default)",
    isApproved: false,
  },
  {
    id: "stat-specialists",
    value: "30+",
    numericValue: 30,
    suffix: "+",
    label: "Our Specialists",
    description: "Multidisciplinary team of certified chiropractors, physical therapists, and spine rehabilitation specialists.",
    awaitingConfirmation: true,
    authorizationStatus: "Awaiting clinic roster verification and authorization",
    sourceDocument: "Reference website https://painandparalysis.com/ (Elementor widget .counter.default)",
    isApproved: false,
  },
  {
    id: "stat-customers",
    value: "12k",
    numericValue: 12000,
    suffix: "k",
    label: "Happy Customers",
    description: "Patients treated across Tamil Nadu for chronic spinal and neuromuscular conditions.",
    awaitingConfirmation: true,
    authorizationStatus: "Awaiting clinic patient volume audit and authorization",
    sourceDocument: "Reference website https://painandparalysis.com/ (Elementor widget .counter.default)",
    isApproved: false,
  },
  {
    id: "stat-team",
    value: "25+",
    numericValue: 25,
    suffix: "+",
    label: "Team Members",
    description: "Clinical rehabilitation assistants, physical therapists, and dedicated healthcare staff.",
    awaitingConfirmation: true,
    authorizationStatus: "Awaiting clinic staff roster verification and authorization",
    sourceDocument: "Reference website https://painandparalysis.com/ (Elementor widget .counter.default)",
    isApproved: false,
  },
];
