import type { PageItem } from "@/types/miscellaneous";

export const PUBLIC_ROUTES = ["/cs-class/login", "/cs-class/register"];

// The following constants must have keys that match api.ts
export const USER_TYPES = {
  admin: "Admin",
  student: "Student",
} as const;

export const SYLLABUS_LEVELS = {
  igcse: "IGCSE",
  olevel: "O Level",
  alevel: "A Level",
  diploma: "Diploma",
} as const;

export const FILE_TYPES = {
  note: "Note",
  video: "Video",
  code: "Code",
  exercise: "Exercise",
  test: "Test",
} as const;

export const SUBJECT_CODES = [
  "4CP0",
  "41T1",
  "X/YIT11",
  "2210",
  "9618",
  "HL, 2014",
] as const;
export const TOKEN_TYPES = ["access", "refresh"] as const;

export const PAGE_ITEMS: PageItem[] = [
  {
    buttonLabel: "Watch Last Recording",
    nodeLabel: "watch-last-recording",
    href: "/cs-class/watch-last-recording",
    colorClass: "bg-cool",
  },
  {
    buttonLabel: "Read Notes",
    nodeLabel: "read-notes",
    href: "/cs-class/read-notes",
    colorClass: "bg-success",
  },
  {
    buttonLabel: "View Marks",
    nodeLabel: "view-marks",
    href: "/cs-class/view-marks",
    colorClass: "bg-danger",
  },
];
