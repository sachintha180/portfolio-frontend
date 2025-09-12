// types/miscellaneous.ts

export type TechStackKeyType =
  | "frontend"
  | "backend"
  | "data"
  | "mla"
  | "fullStack"
  | "other";

export type TechStackEntryType = {
  tools: string[];
  languageLogoSrc?: string;
};
export type TechStack = Partial<Record<TechStackKeyType, TechStackEntryType>>;

type TechStackMapType = {
  label: string;
  startColor: string;
  endColor: string;
};
export type TechStackMap = Record<TechStackKeyType, TechStackMapType>;

export type ProjectEntryType = {
  title: string;
  stackTypeKey: TechStackKeyType;
  description: string;
  tools: string[];
  link?: string;
  imageSrc?: string;
  timeDuration?: string;
};
export type Projects = ProjectEntryType[];

export type EducationEntryType = {
  title: string;
  description: string;
  grade: string;
  year: number;
};
export type Education = EducationEntryType[];

export type ExperienceEntryType = {
  title: string;
  organization: string;
  startYear: number;
  endYear?: number | string;
  details: string[];
};
export type Experience = ExperienceEntryType[];

export type HonorEntryType = {
  title: string;
  organization: string;
  year: number;
};
export type Honors = HonorEntryType[];

export type Coordinates = { x: number; y: number };
