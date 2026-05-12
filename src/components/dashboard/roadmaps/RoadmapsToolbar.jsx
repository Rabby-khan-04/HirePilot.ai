"use client";

import { useRoadmapFilterStore } from "@/store/userRoadmapFilterStore";
import { useState, useRef, useEffect } from "react";
import { MdSearch, MdExpandMore, MdSwapVert, MdClose } from "react-icons/md";

// ── Constants ──────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
  { value: "all", label: "All Status" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "not-started", label: "Not Started" },
];

const DURATION_OPTIONS = [
  { value: "all", label: "All Durations" },
  { value: "1", label: "1 Week" },
  { value: "2", label: "2 Weeks" },
  { value: "4", label: "4 Weeks" },
  { value: "8", label: "8+ Weeks" },
];

const SORT_OPTIONS = [
  { value: "updatedAt", label: "Last Updated" },
  { value: "progress", label: "Progress" },
  { value: "title", label: "Title A–Z" },
];

// ── FilterDropdown ─────────────────────────────────────────────────────────

function FilterDropdown({ label, icon: Icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeLabel = options.find((o) => o.value === value)?.label ?? label;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-mono-label text-[11px] uppercase tracking-widest hover:border-on-background transition-colors whitespace-nowrap"
      >
        {activeLabel}
        <Icon size={16} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-44 bg-surface-container-lowest border border-outline-variant/30 rounded-lg shadow-lg z-20 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 font-mono-label text-[11px] uppercase tracking-widest transition-colors ${
                value === opt.value
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── RoadmapsToolbar ────────────────────────────────────────────────────────

export default function RoadmapsToolbar({ isFetching, onReset }) {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
    sortBy,
    setSortBy,
  } = useRoadmapFilterStore();

  const hasActiveFilters =
    search !== "" ||
    statusFilter !== "all" ||
    durationFilter !== "all" ||
    sortBy !== "updatedAt";

  return (
    <section className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter items-center border-b border-outline-variant/30">
      {/* Search */}
      <div className="md:col-span-6 relative">
        <MdSearch
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent border-b border-outline-variant focus:border-on-background focus:ring-0 outline-none pl-12 py-3 font-mono-detail text-sm placeholder:text-on-surface-variant/50"
          placeholder="Search roadmap titles, skills, or target roles..."
          type="text"
        />
        {/* Fetching indicator */}
        {isFetching && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
        )}
      </div>

      {/* Filters */}
      <div className="md:col-span-6 flex flex-wrap justify-start md:justify-end gap-3">
        <FilterDropdown
          label="Status"
          icon={MdExpandMore}
          options={STATUS_OPTIONS}
          value={statusFilter}
          onChange={setStatusFilter}
        />
        <FilterDropdown
          label="Duration"
          icon={MdExpandMore}
          options={DURATION_OPTIONS}
          value={durationFilter}
          onChange={setDurationFilter}
        />
        <FilterDropdown
          label="Sort"
          icon={MdSwapVert}
          options={SORT_OPTIONS}
          value={sortBy}
          onChange={setSortBy}
        />

        {/* Clear filters — only visible when something is active */}
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-4 py-2 border border-error/40 text-error rounded-lg font-mono-label text-[11px] uppercase tracking-widest hover:bg-error/10 transition-colors whitespace-nowrap"
          >
            <MdClose size={14} />
            Clear
          </button>
        )}
      </div>
    </section>
  );
}
