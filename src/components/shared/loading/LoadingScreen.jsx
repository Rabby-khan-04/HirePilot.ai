"use client";

import { GrCodeSandbox } from "react-icons/gr";

export default function LoadingScreen() {
  return (
    <div className="absolute h-screen w-full overflow-hidden bg-surface font-body-md text-on-background z-99999999">
      {/* Underlying Dashboard (Blurred) */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[linear-gradient(var(--color-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid-line)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="flex flex-col h-screen w-full blur-sm select-none grayscale">
        {/* TopNavBar Placeholder */}
        <header className="flex justify-between items-center w-full px-margin-page py-grid-unit border-b border-outline-variant">
          <span className="font-headline-md font-black tracking-tighter text-primary">
            HIREPILOT AI
          </span>
          <div className="flex gap-gutter items-center">
            <span className="text-secondary font-medium">Dashboard</span>
            <span className="text-secondary font-medium">Analytics</span>
            <div className="w-8 h-8 rounded-full bg-surface-container-highest" />
          </div>
        </header>

        {/* Bento Grid Mockup */}
        <main className="grow p-margin-page grid grid-cols-12 gap-gutter">
          <div className="col-span-8 h-64 border border-outline-variant rounded-lg" />
          <div className="col-span-4 h-64 border border-outline-variant rounded-lg" />
          <div className="col-span-4 h-96 border border-outline-variant rounded-lg" />
          <div className="col-span-8 h-96 border border-outline-variant rounded-lg" />
        </main>
      </div>

      {/* Fullscreen Loading Overlay */}
      <div className="fixed inset-0 z-50 bg-[#111111]/95 flex items-center justify-center backdrop-blur-sm">
        <div className="max-w-md w-full flex flex-col items-center text-center">
          {/* Spinner */}
          <div className="relative flex items-center justify-center mb-12">
            {/* Inner Glow */}
            <div className="absolute w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse" />

            {/* Rotating Ring */}
            <div className="w-16 h-16 rounded-[50%] border-4 border-t-on-primary border-r-white/20 border-b-white/5 border-l-white/40 animate-spin" />

            {/* Center Icon */}
            <div className="absolute w-8 h-8 flex items-center justify-center ">
              <GrCodeSandbox size={36} className="text-surface" />
            </div>
          </div>

          {/* Label */}
          <p className="font-mono-detail text-white/40 uppercase tracking-[0.2em]">
            HIREPILOT AI ENGINE V4.0
          </p>
        </div>
      </div>

      {/* Grid texture over overlay */}
      <div className="fixed inset-0 pointer-events-none z-51 opacity-[0.03] mix-blend-overlay bg-[linear-gradient(var(--color-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid-line)_1px,transparent_1px)] bg-size-[40px_40px]" />
    </div>
  );
}
