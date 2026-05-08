import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";
import { MdQueryStats } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";
export const FEATURES = [
  {
    icon: MdOutlineDashboard,
    title: "Centralized dashboard",
    description: "Unified view of your preparation assets.",
  },
  {
    icon: HiOutlineBolt,
    title: "Real-time tracking",
    description: "Live updates as you complete tasks.",
  },
  {
    icon: MdQueryStats,
    title: "AI-powered analytics",
    description: "Deep insights into your skill growth.",
  },
  {
    icon: MdOutlineDescription,
    title: "Resume/Interview insights",
    description: "Actionable feedback for every role.",
  },
  {
    icon: MdOutlinePersonPin,
    title: "Personalized experience",
    description: "Roadmaps tailored to your career goal.",
  },
];

export const ANALYSES = [
  { role: "Frontend Developer", company: "Stripe", match: "88%" },
  { role: "MERN Stack Engineer", company: "Vercel", match: "74%" },
  { role: "React Developer Role", company: "Scale AI", match: "91%" },
];

export const WEEKLY_STATS = [
  { value: "12", label: "Tasks completed" },
  { value: "05", label: "Interview sessions" },
  { value: "02", label: "New skills added" },
];

// Heights in Tailwind arbitrary values to match the original bar chart
export const BAR_HEIGHTS = [
  { height: "h-12", highlight: false },
  { height: "h-16", highlight: false },
  { height: "h-20", highlight: true },
  { height: "h-8", highlight: false },
  { height: "h-24", highlight: true },
  { height: "h-14", highlight: false },
  { height: "h-[72px]", highlight: false },
];

export const SKILL_GROUPS = [
  {
    priority: "HIGH PRIORITY",
    priorityClass: "text-error",
    skills: ["TypeScript", "System Design"],
  },
  {
    priority: "MEDIUM",
    priorityClass: "text-on-surface-variant",
    skills: ["Testing (Jest/Cypress)", "CI/CD Pipelines"],
  },
  {
    priority: "LOW",
    priorityClass: "text-on-surface-variant opacity-50",
    skills: ["Docker"],
  },
];
