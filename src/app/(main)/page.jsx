import AnalysisSection from "@/components/homePage/analysisSection/AnalysisSection";
import FeaturesSection from "@/components/homePage/featureSection/Featuressection";
import HeroSection from "@/components/homePage/heroSection/Herosection";
import InterviewSection from "@/components/homePage/interviewSection/InterviewSection";
import StatsBar from "@/components/homePage/statsbar/Statsbar";

export default function HomePage() {
  return (
    <main className="pt-32 overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <AnalysisSection />
      <InterviewSection />
    </main>
  );
}
