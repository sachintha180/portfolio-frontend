// lib/honors.ts

import type { Honors } from "../types/miscellaneous";

export const honors: Honors = [
  {
    title: "CodeCraft Award",
    organization: "Calcey",
    year: 2024,
  },
  {
    title: "Merit - Asia Pacific ICT Alliance Awards",
    organization: "APICTA",
    year: 2021,
  },
  {
    title: "Senior National Champion - YCS Competition",
    organization: "FITIS Sri Lanka",
    year: 2021,
  },
  {
    title: "Overall Champion - InnovaThon 2021",
    organization: "Gateway College & Dialog Enterprise",
    year: 2021,
  },
  {
    title: "Silver Award - SLIIT Codefest",
    organization: "SLIIT",
    year: 2021,
  },
  {
    title: "School Category Champion - Hack:AI 2021",
    organization: "STEMUP, SLASSCOM & UNDP",
    year: 2021,
  },
  {
    title: "Most Creative App of the Month",
    organization: "MIT App Inventor",
    year: 2017,
  },
  {
    title: "Junior Merit Award - YCS Competition",
    organization: "FITIS Sri Lanka",
    year: 2017,
  },
].sort((a, b) => b.year - a.year);
