// lib/education.ts

import type { Education } from "../types/miscellaneous";

export const education: Education = [
  {
    title: "International Advanced Level",
    description: "Pure Mathematics, Chemistry, Physics, Computer Science",
    grade: "4As",
    year: 2022,
  },
  {
    title: "International GCSE",
    description: "Sciences, Humanities, Mathematics, English, Commerce and ICT",
    grade: "12A*s",
    year: 2016,
  },
  {
    title: "BCS Diploma (Level 5) in IT",
    description: "Big Data Management, Databases, Professional Issues, OOP",
    grade: "Passed",
    year: 2025,
  },
  {
    title: "BCS Certificate (Level 4) in IT",
    description: "Computer Networks, Information Systems, Software Development",
    grade: "Passed",
    year: 2025,
  },
].sort((a, b) => b.year - a.year);
