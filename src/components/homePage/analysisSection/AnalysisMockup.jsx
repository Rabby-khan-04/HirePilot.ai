import { FaCheck } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";

const MATCHED_SKILLS = ["React", "JavaScript", "Node.js", "MongoDB"];

const SKILL_GAPS = ["TypeScript", "System Design", "Unit Testing"];

const AI_SUGGESTIONS = [
  "Add stronger backend project examples",
  "Improve TypeScript knowledge",
  "Practice behavioral interview questions",
  "Learn scalable application architecture",
];

export default function AnalysisMockup() {
  return (
    <div className="md:col-span-7">
      <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm rounded h-full">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left panel */}
          <div className="flex-1">
            {/* Match Score */}
            <div className="mb-8">
              <div className="font-mono-label text-mono-label text-primary/40 uppercase mb-2">
                Resume Match Score
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-display-xl font-display-xl">78%</span>
                <span className="text-on-surface-variant font-mono-detail">
                  Match
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mt-2">
                Strong alignment with the target Frontend Developer role.
              </p>
            </div>

            {/* Matched Skills */}
            <div className="mb-8">
              <div className="font-mono-label text-mono-label text-primary/40 uppercase mb-4">
                Matched Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {MATCHED_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1 bg-primary text-on-primary text-xs rounded-full"
                  >
                    <span className="">
                      <FaCheck size={14} />
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Gaps */}
            <div className="mb-8">
              <div className="font-mono-label text-mono-label text-primary/40 uppercase mb-4">
                Skill Gaps
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILL_GAPS.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1 border border-outline-variant text-on-surface-variant text-xs rounded-full"
                  >
                    <span className="">
                      <LiaTimesSolid size={14} />
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex-1 space-y-6">
            {/* AI Suggestions */}
            <div>
              <div className="font-mono-label text-mono-label text-primary/40 uppercase mb-4">
                AI Suggestions
              </div>
              <ul className="space-y-3">
                {AI_SUGGESTIONS.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="flex gap-2 text-sm text-on-surface items-start"
                  >
                    <span className="text-primary shrink-0">
                      <GoLightBulb size={18} />
                    </span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interview Readiness */}
            <div className="pt-6 border-t border-outline-variant">
              <div className="font-mono-label text-mono-label text-primary/40 uppercase mb-2">
                Interview Readiness
              </div>
              <div className="text-headline-md font-bold mb-2">Moderate</div>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                You have strong frontend fundamentals but need improvement in
                architecture and testing concepts for mid-level roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
