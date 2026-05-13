"use client";

import { useRouter } from "next/navigation";
import { LuSearchCheck } from "react-icons/lu";
import { MdOutlineAddRoad, MdUpload } from "react-icons/md";

const ACTIVITY_ITEMS = [
  { color: "bg-primary", label: "Latest resume update", time: "2h ago" },
  { color: "bg-outline", label: "New analysis generated", time: "Yesterday" },
  { color: "bg-outline", label: "Roadmap task completed", time: "3 days ago" },
];

export default function OverviewActions() {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
      {/* Quick Actions */}
      <div>
        <h3 className="text-mono-label font-mono-label text-on-surface-variant uppercase mb-4 md:mb-8">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <button
            onClick={() => router.push("/dashboard/resumes")}
            className="flex items-center justify-center gap-3 bg-primary text-on-primary font-mono-detail px-2 py-3 md:py-4 rounded font-bold hover:opacity-90 transition-all text-sm md:text-base"
          >
            <MdUpload />
            Upload Resume
          </button>
          <button
            onClick={() => router.push("/dashboard/analyses/new")}
            className="flex items-center justify-center gap-3 border border-primary font-mono-detail text-primary px-2 py-3 md:py-4 rounded font-bold hover:bg-surface-container transition-all text-sm md:text-base"
          >
            <LuSearchCheck />
            Create Job Analysis
          </button>
          <button
            onClick={() => router.push("/dashboard/roadmaps/new")}
            className="flex items-center justify-center gap-3 border border-primary text-primary font-mono-detail px-2 py-3 md:py-4 rounded font-bold hover:bg-surface-container transition-all sm:col-span-2 text-sm md:text-base"
          >
            <MdOutlineAddRoad />
            Generate Learning Roadmap
          </button>
        </div>
      </div>

      {/* Activity Snapshot */}
      <div>
        <h3 className="text-mono-label font-mono-label text-on-surface-variant uppercase mb-4 md:mb-8">
          Activity Snapshot
        </h3>
        <div className="space-y-2 md:space-y-4">
          {ACTIVITY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 md:py-3 border-b border-outline-variant"
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div
                  className={`w-2 h-2 shrink-0 ${item.color} rounded-full`}
                />
                <span className="text-body-md truncate">{item.label}</span>
              </div>
              <span className="text-mono-detail font-mono-detail text-on-surface-variant shrink-0 ml-4">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
