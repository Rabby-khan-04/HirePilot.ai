// Get user initials for avatar fallback
export function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Format relative time from ISO string
export function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

// Compute bar height % relative to max count in chart data
export function getBarHeights(chartData) {
  if (!chartData?.length) return [];
  const max = Math.max(...chartData.map((d) => d.count));
  return chartData.map((d) => ({
    ...d,
    heightPct: max > 0 ? Math.round((d.count / max) * 100) : 0,
  }));
}

// Score distribution percentages from analyses overview
export function getScoreDistribution(scoreDistribution, total) {
  if (!scoreDistribution || !total) return { strong: 0, moderate: 0, weak: 0 };
  const { strong, moderate, weak } = scoreDistribution;
  return {
    strong: Math.round((strong / total) * 100),
    moderate: Math.round((moderate / total) * 100),
    weak: Math.round((weak / total) * 100),
  };
}

// Max count from topMatchedSkills for adoption %
export function getAdoptionPct(count, maxCount) {
  if (!maxCount) return 0;
  return Math.round((count / maxCount) * 100);
}
