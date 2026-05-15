"use client";

import { useState } from "react";
import { MdRefresh, MdDownload, MdMoreVert } from "react-icons/md";

export default function DashboardHeader({ onRefresh, onExport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="border-b border-outline-variant/30 px-margin-page pb-5 md:pb-6 pt-section-padding">
      {/* Main row */}
      <div className="flex items-start justify-between gap-4">
        {/* Title block */}
        <div className="min-w-0">
          <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Platform Intelligence
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1 hidden sm:block">
            Monitor platform growth, AI analysis quality, resume activity, and
            learning engagement across the ecosystem.
          </p>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="flex bg-surface-container-high rounded-lg p-1 border border-outline-variant/20">
            <button className="px-4 py-2 font-mono-label text-mono-label text-on-surface bg-surface-container-lowest rounded shadow-sm transition-all">
              LAST 30 DAYS
            </button>
            <button className="px-4 py-2 font-mono-label text-mono-label text-on-surface-variant hover:text-on-surface transition-colors">
              CUSTOM
            </button>
          </div>

          <button
            onClick={onRefresh}
            className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors"
            title="Refresh"
          >
            <MdRefresh className="text-on-surface-variant w-5 h-5" />
          </button>

          <button
            onClick={onExport}
            className="px-4 py-2 bg-primary text-on-primary font-bold rounded-lg flex items-center gap-2 shadow-sm hover:opacity-90 transition-all font-mono-label text-mono-label"
          >
            <MdDownload className="w-4 h-4" />
            EXPORT DATA
          </button>
        </div>

        {/* Mobile: icon row */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            onClick={onRefresh}
            className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors"
            title="Refresh"
          >
            <MdRefresh className="text-on-surface-variant w-5 h-5" />
          </button>
          <button
            onClick={onExport}
            className="p-2 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-all"
            title="Export"
          >
            <MdDownload className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors"
            title="More"
          >
            <MdMoreVert className="text-on-surface-variant w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile subtitle */}
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 sm:hidden text-sm leading-snug">
        Monitor platform growth, AI analysis quality, and learning engagement.
      </p>

      {/* Mobile expanded menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 border-t border-outline-variant/20 pt-4">
          <div className="flex bg-surface-container-high rounded-lg p-1 border border-outline-variant/20 self-start">
            <button className="px-4 py-2 font-mono-label text-mono-label text-on-surface bg-surface-container-lowest rounded shadow-sm transition-all text-xs">
              LAST 30 DAYS
            </button>
            <button className="px-4 py-2 font-mono-label text-mono-label text-on-surface-variant hover:text-on-surface transition-colors text-xs">
              CUSTOM
            </button>
          </div>
          <button
            onClick={() => {
              onExport();
              setMobileMenuOpen(false);
            }}
            className="px-4 py-2.5 bg-primary text-on-primary font-bold rounded-lg flex items-center gap-2 shadow-sm hover:opacity-90 transition-all font-mono-label text-mono-label text-xs self-start"
          >
            <MdDownload className="w-4 h-4" />
            EXPORT DATA
          </button>
        </div>
      )}
    </section>
  );
}
