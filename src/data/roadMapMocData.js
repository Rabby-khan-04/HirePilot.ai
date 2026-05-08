import {
  LuCalendarDays,
  LuZap,
  LuTarget,
  LuClipboardList,
  LuBriefcase,
} from "react-icons/lu";
import { MdPsychology, MdAnalytics } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";

export const FEATURE_CARDS = [
  {
    icon: BsCalendar2Event,
    title: "Smart Weekly Planning",
    description:
      "Get a granular breakdown of your learning journey with structured checkpoints.",
    bullets: [
      "Prioritized topics based on market demand",
      "Practical tasks and coding exercises",
      "Interview preparation focused on core concepts",
      "Project-based learning for your portfolio",
    ],
  },
  {
    icon: MdAnalytics,
    title: "Progress Tracking",
    description:
      "Monitor your advancement in real-time with technical visual indicators and skill acquisition metrics that keep you motivated and focused.",
    bullets: null,
  },
  {
    icon: MdPsychology,
    title: "AI-Powered Recommendations",
    description:
      "Our adaptive engine shifts your roadmap dynamically. If you master a topic quickly, the AI accelerates your path, focusing on the next high-impact skill.",
    bullets: null,
  },
];

export const ROADMAP_WEEKS = [
  {
    week: "01",
    title: "Week 1: React & TypeScript Foundations",
    progress: 75,
    status: "active",
    tasks: [
      { label: "Hooks & State Management", done: true },
      { label: "TS Interface Mastery", done: true },
      { label: "Next.js 14 Fundamentals", done: true },
      { label: "Advanced Patterns", done: false },
    ],
  },
  {
    week: "02",
    title: "Week 2: Backend & Authentication",
    progress: 40,
    status: "active",
    tasks: [
      { label: "JWT & Session Auth", done: true },
      { label: "Prisma Schema Setup", done: false },
    ],
  },
  {
    week: "03",
    title: "Week 3: System Design & Testing",
    progress: 10,
    status: "upcoming",
    tasks: [],
  },
  {
    week: "04",
    title: "Week 4: Interview Preparation",
    progress: 0,
    status: "locked",
    tasks: [],
  },
];

export const BOTTOM_FEATURES = [
  { icon: LuCalendarDays, label: "AI-generated weekly plans" },
  { icon: LuZap, label: "Skill-based prep" },
  { icon: LuTarget, label: "Progress tracking system" },
  { icon: LuClipboardList, label: "Practical learning tasks" },
  { icon: LuBriefcase, label: "Real job requirements" },
];
