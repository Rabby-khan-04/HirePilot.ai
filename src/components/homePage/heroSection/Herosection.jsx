import { useUserStore } from "@/store/userStore";
import ResumeBentoGrid from "./ResumeBentoGrid";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="px-margin-page py-section-padding min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        {/* Left Column */}
        <div className="md:col-span-6 flex flex-col justify-center space-y-grid-unit z-10">
          <div>
            <span className="inline-block bg-surface-container px-3 py-1 font-mono-label text-mono-label text-primary border border-outline-variant/50">
              AI-powered career preparation platform
            </span>
          </div>

          <h1 className="font-display-xl text-display-xl text-primary leading-tight pt-4">
            The AI platform for modern job seekers
          </h1>

          <h2 className="font-headline-lg text-headline-lg text-secondary-fixed-dim font-normal pt-2">
            The platform to get hired faster
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl py-8">
            Your AI-powered career copilot to analyze resumes, uncover skill
            gaps, prepare for interviews, and build personalized learning
            roadmaps for top software roles.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary font-headline-md text-body-md px-10 py-5 rounded flex items-center gap-2 hover:opacity-90 transition-all">
              Get Started Free
              <span className="text-[20px]">
                <IoArrowForwardOutline />
              </span>
            </button>

            <button className="border border-primary text-primary font-headline-md text-body-md px-10 py-5 rounded hover:bg-surface-container transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-6 relative flex items-center justify-center min-h-150">
          {/* Background Visuals */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-125 h-125 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-100 h-100 rounded-full border border-primary/40 flex items-center justify-center">
                <div className="w-75 h-75 rounded-full border border-primary/60"></div>
              </div>
            </div>
          </div>

          <ResumeBentoGrid />
        </div>
      </div>
    </section>
  );
}
