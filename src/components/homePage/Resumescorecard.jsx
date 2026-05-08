import { MdOutlineDescription } from "react-icons/md";
export default function ResumeScoreCard() {
  return (
    <div className="col-span-3 row-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono-label text-mono-label text-primary/60 uppercase">
          Resume Score
        </span>

        <span className="material-symbols-outlined text-primary/40">
          <MdOutlineDescription size={24} />
        </span>
      </div>

      <div className="text-display-xl font-display-xl text-primary leading-none">
        85
        <span className="text-headline-md text-primary/40">/100</span>
      </div>

      <div className="mt-4 h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
        <div className="h-full bg-primary w-[85%]"></div>
      </div>
    </div>
  );
}
