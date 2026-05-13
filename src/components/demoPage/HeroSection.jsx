import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="px-margin-page py-section-padding">
      <div className="max-w-4xl">
        <span className="font-mono-label text-mono-label text-primary bg-surface-container px-3 py-1 mb-6 inline-block">
          ENGINEERED ANALYSIS
        </span>
        <h1 className="font-display-xl text-display-xl mb-6">
          See Your AI Career Analysis in Action
        </h1>
        <p className="font-body-md text-on-surface-variant text-xl max-w-2xl mb-10">
          Experience the precision of HirePilot AI. Select a sample resume and
          job profile below to see how our neural engine decomposes skillsets
          and predicts career trajectory.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-on-primary font-mono px-8 py-4 rounded hover:opacity-90 active:scale-95 transition-all">
            Try Demo Analysis
          </button>
          <button className="border border-primary text-primary font-mono px-8 py-4 rounded hover:bg-surface-container-low transition-all">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
