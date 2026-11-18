import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Link from "next/link";

// Dummy data — পরে API/database দিয়ে replace করবেন
const bestSellers = [
  {
    id: 1,
    name: "Katan Silk Saree — Deep Red",
    category: "Saree",
    price: 3450,
    oldPrice: 4200,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Embroidered Borka — Black",
    category: "Borka",
    price: 2890,
    oldPrice: 3500,
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
    badge: "New",
  },
  {
    id: 3,
    name: "Floral Three Piece — Pastel",
    category: "Three Piece",
    price: 1990,
    oldPrice: 2500,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Party Wear Women's Dress",
    category: "Women's Dress",
    price: 2490,
    oldPrice: 3200,
    rating: 4.6,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
  },
  {
    id: 5,
    name: "Cotton Kurti — Sky Blue",
    category: "Kurti",
    price: 1290,
    oldPrice: 1600,
    rating: 4.5,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
  },
  {
    id: 6,
    name: "Georgette Saree — Royal Blue",
    category: "Saree",
    price: 2990,
    oldPrice: 3800,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
    badge: "Hot",
  },
  {
    id: 7,
    name: "Designer Borka — Maroon",
    category: "Borka",
    price: 3290,
    oldPrice: 4100,
    rating: 4.7,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
  },
  {
    id: 8,
    name: "Silk Three Piece — Golden",
    category: "Three Piece",
    price: 2190,
    oldPrice: 2800,
    rating: 4.6,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80",
  },
];

const newArrivals = [
  {
    id: 9,
    name: "Banarasi Saree — Magenta",
    category: "Saree",
    price: 4590,
    rating: 4.9,
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1610189002861-14c34a1e30d1?w=600&q=80",
    badge: "New",
  },
  {
    id: 10,
    name: "Casual Kurti — White",
    category: "Kurti",
    price: 990,
    rating: 4.4,
    reviews: 22,
    image:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&q=80",
    badge: "New",
  },
  {
    id: 11,
    name: "Printed Women's Dress",
    category: "Women's Dress",
    price: 1790,
    oldPrice: 2200,
    rating: 4.5,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    badge: "New",
  },
  {
    id: 12,
    name: "Velvet Borka — Navy",
    category: "Borka",
    price: 3490,
    rating: 4.8,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&q=80",
    badge: "New",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <FeaturedCategories />

      {/* Best Sellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
              Trending Now
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Best Sellers
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              আমাদের কাস্টমারদের সবচেয়ে পছন্দের কালেকশন
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-medium text-rose-700 hover:text-rose-800 sm:inline-flex sm:items-center sm:gap-1"
          >
            View All
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      <PromoBanner />

      {/* New Arrivals */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
              Just In
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              New Arrivals
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              একদম নতুন কালেকশন — এখনই দেখুন
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-medium text-rose-700 hover:text-rose-800 sm:inline-flex sm:items-center sm:gap-1"
          >
            View All
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>

      {/* Bottom CTA */}
      <section className="bg-rose-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Aloreen Fashion পরিবারে যোগ দিন
          </h2>
          <p className="mt-3 text-gray-600">
            নতুন কালেকশন, এক্সক্লুসিভ অফার ও স্টাইল টিপস সবার আগে পেতে
            সাবস্ক্রাইব করুন
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block rounded-full bg-rose-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-800"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}