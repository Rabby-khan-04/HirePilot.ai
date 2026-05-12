"use client";

import { getScoreMeta } from "@/lib/helper/analysis.helpers";
import { MdStar, MdStarHalf } from "react-icons/md";

function ScoreRing({ score }) {
  const { label, color, bg, border } = getScoreMeta(score);
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - score / 100);

  return (
    <div
      className={`flex flex-col items-center justify-center bg-surface-container-lowest border ${border} rounded-lg p-8 relative overflow-hidden`}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-outline-variant/20"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="currentColor"
            className={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span
          className={`text-[36px] font-bold font-headline-lg ${color} relative z-10`}
        >
          {score}%
        </span>
      </div>
      <div className="mt-4 text-center">
        <p className="font-mono-label text-mono-label text-on-surface-variant uppercase mb-2">
          Match Status
        </p>
        <span
          className={`${bg} ${color} px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function StarRating({ value, max = 100 }) {
  const filled = Math.round((value / max) * 5);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= filled - 1 ? (
          <MdStar key={i} size={16} className="text-primary" />
        ) : i === filled ? (
          <MdStarHalf key={i} size={16} className="text-primary" />
        ) : (
          <MdStar key={i} size={16} className="text-outline-variant" />
        ),
      )}
    </div>
  );
}

function StatCard({ label, value, sub, progress, stars }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg flex flex-col justify-between gap-3">
      <p className="font-mono-label text-mono-label text-on-surface-variant uppercase">
        {label}
      </p>
      <h3 className="font-headline-md text-headline-md font-bold">{value}</h3>
      {progress !== undefined && (
        <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {stars !== undefined && <StarRating value={stars} />}
      {sub && <p className="text-xs text-on-surface-variant">{sub}</p>}
    </div>
  );
}

export default function AnalysisHeroSection({ analysis }) {
  const {
    score,
    matchedSkills,
    skillGaps,
    technicalProficiency,
    behavioralReadiness,
  } = analysis;
  const highPriority =
    skillGaps?.filter((g) => g.severity === "high").length ?? 0;

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter border-y border-outline-variant/30 py-12">
      <div className="md:col-span-1">
        <ScoreRing score={score} />
      </div>
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <StatCard
          label="Matched Skills"
          value={`${matchedSkills?.length ?? 0} / ${(matchedSkills?.length ?? 0) + (skillGaps?.length ?? 0)}`}
          progress={
            matchedSkills?.length
              ? (matchedSkills.length /
                  (matchedSkills.length + (skillGaps?.length ?? 0))) *
                100
              : 0
          }
        />
        <StatCard
          label="Skill Gaps"
          value={
            <span className="text-error">{skillGaps?.length ?? 0} Missing</span>
          }
          sub={`${highPriority} high-priority item${highPriority !== 1 ? "s" : ""}`}
        />
        <StatCard
          label="Tech Proficiency"
          value={`${technicalProficiency ?? 0}%`}
          stars={technicalProficiency}
        />
        <StatCard
          label="Behavioral"
          value={`${behavioralReadiness ?? 0}%`}
          sub="Leadership signals detected"
        />
      </div>
    </section>
  );
}
