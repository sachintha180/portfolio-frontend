// lib/experience.ts

import type { Experience } from "../types/miscellaneous";

export const experience: Experience = [
  {
    title: "AI Researcher and Developer",
    organization: "Teams Squared",
    year: 2024,
  },
  {
    title: "Consultant AI/ML Software Engineer",
    organization: "Amplify Solutions",
    year: 2023,
  },
  {
    title: "Springboard Learner - Trainee",
    organization: "Calcey Technologies",
    year: 2023,
  },
  {
    title: "SACE Level 2 Digital Technologies - Assignment Curator",
    organization: "Gateway College Colombo",
    year: 2023,
  },
  {
    title: "Computer Science - IGCSE & iAL Tutor",
    organization: "Private",
    year: 2022,
  },
].sort((a, b) => b.year - a.year);
