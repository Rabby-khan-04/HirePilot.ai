import { FaCheck } from "react-icons/fa6";
import { LuBrainCircuit, LuNetwork, LuTerminal } from "react-icons/lu";
import testimonialImg1 from "@/../public/assets/image/sarah_goldberg.png";
import testimonialImg2 from "@/../public/assets/image/jason_miller.png";
import testimonialImg3 from "@/../public/assets/image/tanvir_hasan.png";

export const TESTIMONIALS = [
  {
    name: "Sarah Goldberg",
    role: "Frontend Developer",
    avatar: testimonialImg1,
    quote:
      "HirePilot AI helped me understand exactly what skills I was missing for frontend roles. The roadmap feature made my preparation far more structured.",
  },
  {
    name: "Jason Miller",
    role: "MERN Stack Developer",
    avatar: testimonialImg2,
    quote:
      "The AI interview questions felt surprisingly realistic. Practicing with role-specific questions boosted my confidence before technical interviews.",
  },
  {
    name: "Tanvir Hasan",
    role: "Computer Science Student",
    avatar: testimonialImg3,
    quote:
      "I used to feel overwhelmed about what to learn next. The personalized roadmap gave me a clear direction and helped me stay consistent.",
  },
];

export const BOTTOM_HIGHLIGHTS = [
  { icon: FaCheck, label: "Personalized preparation" },
  { icon: LuBrainCircuit, label: "Real-world interview guidance" },
  { icon: LuNetwork, label: "Structured roadmaps" },
  { icon: LuTerminal, label: "Built for modern roles" },
];
