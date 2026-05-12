import { MdOutlineMap } from "react-icons/md";

export function ErrorState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center">
        <MdOutlineMap size={32} className="text-error" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant text-center">
        Something went wrong
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Failed to load your roadmaps. Please try again.
      </p>
    </div>
  );
}
