import type { AwardItem } from "@/types/miscellaneous";

export const MAX_AWARD_NODE_COUNT = 4;

// NOTE: Awards items must be sorted when typed, since we slice top n items later
const AWARDS_ITEMS: AwardItem[] = [
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
      logo: { src: "/apicta-logo.png", alt: "APICTA Logo" },
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
      logo: { src: "/fitis-logo.png", alt: "FITIS Logo" },
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
      "Secured Silver at SLIIT Codefest, by building an e-learning platform with Python and vanilla JavaScript.",
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
      logo: { src: "/fitis-logo.png", alt: "FITIS Logo" },
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

export const SLICED_AWARD_ITEMS: AwardItem[] = AWARDS_ITEMS.slice(
  0,
  MAX_AWARD_NODE_COUNT
);
