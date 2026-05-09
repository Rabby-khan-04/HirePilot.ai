import { FaCheck } from "react-icons/fa6";
import QuestionCard from "./QuestionCard";
import Image from "next/image";
import MeetingSpaceImg from "@/../public/assets/image/meeting_space.png";
import { LuTerminal } from "react-icons/lu";
import { MdPsychology } from "react-icons/md";
import {
  BEHAVIORAL_QUESTIONS,
  BOTTOM_FEATURES,
  TECHNICAL_QUESTIONS,
} from "@/data/interviewMockData";

export default function InterviewSection() {
  return (
    <section className="px-margin-page">
      {/* Section Header */}
      <div className="mb-20 border-l border-primary/20 pl-8">
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
      <div className="mt-24 relative aspect-21/9 overflow-hidden bg-surface-container border border-outline-variant rounded">
        <Image
          src={MeetingSpaceImg}
          alt="Software developers in a minimalist meeting space"
          className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-linear-to-t from-inverse-surface/20 to-transparent">
          <h4 className="font-headline-md text-headline-md mb-4 bg-surface-container-lowest/90 px-8 py-4 backdrop-blur-sm rounded">
            Master the technical interview with AI
          </h4>
          <button className="bg-primary text-on-primary px-10 py-4 font-headline-md hover:scale-105 transition-transform rounded cursor-pointer">
            Start Preparing Now
          </button>
        </div>
      </div>
    </section>
  );
}
