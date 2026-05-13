"use client";

import { useResumes } from "@/hooks/resumes/useResumes";

// ── Stat Card ──────────────────────────────────────────────────────────────

function StatCard({ label, value, accent = false }) {
  return (
    <div className="bg-surface border border-outline-variant p-6 rounded-lg flex flex-col gap-1">
      <p className="font-mono-label text-on-surface-variant uppercase text-[10px]">
        {label}
      </p>
      <p className="font-headline-md text-primary truncate">{value}</p>
    </div>
  );
}

function LatestResumeCard({ name }) {
  return (
    <div className="bg-surface border border-outline-variant p-6 rounded-lg flex flex-col gap-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2">
        <span
          className={`flex h-2 w-2 rounded-full ${
            name ? "bg-success" : "bg-outline-variant"
          }`}
        />
      </div>
      <p className="font-mono-label text-on-surface-variant uppercase text-[10px]">
        Latest Resume
      </p>
      <p className="font-headline-md text-primary truncate">{name ?? "None"}</p>
    </div>
  );
}

// ── Skeleton ───────────────────────────────────────────────────────────────

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-card-gap mb-12">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-surface border border-outline-variant p-6 rounded-lg flex flex-col gap-3"
        >
          <div className="shimmer h-2.5 w-20 rounded" />
          <div className="shimmer h-7 w-12 rounded" />
        </div>
      ))}
    </div>
  );
}

// ── ResumeStats ────────────────────────────────────────────────────────────

export default function ResumeStats() {
  const { resumes, pagination, isLoading } = useResumes();

  if (isLoading) return <StatsSkeleton />;

  const total = pagination?.total ?? 0;

  const processed = resumes.filter(
    (r) => r.processingStatus === "completed",
  ).length;

  const processing = resumes.filter(
    (r) =>
      r.processingStatus === "processing" || r.processingStatus === "pending",
  ).length;

  const latestResume = resumes.find((r) => r.isLatest);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-card-gap mb-12">
      <StatCard label="Total Resumes" value={total} />
      <LatestResumeCard name={latestResume?.title} />
      <StatCard label="Processed" value={processed} />
      <StatCard label="Processing" value={processing} />
    </div>
  );
}
