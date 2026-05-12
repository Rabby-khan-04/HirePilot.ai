import { TaskRow } from "./TaskRow";

export function DayBlock({ day, onToggleTask }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
        <span className="font-mono-label text-mono-label px-2 py-0.5 bg-surface-container-high text-on-surface-variant">
          DAY {String(day.day).padStart(2, "0")}
        </span>
        <h5 className="font-headline-md font-medium text-on-surface">
          {day.title}
        </h5>
      </div>
      <div className="space-y-2">
        {day.tasks.map((task) => (
          <TaskRow key={task._id} task={task} onToggle={onToggleTask} />
        ))}
      </div>
    </div>
  );
}
