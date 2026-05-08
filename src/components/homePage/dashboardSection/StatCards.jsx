export default function StatCards() {
  return (
    <>
      {/* Resume Match Score */}
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant/40 p-6 rounded">
        <span className="font-mono-label text-mono-label text-on-surface-variant block mb-4">
          RESUME MATCH SCORE
        </span>
        <div className="flex items-end gap-2">
          <span className="text-[56px] font-headline-md leading-none">82%</span>
          <span className="font-mono-detail text-mono-detail text-primary mb-2 flex items-center">
            <span
              className="material-symbols-outlined text-[16px] mr-1"
              data-icon="trending_up"
            >
              trending_up
            </span>
            +4%
          </span>
        </div>
        <div className="mt-6 w-full h-1 bg-surface-container-lowest rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[82%]" />
        </div>
      </div>

      {/* Roadmap Progress */}
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant/40 p-6 rounded">
        <span className="font-mono-label text-mono-label text-on-surface-variant block mb-4">
          ROADMAP PROGRESS
        </span>
        <div className="flex items-end gap-2">
          <span className="text-[56px] font-headline-md leading-none">60%</span>
          <span className="font-mono-detail text-mono-detail text-on-surface-variant mb-2">
            24 / 40 Tasks
          </span>
        </div>
        <div className="mt-6 grid grid-cols-10 gap-1">
          <div className="h-2 bg-primary col-span-6 rounded-sm" />
          <div className="h-2 bg-surface-container-lowest col-span-4 rounded-sm" />
        </div>
      </div>

      {/* Interview Readiness */}
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant/40 p-6 rounded">
        <span className="font-mono-label text-mono-label text-on-surface-variant block mb-4">
          INTERVIEW READINESS
        </span>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between font-mono-detail text-mono-detail mb-1">
              <span>Technical</span>
              <span>75%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-lowest">
              <div className="bg-primary h-full w-[75%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-mono-detail text-mono-detail mb-1">
              <span>Behavioral</span>
              <span>68%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-lowest">
              <div className="bg-primary h-full w-[68%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
