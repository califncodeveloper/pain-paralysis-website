export interface CredentialAuditItem {
  title: string;
  institution?: string;
  credentialId?: string;
  source: string;
  verificationStatus: "Awaiting clinic confirmation" | "Verified";
}

export interface TeamMemberItem {
  id: string;
  name: string;
  designation: string;
  department: string;
  experienceYears?: number;
  clinicalFocus: string[];
  qualifications?: string[];
  bio: string[];
  image: string;
  featured: boolean;
  certifications?: CredentialAuditItem[];
}
