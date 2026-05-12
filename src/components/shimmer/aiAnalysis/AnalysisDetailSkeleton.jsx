export default function AnalysisDetailSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-3 w-48 bg-outline-variant/30 rounded" />
        <div className="h-8 w-96 bg-outline-variant/30 rounded" />
        <div className="h-5 w-64 bg-outline-variant/20 rounded" />
      </div>

      {/* Hero */}
      <div className="grid grid-cols-4 gap-gutter border-y border-outline-variant/30 py-12">
        <div className="h-48 bg-outline-variant/20 rounded-lg" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-outline-variant/20 rounded-lg" />
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-8">
          <div className="h-32 bg-outline-variant/20 rounded-lg" />
          <div className="h-48 bg-outline-variant/20 rounded-lg" />
          <div className="h-64 bg-outline-variant/20 rounded-lg" />
        </div>
        <div className="col-span-4 space-y-6">
          <div className="h-48 bg-outline-variant/20 rounded-lg" />
          <div className="h-48 bg-outline-variant/20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
