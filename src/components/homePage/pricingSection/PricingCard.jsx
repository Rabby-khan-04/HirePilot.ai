import { FaCheck } from "react-icons/fa6";

export default function PricingCard({
  tier,
  icon: Icon,
  name,
  price,
  priceUnit,
  featured,
  cta,
  features,
}) {
  if (featured) {
    return (
      <div className="relative bg-primary text-on-primary p-gutter flex flex-col justify-between rounded">
        <div className="absolute -top-4 right-gutter bg-surface-container text-primary font-mono-label text-mono-label px-3 py-1 border border-primary rounded">
          MOST POPULAR
        </div>
        <div>
          <div className="flex justify-between items-start mb-8">
            <span className="font-mono-label text-mono-label text-primary-fixed-dim">
              {tier}
            </span>
            <Icon size={20} className="text-on-primary" />
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">{name}</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="font-display-xl text-headline-md font-bold">
              {price}
            </span>
            {priceUnit && (
              <span className="font-mono-detail text-mono-detail opacity-70">
                {priceUnit}
              </span>
            )}
          </div>
          <ul className="space-y-4 mb-12">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 font-body-md text-body-md"
              >
                <FaCheck size={14} className="shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-surface-container-lowest text-primary py-4 font-mono-label text-mono-label hover:bg-surface-dim transition-all active:scale-95 rounded cursor-pointer">
          {cta}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-gutter flex flex-col justify-between hover:shadow-sm transition-shadow rounded">
      <div>
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono-label text-mono-label bg-surface-container px-2 py-1">
            {tier}
          </span>
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="font-headline-md text-headline-md mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span className="font-display-xl text-headline-md font-bold text-primary">
            {price}
          </span>
          {priceUnit && (
            <span className="font-mono-detail text-mono-detail text-on-surface-variant">
              {priceUnit}
            </span>
          )}
        </div>
        <ul className="space-y-4 mb-12">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 font-body-md text-body-md text-on-surface-variant"
            >
              <FaCheck size={14} className="text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full border border-primary text-primary py-4 font-mono-label text-mono-label hover:bg-primary hover:text-on-primary transition-all active:scale-95 rounded cursor-pointer">
        {cta}
      </button>
    </div>
  );
}
