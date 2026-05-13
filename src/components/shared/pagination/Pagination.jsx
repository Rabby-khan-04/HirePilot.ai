"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Pagination({ pagination, currentPage, onPageChange }) {
  if (!pagination || pagination.totalPages <= 1) return null;

  const { total, limit, totalPages, hasNextPage, hasPrevPage } = pagination;

  const from = (currentPage - 1) * limit + 1;
  const to = Math.min(currentPage * limit, total);

  // Build page number list with ellipsis
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 pb-20">
      <span className="font-mono-detail text-sm text-on-surface-variant">
        Showing {from}–{to} of {total} analyses
      </span>

      <div className="flex items-center gap-4">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevPage}
          className="flex items-center gap-2 px-6 py-2 border border-outline-variant rounded-full font-mono-label text-[11px] uppercase tracking-widest hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <MdChevronLeft size={18} />
          Previous
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPages().map((page, i) =>
            page === "..." ? (
              <span
                key={`ellipsis-${i}`}
                className="px-2 text-outline font-mono-detail text-sm"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-xs transition-colors ${
                  page === currentPage
                    ? "bg-primary text-on-primary"
                    : "hover:bg-surface-container text-on-surface-variant"
                }`}
              >
                {page}
              </button>
            ),
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className="flex items-center gap-2 px-6 py-2 border border-outline-variant rounded-full font-mono-label text-[11px] uppercase tracking-widest hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
          <MdChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
