export default function HomePage() {
  return (
    <>
      <main className="pt-32 overflow-x-hidden">
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container-high/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20">
          <div className="flex justify-between items-center px-margin-page py-4 max-w-full mx-auto">
            <div className="text-headline-md font-headline-md font-bold tracking-tight text-primary dark:text-on-primary-fixed">
              HirePilot AI
            </div>

            <div className="hidden md:flex gap-gutter items-center">
              <a
                className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Features
              </a>

              <a
                className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                How it works
              </a>

              <a
                className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary px-4 py-2">
                Sign in
              </button>

              <button className="bg-primary text-on-primary font-mono-label text-mono-label px-6 py-2.5 rounded hover:opacity-90 active:scale-95 transition-all">
                Get Started Free
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-margin-page py-section-padding min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
            {/* Left Column */}
            <div className="md:col-span-6 flex flex-col justify-center space-y-grid-unit z-10">
              <div>
                <span className="inline-block bg-surface-container px-3 py-1 font-mono-label text-mono-label text-primary border border-outline-variant/50">
                  AI-powered career preparation platform
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl text-primary leading-tight pt-4">
                The AI platform for modern job seekers
              </h1>

              <h2 className="font-headline-lg text-headline-lg text-secondary-fixed-dim font-normal pt-2">
                The platform to get hired faster
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl py-8">
                Your AI-powered career copilot to analyze resumes, uncover skill
                gaps, prepare for interviews, and build personalized learning
                roadmaps for top software roles.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary text-on-primary font-headline-md text-body-md px-10 py-5 rounded flex items-center gap-2 hover:opacity-90 transition-all">
                  Get Started Free
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>

                <button className="border border-primary text-primary font-headline-md text-body-md px-10 py-5 rounded hover:bg-surface-container transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-6 relative flex items-center justify-center min-h-[600px]">
              {/* Background Visuals */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full border border-primary/40 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full border border-primary/60"></div>
                  </div>
                </div>
              </div>

              {/* Bento Layout */}
              <div className="relative w-full h-full max-w-2xl grid grid-cols-6 grid-rows-6 gap-card-gap">
                {/* Resume Score */}
                <div className="col-span-3 row-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono-label text-mono-label text-primary/60 uppercase">
                      Resume Score
                    </span>

                    <span className="material-symbols-outlined text-primary/40">
                      description
                    </span>
                  </div>

                  <div className="text-display-xl font-display-xl text-primary leading-none">
                    85
                    <span className="text-headline-md text-primary/40">
                      /100
                    </span>
                  </div>

                  <div className="mt-4 h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>

                {/* Skill Gap */}
                <div className="col-span-3 row-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
                  <div className="font-mono-label text-mono-label text-primary/60 uppercase mb-6">
                    Skill Gap Analysis
                  </div>

                  <div className="space-y-6">
                    {[
                      ["SYSTEM DESIGN", "82%"],
                      ["DATA STRUCTURES", "95%"],
                      ["CLOUD ARCHITECTURE", "45%"],
                      ["DISTRIBUTED SYSTEMS", "68%"],
                    ].map(([label, value]) => (
                      <div key={label} className="space-y-2">
                        <div className="flex justify-between font-mono-detail text-mono-detail">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>

                        <div className="h-2 bg-surface-variant rounded-full">
                          <div
                            className={`h-full ${
                              value === "45%" ? "bg-primary/40" : "bg-primary"
                            }`}
                            style={{ width: value }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interview Prep */}
                <div className="col-span-3 row-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="material-symbols-outlined text-primary/60"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      chat_bubble
                    </span>

                    <span className="font-mono-label text-mono-label text-primary/60 uppercase">
                      Interview Prep
                    </span>
                  </div>

                  <p className="font-body-md text-body-md italic text-on-surface">
                    "How would you optimize a high-traffic API that serves
                    real-time data?"
                  </p>
                </div>

                {/* Roadmap */}
                <div className="col-span-6 row-span-2 bg-primary text-on-primary p-6 rounded shadow-sm">
                  <div className="font-mono-label text-mono-label text-on-primary/60 uppercase mb-6">
                    Learning Roadmap
                  </div>

                  <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-on-primary/20 -translate-y-1/2 z-0"></div>

                    {[
                      ["Resume", true],
                      ["Skills", true],
                      ["Interviews", "active"],
                      ["Job Hunt", false],
                    ].map(([label, state]) => (
                      <div
                        key={label}
                        className="relative z-10 flex flex-col items-center gap-2"
                      >
                        {state === true && (
                          <div className="w-8 h-8 rounded-full bg-on-primary flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[18px]">
                              check
                            </span>
                          </div>
                        )}

                        {state === "active" && (
                          <div className="w-8 h-8 rounded-full bg-on-primary-fixed flex items-center justify-center text-primary animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                        )}

                        {state === false && (
                          <div className="w-8 h-8 rounded-full bg-on-primary/20 border border-on-primary/40 flex items-center justify-center text-on-primary/40"></div>
                        )}

                        <span
                          className={`font-mono-detail text-mono-detail ${
                            state === false
                              ? "opacity-40"
                              : state === "active"
                                ? "font-bold"
                                : ""
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-outline-variant/30 bg-surface py-12">
          <div className="px-margin-page max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            {[
              ["87%", "Better job-role matching"],
              ["4x", "Faster interview preparation"],
              ["10K+", "AI career analyses generated"],
              ["3x", "Structured learning paths"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="py-6 md:py-0 md:px-gutter flex flex-col gap-1"
              >
                <span className="font-headline-lg text-headline-md text-primary">
                  {value}
                </span>

                <span className="font-mono-detail text-mono-detail text-on-surface-variant uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="px-margin-page py-section-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
            {[
              [
                "Precision Analysis",
                "Resume Parsing Engine",
                "Our deep-learning models dissect your experience against 50k+ job descriptions to find exact match percentages.",
              ],
              [
                "Adaptive Learning",
                "Personalized Roadmaps",
                "We don't just find gaps; we fill them with curated resources and daily engineering challenges tailored to you.",
              ],
              [
                "Simulation Lab",
                "Mock Interview AI",
                "Practice with our conversational AI that specializes in behavioral and technical system design rounds.",
              ],
            ].map(([tag, title, desc]) => (
              <div key={title} className="md:col-span-4">
                <div className="h-full border-l border-primary/20 pl-6 py-4">
                  <span className="font-mono-label text-mono-label text-primary/40 uppercase block mb-4">
                    {tag}
                  </span>

                  <h3 className="font-headline-md text-headline-md mb-4">
                    {title}
                  </h3>

                  <p className="text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Visual */}
          <div className="w-full h-[500px] border border-outline-variant bg-surface-container relative overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover grayscale opacity-30"
              alt="AI research environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSZHqj6q3I-rfiK0qUkocZ1-h6KMFrFAAA_qLsQpuqQk_Wb8jyS9R-NCJgDb55uQ0PB7sM6kr5lYhinhg2j3cHGoL9JkPUqAaKU6Ay5wz0_Eo7cvqA7QcdHL1Fxe_BG_MvBLBrzqpKax1TnBXFYSAwm6cfY6MIrmR4JDOfjUmOeKj-Umsad-fGIwtQ-e6pkZVYqfYZK2LX_CAhgo_iN8DsRBCtu5jIKza2JwuH51r7a6PbvAUZ06t1O1sHg6MtZ3_5aPzxKoBwYmQ"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>

            <div className="absolute flex flex-col items-center text-center">
              <div className="bg-primary p-4 rounded-full mb-6">
                <span
                  className="material-symbols-outlined text-on-primary text-[48px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  deployed_code
                </span>
              </div>

              <h2 className="font-display-xl text-headline-lg max-w-2xl">
                Engineered for the 1% of technical talent.
              </h2>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface dark:bg-surface-dim border-t border-outline-variant/50 dark:border-outline/30 mt-section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-page py-grid-unit gap-gutter max-w-full mx-auto h-32">
          <div className="font-headline-md text-headline-md text-primary dark:text-on-primary-fixed">
            HirePilot AI
          </div>

          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Contact", "Careers"].map(
              (item) => (
                <a
                  key={item}
                  className="font-mono-detail text-mono-detail text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="font-mono-detail text-mono-detail text-on-surface-variant">
            © 2024 HirePilot AI. Precision Engineering for Modern Careers.
          </div>
        </div>
      </footer>
    </>
  );
}
