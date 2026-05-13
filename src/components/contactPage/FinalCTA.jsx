import CtaBackgroundImg from "@/../public/assets/image/cta_background.png";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-section-padding px-margin-page overflow-hidden z-10">
      <div className="absolute inset-0 bg-primary-container -z-10">
        <Image
          className="w-full h-full object-cover opacity-20"
          src={CtaBackgroundImg}
          alt="Background"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display-xl text-4xl md:text-6xl text-on-primary mb-12">
          Start Improving Your Career With AI
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-on-primary text-primary px-10 py-4 font-mono rounded-lg hover:scale-105 transition-all w-full sm:w-auto">
            Get Started Free
          </button>

          <button className="border border-on-primary text-on-primary px-10 py-4 font-mono rounded-lg hover:bg-on-primary/10 transition-all w-full sm:w-auto">
            Try AI Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
