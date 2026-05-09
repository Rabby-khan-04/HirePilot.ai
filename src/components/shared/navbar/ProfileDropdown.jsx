"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuUser } from "react-icons/lu";
import { PROFILE_MENU_ITEMS, PROFILE_LOGOUT } from "@/data/navbarData";
import ProfileAvatar from "./ProfileAvatar";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileNavItems from "./ProfileNavItems";
import ProfileLogout from "./ProfileLogout";
import Image from "next/image";
import { logout } from "@/services/auth.service";

export default function ProfileDropdown({ user }) {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user?.avatar ? (
          <Image
            src={user?.avatar}
            width={40}
            height={40}
            className="object-cover p-0.5 rounded-full bg-linear-to-tr from-primary to-outline-variant hover:scale-105 transition-transform focus:outline-none"
            alt={user?.name}
          />
        ) : (
          <ProfileAvatar />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-64 p-0 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden"
      >
        <DropdownMenuLabel className="p-0">
          <ProfileUserInfo name={user.name} role={user.role} />
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-outline-variant/30 my-0" />

        <ProfileNavItems items={PROFILE_MENU_ITEMS} />

        <DropdownMenuSeparator className="bg-outline-variant/30 my-0" />

        <ProfileLogout onLogout={handleLogout} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
