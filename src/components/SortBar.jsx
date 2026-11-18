"use client";

export default function SortBar({
  sortBy,
  setSortBy,
  sortOptions,
  resultCount,
  onOpenFilters,
  activeFilterCount,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-3 sm:p-4">
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <button
          onClick={onOpenFilters}
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-rose-400 hover:text-rose-700 lg:hidden"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className="rounded-full bg-rose-700 px-1.5 text-[10px] text-white">
              {activeFilterCount}
            </span>
          )}
        </button>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{resultCount}</span> products
        </p>
      </div>

      <div className="flex items-center gap-2">
        <label className="hidden text-sm text-gray-600 sm:inline">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-rose-500 focus:outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}