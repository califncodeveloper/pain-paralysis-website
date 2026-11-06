export interface TestimonialItem {
  id: string;
  patientName: string;
  conditionOrTreatment: string;
  testimonialText: string;
  rating: number;
  avatarUrl: string;
  location?: string;
  date?: string;
  authorizationStatus: "Verified" | "Awaiting client confirmation" | "Consent pending";
}
