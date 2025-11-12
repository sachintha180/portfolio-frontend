import type { ReactNode } from "react";

export type PageItem = {
  label: string;
  href: string;
  colorClass: string;
};

export type ContactItem = {
  icon: ReactNode;
  href: string;
  text: string;
  iconColorClass: string;
};

type Logo = {
  src: string;
  alt: string;
};

export type Organization = {
  name: string;
  url: string;
  logo: Logo;
  location: string;
};

export type Role = {
  role: string;
  startDate: Date;
  endDate: Date | number;
  details: string[];
};

export type ExperienceItem = {
  organization: Organization;
  roles: Role[];
  group: string;
};

export type GroupedExperienceItem = {
  group: string;
  items: ExperienceItem[];
};

export type GroupedExperienceDurations = Record<string, number>;

export type Program = {
  name: string;
  field?: string;
  endYear: number;
  pursuing: boolean;
  description: string;
  grade?: string;
};

export type EducationItem = {
  label: string;
  institution: Organization;
  programs: Program[];
};

export type AwardItem = {
  title: string;
  label: string;
  organization: Organization;
  year: number;
  description: string;
};

export type ProjectItem = {
  title: string;
  label: string;
  description: string[];
  tools: string[];
  timeDuration: string;
  link?: string;
  pending?: boolean;
};
