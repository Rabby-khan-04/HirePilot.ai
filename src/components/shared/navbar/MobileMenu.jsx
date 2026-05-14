import Link from "next/link";
import { LuX } from "react-icons/lu";
import { NAV_LINKS } from "@/data/navbarData";

export default function MobileMenu({ open, onClose, isAuthenticated }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-inverse-surface/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer — slides in from right on tablet, full screen on mobile */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-surface border-l border-outline-variant flex flex-col transition-transform duration-300 ease-in-out md:hidden
          w-full sm:w-80 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
            HirePilot AI
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <LuX size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col p-6 gap-1 grow">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary hover:bg-surface-container px-4 py-3 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth actions */}
        <div className="p-6 border-t border-outline-variant flex flex-col gap-3">
          {isAuthenticated ? (
            <Link
              href="/dashboard/overview"
              onClick={onClose}
              className="w-full text-center bg-primary text-on-primary font-mono-label text-mono-label px-6 py-3 hover:opacity-90 transition-all"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                onClick={onClose}
                className="w-full text-center border border-outline-variant text-on-surface-variant font-mono-label text-mono-label px-6 py-3 hover:bg-surface-container transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="w-full text-center bg-primary text-on-primary font-mono-label text-mono-label px-6 py-3 hover:opacity-90 transition-all"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
