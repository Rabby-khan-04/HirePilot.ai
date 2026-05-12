export function DetailSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-gutter items-start mt-8">
      <div className="col-span-12 lg:col-span-8 space-y-card-gap">
        {/* overview card */}
        <div className="rounded-2xl border border-outline-variant/30 p-6 flex flex-col gap-4">
          <div className="detailsShimmer h-4 w-1/3 rounded" />
          <div className="detailsShimmer h-2 w-full rounded-full" />
          <div className="flex gap-4">
            <div className="detailsShimmer h-3 w-24 rounded" />
            <div className="detailsShimmer h-3 w-16 rounded" />
          </div>
        </div>
        {/* week accordions */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-outline-variant/30 p-5 flex flex-col gap-3"
          >
            <div className="detailsShimmer h-4 w-1/2 rounded" />
            <div className="detailsShimmer h-3 w-3/4 rounded" />
          </div>
        ))}
      </div>
      {/* sidebar */}
      <div className="col-span-12 lg:col-span-4 rounded-2xl border border-outline-variant/30 p-6 flex flex-col gap-4">
        <div className="detailsShimmer h-24 w-24 rounded-full mx-auto" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="detailsShimmer h-3 w-full rounded" />
        ))}
      </div>
    </div>
  );
}
