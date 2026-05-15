"use client";

import { getAdoptionPct } from "@/lib/helper/dashboard";
import { MdCode, MdWarning, MdWork } from "react-icons/md";

const SEVERITY_STYLES = {
  high: {
    wrapper: "bg-error-surface border-error-border hover:bg-red-100",
    text: "text-error-text",
    badge: "bg-error-text/10 text-error-text",
    label: "HIGH",
  },
  medium: {
    wrapper: "bg-warning-surface border-warning-border hover:bg-orange-100",
    text: "text-warning-text",
    badge: "bg-warning-text/10 text-warning-text",
    label: "MED",
  },
  low: {
    wrapper:
      "bg-surface-container-high border-outline-variant/20 hover:bg-surface-container-highest",
    text: "text-on-surface-variant",
    badge: "bg-surface-container-highest text-on-surface-variant",
    label: "LOW",
  },
};

function SkeletonIntelligence() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-10 bg-surface-container-high rounded-lg" />
      ))}
    </div>
  );
}

export default function IntelligenceSection({ intelligence, loading }) {
  if (loading || !intelligence) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm"
          >
            <div className="h-6 w-36 bg-surface-container-high rounded mb-8 animate-pulse" />
            <SkeletonIntelligence />
          </div>
        ))}
      </section>
    );
  }

  const { topMatchedSkills, topSkillGaps, topJobProfiles } = intelligence;
  const maxSkillCount = topMatchedSkills?.[0]?.count ?? 1;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Ecosystem Skills */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdCode className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-headline-md text-xl text-on-surface">
            Ecosystem Skills
          </h4>
        </div>
        <div className="space-y-5">
          {topMatchedSkills.slice(0, 6).map((skill) => {
            const pct = getAdoptionPct(skill.count, maxSkillCount);
            return (
              <div key={skill.skill}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-semibold text-on-surface">
                    {skill.skill}
                  </span>
                  <span className="text-xs font-mono-detail text-on-surface-variant">
                    {pct}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high overflow-hidden rounded-full">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Critical Gaps */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdWarning className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-headline-md text-xl text-on-surface">
            Critical Gaps
          </h4>
        </div>
        <div className="space-y-3">
          {topSkillGaps.slice(0, 5).map((gap) => {
            const style = SEVERITY_STYLES[gap.severity] ?? SEVERITY_STYLES.low;
            return (
              <div
                key={gap.skill}
                className={`p-3.5 border rounded-lg flex justify-between items-center cursor-pointer transition-colors ${style.wrapper}`}
              >
                <div>
                  <p className="font-bold text-on-surface text-sm">
                    {gap.skill}
                  </p>
                  <p className={`text-xs font-mono-detail ${style.text}`}>
                    {gap.count} occurrences
                  </p>
                </div>
                <span
                  className={`text-[10px] font-mono-label font-bold px-2 py-0.5 rounded ${style.badge}`}
                >
                  {style.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Profiles */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdWork className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-headline-md text-xl text-on-surface">
            Target Profiles
          </h4>
        </div>
        <div className="space-y-3">
          {topJobProfiles.slice(0, 6).map((profile, i) => (
            <div
              key={`${profile.title}-${i}`}
              className={`flex items-center justify-between py-3 ${
                i < topJobProfiles.slice(0, 6).length - 1
                  ? "border-b border-outline-variant/20"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono-label text-on-surface-variant/40 text-xs shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-on-surface truncate">
                  {profile.title}
                </span>
              </div>
              <span
                className={`shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full ml-3 ${
                  i === 0
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface"
                }`}
              >
                {Math.round(profile.avgScore)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
