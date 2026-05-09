import FaqAccordion from "./FaqAccordion";
import FaqBento from "./FaqBento";
import { BsFillQuestionSquareFill } from "react-icons/bs";

export default function FaqSection() {
  return (
    <section className="px-margin-page py-section-padding">
      {/* Header */}
      <div className="mb-24 grid grid-cols-12 gap-gutter items-end">
        <div className="col-span-12 md:col-span-8 border-l border-primary/20 pl-8">
          <span className="font-mono-label text-mono-label text-primary/40 uppercase mb-4 block">
            Information Support
          </span>
          <h1 className="font-headline-lg text-headline-lg mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Everything You Need to Know About HirePilot AI and how we help
            engineering your modern career success with precision.
          </p>
        </div>

        {/* Support callout */}
        <div className="col-span-12 md:col-span-4 flex justify-end">
          <div className="bg-surface-container-low p-6 border border-outline-variant/30 max-w-xs">
            <BsFillQuestionSquareFill size={24} className="text-primary mb-4" />
            <p className="font-mono-detail text-mono-detail text-on-surface-variant">
              Still have questions? Reach out to our engineering support team
              for direct assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <FaqAccordion />

      {/* Bento footer */}
      <FaqBento />
    </section>
  );
}
