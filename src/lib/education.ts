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
];
