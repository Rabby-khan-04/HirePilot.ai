import Link from "next/link";
import {
  MdCompareArrows,
  MdBolt,
  MdTimeline,
  MdAutoAwesome,
} from "react-icons/md";

function ReadinessScore() {
  // Static for now — wire to AI analysis score when available
  const score = 94;
  return (
    <div className="bg-primary text-on-primary p-8 rounded-xl">
      <span className="font-mono-label text-[10px] opacity-70 block mb-6 uppercase tracking-widest">
        Readiness Score
      </span>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display-xl text-5xl font-semibold leading-none">
          {score}
        </span>
        <span className="font-headline-md opacity-70">/ 100</span>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full mb-6">
        <div
          className="h-full bg-white rounded-full transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="font-body-md text-sm opacity-90">
        High performance profile. Optimized for Senior IC roles in Series C+
        startups.
      </p>
    </div>
  );
}

function SkillsCard({ skills }) {
  if (!skills?.length) return null;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
      <h5 className="font-body-md font-bold mb-6">Core Proficiencies</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-surface-container text-primary font-mono-detail text-xs rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIInsightsCard() {
  // Placeholder — wire to real AI insights from analysis when available
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 select-none pointer-events-none">
        <MdAutoAwesome size={64} />
      </div>
      <h5 className="font-body-md font-bold flex items-center gap-2 mb-4">
        <MdAutoAwesome size={18} className="text-primary" />
        AI Insights
      </h5>
      <div className="space-y-3">
        <div className="p-3 bg-surface-container-low rounded-lg">
          <p className="font-mono-label text-[10px] text-primary mb-1 uppercase">
            Strength
          </p>
          <p className="font-body-md text-sm text-on-surface-variant">
            Run an AI analysis to unlock personalized insights for this resume.
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionsCard({ resumeId }) {
  const actions = [
    {
      label: "Compare Against Job Role",
      icon: MdCompareArrows,
      href: `/dashboard/analyses?resumeId=${resumeId}`,
    },
    {
      label: "Generate AI Analysis",
      icon: MdBolt,
      href: `/dashboard/analyses/new?resumeId=${resumeId}`,
    },
    {
      label: "Generate Roadmap",
      icon: MdTimeline,
      href: `/dashboard/roadmaps?resumeId=${resumeId}`,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {actions.map(({ label, icon: Icon, href }) => (
        <Link
          key={label}
          href={href}
          className="w-full flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary transition-all group"
        >
          <span className="font-body-md text-sm font-medium">{label}</span>
          <Icon
            size={20}
            className="text-on-surface-variant group-hover:text-primary transition-colors"
          />
        </Link>
      ))}
    </div>
  );
}

export default function ResumeDetailSidebar({ resume }) {
  return (
    <div className="space-y-6">
      <ReadinessScore />
      <AIInsightsCard />
      <SkillsCard skills={resume.parsedData?.skills} />
      <ActionsCard resumeId={resume._id} />
    </div>
  );
}
