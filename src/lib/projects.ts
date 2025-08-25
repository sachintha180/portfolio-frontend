// lib/projects.ts

import type { Projects } from "../types/miscellaneous";

import clientDashboardSrc from "../assets/project_screenshots/client_dashboard.png";
import estimateGeneratorSrc from "../assets/project_screenshots/estimate_generator.png";
import theCsClassSrc from "../assets/project_screenshots/the_cs_class.png";
import llmPipelineDesignerSrc from "../assets/project_screenshots/llm_pipeline_designer.png";
import resumeAnalyzerSrc from "../assets/project_screenshots/resume_analyzer.png";

export const MAX_PROJECT_COUNT = 5;

export const projects: Projects = [
  {
    title: "Client Dashboard",
    stackTypeKey: "fullStack",
    description:
      "data-driven dashboard for client and contractor operations with smart API sync, robust data pipelines, and end-to-end typed contracts for a multi-national ALSP",
    tools: ["FastAPI", "PostgreSQL", "Render", "React Hook Form", "shad.cn"],
    imageSrc: clientDashboardSrc,
  },
  {
    title: "Estimate Generator",
    stackTypeKey: "mla",
    description:
      "project estimation assistant that uses gen-AI to draft cost breakdowns and quotations for software development at a multi-national ALSP",
    tools: ["Gradio", "OpenAI API", "PyMuPDF", "BeautifulSoup4", "NLTK"],
    imageSrc: estimateGeneratorSrc,
    timeDuration: "4 days",
  },
  {
    title: "The CS Class",
    stackTypeKey: "fullStack",
    description:
      "student platform for recordings and notes with RBAC, performance tracking, and google drive auto-sync",
    tools: ["FastAPI", "SQLAlchemy", "GCP", "Render", "Tailwind", "Recharts"],
    link: "https://the-cs-class.vercel.app/",
    imageSrc: theCsClassSrc,
    timeDuration: "4 days",
  },
  {
    title: "Model Playground",
    stackTypeKey: "mla",
    description:
      "interactive visualizations for common ML and DL models with live training, hyperparameter controls, validation metrics, and a BYO dataset option",
    tools: ["FastAPI", "Pandas", "Numpy", "React", "Recharts", "Tailwind"],
  },
  {
    title: "Resume Analyzer",
    stackTypeKey: "fullStack",
    description:
      "ml experiment with a gradio dashboard to shortlist candidates from CVs and job descriptions using custom logic, pdf parsing, and gen-AI",
    tools: ["Flask", "OpenAI API", "LangChain", "BeautifulSoup4", "Jinja2"],
    imageSrc: resumeAnalyzerSrc,
    timeDuration: "3 days",
  },
  {
    title: "Student Discipline System",
    stackTypeKey: "fullStack",
    description:
      "discipline management with RBAC, DB-wide search, and violation processing for a leading international school",
    tools: ["Flask", "PostgreSQL", "Prisma", "Jinja2", "Bulma"],
    timeDuration: "1 week",
  },
  {
    title: "LLM Pipeline Designer",
    stackTypeKey: "mla",
    description:
      "interactive WYSIWYG editor for prompt workflows with import/export of YAML and simple monolithic packaging",
    tools: ["Next.js", "Prisma", "OpenAI API", "Agentic Workflows"],
    imageSrc: llmPipelineDesignerSrc,
    timeDuration: "2 weeks",
  },
  {
    title: "SwiftCab Booking Service",
    stackTypeKey: "fullStack",
    description:
      "booking search on top of MSSQL with fast pickup and drop-off queries for operations teams",
    tools: ["Flask", "MSSQL", "pyodbc", "Jinja2"],
    link: "https://github.com/sachintha180/swiftcab-search",
    timeDuration: "2 days",
  },
  {
    title: "NLP Experiments",
    stackTypeKey: "fullStack",
    description:
      "exploratory dashboard for NLP preprocessing, modeling, and analysis with a python backend and a react front",
    tools: ["Flask", "Numpy", "NLTK", "TQDM", "React"],
    link: "https://nlp-experiments.vercel.app/",
    timeDuration: "4 days",
  },
];
