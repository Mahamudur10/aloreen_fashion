"use client";

import { useState, useMemo } from "react";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import ProductCard from "./ProductCard";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function CategoryContent({ products }) {
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter + sort logic
  const filtered = useMemo(() => {
    let result = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      );
    }
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c))
      );
    }

    switch (sortBy) {
      case "newest":
        result = [...result].sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [products, sortBy, priceRange, selectedSizes, selectedColors]);

  // Reset all filters
  const resetFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const activeFilterCount =
    (priceRange[0] > 0 || priceRange[1] < 10000 ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar — desktop */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <FilterSidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            onReset={resetFilters}
            activeCount={activeFilterCount}
          />
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <SortBar
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOptions={SORT_OPTIONS}
            resultCount={filtered.length}
            onOpenFilters={() => setMobileFiltersOpen(true)}
            activeFilterCount={activeFilterCount}
          />

          {filtered.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-gray-900">
                কোনো পণ্য পাওয়া যায়নি
              </p>
              <p className="mt-2 text-sm text-gray-500">
                ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 rounded-full bg-rose-700 px-6 py-2 text-sm font-medium text-white hover:bg-rose-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto h-full w-full max-w-xs overflow-y-auto bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Close filters"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedSizes={selectedSizes}
              setSelectedSizes={setSelectedSizes}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              onReset={resetFilters}
              activeCount={activeFilterCount}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full rounded-full bg-rose-700 py-2.5 text-sm font-medium text-white hover:bg-rose-800"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </section>
  );
}