import {
  LuRocket,
  LuZap,
  LuUsers,
  LuCalendarCheck,
  LuCloudOff,
  LuBot,
  LuTerminal,
} from "react-icons/lu";

export const PRICING_TIERS = [
  {
    tier: "TIER 01",
    icon: LuRocket,
    name: "Starter",
    price: "Free",
    priceUnit: null,
    featured: false,
    cta: "Get Started Free",
    features: [
      "Resume analysis",
      "Basic match score",
      "Limited interview questions",
      "1 roadmap",
      "Basic tracking",
    ],
  },
  {
    tier: "TIER 02",
    icon: LuZap,
    name: "Pro",
    price: "$12",
    priceUnit: "/month",
    featured: true,
    cta: "Start Pro Plan",
    features: [
      "Unlimited analyses",
      "Advanced skill-gap detection",
      "Unlimited interview prep",
      "Personalized roadmaps",
      "Advanced analytics",
      "Priority processing",
    ],
  },
  {
    tier: "TIER 03",
    icon: LuUsers,
    name: "Team",
    price: "$29",
    priceUnit: "/month",
    featured: false,
    cta: "Contact Sales",
    features: [
      "Team dashboard",
      "Shared tracking",
      "Multi-user collaboration",
      "Admin analytics",
      "Dedicated support",
    ],
  },
];

export const BOTTOM_HIGHLIGHTS = [
  { icon: LuCalendarCheck, label: "Freedom", sub: "Cancel anytime" },
  { icon: LuCloudOff, label: "Security", sub: "Secure cloud storage" },
  { icon: LuBot, label: "Intelligence", sub: "AI tools included" },
  { icon: LuTerminal, label: "Optimized", sub: "Built for developers" },
];
