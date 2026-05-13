import { MdOpenInNew, MdLock } from "react-icons/md";

export default function ResumeProjects({ projects }) {
  if (!projects.length) return null;

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h4 className="font-headline-md text-xl font-semibold whitespace-nowrap">
          Featured Projects
        </h4>
        <div className="grow h-px bg-outline-variant" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary transition-colors group"
          >
            {/* Top row */}
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">
                Project
              </span>
              <MdOpenInNew
                size={18}
                className="text-on-surface-variant group-hover:text-primary transition-colors"
              />
            </div>

            {/* Name + description */}
            <h5 className="font-body-md font-bold mb-2">
              {project.name ?? "Untitled"}
            </h5>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              {project.description ?? "No description provided."}
            </p>

            {/* Tech stack */}
            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-label text-[10px] uppercase bg-surface-container px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
