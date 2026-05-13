import AiInsights from "@/components/demoPage/AiInsights";
import FinalCta from "@/components/demoPage/FinalCta";
import HeroSection from "@/components/demoPage/HeroSection";
import InterviewPrep from "@/components/demoPage/InterviewPrep";
import MatchScoreCard from "@/components/demoPage/MatchScoreCard";
import RoadmapPreview from "@/components/demoPage/RoadmapPreview";
import SkillsPanel from "@/components/demoPage/SkillsPanel";
import WorkspaceSection from "@/components/demoPage/WorkspaceSection";

export default function DemoPage() {
  return (
    <main className="pt-32">
      <HeroSection />
      <WorkspaceSection />
      {/* Interactive Analysis Grid */}
      <section className="px-margin-page py-section-padding">
        <div className="grid grid-cols-12 gap-gutter">
          <MatchScoreCard />
          <SkillsPanel />
          <AiInsights />
          <InterviewPrep />
          <RoadmapPreview />
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
