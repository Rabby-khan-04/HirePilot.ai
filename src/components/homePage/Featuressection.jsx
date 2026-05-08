import Image from "next/image";
import ResearchEnvironmentImg from "@/../public/assets/image/research_environment.png";
import { PiCodesandboxLogo } from "react-icons/pi";

const FEATURES = [
  {
    tag: "Precision Analysis",
    title: "Resume Parsing Engine",
    desc: "Our deep-learning models dissect your experience against 50k+ job descriptions to find exact match percentages.",
  },
  {
    tag: "Adaptive Learning",
    title: "Personalized Roadmaps",
    desc: "We don't just find gaps; we fill them with curated resources and daily engineering challenges tailored to you.",
  },
  {
    tag: "Simulation Lab",
    title: "Mock Interview AI",
    desc: "Practice with our conversational AI that specializes in behavioral and technical system design rounds.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-margin-page py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
        {FEATURES.map(({ tag, title, desc }) => (
          <div key={title} className="md:col-span-4">
            <div className="h-full border-l border-primary/20 pl-6 py-4">
              <span className="font-mono-label text-mono-label text-primary/40 uppercase block mb-4">
                {tag}
              </span>

              <h3 className="font-headline-md text-headline-md mb-4">
                {title}
              </h3>

              <p className="text-on-surface-variant">{desc}</p>
            </div>
          </div>
        ))}
      </div>

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
