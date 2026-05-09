"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import AuthCard from "../ui/AuthCard";
import AuthInputField from "../ui/AuthInputField";
import AuthPasswordField from "../ui/AuthPasswordField";
import AuthSocialButtons from "../ui/AuthSocialButtons";
import { registerSchema } from "@/lib/validations/auth.validation";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Step into your future career ecosystem."
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <AuthInputField
          id="name"
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />
        <AuthInputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <AuthInputField
          id="avatar"
          label="Photo URL"
          type="url"
          placeholder="https://example.com/photo/avatar.png"
          error={errors.avatar?.message}
          {...register("avatar")}
        />
        <AuthPasswordField
          id="password"
          label="Password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
        <AuthPasswordField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        {/* Terms */}
        <div>
          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 h-4 w-4 border-outline-variant text-primary focus:ring-0 transition-all"
              {...register("terms")}
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
              {errors.terms.message}
            </p>
          )}
        </div>

        {/* {isError && (
          <p className="font-mono-detail text-[11px] text-error text-center">
            Registration failed. Please try again.
          </p>
        )} */}

        <button
          type="submit"
          // disabled={isPending}
          className="w-full bg-primary text-on-primary py-4 font-headline-md text-[16px] hover:bg-primary-container hover:text-on-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {/* {isPending ? "Creating account..." : "Create Account"} */}
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
