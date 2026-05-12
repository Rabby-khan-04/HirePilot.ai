import { MdOutlineMap } from "react-icons/md";

export function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
      <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center">
        <MdOutlineMap size={32} className="text-error" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant">
        Failed to load roadmap
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60">
        Please try refreshing the page.
      </p>
    </div>
  );
}
