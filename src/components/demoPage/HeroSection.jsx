import Image from "next/image";
import CareerEngineImg from "@/../public/assets/image/career_engine.jpg";

export default function HeroSection() {
  return (
    <section className="px-margin-page py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left: Text */}
        <div className="md:col-span-7">
          <span className="font-mono-label text-mono-label text-primary bg-surface-container px-3 py-1 mb-6 inline-block">
            ENGINEERED ANALYSIS
          </span>
          <h1 className="font-display-xl text-display-xl mb-6 max-w-3xl">
            See Your AI Career Analysis in Action
          </h1>
          <p className="font-body-md text-on-surface-variant text-xl max-w-2xl mb-10">
            Experience the precision of HirePilot AI. Select a sample resume and
            job profile below to see how our neural engine decomposes skillsets
            and predicts career trajectory.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary font-mono px-8 py-4 rounded hover:opacity-90 active:scale-95 transition-all">
              Try Demo Analysis
            </button>
            <button className="border border-primary text-primary font-mono px-8 py-4 rounded hover:bg-surface-container-low transition-all">
              Get Started Free
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-square shadow-2xl">
            <Image
              src={CareerEngineImg}
              alt="Neural Career Engine visualization"
              fill
              className="object-cover opacity-90"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
            {/* Inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,255,0,0.05)]" />
          </div>
          {/* Decorative glow behind */}
          <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
