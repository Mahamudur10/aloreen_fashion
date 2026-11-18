"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [cartCount] = useState(0);   // পরে cart state দিয়ে replace করবেন
  const [wishlistCount] = useState(0);

  const categories = [
    { href: "/saree", label: "Saree" },
    { href: "/borka", label: "Borka" },
    { href: "/womens-dress", label: "Women's Dress" },
    { href: "/three-piece", label: "Three Piece" },
    { href: "/kurti", label: "Kurti" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-rose-700 text-white text-center text-xs sm:text-sm py-2 px-4">
        🚚 সারা বাংলাদেশে ফ্রি ডেলিভারি — অর্ডার করুন ২০০০৳ এর উপরে!
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-700 text-white font-serif text-lg font-bold">
              A
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg font-bold text-gray-900">
                Aloreen
              </p>
              <p className="text-[10px] uppercase tracking-widest text-rose-700">
                Fashion
              </p>
            </div>
          </Link>

          {/* Desktop Category Nav */}
          <ul className="hidden items-center gap-6 lg:flex">
            {/* Categories dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-rose-700"
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                        pathname === cat.href
                          ? "bg-rose-50 text-rose-700"
                          : "text-gray-700 hover:bg-gray-50 hover:text-rose-700"
                      }`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {categories.map((cat) => {
              const isActive = pathname === cat.href;
              return (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-rose-700"
                        : "text-gray-700 hover:text-rose-700"
                    }`}
                  >
                    {cat.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search (desktop) */}
          <div className="hidden flex-1 max-w-xs items-center md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search saree, borka..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-100"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative rounded-full p-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700"
              aria-label="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-700 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative rounded-full p-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-700 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account (desktop) */}
            <Link
              href="/login"
              className="hidden rounded-full bg-rose-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800 sm:inline-block"
            >
              Login
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-rose-100 bg-white lg:hidden">
            {/* Mobile Search */}
            <div className="border-b border-gray-100 px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search saree, borka..."
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-rose-400 focus:bg-white focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile categories */}
            <ul className="space-y-1 px-4 py-3">
              {categories.map((cat) => {
                const isActive = pathname === cat.href;
                return (
                  <li key={cat.href}>
                    <Link
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-rose-50 text-rose-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {cat.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg bg-rose-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-rose-800"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}