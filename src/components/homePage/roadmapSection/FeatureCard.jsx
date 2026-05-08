import { FaCheck } from "react-icons/fa6";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
}) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 hover:bg-surface transition-colors rounded">
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-primary shrink-0" />
        <h3 className="font-headline-md text-body-md font-bold">{title}</h3>
      </div>
      <p className="font-body-md text-on-surface-variant text-[14px] mb-6">
        {description}
      </p>
      {bullets && (
        <ul className="space-y-3">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-mono-detail text-mono-detail text-on-surface"
            >
              <FaCheck size={12} className="text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
