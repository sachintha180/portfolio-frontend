// lib/techStack.ts

import type { TechStack, TechStackMap } from "../types/miscellaneous";

import pythonLogoSrc from "../assets/python-logo.svg";
import typeScriptLogoSrc from "../assets/typescript-logo.svg";

export const techStack: TechStack = {
  frontend: {
    tools: [
      "React",
      "Next.js",
      "Tailwind",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "TanStack Table",
      "Recharts",
      "D3.js",
    ],
    languageLogoSrc: typeScriptLogoSrc,
  },
  backend: {
    tools: [
      "FastAPI",
      "Flask",
      "Pydantic",
      "SQLAlchemy",
      "Prisma ORM",
      "Redis",
      "OpenAPI",
    ],
    languageLogoSrc: pythonLogoSrc,
  },
  data: {
    tools: [
      "Azure",
      "GCP",
      "Render",
      "PostgreSQL",
      "SQLite",
      "MSSQL",
      "Pandas",
      "Numpy",
      "Matplotlib",
    ],
  },
  mla: {
    tools: [
      "NLTK",
      "Scikit-learn",
      "OpenCV",
      "LangChain",
      "HuggingFace",
      "LlamaIndex",
      "Gradio",
      "Google Colab",
      "N8N",
    ],
    languageLogoSrc: pythonLogoSrc,
  },
  other: {
    tools: ["Godot Game Engine", "Firebase", "Git", "Bash"],
  },
};

export const techStackMap: TechStackMap = {
  frontend: {
    label: "Frontend",
    startColor: "#B5179E",
    endColor: "#7209B7",
  },
  backend: {
    label: "Backend",
    startColor: "#7209B7",
    endColor: "#560BAD",
  },
  data: {
    label: "Data & DevOps",
    startColor: "#560BAD",
    endColor: "#480CA8",
  },
  mla: {
    label: "ML & Automation",
    startColor: "#480CA8",
    endColor: "#3A0CA3",
  },
  other: {
    label: "Other",
    startColor: "#3A0CA3",
    endColor: "#3F37C9",
  },
  fullStack: {
    label: "Full Stack",
    startColor: "#3F37C9",
    endColor: "#4361EE",
  },
};
