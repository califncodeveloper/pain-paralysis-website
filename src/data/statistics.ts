import type { StatisticItem } from "@/types";

/**
 * The 4 verified reference metrics from https://painandparalysis.com/
 * Note: Metric values reflect published reference site figures.
 */
export const statisticsData: StatisticItem[] = [
  {
    id: "stat-experience",
    value: "10+",
    numericValue: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "A decade of pioneering non-invasive spine and paralysis rehabilitation.",
    awaitingConfirmation: false,
  },
  {
    id: "stat-specialists",
    value: "30+",
    numericValue: 30,
    suffix: "+",
    label: "Our Specialists",
    description: "Multi-disciplinary team of certified chiropractors, physical therapists, and spine experts.",
    awaitingConfirmation: true, // Marked awaiting client verification of active roster count
  },
  {
    id: "stat-customers",
    value: "12k",
    numericValue: 12000,
    suffix: "k",
    label: "Happy Customers",
    description: "Thousands of patients restored to active, pain-free lifestyles across Tamil Nadu and beyond.",
    awaitingConfirmation: false,
  },
  {
    id: "stat-team",
    value: "25+",
    numericValue: 25,
    suffix: "+",
    label: "Team Members",
    description: "Dedicated clinical rehabilitation, diagnostic, and patient support personnel.",
    awaitingConfirmation: true, // Marked awaiting client verification of clinic staff total
  },
];

