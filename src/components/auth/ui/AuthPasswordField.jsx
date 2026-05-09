"use client";

import { forwardRef, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const AuthPasswordField = forwardRef(function AuthPasswordField(
  { id, label, placeholder, extra, error, ...rest },
  ref,
) {
  const [visible, setVisible] = useState(false);

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
      <div className="relative">
        <input
          id={id}
          name={id}
          ref={ref}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
          className={`w-full bg-transparent border-b px-0 py-3 pr-8 font-mono-detail text-body-md transition-all placeholder:text-outline-variant focus:outline-none ${
            error
              ? "border-error focus:border-error"
              : "border-outline-variant focus:border-primary"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-0 top-3 text-on-surface-variant hover:text-primary transition-colors"
        >
          {visible ? <LuEyeOff size={20} /> : <LuEye size={20} />}
        </button>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 font-mono-detail text-[11px] text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export default AuthPasswordField;
