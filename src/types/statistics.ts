export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  numericValue: number;
  suffix?: string;
  description?: string;
  awaitingConfirmation?: boolean;
  authorizationStatus?: string;
  sourceDocument?: string;
  isApproved: boolean;
}
