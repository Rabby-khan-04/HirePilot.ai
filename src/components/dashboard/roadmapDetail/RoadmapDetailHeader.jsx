import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

export default function RoadmapDetailHeader({ title, description }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div className="space-y-2">
        <h1 className="font-headline-lg text-headline-lg text-primary">
          {title}
        </h1>
        <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="/dashboard/roadmaps"
          className="px-5 py-2.5 border border-primary font-mono-label text-mono-label text-primary hover:bg-surface-container-high transition-all rounded"
        >
          Back to Roadmaps
        </Link>
        <button className="px-5 py-2.5 bg-primary text-on-primary font-mono-label text-mono-label hover:opacity-90 transition-all flex items-center gap-2 group rounded">
          Continue Learning
          <GoArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
        <button className="p-2.5 border border-outline-variant hover:bg-surface-container-high transition-all rounded">
          <FiMoreVertical size={18} className="text-on-surface-variant" />
        </button>
      </div>
    </div>
  );
}
