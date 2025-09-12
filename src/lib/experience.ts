// lib/experience.ts

import type { Experience } from "../types/miscellaneous";

export const experience: Experience = [
  {
    title: "Engineering & IT Lead",
    organization: "Teams Squared",
    startYear: 2024,
    endYear: "Current",
    details: [
      "directed IT infrastructure and security policy rollouts, achieving 100% device compliance and reducing contractor onboarding time by 50%",
      "spearheaded dashboard and automation projects (xero, clockify, zelt integrations)",
      "oversaw multi-stack engineering (fastapi, next.js, prisma)",
    ],
  },
  {
    title: "AI Software Developer",
    organization: "Amplify Solutions",
    startYear: 2023,
    endYear: 2024,
    details: [
      "built and deployed AI-powered automation modules, cutting document processing time by 60%",
      "enhanced system scalability with vector databases and embeddings",
    ],
  },
  {
    title: "Springboard Learner - Trainee",
    organization: "Calcey Technologies",
    startYear: 2023,
    endYear: 2024,
    details: [
      "completed an industry-focused training program, delivering 3 production-grade projects under mentorship",
      "excelled in full-stack development (C, C++, MERN), receiving the CodeCraft award for exceptional software development skill",
    ],
  },
  {
    title: "SACE Level 2 Digital Technologies - Assignment Curator",
    organization: "Gateway College Colombo",
    startYear: 2022,
    endYear: 2023,
    details: [
      "curated and structured assignment briefs for 5+ students, ensuring alignment with SACE DT criteria",
      "introduced feedback rubrics that reduced manual marking time by 25%",
      "helped a student achieve the 95th percentile in the world, earning him a top spot in a prestigious engineering programme",
    ],
  },
  {
    title: "Computer Science - IGCSE & iAL Tutor",
    organization: "Private",
    startYear: 2022,
    endYear: "Current",
    details: [
      "tutored 50+ students with a 80% pass rate and 60% achieving A or higher",
      "developed personalized learning materials (pseudocode drills, coding tasks), improving exam readiness by 40%",
    ],
  },
].sort((a, b) => b.startYear - a.startYear);
