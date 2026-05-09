import LoginForm from "@/components/auth/login/LoginForm";
import LoginMarketing from "@/components/auth/login/LoginMarketing";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      <LoginMarketing />

      <section className="w-full lg:w-1/2 bg-surface flex items-center justify-center p-gutter md:p-margin-page relative">
        <LoginForm />
      </section>
    </main>
  );
}
