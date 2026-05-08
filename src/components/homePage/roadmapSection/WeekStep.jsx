import { FaCheck } from "react-icons/fa6";

export default function WeekStep({ week, title, progress, status, tasks }) {
  const isLocked = status === "locked";
  const isUpcoming = status === "upcoming";

  return (
    <div className={`relative pl-12 ${isLocked ? "opacity-50" : ""}`}>
      {/* Step indicator */}
      {week === "01" ? (
        <div className="absolute -left-1.25 top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
          <FaCheck size={14} className="text-on-primary" />
        </div>
      ) : (
        <div
          className={`absolute -left-1.25 top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 font-mono-label font-bold
            ${
              isUpcoming || isLocked
                ? "border border-outline-variant bg-surface text-on-surface-variant"
                : "border-2 border-primary bg-surface text-primary"
            }`}
        >
          {week}
        </div>
      )}

      {/* Title + percentage */}
      <div className="flex justify-between items-start mb-2">
        <h5
          className={`font-headline-md text-[18px] font-bold ${isUpcoming ? "opacity-60" : ""}`}
        >
          {title}
        </h5>
        <span
          className={`font-mono-detail text-mono-detail font-bold ${
            progress > 0 ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          {progress}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-surface-container-highest mb-4 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${isUpcoming ? "bg-outline" : "bg-primary"}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tasks */}
      {tasks.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {tasks.map(({ label, done }) => (
            <div
              key={label}
              className="flex items-center gap-2 font-mono-detail text-mono-detail text-on-surface-variant"
            >
              {done ? (
                <FaCheck size={12} className="text-primary shrink-0" />
              ) : (
                <span className="w-3 h-3 rounded-full border border-on-surface-variant/30 shrink-0" />
              )}
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
