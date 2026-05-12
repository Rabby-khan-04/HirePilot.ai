"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function AnalysisFooterCTA({ analysisId }) {
  return (
    <section className="mt-12 bg-surface-container-lowest border border-outline-variant p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-lg transition-all">
      <div className="flex flex-col gap-4">
        <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight text-on-surface">
          Ready to bridge the gaps?
        </h2>
        <p className="text-on-surface-variant max-w-xl">
          We&apos;ve structured a hyper-focused roadmap designed to address your
          specific skill gaps based on this analysis.
        </p>
      </div>
      <Link
        href={`/dashboard/career-analysis?analysisId=${analysisId}`}
        className="shrink-0 bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg flex items-center gap-4 hover:opacity-90 transition-all"
      >
        Build My Custom Roadmap
        <MdArrowForward size={22} />
      </Link>
    </section>
  );
}
