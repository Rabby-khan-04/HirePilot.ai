"use client";

import { useState } from "react";
import { MdDownload, MdDriveFileRenameOutline, MdDelete } from "react-icons/md";

import { LuMenu } from "react-icons/lu";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ThemeToggle from "@/components/shared/theme/ThemeToggle";
import { MobileSidebarContent } from "@/components/shared/dashboard/MobileSidebarContent";

const STATUS_CONFIG = {
  completed: { label: "Completed", dot: "bg-success" },
  processing: { label: "Processing", dot: "bg-primary animate-pulse" },
  pending: { label: "Pending", dot: "bg-outline-variant animate-pulse" },
  failed: { label: "Failed", dot: "bg-error" },
};

export default function ResumeDetailHeader({ resume }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { title, processingStatus, createdAt } = resume;
  const status = STATUS_CONFIG[processingStatus] ?? STATUS_CONFIG.pending;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-sm border-b border-outline-variant/30">
      {/* Mobile nav bar — hidden on lg+ where desktop sidebar takes over */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-outline-variant/20 lg:hidden">
        <button
          onClick={() => setSheetOpen(true)}
          aria-label="Open menu"
          className="p-2 -ml-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <LuMenu size={22} />
        </button>
        <ThemeToggle />
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="left"
          className="w-64 border-r border-outline-variant/50 bg-surface p-4"
        >
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <MobileSidebarContent onNavigate={() => setSheetOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 md:px-gutter py-3 md:py-4">
        {/* Left: title + meta */}
        <div className="flex flex-col min-w-0">
          <h2 className="font-headline-md text-lg md:text-xl font-bold text-primary truncate">
            {title}
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
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
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button className="hidden sm:flex px-3 md:px-4 py-2 border border-outline-variant text-primary rounded-lg hover:bg-surface-container transition-colors font-mono-label text-[11px] uppercase tracking-widest items-center gap-2">
            <MdDownload size={16} />
            Download
          </button>
          {/* Download icon-only on mobile */}
          <button className="sm:hidden p-2 text-on-surface-variant hover:text-primary transition-colors">
            <MdDownload size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <MdDriveFileRenameOutline size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
            <MdDelete size={20} />
          </button>
          <button className="ml-1 md:ml-2 bg-primary text-on-primary px-4 md:px-6 py-2 rounded-lg font-mono-label text-[11px] uppercase tracking-widest hover:bg-primary/90 transition-colors whitespace-nowrap">
            Analyze
            <span className="hidden md:inline"> Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}
