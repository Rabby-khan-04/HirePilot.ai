"use client";

import { MdSecurity, MdPsychology } from "react-icons/md";

const TRUST_ITEMS = [
  {
    icon: MdSecurity,
    title: "Your Data Stays Secure",
    description:
      "We utilize enterprise-grade encryption and anonymized data processing to ensure your professional history remains private and secure at all times.",
  },
  {
    icon: MdPsychology,
    title: "Modern AI Workflows",
    description:
      "Powered by custom-tuned LLMs and proprietary career datasets to provide accuracy that standard AI assistants simply can't match.",
  },
];

export default function AboutTechTrust() {
  return (
    <section className="px-margin-page py-section-padding grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {TRUST_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="p-10 border border-outline-variant/30 rounded-lg space-y-4"
          >
            <Icon className="text-primary text-3xl" />
            <h3 className="font-headline-md text-headline-md">{item.title}</h3>
            <p className="text-on-surface-variant">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
}
