import type { TechStackItem } from "@/types/miscellaneous";

const GROUPS = {
  frontend: {
    label: "Frontend",
    name: "frontend",
  },
  backend: {
    label: "Backend",
    name: "backend",
  },
  data: {
    label: "Data & DevOps",
    name: "dataDevops",
  },
  mla: {
    label: "ML & Automation",
    name: "mla",
  },
  other: {
    label: "Other",
    name: "other",
  },
} as const;

export const TECH_STACK: TechStackItem[] = [
  // Frontend
  { name: "React", group: GROUPS.frontend },
  { name: "Next.js", group: GROUPS.frontend },
  { name: "Tailwind", group: GROUPS.frontend },
  { name: "TanStack Query", group: GROUPS.frontend },
  { name: "React Hook Form", group: GROUPS.frontend },
  { name: "Zod", group: GROUPS.frontend },
  { name: "TanStack Table", group: GROUPS.frontend },
  { name: "Recharts", group: GROUPS.frontend },
  { name: "D3.js", group: GROUPS.frontend },

  // Backend
  { name: "FastAPI", group: GROUPS.backend },
  { name: "Flask", group: GROUPS.backend },
  { name: "Pydantic", group: GROUPS.backend },
  { name: "SQLAlchemy", group: GROUPS.backend },
  { name: "Prisma ORM", group: GROUPS.backend },
  { name: "Redis", group: GROUPS.backend },
  { name: "OpenAPI", group: GROUPS.backend },

  // Data & DevOps
  { name: "Azure", group: GROUPS.data },
  { name: "GCP", group: GROUPS.data },
  { name: "Render", group: GROUPS.data },
  { name: "PostgreSQL", group: GROUPS.data },
  { name: "SQLite", group: GROUPS.data },
  { name: "MSSQL", group: GROUPS.data },
  { name: "Pandas", group: GROUPS.data },
  { name: "NumPy", group: GROUPS.data },
  { name: "Matplotlib", group: GROUPS.data },

  // ML & Automation
  { name: "NLTK", group: GROUPS.mla },
  { name: "scikit-learn", group: GROUPS.mla },
  { name: "OpenCV", group: GROUPS.mla },
  { name: "LangChain", group: GROUPS.mla },
  { name: "Hugging Face", group: GROUPS.mla },
  { name: "LlamaIndex", group: GROUPS.mla },
  { name: "Gradio", group: GROUPS.mla },
  { name: "Google Colab", group: GROUPS.mla },
  { name: "n8n", group: GROUPS.mla },
  { name: "Vercel AI SDK", group: GROUPS.mla },
  { name: "Altair AI Studio", group: GROUPS.mla },

  // Other
  { name: "Godot Game Engine", group: GROUPS.other },
  { name: "Firebase", group: GROUPS.other },
  { name: "Git", group: GROUPS.other },
  { name: "Bash", group: GROUPS.other },
];
