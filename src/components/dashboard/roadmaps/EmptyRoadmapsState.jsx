import { MdOutlineMap } from "react-icons/md";

export function EmptyRoadmapsState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdOutlineMap size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant text-center">
        No roadmaps yet
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant/60 text-center">
        Generate your first learning roadmap to get started
      </p>
    </div>
  );
}
