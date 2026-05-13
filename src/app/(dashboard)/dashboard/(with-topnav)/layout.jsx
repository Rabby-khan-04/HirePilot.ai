import DashboardTopNav from "@/components/shared/dashboard/DashboardTopNav";

export default function WithTopNavLayout({ children }) {
  return (
    <>
      <DashboardTopNav />
      {children}
    </>
  );
}
