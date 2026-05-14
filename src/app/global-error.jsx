"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdRefresh, MdDashboard, MdErrorOutline } from "react-icons/md";

export default function GlobalError({ error, reset }) {
  const [sessionId] = useState(
    () =>
      Math.random().toString(36).slice(2, 8).toUpperCase() +
      "-XQ-" +
      Math.floor(Math.random() * 999),
  );

  return (
    <html lang="en">
      <head>
        <title>Critical Error — HirePilot AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { background-color: #111111; color: #ffffff; -webkit-font-smoothing: antialiased; overflow: hidden; }
          .grid-texture {
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .radial-glow {
            background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
          }
        `}</style>
      </head>
      <body>
        <main className="relative min-h-screen w-full flex items-center justify-center p-6">
          {/* Background Layers */}
          <div className="absolute inset-0 grid-texture pointer-events-none" />
          <div className="absolute inset-0 radial-glow pointer-events-none" />

          {/* Layout Grid Guidelines */}
          <div className="absolute inset-x-0 h-px bg-white/5 top-1/4" />
          <div className="absolute inset-x-0 h-px bg-white/5 bottom-1/4" />
          <div className="absolute inset-y-0 w-px bg-white/5 left-1/4" />
          <div className="absolute inset-y-0 w-px bg-white/5 right-1/4" />

          {/* Content Canvas */}
          <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
            {/* Abstract AI Visual */}
            <div className="mb-12 relative w-64 h-64 flex items-center justify-center">
              <svg
                className="opacity-40"
                fill="none"
                height="240"
                width="240"
                viewBox="0 0 240 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-20"
                  cx="120"
                  cy="120"
                  r="80"
                  stroke="white"
                  strokeDasharray="4 4"
                  strokeWidth="0.5"
                />
                <circle
                  className="opacity-10"
                  cx="120"
                  cy="120"
                  r="40"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle cx="60" cy="80" fill="white" r="3" />
                <circle cx="180" cy="60" fill="white" r="2" />
                <circle
                  className="opacity-50"
                  cx="140"
                  cy="190"
                  fill="white"
                  r="4"
                />
                <circle
                  className="opacity-30"
                  cx="40"
                  cy="160"
                  fill="white"
                  r="2"
                />
                <line
                  className="opacity-20"
                  stroke="white"
                  strokeDasharray="2 2"
                  strokeWidth="0.5"
                  x1="60"
                  y1="80"
                  x2="100"
                  y2="100"
                />
                <line
                  className="opacity-20"
                  stroke="white"
                  strokeDasharray="2 2"
                  strokeWidth="0.5"
                  x1="180"
                  y1="60"
                  x2="140"
                  y2="110"
                />
                <circle cx="120" cy="120" fill="url(#coreGlow)" r="20" />
                <defs>
                  <radialGradient
                    id="coreGlow"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="translate(120 120) rotate(90) scale(20)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.3" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <MdErrorOutline className="text-white/40 text-5xl" />
              </div>
            </div>

            {/* Error Messaging */}
            <div className="space-y-4 mb-10">
              <p className="text-xs text-white/40 tracking-[0.2em] uppercase font-mono">
                Something Went Wrong
              </p>
              <h1 className="text-3xl font-semibold text-white tracking-tight">
                {error.message || "We Hit An Unexpected Error"}
              </h1>
              <p className="text-base text-white/50 max-w-md mx-auto leading-relaxed">
                A critical error occurred in the application. Please try again
                or return to the dashboard.
              </p>
            </div>

            {/* Action Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={reset}
                className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MdRefresh className="text-xl" />
                Try Again
              </button>
              <Link
                href="/dashboard/overview"
                className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MdDashboard className="text-xl" />
                Go To Dashboard
              </Link>
            </div>

            {/* Dynamic Error Meta */}
            <div className="mt-20 pt-8 border-t border-white/5 w-full flex justify-between items-center opacity-30">
              <p className="text-xs font-mono text-white">
                ERROR_CODE: {errorCode}
              </p>
              <p className="text-xs font-mono text-white">
                SESSION: {sessionId}
              </p>
            </div>
          </div>

          {/* Sidebar Accents */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 h-48 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 h-48 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full py-6 px-16 flex justify-between items-center pointer-events-none opacity-20">
          <p className="text-xs font-mono text-white">
            © {new Date().getFullYear()} HirePilot AI
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-mono text-white">Privacy</span>
            <span className="text-xs font-mono text-white">Terms</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
