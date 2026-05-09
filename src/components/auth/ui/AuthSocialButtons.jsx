import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const PROVIDERS = [
  { label: "Google", icon: <FcGoogle size={20} /> },
  { label: "GitHub", icon: <FaGithub size={20} /> },
];

export default function AuthSocialButtons() {
  return (
    <div>
      {/* Divider */}
      <div className="relative flex py-6 items-center">
        <div className="grow border-t border-outline-variant" />
        <span className="shrink mx-4 font-mono-label text-mono-label text-on-surface-variant uppercase">
          or continue with
        </span>
        <div className="grow border-t border-outline-variant" />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-card-gap">
        {PROVIDERS.map(({ label, icon }) => (
          <button
            key={label}
            type="button"
            className="flex items-center justify-center gap-3 py-3 border border-outline-variant hover:bg-surface-container transition-colors group"
          >
            <span className="group-hover:scale-105 transition-transform">
              {icon}
            </span>
            <span className="font-mono-label text-mono-label text-on-surface">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
