"use client";

const SIZES = ["S", "M", "L", "XL", "XXL", "Free"];
const COLORS = [
  { name: "Black", class: "bg-black" },
  { name: "White", class: "bg-white border border-gray-300" },
  { name: "Red", class: "bg-red-600" },
  { name: "Blue", class: "bg-blue-600" },
  { name: "Green", class: "bg-emerald-600" },
  { name: "Pink", class: "bg-pink-400" },
  { name: "Yellow", class: "bg-yellow-400" },
  { name: "Grey", class: "bg-gray-500" },
];

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  selectedSizes,
  setSelectedSizes,
  selectedColors,
  setSelectedColors,
  onReset,
  activeCount,
}) {
  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
          Filters {activeCount > 0 && `(${activeCount})`}
        </h2>
        {activeCount > 0 && (
          <button
            onClick={onReset}
            className="text-xs font-medium text-rose-700 hover:text-rose-800"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-rose-500 focus:outline-none"
              placeholder="Min"
            />
            <span className="text-gray-400">—</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-rose-500 focus:outline-none"
              placeholder="Max"
            />
          </div>
          <input
            type="range"
            min="0"
            max="10000"
            step="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full accent-rose-700"
          />
          <p className="text-xs text-gray-500">
            ৳{priceRange[0].toLocaleString()} — ৳{priceRange[1].toLocaleString()}
          </p>
        </div>
      </div>

      {/* Size */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Size</h3>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`min-w-9 rounded-md border px-2 py-1.5 text-xs font-medium transition-colors ${
                  isSelected
                    ? "border-rose-700 bg-rose-700 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-rose-400"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Color</h3>
        <div className="grid grid-cols-4 gap-3">
          {COLORS.map((color) => {
            const isSelected = selectedColors.includes(color.name);
            return (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className="group flex flex-col items-center gap-1"
                title={color.name}
              >
                <span
                  className={`h-8 w-8 rounded-full ${color.class} ${
                    isSelected
                      ? "ring-2 ring-rose-700 ring-offset-2"
                      : "ring-1 ring-gray-200"
                  }`}
                />
                <span className="text-[10px] text-gray-500">{color.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}