import type {
  ExperienceItem,
  GroupedExperienceItem,
  GroupedExperienceDurations,
} from "@/types/miscellaneous";
import { groupExperienceItems } from "@/lib/utils";
import { computeGroupedExperienceDurations } from "@/lib/utils";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    organization: {
      name: "Teams Squared",
      url: "https://www.teamsquared.io/",
      logo: {
        src: "/teams-squared-logo.png",
        alt: "Teams Squared Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    roles: [
      {
        role: "Engineering & IT Lead",
        startDate: new Date(2025, 8, 28),
        endDate: -1,
        details: [
          "Directed IT infrastructure, cybersecurity, and policy rollouts to reach 100% device compliance.",
          "Conducted routine IT setup and troubleshooting for 30+ employees based in Sri Lanka, Philippines, India, South Africa and Nepal.",
          "Headed procurement of IT equipment and software licenses to support business operations.",
          "Reduced contractor onboarding time by 50% by standardising workflows and automations.",
          "Led SaaS, dashboard, and automation builds that integrated Xero, Clockify, and Zelt.",
          "Oversaw multi-stack engineering across FastAPI, Next.js, and Prisma for internal platforms.",
        ],
      },
      {
        role: "AI Developer & Researcher",
        startDate: new Date(2024, 6, 3),
        endDate: new Date(2025, 8, 28),
        details: [
          "Built and deployed agentic AI systems for legal document processing and drafting used by the internal legal team.",
          "Designed several agentic GenAI workflows for CV parsing, cybersecurity, cost estimation, and more.",
          "Improved accuracy and retrieval speed with vector databases, graph RAG pipelines, and targeted fine-tuning.",
          "Scaled deployments with observability, evaluation suites, and automated release pipelines.",
        ],
      },
    ],
    group: "Software Sector",
  },
  {
    organization: {
      name: "Amplify Solutions",
      url: "https://www.amplify.lk/",
      logo: {
        src: "/amplify-solutions-logo.png",
        alt: "Amplify Solutions Logo",
      },
      location: "Remote",
    },
    roles: [
      {
        role: "AI Software Developer",
        startDate: new Date(2023, 6, 1),
        endDate: new Date(2025, 8, 25),
        details: [
          "Delivered full-stack AI SaaS solutions for spice export, legal, and telecom clients within an agile squad.",
          "Implemented serverless architectures and SSR with Next.js to cut hosting spend and improve response times.",
          "Applied NLP algorithms and vector databases to serve retrieval-augmented content with high precision.",
        ],
      },
    ],
    group: "Software Sector",
  },
  {
    organization: {
      name: "Calcey Technologies",
      url: "https://calcey.com/",
      logo: {
        src: "/calcey-technologies-logo.png",
        alt: "Calcey Technologies Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    roles: [
      {
        role: "Springboard Learner - Trainee",
        startDate: new Date(2023, 5, 30),
        endDate: new Date(2024, 5, 3),
        details: [
          "Completed an industry-focused program delivering three production-grade projects under senior mentorship.",
          "Built full-stack solutions in C, C++, and the MERN stack to meet client-style requirements.",
          "Earned the CodeCraft award in recognition of software engineering performance.",
        ],
      },
    ],
    group: "Software Sector",
  },
  {
    organization: {
      name: "Gateway College Colombo",
      url: "https://gatewaycollege.lk/",
      logo: {
        src: "/gateway-college-logo.png",
        alt: "Gateway College Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    roles: [
      {
        role: "SACE Level 2 - Assignment Curator",
        startDate: new Date(2022, 12, 11),
        endDate: new Date(2024, 1, 1),
        details: [
          "Curated and structured assignment briefs for 6 students aligned to SACE Digital Technologies standards.",
          "Introduced feedback rubrics that reduced manual marking time by 25%.",
          "Coached a student to the 95th percentile worldwide, earning entry into a top engineering programme.",
          "Supported the remaining cohort to score above 60% and secure engineering and computer science placements.",
        ],
      },
    ],
    group: "Education Sector",
  },
  {
    organization: {
      name: "TheCSClass",
      url: "https://the-cs-class.vercel.app/",
      logo: {
        src: "/the-cs-class-logo.png",
        alt: "TheCSClass Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    roles: [
      {
        role: "Computer Science & ICT - IGCSE & IAL Tutor",
        startDate: new Date(2022, 3, 28),
        endDate: -1,
        details: [
          "Privately tutored over 50 students with an 80% pass rate and 60% earning grade A or higher across Edexcel IGCSE and Cambridge IAL syllabi.",
          "Developed personalised learning materials such as pseudocode drills and coding tasks to raise exam readiness.",
          "Mentored students who now pursue engineering, mathematics, and computer science degrees at global universities.",
        ],
      },
    ],
    group: "Education Sector",
  },
].sort(
  (a, b) => b.roles[0].startDate.getTime() - a.roles[0].startDate.getTime()
);

export const GROUPED_EXPERIENCE_ITEMS: GroupedExperienceItem[] =
  groupExperienceItems(EXPERIENCE_ITEMS);

export const GROUPED_EXPERIENCE_DURATIONS: GroupedExperienceDurations =
  computeGroupedExperienceDurations(GROUPED_EXPERIENCE_ITEMS);
