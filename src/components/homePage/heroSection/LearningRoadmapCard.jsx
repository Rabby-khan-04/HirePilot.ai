import { FaCheck } from "react-icons/fa";

const STEPS = [
  { label: "Resume", state: true },
  { label: "Skills", state: true },
  { label: "Interviews", state: "active" },
  { label: "Job Hunt", state: false },
];

export default function LearningRoadmapCard() {
  return (
    <div className="col-span-6 row-span-2 bg-primary text-on-primary p-6 rounded shadow-sm">
      <div className="font-mono-label text-mono-label text-on-primary/60 uppercase mb-6">
        Learning Roadmap
      </div>

      <div className="flex justify-between items-center relative">
        <div className="absolute top-4 w-full h-px bg-on-primary/20  z-0"></div>

        {STEPS.map(({ label, state }) => (
          <div
            key={label}
            className="relative z-10 flex flex-col items-center gap-2"
          >
            {state === true && (
              <div className="w-8 h-8 rounded-full bg-on-primary flex items-center justify-center text-primary">
                <span className="">
                  <FaCheck size={14} />
                </span>
              </div>
            )}

            {state === "active" && (
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full bg-on-primary animate-ping opacity-40"></div>
                <div className="relative w-8 h-8 rounded-full bg-on-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            )}

            {state === false && (
              <div className="w-8 h-8 rounded-full bg-on-primary/20 border border-on-primary/40 flex items-center justify-center text-on-primary/40"></div>
            )}

            <span
              className={`font-mono-detail text-mono-detail ${
                state === false
                  ? "opacity-40"
                  : state === "active"
                    ? "font-bold"
                    : ""
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
