export default function ResumeDetailHero({ resume }) {
  const { isLatest, parsedData } = resume;

  const skillsCount = parsedData?.skills?.length ?? 0;
  const experienceCount = parsedData?.experience?.length ?? 0;
  const projectsCount = parsedData?.projects?.length ?? 0;

  return (
    <section className="px-gutter pt-12 pb-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hero card */}
        <div className="relative bg-surface-container-lowest border border-outline-variant p-8 rounded-xl flex-1 overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {isLatest && (
                <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-3 py-1 rounded-full font-mono-label text-[10px] uppercase mb-4">
                  ✦ Latest Version
                </div>
              )}
              <h3 className="font-headline-lg text-3xl font-semibold mb-2">
                {resume.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-md leading-relaxed">
                Your resume has been processed through HirePilot{"'"}s core
                intelligence engine. We{"'"}ve identified high-impact metrics
                across your technical history.
              </p>
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
            <span className="text-[120px] leading-none">✦</span>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 md:w-1/3">
          {[
            { label: "Skills", value: skillsCount },
            { label: "Roles", value: experienceCount },
            { label: "Projects", value: projectsCount },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-center items-center text-center"
            >
              <span className="font-mono-label text-[10px] text-on-surface-variant uppercase mb-2">
                {label}
              </span>
              <span className="font-headline-md text-2xl font-semibold">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
