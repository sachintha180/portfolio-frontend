import type { ProjectItem } from "@/types/miscellaneous";

export const MAX_PROJECT_NODE_COUNT = 5;

// NOTE: Projects items must be sorted in order of importance when typed, since we slice top n items later
export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "Estimate Generator",
    label: "project-estimator",
    description: [
      "Gen-AI-powered assistant for project estimations and quotations in software development.",
      "Produces structured cost breakdowns using custom parsing, structured outputs and NLP.",
    ],
    tools: ["Gradio", "OpenAI API", "PyMuPDF", "BeautifulSoup4", "NLTK"],
    timeDuration: "4 days",
  },
  {
    title: "Enrollment Wizard",
    label: "it-wizard",
    description: [
      "Bundled PowerShell scripts and installer for policy deployment.",
      "Dashboard for device enrollment and management at multi-national ALSP.",
    ],
    tools: ["PowerShell", "React", "Express.js", "Render", "Tailwind"],
    timeDuration: "2 weeks",
  },
  {
    title: "Cybersecurity Report Generator",
    label: "cybersecurity-reporter",
    description: [
      "Integrated with BitDefender GravityZone's API to retrieve detailed network information, vulnerabilities, and risk scores.",
      "Processed and aggregated security data using Python.",
      "Generated comprehensive PDF reports combining all information in a single document.",
    ],
    tools: ["Python", "BitDefender GravityZone API", "PyMuPDF"],
    timeDuration: "3 days",
  },
  {
    title: "Client Dashboard",
    label: "client-dashboard",
    description: [
      "Data-driven dashboard for client and contractor operations at a multi-national ALSP.",
      "Integrates with Xero, Clockify, and Zelt with typed contracts to aggregate data and provide insights.",
    ],
    tools: ["FastAPI", "React", "Render", "shad.cn"],
    timeDuration: "3 months",
  },
  {
    title: "Resume Shortlisting Agent",
    label: "resume-shortlister",
    description: [
      "AI-powered agent for automated candidate shortlisting using custom logic and GenAI.",
      "Processes CVs and job descriptions to identify relevant candidates.",
    ],
    tools: ["Flask", "OpenAI API", "LangChain", "BeautifulSoup4", "Jinja2"],
    timeDuration: "3 days",
  },
  {
    title: "LLM Pipeline Designer",
    label: "llm-pipeline-designer",
    description: [
      "WYSIWYG editor for prompt workflow design with over 10 different drag-and-drop components.",
      "Allows YAML import/export and single-file packaging.",
    ],
    tools: ["Next.js", "Prisma", "OpenAI API", "Agentic Workflows"],
    timeDuration: "2 weeks",
  },
  {
    title: "Clara",
    label: "clara-legal-assistant",
    description: [
      "AI-powered SaaS for legal professionals to automate contract management and drafting.",
      "Uses agentic workflows, graph databases and vector databases.",
    ],
    tools: ["Next.js", "FastAPI", "Azure AI", "LangChain", "PostgreSQL"],
    timeDuration: "1 year",
    pending: true,
    link: "https://clara.teamsquared.io/",
  },
  {
    title: "NLP Experiments",
    label: "nlp-lab",
    description: [
      "Exploratory dashboard for NLP preprocessing, modeling, and analyses.",
      "Python backend with interactive React frontend.",
    ],
    tools: ["Flask", "Numpy", "NLTK", "TQDM", "React"],
    link: "https://nlp-experiments.vercel.app/",
    timeDuration: "4 days",
  },
  {
    title: "My Portfolio",
    label: "my-portfolio",
    description: [
      "Personal portfolio website built with React, Tailwind, and TypeScript.",
      "Uses React Router for navigation and dynamic routing.",
      "Utilizes D3.js for the force graph visualization.",
    ],
    tools: ["React", "Tailwind", "TypeScript", "D3.js"],
    timeDuration: "1 week",
    link: "https://sachintha.net/",
  },
  {
    title: "Model Playground",
    label: "ml-playground",
    description: [
      "Interactive visualizations for ML and DL models with live training.",
      "Supports hyperparameter tuning and BYO dataset uploads.",
    ],
    tools: ["Flask", "Pandas", "Numpy", "React", "Recharts", "Tailwind"],
    timeDuration: "1 week",
    pending: true,
  },
  {
    title: "LectureVoice Coach",
    label: "lecturevoice-coach",
    description: [
      "Mobile app analyzing and improving teachers' vocal delivery with on-device speech AI.",
      "Extracts key speaking features to give actionable feedback privately.",
      "Designed for classroom use; supports offline inference.",
    ],
    tools: [
      "React Native",
      "TensorFlow Lite",
      "PyTorch (Wav2Vec2)",
      "Python",
      "Expo",
    ],
    timeDuration: "6 months",
    pending: true,
  },
  {
    title: "CodeThread (VSCode Navigation Graph)",
    label: "codethread-vscode",
    description: [
      "VS Code extension and desktop app to visualize and optimize codebase navigation.",
      "Builds code navigation graphs to reduce tab overload and boost workflow productivity.",
      "Supports focus mode, file tagging, and smart suggestions; proved to cut navigation time.",
    ],
    tools: [
      "TypeScript",
      "Visual Studio Code Extension API",
      "Electron",
      "React",
      "Node.js",
    ],
    timeDuration: "3 months",
    pending: true,
  },
  {
    title: "The CS Class",
    label: "cs-class",
    description: [
      "Student platform for recordings, notes, and Google Drive auto-sync.",
      "RBAC-enabled system and performance tracking integrated.",
    ],
    tools: ["FastAPI", "SQLAlchemy", "GCP", "Render", "Tailwind"],
    link: "https://the-cs-class.vercel.app/",
    timeDuration: "4 days",
  },
  {
    title: "Student Discipline System",
    label: "discipline",
    description: [
      "Discipline management system for an international school.",
      "RBAC, searchable database, and violation processing.",
    ],
    tools: ["Flask", "PostgreSQL", "Prisma", "Jinja2", "Bulma"],
    link: "https://gateway-sms.vercel.app/",
    timeDuration: "1 week",
  },
  {
    title: "SwiftCab Booking Service",
    label: "swiftcab",
    description: [
      "Diploma project featuring a booking and search solution for ops teams on MS-SQL.",
      "Handles complex JOINs and pyodbc connections; fast queries for pickup and drop-off management.",
    ],
    tools: ["Flask", "MSSQL", "pyodbc", "Jinja2"],
    link: "https://github.com/sachintha180/swiftcab-search",
    timeDuration: "2 days",
  },
];

export const SLICED_PROJECT_ITEMS: ProjectItem[] = PROJECT_ITEMS.slice(
  0,
  MAX_PROJECT_NODE_COUNT
);
