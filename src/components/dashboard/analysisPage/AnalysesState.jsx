import {
  MdSearchOff,
  MdFilterAltOff,
  MdOutlineAnalytics,
} from "react-icons/md";

export function EmptySearchState({ search }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdSearchOff size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-2xl font-semibold text-on-surface-variant text-center">
        No analyses found for &quot;{search}&quot;
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Try a different search term or clear the filters
      </p>
    </div>
  );
}

export function EmptyFilterState({ onReset }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdFilterAltOff size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-2xl font-semibold text-on-surface-variant text-center">
        No analyses match these filters
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Adjust your filters or reset them to see all analyses
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

export function EmptyAnalysesState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdOutlineAnalytics size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-2xl font-semibold text-on-surface-variant text-center">
        No analyses yet
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Run your first AI analysis to see how well your resume matches a job
        profile
      </p>
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center">
        <MdOutlineAnalytics size={32} className="text-error" />
      </div>
      <p className="font-headline-md text-2xl font-semibold text-on-surface-variant text-center">
        Something went wrong
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Failed to load analyses. Please refresh and try again.
      </p>
    </div>
  );
}
