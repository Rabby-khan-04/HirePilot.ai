import { PRICING_TIERS } from "@/data/priceData";
import PricingCard from "./PricingCard";
import PricingHighlights from "./PricingHighlights";
import VisualAnchor from "./VisualAnchor";

export default function PricingSection() {
  return (
    <>
      <section className="py-section-padding px-margin-page">
        {/* Header */}
        <div className="mb-16 max-w-3xl border-l border-primary/20 pl-8">
          <span className="font-mono-label text-mono-label text-primary/40 uppercase mb-4 block">
            Preparation Tiers
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-6">
            Simple Pricing for Smarter Career Preparation
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Choose the plan that fits your preparation journey. Start free and
            upgrade when you{"'"}re ready for advanced AI-powered career tools.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>

        <PricingHighlights />
      </section>

      <VisualAnchor />
    </>
  );
}
