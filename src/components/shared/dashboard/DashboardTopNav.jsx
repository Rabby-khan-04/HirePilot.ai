"use client";

import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import {
  IoIosSearch,
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from "react-icons/io";

export default function DashboardTopNav() {
  const user = useUserStore((s) => s.user);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-margin-page h-16 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-6">
        <span className="font-headline-md text-headline-md font-semibold tracking-tight text-primary">
          HirePilot AI
        </span>
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
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors">
          <IoMdNotificationsOutline size={24} />
        </button>
        <button className="text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors">
          <IoIosHelpCircleOutline size={24} />
        </button>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all">
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
          <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
              {user?.name?.[0] ?? "U"}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
