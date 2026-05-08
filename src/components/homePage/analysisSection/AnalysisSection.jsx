import AnalysisFeatureCards from "./AnalysisFeatureCards";
import AnalysisMockup from "./AnalysisMockup";

export default function AnalysisSection() {
  return (
    <section className="px-margin-page pt-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
        {/* Section Header */}
        <div className="md:col-span-12 mb-12">
          <span className="font-mono-label text-mono-label text-primary/40 uppercase block mb-4">
            AI Analysis Preview
          </span>
          <h2 className="font-display-xl text-headline-lg mb-6 max-w-3xl">
            See How HirePilot AI Analyzes Your Career Readiness
          </h2>
          <p className="text-on-surface-variant max-w-3xl font-body-md">
            HirePilot AI compares your resume against real job descriptions to
            uncover exactly where you stand. Instead of guessing whether you
            {"'"}re ready for a role, get a detailed AI-powered breakdown of
            your strengths, missing skills, and interview readiness in seconds.
          </p>
        </div>

        <AnalysisFeatureCards />
        <AnalysisMockup />
      </div>
    </section>
  );
}
