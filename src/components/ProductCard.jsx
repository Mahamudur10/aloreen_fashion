"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

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
    e.stopPropagation();
    // default size/color — পরে product detail page এ user select করবে
    const size = product.sizes?.[0] || null;
    const color = product.colors?.[0] || null;
    addItem(product, { size, color, qty: 1 });
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

        {product.badge && (
          <span
            className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
              badgeColor[product.badge] || "bg-gray-900"
            }`}
          >
            {product.badge}
          </span>
        )}

        {discount > 0 && (
          <span className="absolute right-2 top-2 rounded-full bg-gray-900 px-2 py-1 text-[10px] font-bold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-rose-700">
          {product.category}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-rose-700">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
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

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 w-full rounded-full bg-gray-900 py-2 text-xs font-medium text-white transition-colors hover:bg-rose-700 sm:text-sm"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}