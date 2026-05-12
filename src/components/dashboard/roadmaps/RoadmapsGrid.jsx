"use client";

import RoadmapCard from "./RoadmapCard";
import CreateRoadmapCard from "./CreateRoadmapCard";
import { MdOutlineMap } from "react-icons/md";

function EmptySearchState({ search }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
        <MdOutlineMap size={32} className="text-on-surface-variant" />
      </div>
      <p className="font-headline-md text-headline-md text-on-surface-variant">
        No roadmaps found for &quot;{search}&quot;
      </p>
      <p className="font-mono-detail text-mono-detail text-on-surface-variant">
        Try a different search term or clear the filters
      </p>
    </div>
  );
}

export default function RoadmapsGrid({ roadmaps, search }) {
  const hasResults = roadmaps.length > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap mt-12">
      {!hasResults && search ? (
        <EmptySearchState search={search} />
      ) : (
        <>
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap._id} roadmap={roadmap} />
          ))}
          <CreateRoadmapCard />
        </>
      )}
    </div>
  );
}
