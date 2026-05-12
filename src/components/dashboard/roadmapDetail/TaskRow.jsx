import { LuCheck, LuExternalLink } from "react-icons/lu";

export function TaskRow({ task, onToggle }) {
  return (
    <div
      onClick={() => onToggle(task._id)}
      className={`flex items-center justify-between p-4 border transition-colors cursor-pointer group ${
        task.isCompleted
          ? "border-outline-variant/20 opacity-60"
          : "border-outline-variant/30 hover:border-primary"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors ${
            task.isCompleted
              ? "bg-primary border-primary"
              : "border-outline-variant group-hover:border-primary"
          }`}
        >
          {task.isCompleted && (
            <LuCheck size={12} className="text-on-primary" strokeWidth={3} />
          )}
        </div>
        <span
          className={`font-body-md text-body-md ${task.isCompleted ? "line-through text-on-surface-variant" : "text-on-surface"}`}
        >
          {task.text}
        </span>
      </div>
      {task.resource && (
        <a
          href={task.resource}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 font-mono-detail text-mono-detail text-primary hover:underline shrink-0 ml-4"
        >
          <LuExternalLink size={14} />
          Resource
        </a>
      )}
    </div>
  );
}
