"use client";

import { useTimeAgo } from "@/hooks/roadmaps/useTimeAgo";
import Link from "next/link";
import { MdMoreVert, MdSchedule, MdArrowForward } from "react-icons/md";

function ProgressBar({ percentage }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono-label text-[11px] text-on-surface-variant uppercase tracking-widest">
          Progress
        </span>
        <span className="font-mono-label text-[11px] font-semibold">
          {percentage}% Complete
        </span>
      </div>
      <div className="h-0.75 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full bg-on-background rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function SkillTags({ skills }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-2 py-0.5 bg-surface-container font-mono-detail text-[11px] rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function RoadmapCard({ roadmap }) {
  const timeAgo = useTimeAgo(roadmap.updatedAt);
  const { progress, title, category, skills, description, _id, duration } =
    roadmap;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-md group">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-6">
        <span className="px-2 py-1 bg-surface-container-high font-mono-label text-[10px] uppercase tracking-wider rounded">
          {category}
        </span>
        <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
          <MdMoreVert size={20} />
        </button>
      </div>

      {/* Title + Description */}
      <h3 className="font-headline-md text-[20px] md:text-[22px] font-semibold text-on-background mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body-md text-on-surface-variant text-[14px] line-clamp-2 mb-8 opacity-80">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-auto space-y-4">
        <ProgressBar percentage={progress.percentage} />

        <p className="font-mono-detail text-[11px] text-on-surface-variant">
          {progress.completedTasks} / {progress.totalTasks} Tasks Completed
        </p>

        <SkillTags skills={skills} />

        {/* Footer */}
        <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <MdSchedule size={16} />
            <span className="font-mono-label text-[10px] uppercase tracking-widest">
              {duration} • Updated {timeAgo}
            </span>
          </div>

          <Link
            href={`/dashboard/roadmaps/${_id}`}
            className="p-2 bg-on-background text-background rounded-full hover:scale-110 transition-transform"
          >
            <MdArrowForward size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
