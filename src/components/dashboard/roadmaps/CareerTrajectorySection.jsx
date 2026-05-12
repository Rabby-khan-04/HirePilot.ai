import { TRAJECTORY_STATS } from "@/data/roadmapMockData";
import Image from "next/image";
import { MdSchema } from "react-icons/md";

export default function CareerTrajectorySection() {
  return (
    <section className="mt-24 pt-16 border-t border-outline-variant/30 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter min-h-70 lg:h-100">
        {/* Left: Stats */}
        <div className="lg:col-span-8 lg:pr-12">
          <h4 className="font-mono-label text-[12px] uppercase tracking-[0.3em] text-on-surface-variant mb-6">
            Active Career Trajectory
          </h4>
          <div className="space-y-4">
            {TRAJECTORY_STATS.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4 md:gap-6">
                <span className="font-mono-detail text-[11px] w-20 md:w-24 shrink-0 uppercase">
                  {label}
                </span>
                <div className="flex-1 h-px bg-outline-variant/20" />
                <span className="font-mono-detail text-[11px] opacity-60 text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="lg:col-span-4 lg:border-l border-outline-variant/30 lg:p-8">
          <div className="h-full w-full bg-surface-container-low rounded-lg p-4 relative min-h-50">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiRllgpgIu6strM8f74cXFh71fyYl-C5VjltjH8Ufi6mTV0Ql4HNAv18yYmetiim3aW8-zUjCnoQfQZRUefcRJ6jHV5Ejk4Y6cfcCa7-OUSdKKZ7AKdHKGcBFgt-0kvsN4oSAtvO5gFPMrY4fGoJdNa5HOS0Q3jLBNFQvEo20fmx5vI37jF2fmtL1E6YwEQsS9PnpOfcWRPWRuCy588X7w3TDhN_fqMdC2PAfq2INdFeKxPNSxCMAfeZ_D5E6hmp7IrocmHLAmJ4s"
              alt="Circuit board technical visualization"
              fill
              className="object-cover opacity-10 grayscale mix-blend-multiply rounded-lg"
            />
            <div className="relative z-10">
              <p className="font-mono-label text-[10px] uppercase mb-4">
                System Stats
              </p>
              <div className="w-full aspect-square border border-outline-variant/40 flex items-center justify-center">
                <MdSchema size={64} className="opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
