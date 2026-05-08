import { SKILL_GROUPS } from "@/data/dashboardPreviewData";
import { MdMoreHoriz } from "react-icons/md";

export default function SkillGaps() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded">
      <div className="flex justify-between items-center mb-8">
        <span className="font-mono-label text-mono-label text-on-surface-variant">
          SKILL GAP OVERVIEW
        </span>
        <MdMoreHoriz size={20} className="text-on-surface-variant" />
      </div>

      <div className="space-y-6">
        {SKILL_GROUPS.map((group, i) => (
          <div key={group.priority}>
            <div className="flex gap-6 items-start">
              <div
                className={`w-32 font-mono-detail text-mono-detail mt-1 ${group.priorityClass}`}
              >
                {group.priority}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-surface-container-lower px-3 py-1 font-mono-detail text-mono-detail"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            {i < SKILL_GROUPS.length - 1 && (
              <div className="h-px bg-outline-variant/20 w-full mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
