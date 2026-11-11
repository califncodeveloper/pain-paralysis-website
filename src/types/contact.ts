export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export type SubmissionStatus =
  | "idle"
  | "submitting"
  | "pending_integration"
  | "error";

export interface ContactSubmissionState {
  status: SubmissionStatus;
  message?: string;
  timestamp?: string;
}

export interface ServiceOption {
  id: string;
  label: string;
  slug?: string;
}

