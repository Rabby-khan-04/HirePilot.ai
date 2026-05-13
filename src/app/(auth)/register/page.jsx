import RegisterForm from "@/components/auth/register/RegisterForm";
import RegisterMarketing from "@/components/auth/register/RegisterMarketing";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <RegisterMarketing />

      <section className="flex-1 flex flex-col justify-center items-center bg-surface p-6 md:p-margin-page relative">
        {/* Background grid */}
        {/* <div className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(var(--color-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid-line)_1px,transparent_1px)] bg-size-[40px_40px]" /> */}

        {/* Mobile brand header */}
        <header className="md:hidden absolute top-0 left-0 right-0 p-6 z-10">
          <span className="font-headline-md text-headline-md font-semibold tracking-tighter text-on-surface">
            HirePilot AI
          </span>
        </header>

        <RegisterForm />

        {/* Version tag */}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block font-mono-detail text-mono-detail text-on-surface-variant opacity-40 uppercase tracking-[0.2em]">
          HirePilot Engineering v2.0.4
        </p>
      </section>
    </main>
  );
}
