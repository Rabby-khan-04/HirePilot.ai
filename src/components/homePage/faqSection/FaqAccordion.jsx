"use client";

import { FAQ_ITEMS } from "@/data/faqData";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map(({ question, answer }, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={question}
            className="border-b border-outline-variant/50 pb-4"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-4 text-left group cursor-pointer"
            >
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {question}
              </h3>
              <LuChevronDown
                size={20}
                className={`text-outline shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pb-6">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
