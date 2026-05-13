"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlineMap,
  MdOutlinePsychology,
  MdOutlineDescription,
  MdHelpOutline,
  MdLogout,
} from "react-icons/md";
import { TbHomeShare } from "react-icons/tb";
import { logout } from "@/services/auth.service";

const NAV_LINKS = [
  { href: "/dashboard/overview", icon: MdOutlineDashboard, label: "Dashboard" },
  {
    href: "/dashboard/career-analysis",
    icon: MdOutlineAnalytics,
    label: "Career Analysis",
  },
  { href: "/dashboard/roadmaps", icon: MdOutlineMap, label: "Roadmaps" },
  {
    href: "/dashboard/ai-analysis",
    icon: MdOutlinePsychology,
    label: "Ai Analysis",
  },
  { href: "/dashboard/resumes", icon: MdOutlineDescription, label: "Resumes" },
  { href: "/", icon: TbHomeShare, label: "Back To Home" },
];

export function MobileSidebarContent({ onNavigate }) {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/dashboard"
      ? pathname === href
      : pathname.startsWith(href) && href !== "/";

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="mb-8 px-4 py-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          <Link href="/">HirePilot AI</Link>
        </h1>
        <p className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant">
          Precision AI
        </p>
      </div>

      {/* Nav links */}
      <div className="flex-1 space-y-1">
        {NAV_LINKS.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
              isActive(href)
                ? "bg-primary font-medium text-on-primary shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <Icon size={20} />
            <span className="font-mono-label text-mono-label uppercase tracking-widest">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer actions */}
      <div className="mt-auto space-y-1 border-t border-outline-variant/30 pt-4">
        <Link
          href="/help"
          onClick={onNavigate}
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant transition-colors hover:text-primary"
        >
          <MdHelpOutline size={20} />
          <span className="font-mono-label text-mono-label uppercase tracking-widest">
            Help
          </span>
        </Link>

        <button
          onClick={async () => {
            await logout();
            onNavigate?.();
          }}
          className="flex w-full items-center gap-3 px-4 py-3 text-on-surface-variant transition-colors hover:text-primary"
        >
          <MdLogout size={20} />
          <span className="font-mono-label text-mono-label uppercase tracking-widest">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
