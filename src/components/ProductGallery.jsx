"use client";

import { useState } from "react";

export default function ProductGallery({ images = [], name, badge, discount }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIdx]}
          alt={name}
          className="h-full w-full object-cover"
        />

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-rose-700 px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                activeIdx === i ? "border-rose-700" : "border-transparent"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${name} ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}