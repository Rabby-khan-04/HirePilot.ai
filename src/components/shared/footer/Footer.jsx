export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface-dim border-t border-outline-variant/50 dark:border-outline/30">
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
  );
}
