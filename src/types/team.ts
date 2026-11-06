export interface CertificationItem {
  title: string;
  institution: string;
  credentialId?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  designation: string;
  department: string;
  experienceYears?: number;
  qualifications: string[];
  bio: string[];
  image: string;
  featured: boolean;
  certifications?: CertificationItem[];
}

