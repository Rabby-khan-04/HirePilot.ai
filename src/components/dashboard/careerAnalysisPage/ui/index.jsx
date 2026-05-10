"use client";

import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";
import {
  MdAutoAwesome,
  MdOutlineCheckCircleOutline,
  MdOutlineClose,
} from "react-icons/md";

// ─── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, description }) {
  return (
    <div className="space-y-3 mb-10">
      {tag && (
        <span className="inline-block px-3 py-1 bg-surface-container-high rounded-sm">
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
      className={`bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-10 shadow-sm relative overflow-hidden ${className}`}
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
  icon,
  iconColor = "text-primary",
  title,
  children,
}) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
        <h3 className="font-mono-label text-mono-label uppercase tracking-widest font-bold">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// ─── EmptyState ────────────────────────────────────────────────────────────────
export function EmptyState({ icon: ICON, title, description, children }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl" />

        <ICON size={45} className="text-primary/40 relative z-10" />
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
  if (matched) {
    return (
      <span className="flex items-center gap-2 px-4 py-2 bg-surface-container-high/50 text-primary rounded-lg text-body-md border border-outline-variant/20">
        <MdOutlineCheckCircleOutline size={18} />
        {skill}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 text-on-surface-variant rounded-lg text-body-md">
      <MdOutlineClose size={18} />
      {skill}
    </span>
  );
}

// ─── SeverityBadge ─────────────────────────────────────────────────────────────
const SEVERITY_STYLES = {
  high: "bg-error/10 text-error",
  medium: "bg-on-tertiary-container/10 text-on-tertiary-container",
  low: "bg-outline-variant text-on-surface-variant",
};

export function SeverityBadge({ priority }) {
  return (
    <span
      className={`px-3 py-1 rounded text-mono-label text-[10px] uppercase font-bold ${
        SEVERITY_STYLES[priority] ?? SEVERITY_STYLES.low
      }`}
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
      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700"
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
  nextIcon: ICON,
  nextDisabled,
}) {
  return (
    <div className="mt-12 flex items-center justify-between">
      {onBack ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-medium group"
        >
          <IoArrowBackOutline className="transition-transform group-hover:-translate-x-1" />
          {backLabel}
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`px-12 py-4 rounded-lg font-medium flex items-center gap-3 transition-all ${
          nextDisabled
            ? "bg-surface-container-highest text-on-surface-variant/40 cursor-not-allowed border border-outline-variant/20"
            : "bg-primary text-on-primary hover:opacity-90"
        }`}
      >
        {nextLabel}

        {<ICON /> ?? <IoArrowForwardSharp />}
      </button>
    </div>
  );
}

// ─── LoadingCard ───────────────────────────────────────────────────────────────
export function LoadingCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 space-y-4 animate-pulse">
      <div className="h-4 w-32 bg-outline-variant/30 rounded" />
      <div className="h-3 w-full bg-outline-variant/20 rounded" />
      <div className="h-3 w-3/4 bg-outline-variant/20 rounded" />
    </div>
  );
}

// ─── AIStatusLoader ────────────────────────────────────────────────────────────
export function AIStatusLoader({ message = "AI is processing..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <MdAutoAwesome size={24} />
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
