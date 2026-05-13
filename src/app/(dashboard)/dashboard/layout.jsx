import ProtectedRoute from "@/components/auth/protectedRoute/ProtectedRoute";
import DashboardSidebar from "@/components/shared/dashboard/DashboardSidebar";

export const metadata = {
  title: "Dashboard — HirePilot AI",
};

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-surface text-on-background font-body-md">
        <DashboardSidebar />

        {/*
          lg: offset by sidebar width
          below lg: offset by mobile top bar height (~57px)
        */}
        <main className="flex min-h-screen flex-col pt-0 lg:ml-64 lg:pt-0">
          <div className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</div>

          <footer className="mt-auto border-t border-outline-variant/20 py-6 px-4 md:px-margin-page items-center flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center opacity-60">
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
              © 2024 HirePilot AI Systems
            </span>

            <div className="flex flex-wrap gap-4 sm:gap-8">
              {["API Access", "Documentation", "Security"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </ProtectedRoute>
  );
}
