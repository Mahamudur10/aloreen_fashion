"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import ProductGallery from "./ProductGallery";

export default function ProductDetail({ product }) {
  const { addItem, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [added, setAdded] = useState(false);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, { size: selectedSize, color: selectedColor, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, { size: selectedSize, color: selectedColor, qty });
    openCart();
  };

  const colorHexMap = product.colorHex || {};

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-rose-700">Home</Link>
        <span>/</span>
        <Link
          href={`/${product.category}`}
          className="capitalize hover:text-rose-700"
        >
          {product.category.replace("-", " ")}
        </Link>
        <span>/</span>
        <span className="line-clamp-1 text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <ProductGallery images={product.images} name={product.name} badge={product.badge} discount={discount} />

        {/* Info */}
        <div>
          {/* Badge + Category */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-rose-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-rose-700">
              {product.category.replace("-", " ")}
            </span>
            {product.badge && (
              <span className="rounded-full bg-gray-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mt-3 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={i <= Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-serif text-3xl font-bold text-gray-900">
              ৳{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-base text-gray-400 line-through">
                  ৳{product.oldPrice.toLocaleString()}
                </span>
                <span className="rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>

          {/* Size */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Size</h3>
                <button className="text-xs text-rose-700 hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-rose-700 bg-rose-700 text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-rose-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                Color: <span className="font-normal text-gray-600">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-9 w-9 rounded-full ring-offset-2 transition-all ${
                      selectedColor === color ? "ring-2 ring-rose-700" : "ring-1 ring-gray-200"
                    }`}
                    style={{ backgroundColor: colorHexMap[color] || "#999" }}
                    aria-label={color}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Quantity</h3>
            <div className="inline-flex items-center rounded-full border border-gray-300">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="flex h-10 w-10 items-center justify-center text-gray-600 hover:text-rose-700"
              >
                −
              </button>
              <span className="min-w-[2.5rem] text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="flex h-10 w-10 items-center justify-center text-gray-600 hover:text-rose-700"
              >
                +
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleAddToCart}
              className={`flex-1 rounded-full py-3.5 text-sm font-medium transition-colors ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 rounded-full bg-rose-700 py-3.5 text-sm font-medium text-white hover:bg-rose-800"
            >
              Buy Now
            </button>
          </div>

          {/* Delivery info */}
          <div className="mt-6 space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-rose-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">ফ্রি ডেলিভারি</p>
                <p className="text-xs text-gray-600">৳2000+ অর্ডারে সারা বাংলাদেশে</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-rose-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">৭ দিনের রিটার্ন</p>
                <p className="text-xs text-gray-600">পণ্যে সমস্যা থাকলে ফেরত দিতে পারবেন</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 shrink-0 text-rose-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">১০০% অরিজিনাল</p>
                <p className="text-xs text-gray-600">অথেনটিক প্রোডাক্ট গ্যারান্টি</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex gap-6 border-b border-gray-200">
          {[
            { id: "description", label: "Description" },
            { id: "details", label: "Details" },
            { id: "reviews", label: `Reviews (${product.reviews})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`-mb-px border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-rose-700 text-rose-700"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <p className="text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>
          )}
          {activeTab === "details" && (
            <ul className="space-y-2 text-sm text-gray-700">
              {product.details?.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-rose-700">•</span>
                  {d}
                </li>
              ))}
            </ul>
          )}
          {activeTab === "reviews" && (
            <div className="text-sm text-gray-600">
              <p>
                এই পণ্যের{" "}
                <span className="font-semibold text-gray-900">{product.reviews}</span>টি রিভিউ আছে।
              </p>
              <p className="mt-2">রিভিউ সেকশন শীঘ্রই আসছে...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}