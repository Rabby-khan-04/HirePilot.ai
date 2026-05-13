import AboutAudience from "@/components/aboutPage/AboutAudience";
import AboutComparison from "@/components/aboutPage/AboutComparison";
import AboutCTA from "@/components/aboutPage/AboutCTA";
import AboutFeatureGrid from "@/components/aboutPage/AboutFeatureGrid";
import AboutHero from "@/components/aboutPage/AboutHero";
import AboutNeuralCore from "@/components/aboutPage/AboutNeuralCore";
import AboutProblemSolution from "@/components/aboutPage/AboutProblemSolution";
import AboutTechTrust from "@/components/aboutPage/AboutTechTrust";

export default function AboutPage() {
  return (
    <main className="grid-bg min-h-screen pt-16">
      <AboutHero />
      <AboutProblemSolution />
      <AboutFeatureGrid />
      <AboutNeuralCore />
      <AboutAudience />
      <AboutComparison />
      <AboutTechTrust />
      <AboutCTA />
    </main>
  );
}
