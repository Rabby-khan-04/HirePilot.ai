"use client";

import Link from "next/link";
import { MdMoreVert, MdRefresh, MdBolt } from "react-icons/md";

// ── Status Badge ───────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  completed: {
    label: "Completed",
    className:
      "bg-success-surface text-success-text border border--success-border",
  },
  processing: {
    label: "Processing",
    className:
      "bg-surface-container-high text-on-surface-variant border border-outline-variant",
  },
  pending: {
    label: "Pending",
    className:
      "bg-surface-container-high text-on-surface-variant border border-outline-variant",
  },
  failed: {
    label: "Failed",
    className:
      "bg-error-container text-on-error-container border border-error/20",
  },
};

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.pending;
  return (
    <span
      className={`px-2 py-1 rounded text-[10px] font-mono-label flex items-center gap-1 ${config.className}`}
    >
      {status === "processing" || status === "pending" ? (
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      ) : null}
      {config.label.toUpperCase()}
    </span>
  );
}

// ── Processing Body ────────────────────────────────────────────────────────

function ProcessingBody() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-8 text-center bg-surface-container-low rounded-lg border border-dashed border-outline-variant mb-6">
      <div className="text-4xl text-outline-variant mb-3">✦</div>
      <p className="font-mono-label text-xs text-on-surface-variant uppercase">
        Analyzing Professional History...
      </p>
      <div className="w-32 h-1 bg-outline-variant rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-primary w-2/3" />
      </div>
    </div>
  );
}

// ── Completed Body ─────────────────────────────────────────────────────────

function CompletedBody({ parsedData, suggestion }) {
  const skills = parsedData?.skills ?? [];
  const experience = parsedData?.experience ?? [];
  const projects = parsedData?.projects ?? [];

  const visibleSkills = skills.slice(0, 4);
  const remaining = skills.length - visibleSkills.length;

  return (
    <>
      {/* Skills */}
      {visibleSkills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-surface-container text-on-surface font-mono-detail text-[11px] rounded"
            >
              {skill}
            </span>
          ))}
          {remaining > 0 && (
            <span className="px-2 py-1 bg-surface-container text-on-surface font-mono-detail text-[11px] rounded">
              +{remaining}
            </span>
          )}
        </div>
      )}

      {/* Meta */}
      <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant mb-6">
        <div>
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase">
            Experience
          </p>
          <p className="font-headline-md text-base">
            {experience.length > 0 ? `${experience.length} Roles` : "N/A"}
          </p>
        </div>
        <div>
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase">
            Projects
          </p>
          <p className="font-headline-md text-base">
            {projects.length > 0 ? `${projects.length} Tracked` : "N/A"}
          </p>
        </div>
      </div>

      {/* AI Insight */}
      {suggestion && (
        <div className="bg-surface-container-low p-3 rounded mb-6 border-l-2 border-primary">
          <p className="font-body-md text-xs italic text-on-surface-variant leading-relaxed flex gap-1.5">
            <MdBolt size={14} className="shrink-0 mt-0.5 text-primary" />
            {suggestion}
          </p>
        </div>
      )}
    </>
  );
}

// ── Failed Body ────────────────────────────────────────────────────────────

function FailedBody({ parsedData }) {
  const skills = parsedData?.skills ?? [];

  return (
    <>
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 opacity-50 grayscale">
          {skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-surface-container text-on-surface font-mono-detail text-[11px] rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant mb-6 opacity-50">
        <div>
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase">
            Experience
          </p>
          <p className="font-headline-md text-base">N/A</p>
        </div>
        <div>
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase">
            Projects
          </p>
          <p className="font-headline-md text-base">N/A</p>
        </div>
      </div>

      <div className="bg-error-container/20 p-3 rounded mb-6 border-l-2 border-error">
        <p className="font-body-md text-xs text-on-error-container leading-relaxed">
          Error: Unsupported PDF format or corrupted file metadata detected.
        </p>
      </div>
    </>
  );
}

// ── Resume Card ────────────────────────────────────────────────────────────

export default function ResumeCard({ resume }) {
  const { _id, title, processingStatus, isLatest, parsedData, createdAt } =
    resume;

  const isCompleted = processingStatus === "completed";
  const isProcessing =
    processingStatus === "processing" || processingStatus === "pending";
  const isFailed = processingStatus === "failed";

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className={`bg-surface rounded-lg p-6 flex flex-col transition-colors ${
        isLatest
          ? "border border-primary"
          : "border border-outline-variant hover:border-on-surface-variant"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4 gap-3">
        <div className="flex flex-col min-w-0">
          <span className="font-mono-label text-[10px] text-on-surface-variant mb-1 uppercase truncate">
            {isLatest ? "Latest · " : ""}
            {formattedDate}
          </span>
          <h3 className="font-headline-md text-lg text-primary truncate">
            {title}
          </h3>
        </div>
        <StatusBadge status={processingStatus} />
      </div>

      {/* Body — switches on status */}
      {isCompleted && (
        <CompletedBody parsedData={parsedData} suggestion={null} />
      )}
      {isProcessing && <ProcessingBody />}
      {isFailed && <FailedBody parsedData={parsedData} />}

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        {isCompleted && (
          <Link
            href={`/dashboard/resumes/${_id}`}
            className="flex-1 bg-primary text-on-primary py-2 rounded text-sm font-headline-md hover:opacity-90 transition-all text-center"
          >
            View Resume
          </Link>
        )}
        {isProcessing && (
          <button
            disabled
            className="flex-1 bg-surface-container-highest text-on-surface-variant py-2 rounded text-sm font-headline-md cursor-not-allowed"
          >
            Analyzing...
          </button>
        )}
        {isFailed && (
          <button className="flex-1 bg-primary text-on-primary py-2 rounded text-sm font-headline-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <MdRefresh size={16} />
            Retry Upload
          </button>
        )}
        <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low transition-colors shrink-0">
          <MdMoreVert size={20} className="text-on-surface-variant" />
        </button>
      </div>
    </div>
  );
}
