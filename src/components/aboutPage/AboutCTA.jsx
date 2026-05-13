"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="px-margin-page py-section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="text-center space-y-10 border border-primary/10 p-16 rounded-3xl bg-surface/50 backdrop-blur-sm">
        <h2 className="font-display-xl text-display-xl">
          Start Improving Your Career With AI
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/register"
            className="bg-primary text-on-primary font-mono text-body-md px-12 py-5 rounded-lg active:scale-95 transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/dashboard/analyses/new"
            className="border border-outline text-on-surface font-monofea text-body-md px-12 py-5 rounded-lg hover:bg-surface-container-high transition-all"
          >
            Try AI Analysis
          </Link>
        </div>
        <p className="font-mono-detail text-mono-detail text-on-surface-variant">
          Join 50,000+ developers accelerating their career growth.
        </p>
      </div>
    </section>
  );
}
