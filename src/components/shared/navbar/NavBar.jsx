const NavBar = () => {
  return (
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
  );
};

export default NavBar;
