import { FEATURES } from "@/data/dashboardPreviewData";
import MockupTopBar from "./MockupTopBar";
import RecentAnalyses from "./RecentAnalyses";
import SkillGaps from "./SkillGaps";
import StatCards from "./StatCards";
import WeeklyActivity from "./WeeklyActivity";

export default function DashboardSection() {
  return (
    <section className="relative z-10 px-margin-page pt-section-padding">
      <div className="max-w-3xl mb-24 border-l border-primary/20 pl-8">
        <span className="font-mono-label text-mono-label text-primary uppercase mb-4 block tracking-widest">
          Dashboard Preview
        </span>
        <h1 className="font-headline-lg text-headline-lg mb-6 max-w-3xl">
          Everything You Need to Track Your Job Preparation in One Place
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          HirePilot AI brings your entire preparation journey into a single
          intelligent dashboard. Monitor resume performance, track roadmap
          progress, review interview questions, and identify skill gaps without
          switching between multiple tools.
        </p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-grid-unit shadow-[0_20px_40px_rgba(0,0,0,0.02)] overflow-hidden">
        <MockupTopBar />

        {/* Dashboard Content Area */}
        <div className="p-8 bg-surface-bright grid grid-cols-12 gap-gutter">
          {/* Stat Cards Row */}
          <StatCards />

          {/* Left Column: Skill Gaps & Activity */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-gutter">
            <SkillGaps />
            <WeeklyActivity />
          </div>

          {/* Right Column: Recent Analyses */}
          <div className="col-span-12 lg:col-span-4">
            <RecentAnalyses />
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-outline-variant/30 py-16 px-margin-pag">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="space-y-3">
              <Icon size={28} className="text-primary shrink-0" />
              <h3 className="font-headline-md text-[18px] font-bold">
                {title}
              </h3>
              <p className="text-mono-detail font-mono-detail text-on-surface-variant">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
