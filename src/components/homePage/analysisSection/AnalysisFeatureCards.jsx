const SKILL_GAPS = [
  { label: "HIGH: SYSTEM DESIGN", priority: "high" },
  { label: "HIGH: TYPESCRIPT", priority: "high" },
  { label: "MEDIUM: CI/CD", priority: "medium" },
  { label: "LOW: DOCKER", priority: "low" },
];

const priorityClass = {
  high: "bg-error/10 text-error",
  medium: "bg-primary/5 text-primary/60",
  low: "bg-primary/5 text-primary/40",
};

export default function AnalysisFeatureCards() {
  return (
    <div className="md:col-span-5 flex flex-col gap-card-gap">
      {/* Card 1 */}
      <div className="p-6 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <h4 className="font-headline-md text-body-md font-bold mb-2 uppercase tracking-tight">
          AI-Powered Resume Matching
        </h4>
        <p className="text-on-surface-variant text-[14px] leading-relaxed italic">
          Upload your resume and compare it against real software engineering
          job posts. HirePilot AI evaluates your experience, skills, projects,
          and technologies to generate a personalized match score.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <h4 className="font-headline-md text-body-md font-bold mb-2 uppercase tracking-tight">
          Skill Gap Detection
        </h4>
        <p className="text-on-surface-variant text-[14px] leading-relaxed mb-4">
          Instantly identify the technologies and skills you need to improve.
          Missing skills are categorized by importance.
        </p>
        <div className="flex flex-wrap gap-2">
          {SKILL_GAPS.map(({ label, priority }) => (
            <span
              key={label}
              className={`px-2 py-1 font-mono-label text-[10px] rounded ${priorityClass[priority]}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-6 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <h4 className="font-headline-md text-body-md font-bold mb-2 uppercase tracking-tight">
          Smart Career Suggestions
        </h4>
        <p className="text-on-surface-variant text-[14px] leading-relaxed">
          Receive actionable recommendations tailored to your target role. From
          improving project quality to learning specific technologies, HirePilot
          AI helps you prepare strategically.
        </p>
      </div>
    </div>
  );
}
