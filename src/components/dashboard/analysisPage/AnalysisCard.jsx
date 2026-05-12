"use client";

import Link from "next/link";
import { MdQuiz } from "react-icons/md";

// ── Score Ring ─────────────────────────────────────────────────────────────

const CIRCUMFERENCE = 2 * Math.PI * 28;

function scoreColor(score) {
  if (score >= 80) return "var(--color-success)";
  if (score >= 60) return "var(--color-warning)";
  return "var(--color-error)";
}

function ScoreRing({ score }) {
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="4"
          className="text-surface-container-high"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="transparent"
          stroke={scoreColor(score)}
          strokeWidth="4"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute text-xs font-bold text-on-background">
        {score}%
      </span>
    </div>
  );
}

// ── Skill Gap Badge ────────────────────────────────────────────────────────

const GAP_STYLES = {
  high: "bg-[var(--color-error-surface)] text-[var(--color-error-text)] border border-[var(--color-error-border)]",
  medium:
    "bg-[var(--color-warning-surface)] text-[var(--color-warning-text)] border border-[var(--color-warning-border)]",
  low: "bg-[var(--color-neutral-surface)] text-[var(--color-neutral-text)] border border-[var(--color-neutral-border)]",
};

function SkillGapBadge({ skill, severity }) {
  return (
    <span
      className={`px-2 py-0.5 text-[10px] font-bold rounded-sm uppercase ${GAP_STYLES[severity] ?? GAP_STYLES.low}`}
    >
      {skill} ({severity.slice(0, 3).toUpperCase()})
    </span>
  );
}

// ── Analysis Card ──────────────────────────────────────────────────────────

export default function AnalysisCard({ analysis }) {
  const {
    _id,
    title,
    role,
    score,
    matchedSkills,
    skillGaps,
    suggestion,
    interviewQuestionsCount,
    createdAt,
  } = analysis;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-6 flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 gap-3">
        <div className="space-y-1 min-w-0">
          <span className="font-mono-label text-[11px] text-on-surface-variant uppercase tracking-widest block truncate">
            {title}
          </span>
          <h3 className="font-headline-md text-xl font-bold text-on-background truncate">
            {role}
          </h3>
        </div>
        <ScoreRing score={score} />
      </div>

      {/* Resume badge */}
      <div className="mb-4">
        <p className="font-mono-detail text-xs text-on-secondary-container bg-surface-container-low inline-block px-2 py-1 rounded truncate max-w-full">
          {role}
        </p>
      </div>

      {/* Body */}
      <div className="space-y-4 flex-1">
        {/* Matched skills */}
        {matchedSkills?.length > 0 && (
          <div>
            <p className="text-[10px] font-mono-label uppercase text-on-surface-variant mb-2 tracking-widest">
              Matched Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface text-success px-2 py-0.5 text-[10px] font-bold rounded-sm border border-success/80 uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skill gaps */}
        {skillGaps?.length > 0 && (
          <div>
            <p className="text-[10px] font-mono-label uppercase text-on-surface-variant mb-2 tracking-widest">
              Top Skill Gaps
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skillGaps.map((gap) => (
                <SkillGapBadge
                  key={gap.skill}
                  skill={gap.skill}
                  severity={gap.severity}
                />
              ))}
            </div>
          </div>
        )}

        {/* Suggestion */}
        {suggestion && (
          <div className="bg-surface-container-low p-3 rounded border-l-2 border-primary">
            <p className="text-xs text-on-surface-variant line-clamp-2 italic font-serif">
              &ldquo;{suggestion}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-on-surface-variant">
          <MdQuiz size={16} />
          <span className="text-[11px] font-mono-detail">
            {interviewQuestionsCount} Interview Q&apos;s
          </span>
        </div>
        <span className="text-[11px] font-mono-detail text-outline">
          {formattedDate}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href={`/dashboard/ai-analysis/${_id}`}
          className="bg-primary text-on-primary py-2 text-[11px] font-bold uppercase tracking-widest rounded hover:bg-primary/90 transition-colors text-center"
        >
          View Full
        </Link>
        <Link
          href={`/dashboard/roadmaps?analysisId=${_id}`}
          className="border border-primary text-primary py-2 text-[11px] font-bold uppercase tracking-widest rounded hover:bg-surface-container transition-colors text-center"
        >
          Roadmap
        </Link>
      </div>
    </div>
  );
}
