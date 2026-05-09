import { FEATURES } from "@/data/loginData";

function FeatureItem({ icon: Icon, label, title }) {
  return (
    <li className="flex items-center gap-4 group">
      <div className="w-10 h-10 flex items-center justify-center bg-white/10 shrink-0 group-hover:bg-white/20 transition-colors">
        <Icon size={20} className="text-on-primary" />
      </div>
      <div>
        <p className="font-mono-label text-mono-label uppercase text-on-primary/60 mb-0.5">
          {label}
        </p>
        <p className="font-body-md text-body-md text-on-primary">{title}</p>
      </div>
    </li>
  );
}

export default function LoginMarketing() {
  return (
    <aside className="hidden lg:flex lg:w-1/2 relative bg-primary-container text-on-primary overflow-hidden border-r border-outline-variant items-center justify-center p-margin-page">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary opacity-20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-surface-tint opacity-10 blur-[100px]" />

      {/* Grid lines */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/4 border-r border-white/5 h-full" />
        <div className="w-1/4 border-r border-white/5 h-full" />
        <div className="w-1/4 border-r border-white/5 h-full" />
      </div>

      <div className="relative z-10">
        {/* Brand */}
        <div className="mb-12">
          <span className="font-headline-md text-headline-md font-semibold tracking-tighter text-on-primary">
            HirePilot AI
          </span>
        </div>

        {/* Badge */}
        <div className="inline-flex mb-8 items-center bg-white/5 border border-white/10 px-3 py-1">
          <span className="font-mono-label text-mono-label text-on-primary uppercase tracking-widest">
            AI-Powered Career Preparation
          </span>
        </div>

        <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">
          Welcome Back to HirePilot AI
        </h1>
        <p className="font-body-md text-body-md text-on-primary/70 mb-12 max-w-lg">
          Continue your journey toward better software engineering opportunities
          with AI-powered resume analysis, interview preparation, and
          personalized learning roadmaps.
        </p>

        {/* Feature list */}
        <ul className="space-y-6">
          {FEATURES.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
