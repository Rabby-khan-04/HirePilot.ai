const STATS = [
  { value: "87%", label: "Better job-role matching" },
  { value: "4x", label: "Faster interview preparation" },
  { value: "10K+", label: "AI career analyses generated" },
  { value: "3x", label: "Structured learning paths" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface py-12">
      <div className="px-margin-page max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="py-6 md:py-0 md:px-gutter flex flex-col gap-1"
          >
            <span className="font-headline-lg text-headline-md text-primary">
              {value}
            </span>

            <span className="font-mono-detail text-mono-detail text-on-surface-variant uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
