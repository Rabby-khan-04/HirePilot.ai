"use client";

import { useState } from "react";
import { useWorkflowStore } from "@/store/workflowStore";
import {
  AIStatusLoader,
  EmptyState,
  SectionHeader,
  SkillTag,
  StepContainer,
  WorkflowActions,
} from "./ui";
import { LuInfo, LuChartBar, LuSparkles, LuArrowRight } from "react-icons/lu";
import { MdOutlineInsights } from "react-icons/md";
import { createJobProfile } from "@/services/jobProfiles.service";
import toast from "react-hot-toast";

// ─── JobProfilePreview ─────────────────────────────────────────────────────────
function JobProfilePreview({ jobProfile }) {
  if (!jobProfile) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 h-full flex flex-col justify-center rounded">
        <EmptyState
          icon={MdOutlineInsights}
          title="Job Profile Insights"
          description="Your AI-powered job analysis will appear here after analyzing a job title."
        >
          <div className="w-full space-y-6 pt-4 opacity-30 select-none pointer-events-none">
            <div className="flex flex-wrap gap-2 justify-center">
              {[80, 96, 64].map((w) => (
                <div
                  key={w}
                  className="h-8 border border-dashed border-outline-variant animate-pulse"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
          </div>
        </EmptyState>
      </div>
    );
  }

  const { extractedData } = jobProfile;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 h-full space-y-8 rounded">
      <div>
        <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-4">
          Technical Skills
        </span>
        <div className="flex flex-wrap gap-2">
          {extractedData.technicalSkills.map((skill) => (
            <SkillTag key={skill} skill={skill} matched />
          ))}
        </div>
      </div>
      <div>
        <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-4">
          Experience Level
        </span>
        <span className="px-4 py-2 bg-surface-container-high font-mono-label text-mono-label text-primary uppercase">
          {extractedData.experienceLevel}
        </span>
      </div>
      <div>
        <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-4">
          Keywords
        </span>
        <div className="flex flex-wrap gap-2">
          {extractedData.keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 border border-outline-variant/30 font-mono-detail text-mono-detail text-on-surface-variant"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── JobProfileStep ────────────────────────────────────────────────────────────
export default function JobProfileStep() {
  const { jobProfile, setJobProfile, goToStep } = useWorkflowStore();
  const [jobTitle, setJobTitle] = useState(jobProfile?.title ?? "");
  const [jobDescription, setJobDescription] = useState(
    jobProfile?.jobDescription ?? "",
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewData, setPreviewData] = useState(jobProfile ?? null);

  const handleAnalyze = async () => {
    if (!jobTitle.trim()) {
      toast.error("Job title is required!!");
      return;
    }
    setIsAnalyzing(true);
    try {
      const res = await createJobProfile(jobTitle, jobDescription);
      const data = res.data.data;
      setPreviewData(data);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Saves to store AND advances to step 3
  const handleNext = () => {
    setJobProfile(previewData); // this sets activeStep to max(current, 3)
  };

  if (isAnalyzing) return <AIStatusLoader message="Analyzing job profile..." />;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Form */}
        <div className="lg:col-span-7">
          <StepContainer>
            <SectionHeader
              title="Add Job Profile"
              description="Provide a target job role and optionally paste a real job description to compare against your resume."
            />

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono-label text-mono-label uppercase tracking-widest text-primary font-bold block">
                  Job Title <span className="text-error">*</span>
                </label>
                <input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Frontend Developer"
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:outline-none py-3 px-0 font-body-md text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant block">
                  Job Description (Optional)
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={6}
                  placeholder="Paste a LinkedIn or company job description here..."
                  className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:outline-none py-3 px-0 font-body-md text-on-surface transition-all placeholder:text-outline-variant resize-none"
                />
                <div className="flex items-start gap-2 pt-1">
                  <LuInfo
                    size={16}
                    className="text-on-surface-variant mt-0.5 shrink-0"
                  />
                  <p className="text-mono-detail text-on-surface-variant leading-relaxed">
                    If left empty, HirePilot AI will generate a realistic job
                    description automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={handleAnalyze}
                disabled={!jobTitle.trim()}
                className="flex-1 py-4 bg-primary text-on-primary font-mono-label text-mono-label hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded"
              >
                <LuChartBar size={18} />
                Analyze Job Profile
              </button>
              <button
                onClick={handleAnalyze}
                className="flex-1 py-4 border border-outline-variant text-primary font-mono-label text-mono-label hover:bg-surface-container-high transition-all flex items-center justify-center gap-3 rounded"
              >
                <LuSparkles size={18} />
                Generate with AI
              </button>
            </div>
          </StepContainer>
        </div>

        {/* Preview */}
        <div className="lg:col-span-5">
          <JobProfilePreview jobProfile={previewData} />
        </div>
      </div>

      <WorkflowActions
        onBack={() => goToStep(1)}
        backLabel="Back to Resume"
        nextLabel="Generate AI Analysis"
        nextIcon={LuArrowRight}
        nextDisabled={!previewData}
        onNext={handleNext}
      />
    </div>
  );
}
