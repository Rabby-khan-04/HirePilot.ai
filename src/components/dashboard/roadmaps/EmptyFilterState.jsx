import { MdFilterAltOff } from "react-icons/md";

export function EmptyFilterState({ onReset }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdFilterAltOff size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant text-center">
        No roadmaps match these filters
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Adjust your filters or reset them to see all roadmaps
      </p>
      <button
        onClick={onReset}
        className="mt-2 flex items-center gap-2 px-5 py-2.5 border border-outline-variant rounded-lg font-mono-label text-[11px] uppercase tracking-widest hover:border-on-background transition-colors"
      >
        <MdFilterAltOff size={14} />
        Clear filters
      </button>
    </div>
  );
}
