"use client";

const COMPARISONS = [
  { traditional: "Static Templates", hirepilot: "Dynamic AI Optimization" },
  { traditional: "Generic Keywords", hirepilot: "Semantic Role Mapping" },
  {
    traditional: "No Learning Support",
    hirepilot: "Integrated Skill Roadmaps",
  },
];

export default function AboutComparison() {
  return (
    <section className="px-margin-page py-section-padding bg-surface-container-lowest">
      <div className="border border-outline-variant/30 rounded-xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-2 bg-primary text-on-primary p-6">
          <div className="font-mono-label text-mono-label uppercase tracking-widest text-center">
            Traditional Tools
          </div>
          <div className="font-mono-label text-mono-label uppercase tracking-widest text-center border-l border-on-primary/20">
            HirePilot AI
          </div>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {COMPARISONS.map((row) => (
            <div
              key={row.traditional}
              className="grid grid-cols-2 p-8 items-center text-center"
            >
              <p className="text-on-surface-variant italic">
                {row.traditional}
              </p>
              <p className="font-bold border-l border-outline-variant/20 h-full flex items-center justify-center">
                {row.hirepilot}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
