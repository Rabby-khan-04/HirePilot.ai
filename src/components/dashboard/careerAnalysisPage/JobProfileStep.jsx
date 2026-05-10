"use client";

import { useState } from "react";
import {
  AIStatusLoader,
  EmptyState,
  SectionHeader,
  SkillTag,
  StepContainer,
  WorkflowActions,
} from "./ui";
import { useWorkflowStore } from "@/store/workflowStore";
import {
  MdAutoAwesome,
  MdInfoOutline,
  MdOutlineAnalytics,
  MdOutlineAutoGraph,
  MdOutlineInsights,
} from "react-icons/md";

function JobProfilePreview({ jobProfile }) {
  if (!jobProfile) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-10 h-full flex flex-col justify-center">
        <EmptyState
          icon={MdOutlineInsights}
          title="Job Profile Insights"
          description="Your AI-powered job analysis will appear here after adding a job title and description."
        >
          {/* Skeleton */}
          <div className="w-full space-y-6 pt-4 opacity-30 select-none pointer-events-none">
            <div className="space-y-3">
              <div className="h-2 w-24 bg-outline-variant/40 rounded-full" />
              <div className="flex flex-wrap gap-2 justify-center">
                {[20, 24, 16].map((w) => (
                  <div
                    key={w}
                    className="h-8 border border-dashed border-outline-variant rounded-lg animate-pulse"
                    style={{ width: `${w * 4}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </EmptyState>
      </div>
    );
  }

  const { extractedData } = jobProfile;
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-10 h-full space-y-8">
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
        <span className="px-4 py-2 bg-surface-container-high rounded-lg font-mono-label text-mono-label text-primary uppercase">
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
              className="px-3 py-1 border border-outline-variant/30 rounded-full text-mono-detail text-on-surface-variant"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function JobProfileStep() {
  const { jobProfile, setJobProfile, goToStep } = useWorkflowStore();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewData, setPreviewData] = useState(jobProfile);

  const handleAnalyze = async () => {
    if (!jobTitle.trim()) return;
    setIsProcessing(true);
    try {
      // TODO: call job profile API
      // const res = await jobProfileService.create({ jobTitle, jobDescription });
      await new Promise((r) => setTimeout(r, 1500)); // placeholder
      const mock = {
        _id: "mock",
        title: jobTitle,
        jobDescription,
        extractedData: {
          technicalSkills: ["React", "TypeScript", "Node.js"],
          softSkills: ["Communication", "Leadership"],
          experienceLevel: "Mid-Level",
          keywords: ["SPA", "REST", "Agile", "CI/CD"],
        },
      };
      setPreviewData(mock);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleNext = () => {
    setJobProfile(previewData);
  };

  if (isProcessing) {
    return <AIStatusLoader message="Analyzing job profile..." />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Form */}
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
                  className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none font-body-md text-on-surface"
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
                  className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none font-body-md text-on-surface resize-none"
                />
                <div className="flex items-start gap-2 pt-1">
                  <MdInfoOutline
                    size={18}
                    className="text-on-surface-variant mt-0.5"
                  />
                  <p className="text-mono-detail text-on-surface-variant leading-relaxed">
                    If left empty, HirePilot AI can generate a realistic job
                    description automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={handleAnalyze}
                disabled={!jobTitle.trim()}
                className="flex-1 py-4 bg-primary text-on-primary rounded-xl font-medium hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analyze Job Profile
                <MdOutlineAnalytics size={20} />
              </button>
              <button
                onClick={handleAnalyze}
                className="flex-1 py-4 border border-outline-variant/50 text-primary rounded-xl font-medium hover:bg-surface-container-high transition-all flex items-center justify-center gap-3"
              >
                Generate with AI
                <MdAutoAwesome size={20} />
              </button>
            </div>
          </StepContainer>
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-5">
          <JobProfilePreview jobProfile={previewData} />
        </div>
      </div>

      <WorkflowActions
        onBack={() => goToStep(1)}
        backLabel="Back to Resume"
        nextLabel="Generate AI Analysis"
        nextIcon={MdOutlineAutoGraph}
        nextDisabled={!previewData}
        onNext={handleNext}
      />
    </div>
  );
}
