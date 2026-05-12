import { AI_INSIGHT } from "@/data/roadmapDetailData";
import { LuArrowUpRight, LuSparkles } from "react-icons/lu";

export function AiInsightCard() {
  return (
    <div className="bg-primary text-on-primary p-8 shadow-sm relative overflow-hidden group rounded">
      <LuSparkles
        size={96}
        className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700"
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2">
          <LuSparkles size={16} />
          <span className="font-mono-label text-mono-label">AI Motivator</span>
        </div>
        <p className="font-headline-md text-xl leading-relaxed">
          {`"`}
          {AI_INSIGHT.quote}
          {`"`}
        </p>
        <button className="flex items-center gap-2 font-mono-label text-mono-label text-on-primary/70 hover:text-on-primary transition-colors group/btn">
          <span>{AI_INSIGHT.cta.toUpperCase()}</span>
          <LuArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
