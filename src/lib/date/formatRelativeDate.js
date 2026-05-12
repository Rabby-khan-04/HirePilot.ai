export function formatRelativeDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Created today";
  if (diffDays === 1) return "Created yesterday";
  if (diffDays < 7) return `Created ${diffDays} days ago`;
  if (diffDays < 14) return "Created 1 week ago";
  if (diffDays < 30) return `Created ${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "Created 1 month ago";
  return `Created ${Math.floor(diffDays / 30)} months ago`;
}
