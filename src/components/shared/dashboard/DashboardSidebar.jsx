"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlineMap,
  MdOutlinePsychology,
  MdOutlineDescription,
  MdHelpOutline,
  MdLogout,
} from "react-icons/md";

const NAV_LINKS = [
  {
    href: "/dashboard",
    icon: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    href: "/dashboard/career-analysis",
    icon: MdOutlineAnalytics,
    label: "Career Analysis",
  },
  {
    href: "/dashboard/roadmaps",
    icon: MdOutlineMap,
    label: "Roadmaps",
  },
  {
    href: "/dashboard/ai-analysis",
    icon: MdOutlinePsychology,
    label: "Ai Analysis",
  },
  {
    href: "/dashboard/resumes",
    icon: MdOutlineDescription,
    label: "Resumes",
  },
];

const FOOTER_LINKS = [
  {
    href: "/help",
    icon: MdHelpOutline,
    label: "Help Center",
  },
  {
    href: "/logout",
    icon: MdLogout,
    label: "Log Out",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-outline-variant/50 bg-surface p-grid-unit">
      {/* Brand */}
      <div className="mb-8 px-4 py-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          HirePilot AI
        </h1>

        <p className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant">
          Precision AI
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1">
        {NAV_LINKS.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
              isActive(href)
                ? "bg-primary font-medium text-on-primary shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <Icon size={24} />

            <span className="font-mono-label text-mono-label uppercase tracking-widest">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto space-y-1 border-t border-outline-variant/30 pt-4">
        {FOOTER_LINKS.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant transition-colors hover:text-primary"
          >
            <Icon size={24} />

            <span className="font-mono-label text-mono-label uppercase tracking-widest">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
