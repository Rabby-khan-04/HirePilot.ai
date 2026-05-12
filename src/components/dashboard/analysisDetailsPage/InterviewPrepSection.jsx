"use client";

import { useState } from "react";
import {
  MdOutlineExpandMore,
  MdAutoAwesome,
  MdPsychology,
} from "react-icons/md";

// ── Question Card ──────────────────────────────────────────────────────────

function QuestionCard({ question, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-outline-variant/30 rounded-lg overflow-hidden">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="font-mono-label text-[11px] text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="font-headline-md text-xl text-on-surface">
            &ldquo;{question.question}&rdquo;
          </p>
        </div>
        <MdOutlineExpandMore
          size={22}
          className="text-on-surface-variant shrink-0 ml-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Smooth accordion body using grid-rows trick */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 space-y-4 border-t border-outline-variant/20">
            {question.intention && (
              <div className="mt-4 p-4 bg-surface-container-low rounded">
                <p className="font-mono-label uppercase text-[10px] text-on-surface-variant mb-1">
                  Intention
                </p>
                <p className="text-on-surface-variant italic text-sm">
                  {question.intention}
                </p>
              </div>
            )}

            {question.answer && (
              <div className="p-5 border-2 border-primary/10 bg-primary/5 rounded-lg">
                <p className="font-mono-label uppercase text-[10px] text-primary mb-2 flex items-center gap-2">
                  <MdAutoAwesome size={14} />
                  AI Suggested Answer
                </p>
                <p className="text-on-surface leading-relaxed text-sm">
                  {question.answer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// ── InterviewPrepSection ───────────────────────────────────────────────────

export default function InterviewPrepSection({
  technicalQuestions = [],
  behavioralQuestions = [],
}) {
  const [activeTab, setActiveTab] = useState("technical");

  const questions =
    activeTab === "technical" ? technicalQuestions : behavioralQuestions;

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MdPsychology size={24} className="text-primary" />
          <h2 className="font-headline-md text-[24px]">Interview Prep</h2>
        </div>

        <div className="flex bg-surface-container border border-outline-variant/30 p-1 rounded-lg">
          {[
            {
              value: "technical",
              label: `Technical (${technicalQuestions.length})`,
            },
            {
              value: "behavioral",
              label: `Behavioral (${behavioralQuestions.length})`,
            },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 font-mono-label text-[11px] uppercase tracking-widest rounded-md transition-colors ${
                activeTab === tab.value
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {questions.length > 0 ? (
          questions.map((q, i) => (
            <QuestionCard key={`${activeTab}-${i}`} question={q} index={i} />
          ))
        ) : (
          <p className="text-on-surface-variant font-mono-detail text-sm py-12 text-center">
            No {activeTab} questions available.
          </p>
        )}
      </div>
    </section>
  );
}
