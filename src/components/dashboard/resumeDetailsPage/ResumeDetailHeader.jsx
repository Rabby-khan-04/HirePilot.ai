"use client";

import { MdDownload, MdDriveFileRenameOutline, MdDelete } from "react-icons/md";

const STATUS_CONFIG = {
  completed: {
    label: "Completed",
    dot: "bg-success",
  },
  processing: {
    label: "Processing",
    dot: "bg-primary animate-pulse",
  },
  pending: {
    label: "Pending",
    dot: "bg-outline-variant animate-pulse",
  },
  failed: {
    label: "Failed",
    dot: "bg-error",
  },
};

export default function ResumeDetailHeader({ resume }) {
  const { title, processingStatus, createdAt } = resume;

  const status = STATUS_CONFIG[processingStatus] ?? STATUS_CONFIG.pending;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-40 bg-surface/80 backdrop-blur-sm border-b border-outline-variant/30">
      {/* Left: title + meta */}
      <div className="flex flex-col min-w-0">
        <h2 className="font-headline-md text-xl font-bold text-primary truncate">
          {title}
        </h2>
        <div className="flex items-center gap-2">
          <span className="font-mono-detail text-xs text-on-surface-variant">
            Uploaded: {formattedDate}
          </span>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <span className="font-mono-label text-[10px] text-on-surface-variant flex items-center gap-1 uppercase">
            <span className={`w-2 h-2 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg hover:bg-surface-container transition-colors font-mono-label text-[11px] uppercase tracking-widest flex items-center gap-2">
          <MdDownload size={16} />
          Download
        </button>
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <MdDriveFileRenameOutline size={20} />
        </button>
        <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
          <MdDelete size={20} />
        </button>
        <button className="ml-2 bg-primary text-on-primary px-6 py-2 rounded-lg font-mono-label text-[11px] uppercase tracking-widest hover:bg-primary/90 transition-colors">
          Analyze Resume
        </button>
      </div>
    </header>
  );
}
