const RoadmapStats = ({ duration = 4, days = 24, totalTasks = 35 }) => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm rounded">
      <span className="font-mono-label text-mono-label text-on-surface-variant mb-6 block">
        ROADMAP STATS
      </span>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center py-4 border border-outline-variant/30 rounded">
          <p className="text-2xl font-semibold">{duration}</p>
          <p className="text-mono-detail font-mono-detail opacity-50 uppercase text-[10px]">
            Weeks
          </p>
        </div>
        <div className="text-center py-4 border border-outline-variant/30 rounded">
          <p className="text-2xl font-semibold">{days}</p>
          <p className="text-mono-detail font-mono-detail opacity-50 uppercase text-[10px]">
            Days
          </p>
        </div>
        <div className="text-center py-4 border border-outline-variant/30 rounded">
          <p className="text-2xl font-semibold">{totalTasks}</p>
          <p className="text-mono-detail font-mono-detail opacity-50 uppercase text-[10px]">
            Tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStats;
