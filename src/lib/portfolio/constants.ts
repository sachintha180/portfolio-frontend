import type { GraphData, GraphSize } from "@/types/force-graph";
import type { PageItem } from "@/types/miscellaneous";
import {
  MAX_PROJECT_NODE_COUNT,
  SLICED_PROJECT_ITEMS,
} from "@/lib/portfolio/projects";
import {
  MAX_AWARD_NODE_COUNT,
  SLICED_AWARD_ITEMS,
} from "@/lib/portfolio/awards";
import { GROUPED_EXPERIENCE_ITEMS } from "./experience";
import { EDUCATION_ITEMS } from "./education";

export const LAYOUT_GRAPHICS_BREAKPOINT = 1280;

export const DEFAULT_GRAPH_SIZE: GraphSize = { width: 600, height: 600 };

export const COLOR_PALETTE: string[] = [
  "primary",
  "secondary",
  "warm",
  "cool",
  "success",
  "danger",
];

export const ABOUT_ME =
  "I'm a full stack and AI developer with over 2 years of experience working across Python, TypeScript and React. I specialize in connecting backend logic to intelligent systems, with UX in mind - from FastAPI and PostgreSQL to AI agent workflows in LangChain and Vercel AI SDK. I'm great at designing APIs and building automations. I'm framework agnostic, with my focus being on writing clear, testable code built for function over form. I'm fascinated by graphs, genetic algorithms and teach computer science to secondary school students during the weekends.";

export const PAGE_ITEMS: PageItem[] = [
  {
    buttonLabel: "experience",
    nodeLabel: "experience",
    href: "/experience",
    colorClass: "bg-warm",
  },
  {
    buttonLabel: "education",
    nodeLabel: "education",
    href: "/education",
    colorClass: "bg-cool",
  },
  {
    buttonLabel: "projects",
    nodeLabel: `top ${MAX_PROJECT_NODE_COUNT} projects`,
    href: "/projects",
    colorClass: "bg-success",
  },
  {
    buttonLabel: "awards",
    nodeLabel: `top ${MAX_AWARD_NODE_COUNT} awards`,
    href: "/awards",
    colorClass: "bg-danger",
  },
];

export const GRAPH_DATA: GraphData = {
  nodes: [
    { id: "home", label: "portfolio", href: "/", group: 0, size: 2 },
    ...PAGE_ITEMS.map((page, index) => ({
      id: page.nodeLabel,
      label: page.nodeLabel.toLowerCase(),
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
      href: `/awards#${awardItem.label}`,
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
      target: page.nodeLabel,
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
      source: `top ${MAX_AWARD_NODE_COUNT} awards`,
      target: awardItem.label,
    })),
    ...SLICED_PROJECT_ITEMS.map((projectItem) => ({
      source: `top ${MAX_PROJECT_NODE_COUNT} projects`,
      target: projectItem.label,
    })),
  ],
};
