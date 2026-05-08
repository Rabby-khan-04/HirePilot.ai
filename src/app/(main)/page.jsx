import FeaturesSection from "@/components/homePage/Featuressection";
import HeroSection from "@/components/homePage/Herosection";
import StatsBar from "@/components/homePage/Statsbar";

export default function HomePage() {
  return (
    <main className="pt-32 overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
    </main>
  );
}
