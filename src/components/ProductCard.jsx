"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const badgeColor = {
    "Best Seller": "bg-amber-500",
    New: "bg-emerald-600",
    Sale: "bg-rose-600",
    Hot: "bg-red-600",
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    // পরে Cart context/API দিয়ে replace করবেন
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
              badgeColor[product.badge] || "bg-gray-900"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute right-2 top-2 rounded-full bg-gray-900 px-2 py-1 text-[10px] font-bold text-white">
            -{discount}%
          </span>
        )}

        {/* Wishlist button */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="absolute right-2 top-2 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-rose-700 hover:text-white sm:flex"
          style={{ top: discount > 0 ? "2.75rem" : "0.5rem" }}
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-rose-700">
          {product.category}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-rose-700">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex text-amber-400">
            {"★★★★★".split("").map((star, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(product.rating)
                    ? "text-amber-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-[10px] text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-serif text-base font-bold text-gray-900 sm:text-lg">
            ৳{product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-3 w-full rounded-full py-2 text-xs font-medium transition-colors sm:text-sm ${
            added
              ? "bg-emerald-600 text-white"
              : "bg-gray-900 text-white hover:bg-rose-700"
          }`}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}