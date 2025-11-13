import type { EducationItem } from "@/types/miscellaneous";

// NOTE: Education items must be sorted when typed, since we slice top n items later
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
        description: [
          "Managing Information Systems",
          "Databases & Analytics",
          "Business Intelligence",
          "Enterprise Service Management",
        ],
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
        description: [
          "Mathematics for Statistics",
          "Statistical Computing",
          "Probability Theory",
          "Exploratory Data Analysis",
          "Time Series Analysis",
          "Regression Analysis",
          "Fundementals of R",
          "Structured Query Language (SQL)",
          "Artificial Intelligence",
          "Text Mining",
          "Multivariate Data Analysis",
        ],
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
        description: [
          "Big Data Management",
          "Databases",
          "Professional Issues",
          "Object-Oriented Programming (OOP)",
        ],
        grade: "Pass",
      },
      {
        name: "Certificate (Level 4)",
        field: "Computing",
        endYear: 2024,
        pursuing: false,
        description: [
          "Computer Networks",
          "Information Systems",
          "Software Development",
        ],
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
        description: [
          "Pure Mathematics",
          "Chemistry",
          "Physics",
          "Computer Science",
        ],
        grade: "4As",
      },
      {
        name: "International GCSE",
        endYear: 2016,
        pursuing: false,
        description: [
          "Sciences",
          "Humanities",
          "Mathematics",
          "English",
          "Commerce and ICT",
        ],
        grade: "12A*s",
      },
    ],
  },
  {
    label: "Certifications",
    institution: {
      name: "DataCamp, DeepLearning.AI, edX, ICDL",
      url: "https://www.linkedin.com/in/sachinthasenanayake180/details/certifications/",
      logo: {
        src: "/certification-badge.png",
        alt: "Certification Provider Logos",
      },
      location: "",
    },
    programs: [
      {
        name: "AI Fundamentals Certificate",
        endYear: 2024,
        pursuing: false,
        description: ["DataCamp - Credential ID: AIF0024304602428"],
        grade: "Passed",
      },
      {
        name: "Finetuning Large Language Models",
        endYear: 2024,
        pursuing: false,
        description: ["Issued by DeepLearning.AI"],
        grade: "Passed",
      },
      {
        name: "ChatGPT Prompt Engineering for Developers",
        endYear: 2024,
        pursuing: false,
        description: ["Issued by DeepLearning.AI"],
        grade: "Passed",
      },
      {
        name: "Agile and Scrum Fundamentals",
        endYear: 2024,
        pursuing: false,
        description: ["edX - Credential ID: 59ae1892628c48f8a3200768f0cd256a"],
        grade: "Passed",
      },
      {
        name: "Introduction to User Experience",
        endYear: 2024,
        pursuing: false,
        description: ["edX - Credential ID: 2d44da668da7450ba2f32bfa2e1703ef"],
        grade: "Passed",
      },
      {
        name: "JavaScript Introduction",
        endYear: 2024,
        pursuing: false,
        description: ["edX - Credential ID: 59ae1892628c48f8a3200768f0cd256a"],
        grade: "Passed",
      },
      {
        name: "AWS Cloud Practitioner Essentials",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 9f93ac37ebe84670b98529f90d318684"],
        grade: "Passed",
      },
      {
        name: "CS50's Introduction to Computer Science",
        endYear: 2023,
        pursuing: false,
        description: [
          "edX - Credential ID: dfb338ab-a3a9-4b88-84ad-96f14dce8725",
        ],
        grade: "Passed",
      },
      {
        name: "NoSQL Database Basics",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 510b6940c4154701b9568eb98b97108f"],
        grade: "Passed",
      },
      {
        name: "Relational Database Basics",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 618340868b1a46c8acc7d2bb410b86bc"],
        grade: "Passed",
      },
      {
        name: "HTML5 and CSS Fundamentals",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: c008755d5e79496cb3492eb5b5d551ed"],
        grade: "Passed",
      },
      {
        name: "Object Oriented Implementation Using C++",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 267f34a461224012bc22af17a79e32de"],
        grade: "Passed",
      },
      {
        name: "Fundamentals of C++",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 846e6974620b4730ab585c3ffdd3b6ea"],
        grade: "Passed",
      },
      {
        name: "Git and Github Basics",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 78e1d807eb8d458ebc0131c2d210b056"],
        grade: "Passed",
      },
      {
        name: "Introduction to SQL",
        endYear: 2023,
        pursuing: false,
        description: ["edX - Credential ID: 80f576fc7af84b71b916683452d35655"],
        grade: "Passed",
      },
      {
        name: "International Computer Drivers License - Level One (ICDL)",
        endYear: 2018,
        pursuing: false,
        description: ["ICDL Certification - Credential ID: LK0000030910"],
        grade: "Passed",
      },
    ],
  },
];
