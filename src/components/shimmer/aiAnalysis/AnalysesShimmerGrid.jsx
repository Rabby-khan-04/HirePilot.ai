function ShimmerCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-6 flex flex-col animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2 flex-1 pr-4">
          <div className="h-3 bg-surface-container-high rounded w-3/4" />
          <div className="h-5 bg-surface-container-high rounded w-1/2" />
        </div>
        <div className="w-16 h-16 rounded-full bg-surface-container-high shrink-0" />
      </div>

      {/* Badge */}
      <div className="h-5 bg-surface-container-high rounded w-2/5 mb-6" />

      {/* Matched skills */}
      <div className="space-y-2 mb-4">
        <div className="h-2.5 bg-surface-container-high rounded w-1/4" />
        <div className="flex gap-1.5">
          <div className="h-5 bg-surface-container-high rounded w-14" />
          <div className="h-5 bg-surface-container-high rounded w-16" />
          <div className="h-5 bg-surface-container-high rounded w-12" />
        </div>
      </div>

      {/* Skill gaps */}
      <div className="space-y-2 mb-4">
        <div className="h-2.5 bg-surface-container-high rounded w-1/4" />
        <div className="flex gap-1.5">
          <div className="h-5 bg-surface-container-high rounded w-20" />
          <div className="h-5 bg-surface-container-high rounded w-16" />
        </div>
      </div>

      {/* Suggestion */}
      <div className="h-14 bg-surface-container-high rounded mt-auto" />

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-outline-variant/30 flex justify-between">
        <div className="h-3 bg-surface-container-high rounded w-24" />
        <div className="h-3 bg-surface-container-high rounded w-20" />
      </div>

      {/* Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="h-8 bg-surface-container-high rounded" />
        <div className="h-8 bg-surface-container-high rounded" />
      </div>
    </div>
  );
}

export function AnalysesShimmerGrid({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </>
  );
}
