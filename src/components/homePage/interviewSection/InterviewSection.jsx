import { FaCheck } from "react-icons/fa6";
import QuestionCard from "./QuestionCard";
import Image from "next/image";
import MeetingSpaceImg from "@/../public/assets/image/meeting_space.png";
import { LuTerminal } from "react-icons/lu";
import { MdPsychology } from "react-icons/md";

export default function InterviewSection() {
  const TECHNICAL_QUESTIONS = [
    {
      id: "Q1",
      question:
        "Explain the difference between authentication and authorization.",
      intent:
        "To verify the candidate understands fundamental security principles and the distinction between identity and permissions.",
      answer:
        "Authentication is confirming who a user is (e.g., login credentials), while authorization is determining what they're allowed to do (e.g., admin vs. guest roles).",
    },
    {
      id: "Q2",
      question: "What problem does useEffect solve in React?",
      intent:
        "To assess the candidate's mastery of React's lifecycle and side-effect management in functional components.",
      answer:
        "useEffect allows functional components to perform side effects—like data fetching or subscriptions—that were previously handled in lifecycle methods like componentDidMount.",
    },
  ];

  const BEHAVIORAL_QUESTIONS = [
    {
      id: "Q1",
      question: "Tell me about a time you solved a difficult bug.",
      intent:
        "To observe problem-solving methodology, persistence, and the ability to articulate technical challenges to others.",
      answer:
        "Use the STAR method: Describe a race condition in the checkout flow, explain the logging tools used to isolate it, and highlight the architectural fix that prevented recurrence.",
    },
    {
      id: "Q2",
      question: "How do you handle tight deadlines during a project?",
      intent:
        "To evaluate time management skills, prioritization under pressure, and communication with stakeholders during crunch periods.",
      answer:
        "Focus on ruthless prioritization and transparency. Explain how you break down tasks and communicate early if a deliverable's scope needs adjustment to meet the core deadline.",
    },
  ];

  const BOTTOM_FEATURES = [
    "Personalized interview preparation",
    "Technical and behavioral questions",
    "AI-generated answer guidance",
    "Role-specific preparation flow",
  ];

  return (
    <section className="px-margin-page pb-section-padding">
      {/* Section Header */}
      <div className="mb-20">
        <span className="font-mono-label text-mono-label text-primary/40 uppercase block mb-4">
          AI Interview Preparation
        </span>
        <h2 className="font-headline-lg text-headline-lg max-w-3xl mb-6">
          Practice Smarter for Technical & Behavioral Interviews
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          HirePilot AI generates personalized interview questions based on your
          target role, resume, and skill gaps. Prepare with realistic technical
          and behavioral questions that reflect what modern software companies
          actually ask during interviews.
        </p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-20">
        <QuestionCard
          icon={LuTerminal}
          title="Technical Questions"
          questions={TECHNICAL_QUESTIONS}
        />

        <QuestionCard
          icon={MdPsychology}
          title="Behavioral Questions"
          questions={BEHAVIORAL_QUESTIONS}
        />
      </div>

      {/* Bottom Feature Row */}
      <div className="border-t border-outline-variant pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {BOTTOM_FEATURES.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <FaCheck size={14} className="text-primary shrink-0" />
            <span className="font-mono-detail text-mono-detail text-primary uppercase">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Image Area */}
      <div className="mt-24 relative aspect-21/9 overflow-hidden bg-surface-container border border-outline-variant">
        <Image
          src={MeetingSpaceImg}
          alt="Software developers in a minimalist meeting space"
          className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-linear-to-t from-inverse-surface/20 to-transparent">
          <h4 className="font-headline-md text-headline-md mb-4 bg-surface-container-lowest/90 px-8 py-4 backdrop-blur-sm">
            Master the technical interview with AI
          </h4>
          <button className="bg-primary text-on-primary px-10 py-4 font-headline-md hover:scale-105 transition-transform">
            Start Preparing Now
          </button>
        </div>
      </div>
    </section>
  );
}
