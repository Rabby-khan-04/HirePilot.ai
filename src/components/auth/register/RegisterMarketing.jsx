import { FEATURES } from "@/data/registerData";

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/20 transition-colors">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <span className="font-mono-label text-mono-label text-white block mb-1">
          {title}
        </span>
        <span className="text-white/50 text-xs">{description}</span>
      </div>
    </div>
  );
}

export default function RegisterMarketing() {
  return (
    <aside className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-tertiary-container text-white p-margin-page flex-col justify-between overflow-hidden border-r border-outline-variant/20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Brand */}
      <div className="relative z-10">
        <span className="font-headline-md text-headline-md font-semibold tracking-tighter text-white">
          HirePilot AI
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 mb-gutter">
          <span className="font-mono-label text-mono-label text-white uppercase tracking-widest">
            Start Your AI Career Journey
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-white mb-6">
          Create Your HirePilot AI Account
        </h1>
        <p className="font-body-md text-body-md text-white/70 mb-12 leading-relaxed">
          Analyze resumes, prepare for interviews, identify skill gaps, and
          follow AI-generated roadmaps designed to help you land better tech
          jobs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
          {FEATURES.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
      </div>

      {/* Left side footer */}
      <div className="relative z-10 pt-12 border-t border-white/5 mt-12">
        <span className="font-mono-detail text-mono-detail text-white/40">
          © 2024 HirePilot AI. Precision-Engineered Careers.
        </span>
      </div>
    </aside>
  );
}
