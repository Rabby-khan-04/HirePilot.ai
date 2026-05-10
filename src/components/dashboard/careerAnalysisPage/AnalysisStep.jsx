"use client";

import { useWorkflowStore } from "@/store/workflowStore";
import { useState } from "react";
import {
  AIStatusLoader,
  AnalyticsCard,
  ProgressBar,
  SeverityBadge,
  SkillTag,
  WorkflowActions,
} from "./ui";
import { IoMapOutline } from "react-icons/io5";

// ─── Score Card ────────────────────────────────────────────────────────────────
function ScoreCard({ score, jobTitle }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-10 flex flex-col md:flex-row items-center gap-12">
      <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
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
            strokeDasharray={`${2 * Math.PI * 44}`}
            strokeDashoffset={`${2 * Math.PI * 44 * (1 - score / 100)}`}
            strokeLinecap="round"
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
              className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
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

// ─── Interview Question Accordion ──────────────────────────────────────────────
function QuestionAccordion({ question, intent, answerStrategy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-outline-variant/30 rounded-lg overflow-hidden hover:border-primary/30 transition-all">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
      >
        <span className="font-body-md font-semibold text-on-surface pr-4">
          {question}
        </span>
        <span
          className="material-symbols-outlined text-on-surface-variant flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        >
          expand_more
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 pt-2 space-y-6">
          <div className="space-y-2">
            <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Interviewer Intention
            </p>
            <p className="text-body-md text-on-surface-variant bg-surface-container/30 p-4 rounded italic border-l-4 border-primary/20">
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
      )}
    </div>
  );
}

// ─── AnalysisStep ──────────────────────────────────────────────────────────────
export default function AnalysisStep() {
  const { analysis, jobProfile, setAnalysis, goToStep } = useWorkflowStore();
  const [activeTab, setActiveTab] = useState("technical");
  const [isLoading, setIsLoading] = useState(!analysis);

  // Simulate initial load if no analysis yet
  useState(() => {
    if (!analysis) {
      const load = async () => {
        await new Promise((r) => setTimeout(r, 1500));
        // TODO: replace with real API call
        setAnalysis({
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
                'Focus on "Synchronization". It allows you to synchronize a component with an external system. Mention the dependency array and cleanup function.',
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
      load();
    } else {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <AIStatusLoader message="Running AI analysis..." />;
  }

  if (!analysis) return null;

  const activeQuestions =
    activeTab === "technical"
      ? analysis.technicalQuestions
      : analysis.behavioralQuestions;

  return (
    <div className="space-y-gutter">
      {/* Score */}
      <ScoreCard
        score={analysis.score}
        jobTitle={jobProfile?.title ?? "Target Role"}
      />

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Matched Skills */}
        <AnalyticsCard icon="verified" title="Matched Skills">
          <div className="flex flex-wrap gap-3">
            {analysis.matchedSkills.map((skill) => (
              <SkillTag key={skill} skill={skill} matched />
            ))}
          </div>
        </AnalyticsCard>

        {/* Skill Gaps */}
        <AnalyticsCard
          icon="priority_high"
          iconColor="text-error"
          title="Skill Gaps"
        >
          <div className="space-y-3">
            {analysis.skillGaps.map(({ skill, priority }) => (
              <div
                key={skill}
                className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg"
              >
                <span className="text-body-md font-medium">{skill}</span>
                <SeverityBadge priority={priority} />
              </div>
            ))}
          </div>
        </AnalyticsCard>

        {/* AI Suggestions */}
        <AnalyticsCard icon="auto_awesome" title="AI Recommendations">
          <ul className="space-y-4">
            {analysis.suggestions.map((s) => (
              <li key={s} className="flex gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    lightbulb
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant">{s}</p>
              </li>
            ))}
          </ul>
        </AnalyticsCard>

        {/* Interview Readiness */}
        <AnalyticsCard icon="psychology" title="Interview Readiness">
          <div className="space-y-8">
            <ProgressBar
              label="Technical Proficiency"
              value={analysis.technicalProficiency}
            />
            <ProgressBar
              label="Behavioral Readiness"
              value={analysis.behavioralReadiness}
            />
          </div>
        </AnalyticsCard>
      </div>

      {/* Interview Questions */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden">
        <div className="p-8 border-b border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="font-headline-md text-headline-md text-primary">
            Predicted Interview Questions
          </h3>
          <div className="flex gap-2 p-1 bg-surface-container rounded-lg self-start">
            {["technical", "behavioral"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded font-mono-label text-mono-label uppercase tracking-widest transition-colors ${
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
            <QuestionAccordion key={q.question} {...q} />
          ))}
        </div>
      </div>

      <WorkflowActions
        onBack={() => goToStep(2)}
        backLabel="Back to Job Profile"
        nextLabel="Generate Learning Roadmap"
        nextIcon={IoMapOutline}
        onNext={() => goToStep(4)}
      />
    </div>
  );
}
