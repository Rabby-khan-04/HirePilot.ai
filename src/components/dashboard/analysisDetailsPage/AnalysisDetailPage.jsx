"use client";

import AnalysisDetailSkeleton from "@/components/shimmer/aiAnalysis/AnalysisDetailSkeleton";
import { useAnalysisDetails } from "@/hooks/aiAnalysis/useAnalysisDetails";
import { useRouter } from "next/navigation";

import { MdErrorOutline } from "react-icons/md";
import AnalysisDetailHeader from "./AnalysisDetailHeader";
import AnalysisHeroSection from "./AnalysisHeroSection";
import MatchedSkillsSection from "./MatchedSkillsSection";
import SkillGapsSection from "./SkillGapsSection";
import InterviewPrepSection from "./InterviewPrepSection";
import AnalysisSidebar from "./AnalysisSidebar";
import AnalysisFooterCTA from "./AnalysisFooterCTA";

export default function AnalysisDetailPage({ id }) {
  const router = useRouter();
  const { analysis, isLoading, isError } = useAnalysisDetails(id);

  if (isLoading) return <AnalysisDetailSkeleton />;

  if (isError || !analysis) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <MdErrorOutline size={48} className="text-error" />
        <p className="font-headline-md text-headline-md text-on-surface">
          Failed to load analysis
        </p>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-surface-container-high transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-margin-page pt-10 pb-section-padding space-y-8">
      <AnalysisDetailHeader
        analysis={analysis}
        onRetake={() => router.push(`/dashboard/analyses/${id}/retake`)}
        onGenerateRoadmap={() =>
          router.push(`/dashboard/career-analysis?analysisId=${id}`)
        }
      />

      <AnalysisHeroSection analysis={analysis} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left — Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          <MatchedSkillsSection skills={analysis.matchedSkills} />
          <SkillGapsSection skillGaps={analysis.skillGaps} />
          <InterviewPrepSection
            technicalQuestions={analysis.technicalQuestions}
            behavioralQuestions={analysis.behavioralQuestions}
          />
        </div>

        {/* Right — Sticky Sidebar */}
        <AnalysisSidebar analysis={analysis} />
      </div>

      <AnalysisFooterCTA analysisId={id} />
    </div>
  );
}
