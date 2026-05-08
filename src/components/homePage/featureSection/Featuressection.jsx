import Image from "next/image";
import ResearchEnvironmentImg from "@/../public/assets/image/research_environment.png";
import { PiCodesandboxLogo } from "react-icons/pi";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <section className="px-margin-page pt-section-padding">
      <Features />
      {/* Wide Visual */}
      <div className="w-full h-125 border border-outline-variant bg-surface-container relative overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full object-cover grayscale opacity-30"
          alt="AI research environment"
          src={ResearchEnvironmentImg}
        />

        <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent"></div>

        <div className="absolute flex flex-col items-center text-center">
          <div className="bg-primary p-4 rounded-full mb-6">
            <span className="text-on-primary text-[48px]">
              <PiCodesandboxLogo />
            </span>
          </div>

          <h2 className="font-display-xl text-headline-lg max-w-2xl">
            Engineered for the 1% of technical talent.
          </h2>
        </div>
      </div>
    </section>
  );
}
