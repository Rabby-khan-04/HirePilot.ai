import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const PROFILE_MENU_ITEMS = [
  { label: "Dashboard", href: "/dashboard/overview", icon: LuLayoutDashboard },
];

export const PROFILE_LOGOUT = { label: "Logout", icon: LuLogOut };
