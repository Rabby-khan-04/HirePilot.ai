// import AnalysisDetailPage from "@/components/dashboard/analysis/detail/AnalysisDetailPage";

import AnalysisDetailPage from "@/components/dashboard/analysisDetailsPage/AnalysisDetailPage";

export const metadata = {
  title: "Analysis Details — HirePilot AI",
};

export default async function AnalysisDetailRoute({ params }) {
  const { id } = await params;

  return <AnalysisDetailPage id={id} />;
}
