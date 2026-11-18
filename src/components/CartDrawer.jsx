"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQty,
    removeItem,
    subtotal,
    totalItems,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="font-serif text-lg font-bold text-gray-900">
              Your Cart
            </h2>
            <p className="text-xs text-gray-500">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close cart"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="mt-4 text-base font-medium text-gray-900">
                কার্ট খালি
              </p>
              <p className="mt-1 text-sm text-gray-500">
                পছন্দের পণ্য যোগ করুন
              </p>
              <button
                onClick={closeCart}
                className="mt-6 rounded-full bg-rose-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-800"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-3"
                >
                  {/* Image */}
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] text-gray-500">
                          {item.size && <>Size: {item.size} · </>}
                          {item.color && <>Color: {item.color}</>}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="rounded-full p-1 text-gray-400 hover:bg-rose-50 hover:text-rose-700"
                        aria-label="Remove item"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      {/* Qty */}
                      <div className="flex items-center rounded-full border border-gray-300">
                        <button
                          onClick={() =>
                            updateQty(item.id, item.size, item.color, item.qty - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center text-gray-600 hover:text-rose-700"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-medium">
                          {item.qty}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.id, item.size, item.color, item.qty + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center text-gray-600 hover:text-rose-700"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-sm font-semibold text-gray-900">
                        ৳{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-serif text-xl font-bold text-gray-900">
                ৳{subtotal.toLocaleString()}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              ট্যাক্স ও শিপিং চেকআউটে যোগ হবে
            </p>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="mt-4 block w-full rounded-full bg-rose-700 py-3 text-center text-sm font-medium text-white hover:bg-rose-800"
            >
              Checkout · ৳{subtotal.toLocaleString()}
            </Link>
            <button
              onClick={closeCart}
              className="mt-2 w-full rounded-full border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:border-gray-400"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}