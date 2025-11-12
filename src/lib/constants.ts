import type { GraphData, GraphSize } from "@/types/force-graph";
import type {
  ExperienceItem,
  GroupedExperienceItem,
  GroupedExperienceDurations,
  PageItem,
  EducationItem,
  ProjectItem,
} from "@/types/miscellaneous";
import {
  computeGroupedExperienceDurations,
  groupExperienceItems,
} from "@/lib/utils";

export const DEFAULT_GRAPH_SIZE: GraphSize = { width: 600, height: 600 };

export const COLOR_PALETTE: string[] = [
  "primary",
  "secondary",
  "warm",
  "cool",
  "success",
  "danger",
];

export const PAGE_ITEMS: PageItem[] = [
  {
    label: "experience",
    href: "/experience",
    colorClass: "bg-warm",
  },
  {
    label: "education",
    href: "/education",
    colorClass: "bg-cool",
  },
  {
    label: "projects",
    href: "/projects",
    colorClass: "bg-success",
  },
  {
    label: "honors and awards",
    href: "/honors-and-awards",
    colorClass: "bg-danger",
  },
];

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

// NOTE: Education Items must be sorted when typed
export const EDUCATION_ITEMS: EducationItem[] = [
  {
    label: "BSc (Hons) IT",
    institution: {
      name: "University of West London",
      url: "https://www.uwl.ac.uk/",
      logo: {
        src: "/university-of-west-london-logo.png",
        alt: "University of West London Logo",
      },
      location: "London, United Kingdom",
    },
    programs: [
      {
        name: "Bachelor of Science (Hons)",
        field: "Information Technology",
        endYear: 2026,
        pursuing: true,
        description:
          "Managing Information Systems, Databases & Analytics, Business Intelligence, Enterprise Service Management",
      },
    ],
  },
  {
    label: "BSc (Ext.) ADA",
    institution: {
      name: "University of Colombo",
      url: "https://science.cmb.ac.lk/statistics/",
      logo: {
        src: "/university-of-colombo-logo.png",
        alt: "University of Colombo Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    programs: [
      {
        name: "Bachelor of Science (External)",
        field: "Applied Data Analytics",
        endYear: 2027,
        pursuing: true,
        description:
          "Mathematics for Statistics, Statistical Computing, Probability Theory, Exploratory Data Analysis, Time Series Analysis, Regression Analysis, Fundementals of R, Structured Query Language (SQL), Artificial Intelligence, Text Mining, Multivariate Data Analysis",
      },
    ],
  },
  {
    label: "Dip. (BCS)",
    institution: {
      name: "British Computer Society (BCS)",
      url: "https://www.bcs.org/",
      logo: {
        src: "/british-computer-society-logo.png",
        alt: "British Computer Society Logo",
      },
      location: "London, United Kingdom",
    },
    programs: [
      {
        name: "Diploma (Level 5)",
        field: "Computing",
        endYear: 2025,
        pursuing: false,
        description:
          "Big Data Management, Databases, Professional Issues, Object-Oriented Programming (OOP)",
        grade: "Pass",
      },
      {
        name: "Certificate (Level 4)",
        field: "Computing",
        endYear: 2024,
        pursuing: false,
        description:
          "Computer Networks, Information Systems, Software Development",
        grade: "Pass",
      },
    ],
  },
  {
    label: "IAL & IGCSE",
    institution: {
      name: "Gateway College Colombo",
      url: "https://gatewaycollege.lk/",
      logo: {
        src: "/gateway-college-logo.png",
        alt: "Gateway College Logo",
      },
      location: "Colombo, Sri Lanka",
    },
    programs: [
      {
        name: "International Advanced Level",
        endYear: 2022,
        pursuing: false,
        description: "Pure Mathematics, Chemistry, Physics, Computer Science",
        grade: "4As",
      },
      {
        name: "International GCSE",
        endYear: 2016,
        pursuing: false,
        description:
          "Sciences, Humanities, Mathematics, English, Commerce and ICT",
        grade: "12A*s",
      },
    ],
  },
];

import type { AwardItem } from "@/types/miscellaneous";

export const AWARDS_ITEMS: AwardItem[] = [
  // Most impactful 4 at the top, for graph
  {
    title: "CodeCraft Award",
    label: "Calcey CodeCraft",
    organization: {
      name: "Calcey Technologies",
      url: "https://www.facebook.com/watch/?v=770228421766166",
      logo: {
        src: "/calcey-technologies-logo.png",
        alt: "Calcey Technologies Logo",
      },
      location: "Sri Lanka",
    },
    year: 2024,
    description:
      "Awarded for demonstrating outstanding coding proficiency and technical leadership at Calcey's industry-focused scholarship program.",
  },
  {
    title: "Merit - Asia Pacific ICT Alliance Awards",
    label: "APICTA Merit",
    organization: {
      name: "APICTA",
      url: "https://apicta.org/apicta-2023-hong-kong/",
      logo: { src: "/apicta-logo.webp", alt: "APICTA Logo" },
      location: "Asia Pacific Region",
    },
    year: 2021,
    description:
      "Represented Sri Lanka and honored with a Merit Award, recognizing excellence in technology solution development at the global level.",
  },
  {
    title: "Senior National Champion - YCS Competition",
    label: "YCS Senior",
    organization: {
      name: "FITIS Sri Lanka",
      url: "https://ycs.lk/result-2021/",
      logo: { src: "/fitis-logo.svg", alt: "FITIS Logo" },
      location: "Sri Lanka",
    },
    year: 2021,
    description:
      "Achieved Senior National Champion at the Young Computer Scientist (YCS) Competition for an innovative mobile calorie detection application, featuring the use of an MR-CNN for object detection and segmentation.",
  },
  {
    title: "Overall Champion - InnovaThon 2021",
    label: "Dialog InnovaThon",
    organization: {
      name: "Gateway College & Dialog Enterprise",
      url: "https://gatewayworldwide.com/index.php?option=com_content&view=article&id=72&Itemid=92",
      logo: { src: "/gateway-college-logo.png", alt: "Gateway Logo" },
      location: "Sri Lanka",
    },
    year: 2021,
    description:
      "Led our team to victory in a school-wide innovation hackathon, featuring an AI-powered mobile app.",
  },
  // Remaining awards
  {
    title: "Silver Award - SLIIT Codefest",
    label: "SLIIT Codefest",
    organization: {
      name: "Codefest",
      url: "https://codefest.lk/",
      logo: { src: "/codefest-logo.png", alt: "Codefest Logo" },
      location: "Sri Lanka",
    },
    year: 2021,
    description:
      "Secured Silver at SLIIT Codefest, a competitive national coding competition for young developers. Our team built an e-learning platform with Python and vanilla JavaScript.",
  },
  {
    title: "School Category Champion - Hack:AI 2021",
    label: "Hack:AI",
    organization: {
      name: "STEMUP, SLASSCOM & UNDP",
      url: "https://www.stemup.lk/",
      logo: { src: "/stemup-logo.png", alt: "STEMUP Logo" },
      location: "Sri Lanka",
    },
    year: 2021,
    description:
      "Won the school category at Hack:AI, an artificial intelligence hackathon organized by key national STEM groups.",
  },
  {
    title: "Most Creative App of the Month",
    label: "Most Creative App",
    organization: {
      name: "MIT App Inventor",
      url: "https://appinventor.mit.edu/explore/app-month-winners-2017",
      logo: { src: "/mit-app-inventor-logo.png", alt: "MIT App Inventor Logo" },
      location: "International",
    },
    year: 2017,
    description:
      "Recognized globally for inventiveness with the Most Creative App, selected by MIT App Inventor in their monthly spotlight.",
  },
  {
    title: "Junior Merit Award - YCS Competition",
    label: "YCS Junior",
    organization: {
      name: "FITIS Sri Lanka",
      url: "https://fitis.lk/",
      logo: { src: "/fitis-logo.svg", alt: "FITIS Logo" },
      location: "Sri Lanka",
    },
    year: 2017,
    description:
      "Awarded Junior Merit at the Young Computer Scientist (YCS) Competition for building a top-down space shooter game using MIT App Inventor.",
  },
];

export const SORTED_AWARD_ITEMS: AwardItem[] = [...AWARDS_ITEMS].sort(
  (a, b) => b.year - a.year
);

const SLICED_AWARD_ITEMS: AwardItem[] = AWARDS_ITEMS.slice(0, 4);

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

const SLICED_PROJECT_ITEMS: ProjectItem[] = PROJECT_ITEMS.slice(0, 5);

export const GRAPH_DATA: GraphData = {
  nodes: [
    { id: "home", label: "portfolio", href: "/", group: 0, size: 2 },
    ...PAGE_ITEMS.map((page, index) => ({
      id: page.label,
      label: page.label.toLowerCase(),
      href: page.href,
      group: index + 1,
      size: 1.5,
    })),
    ...GROUPED_EXPERIENCE_ITEMS.map((groupItem) => ({
      id: groupItem.group,
      label: groupItem.group.toLowerCase(),
      href: `/experience#${groupItem.group}`,
      group: 2,
      size: 1,
    })),
    ...EDUCATION_ITEMS.map((educationItem) => ({
      id: educationItem.label,
      label: educationItem.label.toLowerCase(),
      href: `/education#${educationItem.label}`,
      group: 3,
      size: 1,
    })),
    ...SLICED_AWARD_ITEMS.map((awardItem) => ({
      id: awardItem.label,
      label: awardItem.label.toLowerCase(),
      href: `/honors-and-awards#${awardItem.label}`,
      group: 1,
      size: 1,
    })),
    ...SLICED_PROJECT_ITEMS.map((projectItem) => ({
      id: projectItem.label,
      label: projectItem.label.toLowerCase(),
      href: `/projects#${projectItem.label}`,
      group: 5,
      size: 1,
    })),
  ],
  links: [
    ...PAGE_ITEMS.map((page) => ({
      source: "home",
      target: page.label,
    })),
    ...GROUPED_EXPERIENCE_ITEMS.map((groupItem) => ({
      source: "experience",
      target: groupItem.group,
    })),
    ...EDUCATION_ITEMS.map((educationItem) => ({
      source: "education",
      target: educationItem.label,
    })),
    ...SLICED_AWARD_ITEMS.map((awardItem) => ({
      source: "honors and awards",
      target: awardItem.label,
    })),
    ...SLICED_PROJECT_ITEMS.map((projectItem) => ({
      source: "projects",
      target: projectItem.label,
    })),
  ],
};
