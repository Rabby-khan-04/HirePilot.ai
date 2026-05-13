import {
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertOctagon,
  FiInfo,
} from "react-icons/fi";

const matchedSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "Tailwind CSS",
  "Jest",
];

const gaps = [
  {
    level: "MEDIUM GAP",
    skill: "GraphQL",
    desc: "Required for efficient data orchestration in this role.",
    labelClass: "bg-warning/10 text-warning",
    icon: <FiAlertTriangle className="text-warning" size={20} />,
  },
  {
    level: "HIGH GAP",
    skill: "AWS Lambda",
    desc: "Role requires serverless infrastructure management.",
    labelClass: "bg-error/10 text-error",
    icon: <FiAlertOctagon className="text-error" size={20} />,
  },
  {
    level: "LOW GAP",
    skill: "Docker",
    desc: "Basic understanding found; advanced orchestration needed.",
    labelClass: "bg-nutral/10 text-nutral",
    icon: <FiInfo className="text-nutral" size={20} />,
  },
];

export default function SkillsPanel() {
  return (
    <div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
      {/* Matched Skills */}
      <div className="bg-white border border-outline-variant/50 p-8 rounded-lg">
        <div className="font-mono-label text-mono-label text-on-surface-variant mb-6 uppercase">
          Verified Competencies
        </div>
        <div className="flex flex-wrap gap-2">
          {matchedSkills.map((skill) => (
            <span
              key={skill}
              className="bg-surface-container text-primary font-mono-detail px-4 py-2 rounded-sm border border-outline-variant/20 flex items-center gap-2"
            >
              <FiCheckCircle size={16} />
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Skill Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gaps.map((gap) => (
          <div
            key={gap.skill}
            className="border border-outline-variant/50 p-6 bg-white rounded-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <span
                className={`font-mono-label text-xs px-2 py-1 ${gap.labelClass}`}
              >
                {gap.level}
              </span>
              {gap.icon}
            </div>
            <div className="font-body-md font-bold text-lg mb-1">
              {gap.skill}
            </div>
            <p className="text-xs text-on-surface-variant">{gap.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
