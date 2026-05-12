"use client";

import { getSeverityStyle } from "@/lib/helper/analysis.helpers";
import { MdWarning } from "react-icons/md";

function SkillGapRow({ gap }) {
  const { label, bg, text, rowBorder } = getSeverityStyle(gap.severity);

  return (
    <div
      className={`flex items-center justify-between p-3 bg-surface-container-low border rounded-lg ${rowBorder}`}
    >
      <span className="font-mono-detail">{gap.skill}</span>
      <span
        className={`px-2 py-0.5 ${bg} ${text} text-[10px] font-mono-label uppercase tracking-widest rounded-full`}
      >
        {label}
      </span>
    </div>
  );
}

export default function SkillGapsSection({ skillGaps = [] }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <h2 className="font-headline-md text-[24px]">Skill Gaps</h2>
        <MdWarning size={22} className="text-on-surface-variant" />
      </div>
      <div className="space-y-3">
        {skillGaps.map((gap) => (
          <SkillGapRow key={gap.skill} gap={gap} />
        ))}
      </div>
    </section>
  );
}
