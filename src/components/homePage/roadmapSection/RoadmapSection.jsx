import { MdAutoAwesome } from "react-icons/md";
import FeatureCard from "./FeatureCard";
import WeekStep from "./WeekStep";
import {
  BOTTOM_FEATURES,
  FEATURE_CARDS,
  ROADMAP_WEEKS,
} from "@/data/roadMapMocData";

export default function RoadmapSection() {
  return (
    <section className="pt-section-padding px-margin-page">
      <div className="border-t border-outline-variant/30 mb-12" />

      {/* Section Header */}
      <div className="max-w-3xl mb-24 border-l border-primary/20 pl-8">
        <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-4">
          AI Learning Roadmaps
        </span>
        <h2 className="font-headline-lg text-headline-lg mb-6">
          Personalized Roadmaps Built Around Your Skill Gaps
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          HirePilot AI creates structured learning roadmaps tailored to your
          target role, current experience, and missing skills. Instead of
          wasting time deciding what to learn next, follow a step-by-step
          preparation plan designed specifically for your career goals.
        </p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left: Feature Cards */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-card-gap">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        {/* Right: Roadmap Mockup */}
        <div className="col-span-12 md:col-span-7">
          <div className="bg-surface border border-outline-variant overflow-hidden sticky top-32 rounded">
            {/* Card Header */}
            <div className="bg-surface-container border-b border-outline-variant p-6 flex justify-between items-center">
              <div>
                <span className="font-mono-label text-mono-label text-primary bg-secondary-container px-2 py-1 mb-2 inline-block">
                  ROADMAP PREVIEW
                </span>
                <h4 className="font-headline-md text-[24px] font-bold">
                  Frontend Developer Roadmap
                </h4>
              </div>
              <div className="text-right">
                <span className="font-mono-label text-mono-label text-on-surface-variant block">
                  ESTIMATED DURATION
                </span>
                <span className="font-headline-md text-[20px] font-bold">
                  4 Weeks
                </span>
              </div>
            </div>

            {/* Roadmap Flow */}
            <div className="p-8 space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-9.75 top-8 bottom-8 w-px bg-outline-variant/50" />
              {ROADMAP_WEEKS.map((week) => (
                <WeekStep key={week.week} {...week} />
              ))}
            </div>

            {/* Footer */}
            <div className="bg-primary py-3 px-8 flex justify-between items-center">
              <p className="font-mono-detail text-mono-detail text-on-primary">
                GENERATING NEXT TASKS...
              </p>
              <MdAutoAwesome
                size={16}
                className="text-on-primary animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Row */}
      <div className="mt-24 border-y border-outline-variant/30 py-8 grid grid-cols-1 md:grid-cols-5 gap-gutter">
        {BOTTOM_FEATURES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-2"
          >
            <Icon size={20} className="text-primary" />
            <span className="font-mono-label text-mono-label uppercase tracking-tighter">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
