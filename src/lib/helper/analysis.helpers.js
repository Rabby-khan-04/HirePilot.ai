export const getScoreMeta = (score) => {
  if (score >= 85)
    return {
      label: "Exceptional Match",
      color: "text-green-600",
      bg: "bg-green-100",
      border: "border-green-300",
    };
  if (score >= 70)
    return {
      label: "Strong Match",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/30",
    };
  if (score >= 50)
    return {
      label: "Moderate Match",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      border: "border-yellow-300",
    };
  return {
    label: "Weak Match",
    color: "text-error",
    bg: "bg-error/10",
    border: "border-error/30",
  };
};

// analysis.helpers.js — suggested addition
export function getSeverityStyle(severity) {
  switch (severity) {
    case "high":
      return {
        label: "High",
        bg: "bg-error",
        text: "text-on-error",
        rowBg: "bg-error-container/10",
        rowBorder: "border-error/20",
      };
    case "medium":
      return {
        label: "Medium",
        bg: "bg-secondary-container",
        text: "text-on-secondary-container",
        rowBg: "bg-surface-container-low",
        rowBorder: "border-outline-variant/30",
      };
    default:
      return {
        label: "Low",
        bg: "bg-surface-container-highest",
        text: "text-on-surface-variant",
        rowBg: "bg-surface-container-low",
        rowBorder: "border-outline-variant/30",
      };
  }
}
