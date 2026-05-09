"use client";

import { useState } from "react";
import Link from "next/link";
import AuthCard from "../ui/AuthCard";
import AuthInputField from "../ui/AuthInputField";
import AuthPasswordField from "../ui/AuthPasswordField";
import AuthSocialButtons from "../ui/AuthSocialButtons";

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email address.";
  if (!fields.password) errors.password = "Password is required.";
  else if (fields.password.length < 8)
    errors.password = "Password must be at least 8 characters.";
  if (!fields.confirmPassword)
    errors.confirmPassword = "Please confirm your password.";
  else if (fields.password !== fields.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  if (!fields.terms) errors.terms = "You must accept the terms to continue.";
  return errors;
}

export default function RegisterForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) =>
    setFields((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});
    setLoading(true);
    try {
      // TODO: call register API
      await new Promise((r) => setTimeout(r, 1000)); // placeholder
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Step into your future career ecosystem."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <AuthInputField
          id="name"
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.name}
          value={fields.name}
          onChange={set("name")}
        />
        <AuthInputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="name@company.com"
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
        />
        <AuthPasswordField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          error={errors.confirmPassword}
          value={fields.confirmPassword}
          onChange={set("confirmPassword")}
        />

        {/* Terms */}
        <div>
          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              checked={fields.terms}
              onChange={set("terms")}
              className="mt-1 h-4 w-4 border-outline-variant text-primary focus:ring-0 transition-all"
            />
            <label
              htmlFor="terms"
              className="font-mono-detail text-mono-detail text-on-surface-variant leading-tight"
            >
              I accept the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 font-mono-detail text-[11px] text-error">
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary py-4 font-headline-md text-[16px] hover:bg-primary-container hover:text-on-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <AuthSocialButtons />
      </form>

      <div className="mt-10 pt-6 border-t border-outline-variant text-center">
        <p className="font-mono-detail text-mono-detail text-on-surface-variant">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
