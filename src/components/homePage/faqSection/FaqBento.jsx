import { LuChartNoAxesCombined } from "react-icons/lu";

export default function FaqBento() {
  return (
    <div className="mt-32 grid grid-cols-12 gap-gutter">
      {/* Precision Benchmarking */}
      <div className="col-span-12 md:col-span-4 h-64 bg-surface-container-low border border-outline-variant/20 p-8 flex flex-col justify-between overflow-hidden relative rounded">
        <div className="z-10">
          <h4 className="font-mono-label text-mono-label text-primary uppercase">
            Precision Benchmarking
          </h4>
          <p className="font-body-md text-body-md mt-2 text-on-surface-variant">
            Compare your skills against the industry top 1%.
          </p>
        </div>
        <LuChartNoAxesCombined
          size={160}
          className="absolute -bottom-8 -right-8 opacity-10 text-primary"
        />
      </div>

      {/* CTA */}
      <div className="col-span-12 md:col-span-8 h-64 relative bg-primary overflow-hidden flex items-center px-12 rounded">
        <div className="z-10">
          <h2 className="font-headline-md text-headline-md text-on-primary mb-2">
            Ready to optimize your journey?
          </h2>
          <button className="mt-4 border border-on-primary text-on-primary px-8 py-3 font-mono-label text-mono-label hover:bg-on-primary hover:text-primary transition-all duration-300 rounded cursor-pointer">
            GET STARTED NOW
          </button>
        </div>
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
}
