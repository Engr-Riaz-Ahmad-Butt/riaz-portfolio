import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'others';
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  url: string;
  darkLogo?: boolean;
};

export type ProjectCategory = 'Full-stack' | 'Frontend';

export type ProjectStatus = 'completed' | 'in-progress';

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage?: string | StaticImageData;
  technologies: string[];
  featured?: boolean;
  github?: string;
  outcome?: string;
  role?: string;
  category?: ProjectCategory;
  status?: ProjectStatus;
  caseStudySlug?: string;
  archive?: boolean;
};

export type CertificatesDetails = {
  image?: string | StaticImageData;
  title: string;
  CertificateName: string;
  url: string;
  issuer?: string;
  year?: string;
  credentialId?: string;
};
