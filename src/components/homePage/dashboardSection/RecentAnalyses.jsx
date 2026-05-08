import { ANALYSES } from "@/data/dashboardPreviewData";
import { MdArrowForward } from "react-icons/md";

export default function RecentAnalyses() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 h-full rounded">
      <span className="font-mono-label text-mono-label text-on-surface-variant block mb-6">
        RECENT ANALYSES
      </span>

      <div className="space-y-4">
        {ANALYSES.map(({ role, company, match }) => (
          <div
            key={role}
            className="p-4 border border-outline-variant/20 hover:border-primary/20 transition-colors cursor-pointer group rounded"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-headline-md text-body-md font-bold">
                {role}
              </span>
              <span className="font-mono-detail text-mono-detail bg-surface-container px-2 py-0.5">
                {company}
              </span>
            </div>
            <div className="flex justify-between items-center text-mono-detail font-mono-detail text-on-surface-variant">
              <span>Match: {match}</span>
              <MdArrowForward
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 border border-primary py-3 font-mono-label text-mono-label hover:bg-primary hover:text-on-primary transition-all rounded">
        VIEW ALL ANALYSES
      </button>
    </div>
  );
}
