export default function ResumeDetailSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header skeleton */}
      <div className="flex justify-between items-center px-gutter py-4 border-b border-outline-variant/30">
        <div className="space-y-2">
          <div className="shimmer h-5 w-48 rounded" />
          <div className="shimmer h-3 w-64 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="shimmer h-9 w-24 rounded-lg" />
          <div className="shimmer h-9 w-28 rounded-lg" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="px-gutter pt-12 pb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="shimmer h-48 flex-1 rounded-xl" />
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:w-1/3">
            <div className="shimmer h-28 rounded-xl" />
            <div className="shimmer h-28 rounded-xl" />
            <div className="shimmer h-28 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="px-gutter grid grid-cols-12 gap-8 pb-24">
        <div className="col-span-12 lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <div className="shimmer h-5 w-56 rounded" />
            <div className="shimmer h-24 rounded-lg" />
            <div className="shimmer h-24 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="shimmer h-48 rounded-xl" />
            <div className="shimmer h-48 rounded-xl" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="shimmer h-48 rounded-xl" />
          <div className="shimmer h-40 rounded-xl" />
          <div className="shimmer h-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
