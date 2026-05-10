"use client";

import { useEffect, useState } from "react";
import { useWorkflowStore } from "@/store/workflowStore";
import {
  AIStatusLoader,
  AnalyticsCard,
  Accordion,
  ProgressBar,
  SeverityBadge,
  SkillTag,
  WorkflowActions,
} from "./ui";

// ✅ Changed Lucide icons to Material Design icons
import {
  MdVerified,
  MdWarningAmber,
  MdAutoAwesome,
  MdPsychology,
  MdMap,
} from "react-icons/md";

// ─── ScoreCard ─────────────────────────────────────────────────────────────────
function ScoreCard({ score, jobTitle }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 flex flex-col md:flex-row items-center gap-12 rounded">
      {/* Radial progress */}
      <div className="relative w-40 h-40 shrink-0 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            className="text-outline-variant/20"
            strokeWidth="8"
          />

          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 44}`}
            strokeDashoffset={`${2 * Math.PI * 44 * (1 - score / 100)}`}
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="font-headline-lg text-display-xl text-primary leading-none">
            {score}%
          </span>

          <span className="font-mono-label text-[10px] uppercase tracking-widest opacity-60">
            Match
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-4 text-center md:text-left">
        <div className="space-y-1">
          <h2 className="font-headline-md text-headline-md text-primary">
            Strong match for {jobTitle} roles
          </h2>

          <p className="text-on-surface-variant text-body-md leading-relaxed max-w-2xl">
            Your profile aligns well with the selected role, but there are still
            a few important skills to improve to reach top-tier competitiveness.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {["Resume Parsed", "Job Context Synced"].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-1 bg-surface-container"
            >
              <span className="w-2 h-2 bg-primary" />

              <span className="font-mono-label text-mono-label uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── QuestionItem ──────────────────────────────────────────────────────────────
function QuestionItem({ question, intent, answerStrategy }) {
  return (
    <Accordion
      trigger={
        <span className="font-body-md font-semibold text-on-surface pr-4">
          {question}
        </span>
      }
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            Interviewer Intention
          </p>

          <p className="text-body-md text-on-surface-variant bg-surface-container/30 p-4 italic border-l-2 border-primary/20">
            {intent}
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            Suggested Answer Strategy
          </p>

          <p className="text-body-md text-on-surface leading-relaxed">
            {answerStrategy}
          </p>
        </div>
      </div>
    </Accordion>
  );
}

// ─── AnalysisStep ──────────────────────────────────────────────────────────────
export default function AnalysisStep() {
  const { analysis, jobProfile, setAnalysis, goToStep } = useWorkflowStore();

  const [localAnalysis, setLocalAnalysis] = useState(analysis ?? null);
  const [isLoading, setIsLoading] = useState(analysis === null);
  const [activeTab, setActiveTab] = useState("technical");

  // Fetch analysis once on mount if not already in store
  useEffect(() => {
    // ✅ If analysis already exists in store, useState already initialized
    // correctly above — no setState needed here at all
    if (analysis) return;

    const fetchAnalysis = async () => {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 1500));

      setLocalAnalysis({
        score: 82,
        matchedSkills: [
          "React",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "REST API",
          "Git",
        ],
        skillGaps: [
          { skill: "System Design", priority: "high" },
          { skill: "Unit Testing (Jest/Cypress)", priority: "high" },
          { skill: "CI/CD Pipelines", priority: "medium" },
          { skill: "GraphQL", priority: "low" },
        ],
        suggestions: [
          "Explicitly highlight TypeScript Generic usage in your projects to match senior requirements.",
          "Add a backend-heavy project featuring Docker orchestration to your portfolio.",
          "Focus on Behavioral STAR method practice for leadership-oriented questions.",
        ],
        technicalQuestions: [
          {
            question:
              "Explain the difference between authentication and authorization.",
            intent:
              "To verify fundamental web security knowledge and clarity in distinguishing user identity vs user permissions.",
            answerStrategy:
              "Define Authentication (Who are you?) vs Authorization (What can you do?). Use a real-world analogy. Mention JWT, OAuth, and RBAC.",
          },
          {
            question: "What problem does useEffect solve in React?",
            intent:
              "Assess understanding of component lifecycle, side effects, and modern functional component patterns.",
            answerStrategy:
              'Focus on "Synchronization". It allows you to sync a component with an external system. Mention the dependency array and cleanup function.',
          },
        ],
        behavioralQuestions: [
          {
            question: "Tell me about a time you solved a difficult bug.",
            intent:
              "To observe problem-solving methodology, persistence, and ability to articulate technical challenges.",
            answerStrategy:
              "Use the STAR method. Describe the situation, what you tried, how you isolated it, and the architectural fix.",
          },
        ],
        technicalProficiency: 75,
        behavioralReadiness: 68,
      });

      setIsLoading(false);
    };

    fetchAnalysis();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Only called when user clicks "Generate Learning Roadmap"
  const handleNext = () => {
    setAnalysis(localAnalysis);
  };

  if (isLoading) return <AIStatusLoader message="Running AI analysis..." />;

  if (!localAnalysis) return null;

  const activeQuestions =
    activeTab === "technical"
      ? localAnalysis.technicalQuestions
      : localAnalysis.behavioralQuestions;

  return (
    <div className="space-y-gutter">
      <ScoreCard
        score={localAnalysis.score}
        jobTitle={jobProfile?.title ?? "Target Role"}
      />

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* ✅ Matched Skills */}
        <AnalyticsCard icon={MdVerified} title="Matched Skills">
          <div className="flex flex-wrap gap-3">
            {localAnalysis.matchedSkills.map((skill) => (
              <SkillTag key={skill} skill={skill} matched />
            ))}
          </div>
        </AnalyticsCard>

        {/* ✅ Skill Gaps */}
        <AnalyticsCard
          icon={MdWarningAmber}
          iconClass="text-error"
          title="Skill Gaps"
        >
          <div className="space-y-3">
            {localAnalysis.skillGaps.map(({ skill, priority }) => (
              <div
                key={skill}
                className="flex items-center justify-between p-3 bg-surface-container-low"
              >
                <span className="text-body-md font-medium">{skill}</span>

                <SeverityBadge priority={priority} />
              </div>
            ))}
          </div>
        </AnalyticsCard>

        {/* ✅ AI Recommendations */}
        <AnalyticsCard icon={MdAutoAwesome} title="AI Recommendations">
          <ul className="space-y-4">
            {localAnalysis.suggestions.map((s) => (
              <li key={s} className="flex gap-4">
                <MdAutoAwesome
                  size={18}
                  className="text-primary shrink-0 mt-0.5"
                />

                <p className="text-body-md text-on-surface-variant">{s}</p>
              </li>
            ))}
          </ul>
        </AnalyticsCard>

        {/* ✅ Interview Readiness */}
        <AnalyticsCard icon={MdPsychology} title="Interview Readiness">
          <div className="space-y-8">
            <ProgressBar
              label="Technical Proficiency"
              value={localAnalysis.technicalProficiency}
            />

            <ProgressBar
              label="Behavioral Readiness"
              value={localAnalysis.behavioralReadiness}
            />
          </div>
        </AnalyticsCard>
      </div>

      {/* Interview Questions */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 overflow-hidden">
        <div className="p-8 border-b border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="font-headline-md text-headline-md text-primary">
            Predicted Interview Questions
          </h3>

          <div className="flex gap-2 p-1 bg-surface-container self-start">
            {["technical", "behavioral"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-mono-label text-mono-label uppercase tracking-widest transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 space-y-4">
          {activeQuestions.map((q) => (
            <QuestionItem key={q.question} {...q} />
          ))}
        </div>
      </div>

      {/* Workflow Actions */}
      <WorkflowActions
        onBack={() => goToStep(2)}
        backLabel="Back to Job Profile"
        nextLabel="Generate Learning Roadmap"
        nextIcon={MdMap}
        onNext={handleNext}
      />
    </div>
  );
}
