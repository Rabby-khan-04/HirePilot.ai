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
        <main className="ml-64 min-h-screen flex flex-col">
          {children}
          <footer className="mt-auto border-t border-outline-variant/20 py-8 px-margin-page flex justify-between items-center opacity-60">
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
              © 2024 HirePilot AI Systems
            </span>
            <div className="flex gap-8">
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
