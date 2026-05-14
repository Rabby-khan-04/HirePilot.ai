"use client";

import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import {
  IoIosSearch,
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from "react-icons/io";

import { LuMenu } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "../theme/ThemeToggle";
import { MobileSidebarContent } from "./MobileSidebarContent";
import Link from "next/link";

export default function DashboardTopNav() {
  const user = useUserStore((s) => s.user);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-margin-page h-16 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Mobile hamburger — only visible below lg where desktop sidebar is hidden */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 -ml-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <LuMenu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 border-r border-outline-variant/50 bg-surface p-4"
          >
            <MobileSidebarContent onNavigate={() => setSheetOpen(false)} />
          </SheetContent>
        </Sheet>

        <Link
          href="/"
          className="font-headline-md text-headline-md font-semibold tracking-tight text-primary"
        >
          HirePilot AI
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-surface-container rounded-full px-3 py-1">
          <IoIosSearch size={18} className="text-on-surface-variant" />
          <input
            className="bg-transparent border-none focus:ring-0 text-body-md h-6 w-48 outline-none"
            placeholder="Quick find..."
            type="text"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1 md:gap-4">
        <button className="text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors">
          <IoMdNotificationsOutline size={22} />
        </button>
        <button className="hidden sm:flex text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors">
          <IoIosHelpCircleOutline size={22} />
        </button>
        <ThemeToggle />
        <button className="hidden sm:block bg-primary text-on-primary px-4 md:px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all text-sm">
          Upgrade
        </button>
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover border border-outline-variant"
            width={32}
            height={32}
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center shrink-0">
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
              {user?.name?.[0] ?? "U"}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
