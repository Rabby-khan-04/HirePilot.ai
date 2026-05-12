import { SkeletonCard } from "./SkeletonCard";

export function ShimmerGrid() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
}
