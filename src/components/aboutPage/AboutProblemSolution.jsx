"use client";

import { MdClose, MdCheckCircle, MdBolt } from "react-icons/md";

const PROBLEMS = [
  "Resume Guesswork",
  "Hidden Skill Gaps",
  "Random Interview Prep",
  "No Clear Growth Path",
];

const SOLUTIONS = [
  "AI Resume Analysis",
  "Skill Gap Detection",
  "Smart Interview Prep",
  "AI Learning Roadmaps",
];

export default function AboutProblemSolution() {
  return (
    <section className="px-margin-page py-section-padding border-y border-outline-variant/20 bg-surface-container-low/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Problem */}
        <div className="space-y-12">
          <h2 className="font-headline-lg text-headline-lg">
            Modern Job Searching Is Broken
          </h2>
          <div className="space-y-6">
            <div className="p-6 border border-outline-variant/30 bg-surface rounded-lg">
              <span className="font-mono-label text-mono-label text-error mb-2 block uppercase tracking-widest">
                The Problem
              </span>
              <ul className="space-y-4">
                {PROBLEMS.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-center gap-3 text-on-surface-variant"
                  >
                    <MdClose className="text-error text-xl shrink-0" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="flex items-end">
          <div className="w-full p-8 border-2 border-primary bg-surface rounded-lg shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <MdBolt className="text-[120px]" />
            </div>
            <span className="font-mono-label text-mono-label text-primary mb-2 block uppercase tracking-widest">
              The HirePilot Solution
            </span>
            <ul className="space-y-6">
              {SOLUTIONS.map((solution) => (
                <li
                  key={solution}
                  className="flex items-center gap-4 text-on-surface font-semibold text-lg"
                >
                  <MdCheckCircle className="text-primary text-2xl shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
