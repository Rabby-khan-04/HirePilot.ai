"use client";

import Link from "next/link";
import { MdChevronRight, MdOutlineMap, MdMoreVert } from "react-icons/md";

export default function AnalysisDetailHeader({
  analysis,
  onRetake,
  onGenerateRoadmap,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      {/* Left */}
      <div>
        <nav className="flex items-center gap-2 font-mono-label text-mono-label text-on-surface-variant mb-4 uppercase flex-wrap">
          <Link
            href="/dashboard/overview"
            className="hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <MdChevronRight size={14} />
          <Link
            href="/dashboard/analyses"
            className="hover:text-primary transition-colors"
          >
            AI Analyses
          </Link>
          <MdChevronRight size={14} />
          <span className="text-primary font-bold">Analysis Details</span>
        </nav>

        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
          {analysis.title}
        </h1>
        <p className="font-headline-md text-[20px] text-on-surface-variant">
          {analysis.role}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onRetake}
          className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-surface-container-high transition-all"
        >
          Retake Analysis
        </button>
        <button
          onClick={onGenerateRoadmap}
          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 flex items-center gap-2"
        >
          <MdOutlineMap size={20} />
          Generate Roadmap
        </button>
        <button className="p-3 border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors">
          <MdMoreVert size={20} />
        </button>
      </div>
    </div>
  );
}
