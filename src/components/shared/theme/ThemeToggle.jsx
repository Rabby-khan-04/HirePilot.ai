"use client";

import { useThemeStore } from "@/store/theme";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, toggle } = useThemeStore();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 text-on-surface-variant hover:text-primary transition-colors"
    >
      {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  );
}
