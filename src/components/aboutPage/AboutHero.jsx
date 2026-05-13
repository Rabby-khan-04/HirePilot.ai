"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative px-margin-page py-section-padding flex flex-col items-center text-center">
      <div className="max-w-4xl space-y-6">
        <span className="font-mono-label text-mono-label px-3 py-1 bg-surface-container-high rounded text-primary border border-outline-variant/50">
          PLATFORM ARCHITECTURE V2.0
        </span>
        <h1 className="font-display-xl text-display-xl gradient-text">
          Build Your Career With AI Guidance
        </h1>
        <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl mx-auto">
          HirePilot AI helps developers optimize resumes, identify skill gaps,
          prepare for interviews, and follow structured learning roadmaps
          tailored to real job opportunities.
        </p>
        <p className="font-body-md text-body-md text-on-primary-container max-w-xl mx-auto">
          From resume analysis to interview preparation, HirePilot AI transforms
          scattered career preparation into one focused AI-powered workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/register"
            className="bg-primary text-on-primary font-body-md text-body-md px-8 py-4 rounded-lg shadow-xl hover:opacity-90 transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/dashboard/analyses/new"
            className="border border-primary text-primary font-body-md text-body-md px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all"
          >
            Try AI Analysis
          </Link>
        </div>
      </div>
    </section>
  );
}
