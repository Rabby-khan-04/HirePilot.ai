import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function TestimonialCard({ name, role, avatar, quote }) {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="h-full bg-surface-container-lowest border border-outline-variant/50 p-8 flex flex-col hover:bg-surface-container-low transition-colors duration-300 rounded">
        {/* Author */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container shrink-0">
            <Image
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-headline-md text-[18px] leading-tight text-primary">
              {name}
            </h4>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant uppercase tracking-wider">
              {role}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="relative">
          <FaQuoteLeft
            size={32}
            className="absolute -top-2 -left-1 text-outline-variant/30"
          />
          <p className="font-body-md text-body-md text-on-surface italic relative z-10 pl-2">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}
