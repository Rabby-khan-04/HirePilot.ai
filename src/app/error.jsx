"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MdRefresh, MdHome, MdShield } from "react-icons/md";
import BlueprintImg from "@/../public/assets/image/blueprint.png";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-primary text-on-primary min-h-screen flex flex-col font-body-md overflow-hidden relative">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 grid-overlay" />

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-150 h-150 bg-on-primary-container glow-sphere rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-secondary glow-sphere rounded-full" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-margin-page h-16 flex items-center justify-between pointer-events-none">
        <div className="font-headline-md text-headline-md font-bold tracking-tighter text-on-primary pointer-events-auto">
          HirePilot AI
        </div>
      </header>

      {/* Main */}
      <main className="grow flex flex-col items-center justify-center relative z-10 px-gutter">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Content */}
          <div className="md:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono-label text-mono-label text-on-primary-container uppercase tracking-widest border-l-2 border-on-primary-container pl-4">
                Critical Application Error
              </span>
              <h1 className="font-display-xl text-headline-lg md:text-display-xl leading-tight text-on-primary">
                The Application Encountered A Problem
              </h1>
            </div>

            <div className="flex flex-col gap-4 max-w-xl">
              <p className="font-body-md text-body-md text-on-primary-container">
                Something went wrong while loading HirePilot AI. Please refresh
                the page or return later.
              </p>
              <div className="flex items-center gap-3 py-2 px-4 bg-on-primary/5 border border-on-primary/10 rounded-lg w-fit">
                <MdShield className="text-on-primary-container text-lg" />
                <span className="font-mono-detail text-mono-detail text-on-primary/80">
                  Your data remains safe and unaffected.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={reset}
                className="bg-on-primary text-primary px-8 py-4 rounded-lg font-headline-md text-body-md font-bold flex items-center gap-3 hover:bg-surface-variant transition-all active:scale-95"
              >
                <MdRefresh className="text-xl" />
                Reload Application
              </button>
              <Link
                href="/"
                className="border border-on-primary/20 text-on-primary px-8 py-4 rounded-lg font-headline-md text-body-md font-semibold flex items-center gap-3 hover:bg-on-primary/10 transition-all active:scale-95"
              >
                <MdHome className="text-xl" />
                Return Home
              </Link>
            </div>
          </div>

          {/* Visual Asset */}
          <div className="hidden md:flex md:col-span-4 justify-end relative h-full items-center">
            <div className="relative w-full aspect-square border border-on-primary/10 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-on-primary/10 to-transparent" />
              <Image
                src={BlueprintImg}
                alt="System Blueprint Architecture"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 font-mono-label text-[10px] text-on-primary/30 uppercase">
                System_State: Critical_Interrupt
              </div>
              <div className="absolute bottom-4 right-4 font-mono-label text-[10px] text-on-primary/30 uppercase">
                Err_Code: 0x55F2A_BLUEPRINT
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-on-primary/20 rounded-full animate-ping opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-margin-page flex flex-col md:flex-row justify-between items-center border-t border-on-primary/10 relative z-10">
        <div className="font-mono-detail text-mono-detail text-on-primary-container">
          © 2024 HirePilot AI. Engineered for Success.
        </div>
        <div className="flex gap-gutter mt-4 md:mt-0 font-mono-detail text-mono-detail text-on-primary/40">
          <Link
            href="/support"
            className="hover:text-on-primary transition-colors"
          >
            Support
          </Link>
          <Link
            href="/status"
            className="hover:text-on-primary transition-colors"
          >
            System Status
          </Link>
          <Link
            href="/security"
            className="hover:text-on-primary transition-colors"
          >
            Security Protocol
          </Link>
        </div>
      </footer>

      {/* Structural Grid Lines */}
      <div className="fixed top-0 bottom-0 left-16 w-px bg-on-primary/5 pointer-events-none hidden lg:block" />
      <div className="fixed top-0 bottom-0 right-16 w-px bg-on-primary/5 pointer-events-none hidden lg:block" />
      <div className="fixed top-0 bottom-0 left-1/2 w-px bg-on-primary/5 pointer-events-none hidden lg:block" />
    </div>
  );
}
