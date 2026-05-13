"use client";

const AUDIENCE = [
  "Frontend Engineers",
  "Backend Architects",
  "Full Stack Devs",
  "Junior Talent",
  "Career Switchers",
];

export default function AboutAudience() {
  return (
    <section className="px-margin-page py-section-padding">
      <div className="space-y-12">
        <h2 className="font-headline-lg text-headline-lg text-center">
          Designed For Developers At Every Stage
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {AUDIENCE.map((role) => (
            <div
              key={role}
              className="px-8 py-4 border border-outline-variant/30 rounded-full font-mono-label text-mono-label hover:bg-primary hover:text-on-primary transition-all cursor-default"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
