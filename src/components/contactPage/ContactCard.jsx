import { ReactNode } from "react";

export default function ContactCard({
  icon,
  label,
  title,
  description,
  footer,
}) {
  return (
    <div className="glass-card p-gutter rounded-lg transition-all duration-300 hover:border-primary hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg mb-6 text-2xl">
        {icon}
      </div>

      <div className="font-mono-label text-mono-label text-on-surface-variant mb-2">
        {label}
      </div>

      <h3 className="font-headline-md text-2xl mb-4">{title}</h3>

      <p className="font-body-md text-on-surface-variant mb-6">{description}</p>

      <div className="pt-4 border-t border-outline-variant font-mono-detail text-mono-detail text-on-surface-variant">
        {footer}
      </div>
    </div>
  );
}
