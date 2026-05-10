import { MdAutoAwesome } from "react-icons/md";
import { GoArrowLeft, GoArrowRight, GoCheckCircle, GoX } from "react-icons/go";

// ─── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, description }) {
  return (
    <div className="space-y-3 mb-10">
      {tag && (
        <span className="inline-block px-3 py-1 bg-surface-container-high">
          <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
            {tag}
          </span>
        </span>
      )}
      <h2 className="font-headline-lg text-headline-lg text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-on-surface-variant text-body-md leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}

// ─── StepContainer ─────────────────────────────────────────────────────────────
export function StepContainer({ children, className = "" }) {
  return (
    <div
      className={`bg-surface-container-lowest border border-outline-variant/30 p-10 shadow-sm relative overflow-hidden rounded ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── AnalyticsCard ─────────────────────────────────────────────────────────────
export function AnalyticsCard({
  icon: Icon,
  iconClass = "text-primary",
  title,
  children,
}) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 space-y-6 rounded-3xl">
      <div className="flex items-center gap-3">
        <Icon size={20} className={iconClass} />
        <h3 className="font-mono-label text-mono-label uppercase tracking-widest font-bold">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// ─── EmptyState ────────────────────────────────────────────────────────────────
export function EmptyState({ icon: Icon, title, description, children }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5 blur-xl" />
        <Icon size={45} className="text-primary/40 relative z-10" />
      </div>
      <div className="space-y-2 max-w-sm">
        <h3 className="font-headline-md text-headline-md text-primary/40">
          {title}
        </h3>
        {description && (
          <p className="text-on-surface-variant text-body-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

// ─── SkillTag ──────────────────────────────────────────────────────────────────
export function SkillTag({ skill, matched = false }) {
  return matched ? (
    <span className="flex items-center gap-2 px-4 py-2 bg-surface-container-high/50 text-primary border border-outline-variant/20 text-body-md">
      <GoCheckCircle size={16} />
      {skill}
    </span>
  ) : (
    <span className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 text-on-surface-variant text-body-md">
      <GoX size={16} />
      {skill}
    </span>
  );
}

// ─── SeverityBadge ─────────────────────────────────────────────────────────────
const SEVERITY_STYLES = {
  high: "bg-error/10 text-error",
  medium: "bg-primary/10 text-primary",
  low: "bg-outline-variant/30 text-on-surface-variant",
};

export function SeverityBadge({ priority }) {
  return (
    <span
      className={`px-3 py-1 font-mono-label text-[10px] uppercase font-bold ${SEVERITY_STYLES[priority] ?? SEVERITY_STYLES.low}`}
    >
      {priority} Priority
    </span>
  );
}

// ─── ProgressBar ───────────────────────────────────────────────────────────────
export function ProgressBar({ label, value }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="font-mono-label text-mono-label uppercase">
          {label}
        </span>
        <span className="font-headline-md text-headline-md leading-none">
          {value}%
        </span>
      </div>
      <div className="h-2 w-full bg-surface-container overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ─── WorkflowActions ───────────────────────────────────────────────────────────
export function WorkflowActions({
  onBack,
  backLabel,
  onNext,
  nextLabel,
  nextIcon: Icon,
  nextDisabled,
  loading,
}) {
  return (
    <div className="mt-12 flex items-center justify-between">
      {onBack ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-medium group"
        >
          <GoArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {backLabel}
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        disabled={nextDisabled || loading}
        className="px-12 py-4 font-medium flex items-center gap-3 transition-all bg-primary text-on-primary hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed rounded"
      >
        {loading ? "Processing..." : nextLabel}
        {!loading && (Icon ? <Icon size={18} /> : <GoArrowRight size={18} />)}
      </button>
    </div>
  );
}

// ─── AIStatusLoader ────────────────────────────────────────────────────────────
export function AIStatusLoader({ message = "AI is processing..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 ">
      <div className="relative w-16 h-16 rounded overflow-hidden">
        <div className="absolute inset-0 border-2 border-primary/20" />
        <div className="absolute inset-0 border-2 border-primary border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <MdAutoAwesome size={24} className="text-primary" />
        </div>
      </div>
      <div className="text-center space-y-1">
        <p className="font-mono-label text-mono-label uppercase tracking-widest text-primary">
          {message}
        </p>
        <p className="text-on-surface-variant text-body-md">
          This usually takes a few seconds
        </p>
      </div>
    </div>
  );
}

// ─── LoadingCard ───────────────────────────────────────────────────────────────
export function LoadingCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 space-y-4 animate-pulse">
      <div className="h-4 w-32 bg-outline-variant/30" />
      <div className="h-3 w-full bg-outline-variant/20" />
      <div className="h-3 w-3/4 bg-outline-variant/20" />
    </div>
  );
}

// ─── Accordion (shared by AnalysisStep + RoadmapStep) ─────────────────────────
export function Accordion({ trigger, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-outline-variant/30 overflow-hidden hover:border-primary/30 transition-all rounded">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
      >
        {trigger}
        <LuChevronDown
          size={18}
          className={`text-on-surface-variant shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

// missing imports for Accordion
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
