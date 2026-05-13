function ShimmerCard() {
  return (
    <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div className="space-y-2 flex-1">
          <div className="shimmer h-2.5 w-24 rounded" />
          <div className="shimmer h-5 w-3/4 rounded" />
        </div>
        <div className="shimmer h-6 w-20 rounded" />
      </div>

      {/* Skills */}
      <div className="flex gap-2">
        <div className="shimmer h-6 w-14 rounded" />
        <div className="shimmer h-6 w-16 rounded" />
        <div className="shimmer h-6 w-12 rounded" />
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant">
        <div className="space-y-1.5">
          <div className="shimmer h-2.5 w-16 rounded" />
          <div className="shimmer h-5 w-12 rounded" />
        </div>
        <div className="space-y-1.5">
          <div className="shimmer h-2.5 w-16 rounded" />
          <div className="shimmer h-5 w-12 rounded" />
        </div>
      </div>

      {/* Insight */}
      <div className="shimmer h-12 w-full rounded" />

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <div className="shimmer h-9 flex-1 rounded" />
        <div className="shimmer h-9 w-9 rounded" />
      </div>
    </div>
  );
}

export function ResumesShimmerGrid({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </>
  );
}
