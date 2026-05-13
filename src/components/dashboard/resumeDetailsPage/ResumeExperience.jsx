export default function ResumeExperience({ experience }) {
  if (!experience.length) return null;

  return (
    <section>
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-8">
        <h4 className="font-headline-md text-xl font-semibold whitespace-nowrap">
          Professional Experience
        </h4>
        <div className="grow h-px bg-outline-variant" />
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant">
        {experience.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <div
              className={`absolute -left-6.75 top-1.5 w-3 h-3 rounded-full border-4 border-surface shadow-sm ${
                i === 0 ? "bg-primary" : "bg-outline-variant"
              }`}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
              <div>
                <h5 className="font-body-md font-bold text-primary">
                  {exp.role ?? "Role"}
                </h5>
                <span className="font-mono-label text-[11px] text-on-surface-variant">
                  {exp.company ?? "Company"}
                </span>
              </div>
            </div>

            {/* Descriptions */}
            {exp.description?.length > 0 && (
              <ul className="space-y-3">
                {exp.description.map((point, j) => (
                  <li
                    key={j}
                    className="font-body-md text-sm text-on-surface-variant flex gap-3"
                  >
                    <span className="text-primary mt-1 shrink-0 text-xs">
                      ›
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
