import Link from "next/link";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function ProfileNavItems({ items }) {
  return (
    <div className="p-1.5">
      {items.map(({ label, href, icon: Icon }) => (
        <DropdownMenuItem
          key={label}
          asChild
          className="cursor-pointer rounded-lg px-3 py-2.5 gap-3 text-on-surface-variant hover:text-on-surface focus:text-on-surface hover:bg-surface-container focus:bg-surface-container group"
        >
          <Link href={href}>
            <Icon
              size={16}
              className="text-on-surface-variant/50 group-hover:text-on-surface transition-colors"
            />
            <span className="font-mono-label text-mono-label">{label}</span>
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );
}
