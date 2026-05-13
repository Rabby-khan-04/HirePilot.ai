export default function FinalCta() {
  return (
    <section className="px-margin-page py-section-padding border-t border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-display-xl text-headline-lg mb-6">
          Ready to Improve Your Career?
        </h2>
        <p className="font-body-md text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
          Get an analysis tailored to your real resume. Connect your LinkedIn or
          upload a PDF to unlock the full potential of our AI Career Engine.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-on-primary font-mono px-10 py-5 rounded shadow-xl hover:scale-105 active:scale-95 transition-all">
            Sign Up Free
          </button>
          <button className="border border-primary text-primary font-mono px-10 py-5 rounded hover:bg-surface-container transition-all">
            Start Full Analysis
          </button>
        </div>
      </div>

      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="40"
              id="grid"
              patternUnits="userSpaceOnUse"
              width="40"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%" />
        </svg>
      </div>
    </section>
  );
}
