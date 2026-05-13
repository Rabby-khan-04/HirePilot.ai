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
      <ResumeDetailHeader resume={resume} />
      <ResumeDetailHero resume={resume} />

      {/* On lg+: fixed height container, left scrolls, right is static */}
      <div className="px-gutter flex flex-col lg:flex-row gap-8 pb-24 items-start">
        {/* Left column — scrolls naturally with the page */}
        <div className="w-full lg:w-8/12 space-y-12">
          <ResumeExperience experience={resume.parsedData?.experience ?? []} />
          <ResumeProjects projects={resume.parsedData?.projects ?? []} />
          <ResumeRawText rawText={resume.rawText} />
        </div>

        {/* Right column — sticky, no height cap, no scroll */}
        <div className="w-full lg:w-4/12 sticky top-20">
          <ResumeDetailSidebar resume={resume} />
        </div>
      </div>
    </div>
  );
}
