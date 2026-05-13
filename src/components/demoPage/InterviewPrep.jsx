"use client";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";

const tabs = ["TECHNICAL", "BEHAVIORAL"];
const questions = {
  TECHNICAL: [
    {
      tag: "REACT / ARCHITECTURE",
      question:
        "Explain the Reconciliation algorithm and how React 18 Concurrent Mode changes visual prioritization.",
      intent:
        "Probing deep internal knowledge of the framework and awareness of modern performance features.",
    },
    {
      tag: "JAVASCRIPT / ASYNC",
      question:
        "How would you implement a rate-limiter for high-frequency user events in a vanilla environment?",
      intent:
        "Testing problem-solving logic and fundamental understanding of Event Loop and closure.",
    },
  ],
  BEHAVIORAL: [
    {
      tag: "LEADERSHIP / CONFLICT",
      question:
        "Describe a time you disagreed with a technical decision made by your team lead.",
      intent:
        "Assessing communication style, maturity under pressure, and collaborative mindset.",
    },
    {
      tag: "OWNERSHIP / DELIVERY",
      question:
        "Tell me about a project you owned end-to-end. What would you do differently?",
      intent:
        "Evaluating accountability, self-awareness, and drive for continuous improvement.",
    },
  ],
};

export default function InterviewPrep() {
  const [activeTab, setActiveTab] = useState("TECHNICAL");

  return (
    <div className="col-span-12 lg:col-span-7 bg-white border border-outline-variant/50 rounded-lg overflow-hidden flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-outline-variant/30">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 font-mono-label transition-colors ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary bg-surface-container-low"
                : "text-on-surface-variant hover:bg-surface-container-lowest"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="p-8 space-y-6">
        {questions[activeTab].map((q) => (
          <div
            key={q.tag}
            className="p-4 border border-outline-variant/20 rounded"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono-detail text-primary/60">
                {q.tag}
              </span>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <FiCopy size={16} />
              </button>
            </div>
            <p className="font-body-md font-semibold mb-3">
              &ldquo;{q.question}&rdquo;
            </p>
            <div className="bg-surface-container-low p-3 text-xs border-l-2 border-primary">
              <span className="font-bold block mb-1">INTERVIEWER INTENT:</span>
              {q.intent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
