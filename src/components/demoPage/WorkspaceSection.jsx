"use client";

import { useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiChevronDown,
  FiInfo,
} from "react-icons/fi";

const resumes = [
  {
    key: "frontend",
    icon: <FiCode size={24} />,
    label: "Frontend",
    sub: "React/TypeScript",
  },
  {
    key: "backend",
    icon: <FiDatabase size={24} />,
    label: "Backend",
    sub: "Node.js/Python",
  },
  {
    key: "fullstack",
    icon: <FiLayers size={24} />,
    label: "Full Stack",
    sub: "MERN/Next.js",
  },
];

export default function WorkspaceSection() {
  const [selected, setSelected] = useState("frontend");

  return (
    <section className="px-margin-page py-16 border-t border-outline-variant/30 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Resume Selection */}
        <div className="space-y-6">
          <label className="font-mono-label text-mono-label text-on-surface-variant uppercase">
            01. Sample Resume Selection
          </label>
          <div className="grid grid-cols-3 gap-4">
            {resumes.map((r) => (
              <button
                key={r.key}
                onClick={() => setSelected(r.key)}
                className={`p-6 border text-left transition-all rounded shadow-sm ${
                  selected === r.key
                    ? "border-primary bg-surface-container-lowest"
                    : "border-outline-variant bg-surface-container-lowest hover:border-primary"
                }`}
              >
                <span
                  className={`mb-2 block ${selected === r.key ? "text-primary" : "text-on-surface-variant"}`}
                >
                  {r.icon}
                </span>
                <span className="font-body-md font-semibold block">
                  {r.label}
                </span>
                <span className="text-xs text-on-surface-variant">{r.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Job Role Selection */}
        <div className="space-y-6">
          <label className="font-mono-label text-mono-label text-on-surface-variant uppercase">
            02. Target Job Role
          </label>
          <div className="relative group">
            <select className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-6 appearance-none font-headline-md text-headline-md focus:border-primary focus:outline-none transition-all cursor-pointer">
              <option>Senior Frontend Engineer</option>
              <option>Node.js Backend Architect</option>
              <option>Full Stack Developer</option>
              <option>Engineering Manager</option>
            </select>
            <FiChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
              size={20}
            />
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <FiInfo size={16} />
            <p className="font-mono-detail text-mono-detail">
              Simulating match analysis for a Tier-1 tech company requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
