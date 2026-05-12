"use client";

import Link from "next/link";
import { MdAdd } from "react-icons/md";

export default function CreateRoadmapCard() {
  return (
    <Link
      href="/dashboard/career-analysis"
      className="bg-transparent border border-dashed border-outline-variant/60 rounded-lg p-6 flex flex-col items-center justify-center group cursor-pointer hover:border-on-background transition-colors min-h-[320px] md:min-h-[380px]"
    >
      <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <MdAdd size={24} className="text-on-surface-variant" />
      </div>
      <p className="font-mono-label text-[12px] uppercase tracking-widest text-on-surface-variant">
        Generate New Roadmap
      </p>
    </Link>
  );
}
