import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PROFILE_LOGOUT } from "@/data/navbarData";

export default function ProfileLogout({ onLogout }) {
  const { label, icon: Icon } = PROFILE_LOGOUT;

  return (
    <div className="p-1.5">
      <DropdownMenuItem
        onClick={onLogout}
        className="cursor-pointer rounded-lg px-3 py-2.5 gap-3 text-on-surface-variant hover:text-error focus:text-error hover:bg-error/5 focus:bg-error/5 group"
      >
        <Icon
          size={16}
          className="text-on-surface-variant/50 group-hover:text-error transition-colors"
        />
        <span className="font-mono-label text-mono-label">{label}</span>
      </DropdownMenuItem>
    </div>
  );
}
