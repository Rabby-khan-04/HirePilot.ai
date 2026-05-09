import { BOTTOM_HIGHLIGHTS, TESTIMONIALS } from "@/data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="px-margin-page py-section-padding border-b border-outline-variant">
      {/* Header */}
      <div className="mb-16 max-w-3xl border-l border-primary/20 pl-8">
        <span className="font-mono-label text-mono-label text-primary/40 uppercase mb-4 block">
          Testimonials
        </span>
        <h2 className="font-headline-lg text-headline-lg mb-6">
          Developers Preparing Smarter with HirePilot AI
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Thousands of developers use HirePilot AI to understand job
          requirements, improve their resumes, and prepare for interviews with
          confidence.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-12 gap-gutter items-stretch">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>

      {/* Bottom Highlights */}
      <div className="mt-24 pt-12 border-t border-outline-variant grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {BOTTOM_HIGHLIGHTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={16} className="text-primary shrink-0" />
            <span className="font-mono-label text-mono-label text-primary">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
