"use client";

import { MdAutoAwesome, MdNorthEast } from "react-icons/md";
import Link from "next/link";
import { getScoreMeta } from "@/lib/helper/analysis.helpers";

function MatchSummaryCard({ analysis }) {
  const { score, technicalProficiency, behavioralReadiness } = analysis;
  const { label, color } = getScoreMeta(score);

  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 relative overflow-hidden">
      <p className="font-mono-label text-mono-label uppercase tracking-widest mb-6 text-on-surface-variant">
        Analysis Overview
      </p>
      <div className="flex items-center gap-6 mb-8">
        <div
          className={`w-20 h-20 rounded-full border-4 ${color.replace("text-", "border-")} flex items-center justify-center`}
        >
          <span className={`text-2xl font-bold ${color}`}>{score}%</span>
        </div>
        <div>
          <h4 className="font-bold text-xl text-on-surface">{label}</h4>
          <p className="text-xs text-on-surface-variant">
            Based on your resume analysis
          </p>
        </div>
      </div>
      <div className="space-y-3 border-t border-outline-variant/30 pt-4">
        {[
          { label: "Technical Fit", value: `${technicalProficiency ?? 0}%` },
          {
            label: "Behavioral Readiness",
            value: `${behavioralReadiness ?? 0}%`,
          },
          { label: "Overall Match", value: `${score}%` },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-on-surface-variant">{label}</span>
            <span className="font-bold text-on-surface">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AISuggestionsCard({ suggestions = [] }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8">
      <h3 className="font-bold text-lg mb-6 text-on-surface">
        AI Optimization Tips
      </h3>
      <ul className="space-y-6">
        {suggestions.map((tip, i) => (
          <li key={i} className="flex gap-4">
            <div className="w-8 h-8 rounded bg-surface-container shrink-0 flex items-center justify-center font-mono-detail font-bold text-on-surface-variant">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="text-sm text-on-surface-variant">{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MotivationCard({ skillGapCount }) {
  return (
    <div className="bg-surface-container-low border-2 border-dashed border-outline-variant p-8 rounded-xl text-center">
      <MdAutoAwesome size={48} className="text-primary mx-auto mb-4" />
      <h4 className="font-bold mb-2 text-on-surface">
        You&apos;re almost there.
      </h4>
      <p className="text-sm text-on-surface-variant mb-6">
        Addressing these {skillGapCount} gaps could significantly increase your
        interview callback rate for senior roles.
      </p>
      <button className="w-full bg-surface-container-lowest border border-primary text-primary py-3 rounded font-bold hover:bg-primary hover:text-on-primary transition-all">
        Download PDF Report
      </button>
    </div>
  );
}

export default function AnalysisSidebar({ analysis }) {
  return (
    <aside className="lg:col-span-4 sticky top-24 flex flex-col gap-8">
      <MatchSummaryCard analysis={analysis} />
      <AISuggestionsCard suggestions={analysis.suggestions ?? []} />
      <MotivationCard skillGapCount={analysis.skillGaps?.length ?? 0} />
    </aside>
  );
}
