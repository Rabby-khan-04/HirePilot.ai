export default function ContactHero() {
  return (
    <header className="relative pt-40 pb-section-padding px-margin-page text-center z-10">
      <div className="inline-block px-3 py-1 mb-8 bg-surface-container border border-outline-variant rounded-full">
        <span className="font-mono-label text-mono-label text-on-surface-variant flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          Usually responds within 24 hours
        </span>
      </div>

      <h1 className="font-display-xl text-display-xl text-primary mb-6 max-w-4xl mx-auto">
        Get In{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary/40">
          Touch
        </span>
      </h1>

      <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl mx-auto mb-4">
        Questions, feedback, feature requests, or support. We&apos;d love to
        hear from you.
      </p>

      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
        Whether you need help with AI analysis, learning roadmaps, or platform
        feedback, our team is here to help.
      </p>
    </header>
  );
}
