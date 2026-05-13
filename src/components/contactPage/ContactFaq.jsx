"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const questions = [
  {
    q: "How does AI resume analysis work?",
    a: "Our AI scans your resume against industry benchmarks and job descriptions, identifying skill gaps, formatting issues, and areas of strength. Results are delivered in seconds with actionable insights.",
  },
  {
    q: "Is my resume data private?",
    a: "Absolutely. Your resume is encrypted at rest and in transit. We never share your data with third parties, and you can delete it at any time from your dashboard.",
  },
  {
    q: "Can I regenerate learning roadmaps?",
    a: "Yes — you can regenerate your roadmap as many times as you like. Update your target role or skills, and the AI will produce a fresh, personalized plan instantly.",
  },
  {
    q: "Do I need a job description for analysis?",
    a: "No, but it helps. Without one, the AI benchmarks your resume against general industry standards. With a job description, the analysis becomes highly targeted to that specific role.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="lg:w-1/3">
      <h2 className="font-headline-lg text-headline-lg mb-8">
        Common Questions
      </h2>
      <div className="space-y-0">
        {questions.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="border-b border-outline-variant">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left py-6 flex justify-between items-center gap-4 cursor-pointer group"
              >
                <h4
                  className={`font-headline-md text-xl transition-colors duration-200 ${
                    isOpen ? "text-primary" : "group-hover:text-primary"
                  }`}
                >
                  {item.q}
                </h4>
                <span
                  className={`shrink-0 text-primary transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <FiPlus size={20} />
                </span>
              </button>

              {/* Animated answer panel */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-body-md text-on-surface-variant pb-6 pr-8">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-surface-container rounded-lg">
        <p className="font-mono-detail text-mono-detail text-on-surface-variant">
          &ldquo;We typically respond within 24–48 hours depending on request
          volume.&rdquo;
        </p>
      </div>
    </div>
  );
}
