"use client";

import { MdVerified } from "react-icons/md";

export default function MatchedSkillsSection({ skills = [] }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <MdVerified size={24} className="text-primary" />
        <h2 className="font-headline-md text-[24px]">
          Matched Core Competencies
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-surface-container-high px-4 py-2 rounded-lg font-mono-detail text-primary border border-outline-variant flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
