"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import AuthCard from "../ui/AuthCard";
import AuthInputField from "../ui/AuthInputField";
import AuthPasswordField from "../ui/AuthPasswordField";
import AuthSocialButtons from "../ui/AuthSocialButtons";

function validate(fields) {
  console.log(fields);
  const errors = {};
  if (!fields.email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email address.";
  if (!fields.password) errors.password = "Password is required.";
  return errors;
}

export default function LoginForm() {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});
    setLoading(true);
    try {
      // TODO: call sign-in API / next-auth signIn()
      console.log(fields.email, fields.password);
      await new Promise((r) => setTimeout(r, 1000)); // placeholder
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Sign In"
      subtitle="Access your precision-engineered career platform."
    >
      {/* Mobile brand */}
      <div className="lg:hidden mb-10">
        <span className="font-headline-md text-[24px] font-semibold tracking-tighter text-on-surface">
          HirePilot AI
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <AuthInputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="dev@hirepilot.ai"
          error={errors.email}
          value={fields.email}
          onChange={set("email")}
        />
        <AuthPasswordField
          id="password"
          label="Password"
          placeholder="••••••••"
          error={errors.password}
          value={fields.password}
          onChange={set("password")}
          extra={
            <Link
              href="/forgot-password"
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

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-primary text-on-primary font-headline-md text-[16px] hover:bg-primary-container hover:text-on-primary transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
          {!loading && (
            <LuArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          )}
        </button>

        <AuthSocialButtons />
      </form>

      <div className="mt-10 pt-6 border-t border-outline-variant text-center">
        <p className="font-body-md text-on-surface-variant">
          Don{"'"}t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline ml-1"
          >
            Create Account
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
