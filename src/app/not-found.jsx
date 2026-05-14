// app/not-found.tsx  (Next.js 13+ App Router)
// OR pages/404.tsx   (Pages Router)

import Link from "next/link";
import {
  MdDashboard,
  MdUploadFile,
  MdAnalytics,
  MdAutoStories,
} from "react-icons/md";

export default function NotFound() {
  return (
    <main className="relative min-h-screen pt-32 pb-section-padding flex flex-col items-center justify-center overflow-x-hidden">
      {/* Visual Background Layer */}
      <div className="absolute inset-0 grid-overlay -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      {/* 404 Hero Section */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* 404 Heading */}
        <div className="relative inline-block mb-8">
          <h1 className="font-display-xl text-display-xl text-gradient opacity-80 pointer-events-none select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10" />
        </div>

        {/* Subtitle */}
        <div className="space-y-4 mb-12">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
            This Page Couldn&apos;t Be Found
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
            The page you&apos;re looking for may have been moved, deleted, or
            never existed. Let&apos;s get you back to your career dashboard.
          </p>
        </div>

        {/* AI Orbital Graphic */}
        <div className="relative w-full h-40 mb-16 flex items-center justify-center">
          <div className="absolute w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
          <div className="absolute w-48 h-48 border border-primary/5 rounded-full" />
          <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent rotate-45" />
          <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent -rotate-45" />
        </div>

        {/* Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Link
            href="/dashboard/overview"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-body-md text-body-md font-semibold rounded-lg hover:bg-primary/80 transition-colors active:scale-95 text-center"
          >
            Go To Dashboard
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 border border-on-surface/20 text-on-surface font-body-md text-body-md font-semibold rounded-lg hover:bg-on-surface/5 transition-colors active:scale-95 text-center"
          >
            Back To Home
          </Link>
          <Link
            href="/dashboard/ai-analysis"
            className="w-full sm:w-auto px-8 py-4 text-on-surface-variant hover:text-primary font-mono-label text-mono-label transition-colors text-center underline underline-offset-4"
          >
            View Analyses
          </Link>
        </div>

        {/* Popular Destinations */}
        <div className="w-full max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px grow bg-primary/10" />
            <h3 className="font-mono-label text-mono-label uppercase tracking-[0.2em] text-on-primary-container/40">
              Popular Destinations
            </h3>
            <span className="h-px grow bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {navCards.map(({ href, icon: Icon, title, description }) => (
              <Link
                key={href}
                href={href}
                className="glass-card p-6 rounded-xl hover:bg-surface/5 transition-all group flex flex-col items-start gap-4"
              >
                <Icon className="text-2xl text-on-surface-variant group-hover:text-primary transition-colors" />
                <div>
                  <div className="font-body-md text-body-md font-semibold text-on-surface">
                    {title}
                  </div>
                  <div className="font-mono-detail text-mono-detail text-on-surface-variant">
                    {description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const navCards = [
  {
    href: "/dashboard/overview",
    icon: MdDashboard,
    title: "Dashboard",
    description: "Your career overview.",
  },
  {
    href: "/dashboard/career-analysis",
    icon: MdUploadFile,
    title: "Resume Upload",
    description: "Analyze your profile.",
  },
  {
    href: "/dashboard/ai-analysis",
    icon: MdAnalytics,
    title: "AI Analyses",
    description: "Smart talent matching.",
  },
  {
    href: "/dashboard/roadmaps",
    icon: MdAutoStories,
    title: "Roadmaps",
    description: "Skill development.",
  },
];
