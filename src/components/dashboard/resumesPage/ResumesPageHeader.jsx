import Link from "next/link";
import { MdAdd } from "react-icons/md";

export default function ResumesPageHeader() {
  return (
    <section className="pt-8 md:pt-section-padding pb-8 md:pb-16 border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 md:gap-6">
      <div className="max-w-2xl">
        <h1 className="font-display-xl text-[28px] sm:text-[40px] md:text-[56px] font-semibold text-on-background mb-2 md:mb-4 leading-tight tracking-tighter">
          My Resumes
        </h1>
        <p className="font-body-md text-on-surface-variant text-base md:text-lg">
          Manage and track your technical resume versions with AI-powered
          insights.
        </p>
      </div>

      <Link
        href="/dashboard/career-analysis"
        className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-on-background text-background font-mono-label text-[12px] uppercase tracking-[0.2em] rounded hover:opacity-90 transition-opacity"
      >
        <MdAdd size={18} />
        New Resume
      </Link>
    </section>
  );
}
