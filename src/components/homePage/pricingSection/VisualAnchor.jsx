import Image from "next/image";
import InfrastructureImg from "@/../public/assets/image/infrastructure.png";

export default function VisualAnchor() {
  return (
    <section className="px-margin-page mb-section-padding">
      <div className="relative h-100 w-full overflow-hidden border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src={InfrastructureImg}
          alt="High-tech server room representing HirePilot AI infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/60 to-transparent flex items-end p-gutter">
          <div className="text-inverse-on-surface max-w-xl">
            <span className="font-mono-label text-mono-label opacity-80 mb-2 block">
              INFRASTRUCTURE
            </span>
            <h2 className="font-headline-lg text-headline-md leading-tight">
              Engineered for your professional growth at scale.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
