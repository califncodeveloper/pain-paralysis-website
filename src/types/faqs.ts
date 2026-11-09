export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  awaitingConfirmation?: boolean;
  authorizationStatus?: string;
  sourceDocument?: string;
}
