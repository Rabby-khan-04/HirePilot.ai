import { MdSearchOff } from "react-icons/md";

export function EmptySearchState({ search }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdSearchOff size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant text-center">
        No roadmaps found for &quot;{search}&quot;
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Try a different search term or clear the filters
      </p>
    </div>
  );
}
