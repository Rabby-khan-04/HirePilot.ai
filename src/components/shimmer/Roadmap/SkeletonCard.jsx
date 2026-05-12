export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-outline-variant/30 p-6 flex flex-col gap-4 overflow-hidden">
      {/* header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2 flex-1">
          <div className="shimmer h-4 w-3/4 rounded" />
          <div className="shimmer h-3 w-1/2 rounded" />
        </div>
        <div className="shimmer h-8 w-16 rounded-full" />
      </div>

      {/* progress bar */}
      <div className="flex flex-col gap-1.5">
        <div className="shimmer h-2 w-full rounded-full" />
        <div className="flex justify-between">
          <div className="shimmer h-2.5 w-16 rounded" />
          <div className="shimmer h-2.5 w-10 rounded" />
        </div>
      </div>

      {/* skills */}
      <div className="flex gap-2 flex-wrap">
        {[40, 56, 48].map((w) => (
          <div
            key={w}
            className={`shimmer h-5 rounded-full`}
            style={{ width: w }}
          />
        ))}
      </div>

      {/* footer */}
      <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between">
        <div className="shimmer h-3 w-24 rounded" />
        <div className="shimmer h-3 w-16 rounded" />
      </div>
    </div>
  );
}
