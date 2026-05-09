"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import AuthCard from "../ui/AuthCard";
import AuthInputField from "../ui/AuthInputField";
import AuthPasswordField from "../ui/AuthPasswordField";
import AuthSocialButtons from "../ui/AuthSocialButtons";
import { loginSchema } from "@/lib/validations/auth.validation";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const { mutate, isPending, isError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => mutate(data);

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

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <AuthInputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="dev@hirepilot.ai"
          error={errors.email?.message}
          {...register("email")}
        />
        <AuthPasswordField
          id="password"
          label="Password"
          placeholder="••••••••"
          error={errors.password?.message}
          extra={
            <Link
              href="/forgot-password"
              className="font-mono-detail text-mono-detail text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          }
          {...register("password")}
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

        {isError && (
          <p className="font-mono-detail text-[11px] text-error text-center">
            Invalid email or password. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 bg-primary text-on-primary font-headline-md text-[16px] hover:bg-primary-container hover:text-on-primary transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Signing in..." : "Sign In"}
          {!isPending && (
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
