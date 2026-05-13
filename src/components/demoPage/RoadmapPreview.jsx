import { FiArrowRight } from "react-icons/fi";

const weeks = [
  {
    label: "WEEK 01: ADVANCED REACT PATTERNS",
    desc: "Mastering Server Components & Client Boundaries",
    faded: false,
  },
  {
    label: "WEEK 02: GRAPHQL & TYPE-SAFETY",
    desc: "End-to-end type safety with Apollo and Codegen",
    faded: false,
  },
  {
    label: "WEEK 03: INFRASTRUCTURE BASICS",
    desc: "Terraform for Frontend & AWS Lambda deployment",
    faded: false,
  },
  {
    label: "WEEK 04: FULL SIMULATION",
    desc: "Mock interviews and portfolio refinement",
    faded: true,
  },
];

export default function RoadmapPreview() {
  return (
    <div className="col-span-12 lg:col-span-5 bg-tertiary-container text-on-tertiary border border-outline-variant/50 rounded-lg p-8 flex flex-col">
      <div className="font-mono-label text-mono-label text-on-tertiary-container mb-6">
        ACCELERATED LEARNING PATHWAY
      </div>
      <div className="space-y-6 grow">
        {weeks.map((week) => (
          <div
            key={week.label}
            className={`relative pl-8 border-l border-outline-variant/30 ${week.faded ? "opacity-40" : ""}`}
          >
            <div className="absolute -left-1.25 top-0 w-2 h-2 rounded-full bg-primary border border-white" />
            <div className="text-xs font-mono-detail text-on-tertiary-container mb-1">
              {week.label}
            </div>
            <p className="text-sm">{week.desc}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-on-tertiary text-tertiary font-body-md py-4 rounded hover:opacity-90 transition-all flex items-center justify-center gap-2">
        Generate Full Roadmap
        <FiArrowRight size={16} />
      </button>
    </div>
  );
}
