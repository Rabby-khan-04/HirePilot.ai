import { BOTTOM_HIGHLIGHTS } from "@/data/priceData";

export default function PricingHighlights() {
  return (
    <div className="mt-24 pt-12 border-t border-outline-variant flex flex-wrap justify-between gap-gutter">
      {BOTTOM_HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
        <div key={label} className="flex items-center gap-4 min-w-[200px]">
          <Icon size={20} className="text-primary shrink-0" />
          <div>
            <span className="font-mono-label text-mono-label block uppercase">
              {label}
            </span>
            <span className="font-mono-detail text-mono-detail text-on-surface-variant">
              {sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
