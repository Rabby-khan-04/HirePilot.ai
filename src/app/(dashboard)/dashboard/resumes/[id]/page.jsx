"use client";

import ResumeDetailHeader from "@/components/dashboard/resumeDetailsPage/ResumeDetailHeader";
import ResumeDetailHero from "@/components/dashboard/resumeDetailsPage/ResumeDetailHero";
import ResumeDetailSidebar from "@/components/dashboard/resumeDetailsPage/ResumeDetailSidebar";
import ResumeExperience from "@/components/dashboard/resumeDetailsPage/ResumeExperience";
import ResumeProjects from "@/components/dashboard/resumeDetailsPage/ResumeProjects";
import ResumeRawText from "@/components/dashboard/resumeDetailsPage/ResumeRawText";
import { ErrorState } from "@/components/dashboard/roadmapDetail/ErrorState";
import ResumeDetailSkeleton from "@/components/shimmer/resume/ResumeDetailSkeleton";
import { useResumeDetail } from "@/hooks/resumes/useResumeDetail";
import { use } from "react";

export default function ResumeDetailPage({ params }) {
  const { id } = use(params);
  const { resume, isLoading, isError } = useResumeDetail(id);

  if (isLoading) return <ResumeDetailSkeleton />;
  if (isError || !resume)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ErrorState />
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header — sticky at top */}
      <ResumeDetailHeader resume={resume} />

      <ResumeDetailHero resume={resume} />

      <div className="px-gutter grid grid-cols-12 gap-8 pb-24 items-start">
        {/* Left column */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          <ResumeExperience experience={resume.parsedData?.experience ?? []} />
          <ResumeProjects projects={resume.parsedData?.projects ?? []} />
          <ResumeRawText rawText={resume.rawText} />
        </div>

        {/* Right column — offset by header height */}
        <div className="col-span-12 lg:col-span-4 sticky top-20 max-h-[calc(100vh-73px)] overflow-y-auto">
          <ResumeDetailSidebar resume={resume} />
        </div>
      </div>
    </div>
  );
}
