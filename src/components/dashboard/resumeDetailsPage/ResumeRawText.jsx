"use client";

import { useState } from "react";
import { MdSubject, MdExpandMore, MdExpandLess } from "react-icons/md";

export default function ResumeRawText({ rawText }) {
  const [open, setOpen] = useState(false);

  if (!rawText) return null;

  return (
    <section className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-low">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center px-6 py-4 hover:bg-surface-container-high transition-colors"
      >
        <div className="flex items-center gap-3">
          <MdSubject size={20} className="text-on-surface-variant" />
          <span className="font-body-md font-bold">
            View Extracted Resume Text
          </span>
        </div>
        {open ? (
          <MdExpandLess size={20} className="text-on-surface-variant" />
        ) : (
          <MdExpandMore size={20} className="text-on-surface-variant" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-outline-variant/30">
          <pre className="mt-4 font-mono-detail text-xs text-on-surface-variant leading-relaxed whitespace-pre-wrap wrap-break-word max-h-125 overflow-y-auto">
            {rawText}
          </pre>
        </div>
      )}
    </section>
  );
}
