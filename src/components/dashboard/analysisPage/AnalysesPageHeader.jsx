"use client";

import { MdAdd } from "react-icons/md";
import Link from "next/link";

export default function AnalysesPageHeader() {
  return (
    <section className="pt-section-padding pb-16 border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
      <div className="max-w-2xl">
        <h1 className="font-display-xl text-[40px] md:text-[56px] font-semibold text-on-background mb-4 leading-tight tracking-tighter">
          AI Analyses
        </h1>
        <p className="font-body-md text-on-surface-variant text-lg">
          Review your AI-generated career match reports, identify high-impact
          skill gaps, and optimize your trajectory based on real-time market
          signals.
        </p>
      </div>

      <Link
        href="/dashboard/career-analysis/new"
        className="shrink-0 px-6 md:px-8 py-3 md:py-4 bg-on-background text-background font-mono-label text-[12px] uppercase tracking-[0.2em] rounded flex items-center gap-3 hover:opacity-90 transition-opacity"
      >
        <MdAdd size={18} />
        New Analysis
      </Link>
    </section>
  );
}
