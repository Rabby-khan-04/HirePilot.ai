import { forwardRef } from "react";

const AuthInputField = forwardRef(function AuthInputField(
  { id, label, type = "text", placeholder, extra, error, ...rest }, // ← add ...rest
  ref,
) {
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
        type={type}
        ref={ref}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest} // ← spread rest onto input — passes onChange, onBlur, name
        className={`w-full bg-transparent border-b px-0 py-3 font-mono-detail text-body-md transition-all placeholder:text-outline-variant focus:outline-none ${
          error
            ? "border-error focus:border-error"
            : "border-outline-variant focus:border-primary"
        }`}
      />
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

export default AuthInputField;
