"use client";

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

function InputField({ id, label, type, placeholder, extra }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor={id}
          className="font-mono-label text-mono-label text-on-surface-variant uppercase block"
        >
          {label}
        </label>
        {extra}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:outline-none px-0 py-3 font-mono-detail text-body-md transition-all placeholder:text-outline-variant"
      />
    </div>
  );
}

export default function LoginForm() {
  return (
    <div className="w-full max-w-110 bg-surface-container-lowest border border-outline-variant p-8 md:p-10 shadow-sm relative z-20">
      {/* Mobile brand */}
      <div className="lg:hidden mb-10">
        <span className="font-headline-md text-[24px] font-semibold tracking-tighter text-on-surface">
          HirePilot AI
        </span>
      </div>

      <div className="mb-10 text-center lg:text-left">
        <h2 className="font-headline-md text-headline-md mb-2">Sign In</h2>
        <p className="font-body-md text-on-surface-variant">
          Access your precision-engineered career platform.
        </p>
      </div>

      <form className="space-y-6" action="#">
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="dev@hirepilot.ai"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          extra={
            <Link
              href="#"
              className="font-mono-detail text-mono-detail text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          }
        />

        {/* Remember me */}
        <div className="flex items-center gap-3">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="w-4 h-4 border-outline-variant text-primary focus:ring-primary"
          />
          <label
            htmlFor="remember"
            className="font-body-md text-on-surface-variant select-none"
          >
            Remember me for 30 days
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-primary text-on-primary font-headline-md text-[16px] hover:bg-primary-container hover:text-on-primary transition-all flex items-center justify-center gap-2 group"
        >
          Sign In
          <LuArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* Divider */}
        <div className="relative flex py-4 items-center">
          <div className="grow border-t border-outline-variant" />
          <span className="shrink mx-4 font-mono-label text-mono-label text-on-surface-variant uppercase">
            or continue with
          </span>
          <div className="grow border-t border-outline-variant" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-2 gap-card-gap">
          {[
            { label: "Google", icon: <FcGoogle /> },
            { label: "GitHub", icon: <FaGithub /> },
          ].map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              className="flex items-center justify-center gap-3 py-3 border border-outline-variant hover:bg-surface-container transition-colors group"
            >
              <span className="group-hover:scale-105 transition-transform">
                {icon}
              </span>
              <span className="font-body-md font-medium">{label}</span>
            </button>
          ))}
        </div>
      </form>

      <div className="mt-10 pt-6 border-t border-outline-variant text-center">
        <p className="font-body-md text-on-surface-variant">
          Don{"'"}t have an account?
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline ml-1"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
