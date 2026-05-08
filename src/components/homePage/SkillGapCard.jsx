const SKILLS = [
  { label: "SYSTEM DESIGN", value: "82%" },
  { label: "DATA STRUCTURES", value: "95%" },
  { label: "CLOUD ARCHITECTURE", value: "45%" },
  { label: "DISTRIBUTED SYSTEMS", value: "68%" },
];

export default function SkillGapCard() {
  return (
    <div className="col-span-3 row-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
      <div className="font-mono-label text-mono-label text-primary/60 uppercase mb-6">
        Skill Gap Analysis
      </div>

      <div className="space-y-6">
        {SKILLS.map(({ label, value }) => (
          <div key={label} className="space-y-2">
            <div className="flex justify-between font-mono-detail text-mono-detail">
              <span>{label}</span>
              <span>{value}</span>
            </div>

            <div className="h-2 bg-surface-variant rounded-full">
              <div
                className={`h-full ${value === "45%" ? "bg-primary/40" : "bg-primary"}`}
                style={{ width: value }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
