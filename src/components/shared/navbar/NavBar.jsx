"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { NAV_LINKS } from "@/data/navbarData";
import ProfileDropdown from "./ProfileDropdown";
import MobileMenu from "./MobileMenu";
import { useUserStore } from "@/store/userStore";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isLoading, isAuthenticated } = useUserStore();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-margin-page py-4">
          {/* Brand */}
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold tracking-tight text-primary"
          >
            HirePilot AI
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-gutter items-center">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <ProfileDropdown user={user} />
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary px-4 py-2 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-primary text-on-primary font-mono-label text-mono-label px-6 py-2.5 hover:opacity-90 active:scale-95 transition-all"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <LuMenu size={22} />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
}
