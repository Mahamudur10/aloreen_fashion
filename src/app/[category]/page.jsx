import { notFound } from "next/navigation";
import { Suspense } from "react";
import CategoryHero from "@/components/CategoryHero";
import CategoryContent from "@/components/CategoryContent";

// সব category-র জন্য dummy data
const allProducts = [
  // Saree
  { id: 1, name: "Katan Silk Saree — Deep Red", category: "saree", price: 3450, oldPrice: 4200, rating: 4.8, reviews: 124, sizes: ["Free"], colors: ["Red"], image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", badge: "Best Seller", createdAt: 8 },
  { id: 6, name: "Georgette Saree — Royal Blue", category: "saree", price: 2990, oldPrice: 3800, rating: 4.8, reviews: 156, sizes: ["Free"], colors: ["Blue"], image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80", badge: "Hot", createdAt: 10 },
  { id: 9, name: "Banarasi Saree — Magenta", category: "saree", price: 4590, rating: 4.9, reviews: 34, sizes: ["Free"], colors: ["Pink"], image: "https://images.unsplash.com/photo-1610189002861-14c34a1e30d1?w=600&q=80", badge: "New", createdAt: 12 },
  { id: 13, name: "Jamdani Saree — Cream", category: "saree", price: 3890, oldPrice: 4500, rating: 4.7, reviews: 89, sizes: ["Free"], colors: ["White"], image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80", createdAt: 5 },

  // Borka
  { id: 2, name: "Embroidered Borka — Black", category: "borka", price: 2890, oldPrice: 3500, rating: 4.7, reviews: 89, sizes: ["M", "L", "XL"], colors: ["Black"], image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80", badge: "New", createdAt: 9 },
  { id: 7, name: "Designer Borka — Maroon", category: "borka", price: 3290, oldPrice: 4100, rating: 4.7, reviews: 92, sizes: ["M", "L"], colors: ["Red"], image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80", createdAt: 7 },
  { id: 12, name: "Velvet Borka — Navy", category: "borka", price: 3490, rating: 4.8, reviews: 28, sizes: ["L", "XL"], colors: ["Blue"], image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&q=80", badge: "New", createdAt: 11 },
  { id: 14, name: "Cotton Borka — Grey", category: "borka", price: 1990, oldPrice: 2500, rating: 4.5, reviews: 56, sizes: ["M", "L", "XL", "XXL"], colors: ["Grey"], image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80", createdAt: 3 },

  // Women's Dress
  { id: 4, name: "Party Wear Women's Dress", category: "womens-dress", price: 2490, oldPrice: 3200, rating: 4.6, reviews: 67, sizes: ["S", "M", "L"], colors: ["Black"], image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80", createdAt: 6 },
  { id: 11, name: "Printed Women's Dress", category: "womens-dress", price: 1790, oldPrice: 2200, rating: 4.5, reviews: 41, sizes: ["S", "M", "L", "XL"], colors: ["Pink"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", badge: "New", createdAt: 12 },
  { id: 15, name: "Maxi Dress — Emerald", category: "womens-dress", price: 2290, rating: 4.7, reviews: 38, sizes: ["M", "L"], colors: ["Green"], image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", createdAt: 4 },
  { id: 16, name: "A-Line Dress — White", category: "womens-dress", price: 1990, oldPrice: 2600, rating: 4.4, reviews: 52, sizes: ["S", "M", "L"], colors: ["White"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=600&q=80", createdAt: 2 },

  // Three Piece
  { id: 3, name: "Floral Three Piece — Pastel", category: "three-piece", price: 1990, oldPrice: 2500, rating: 4.9, reviews: 210, sizes: ["M", "L", "XL"], colors: ["Pink"], image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80", badge: "Sale", createdAt: 10 },
  { id: 8, name: "Silk Three Piece — Golden", category: "three-piece", price: 2190, oldPrice: 2800, rating: 4.6, reviews: 78, sizes: ["M", "L"], colors: ["Yellow"], image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80", createdAt: 6 },
  { id: 17, name: "Embroidered Three Piece — Teal", category: "three-piece", price: 2590, rating: 4.8, reviews: 45, sizes: ["S", "M", "L", "XL"], colors: ["Blue"], image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&q=80", badge: "New", createdAt: 11 },
  { id: 18, name: "Cotton Three Piece — Sky", category: "three-piece", price: 1790, oldPrice: 2200, rating: 4.5, reviews: 62, sizes: ["M", "L", "XL"], colors: ["Blue"], image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80", createdAt: 1 },

  // Kurti
  { id: 5, name: "Cotton Kurti — Sky Blue", category: "kurti", price: 1290, oldPrice: 1600, rating: 4.5, reviews: 45, sizes: ["S", "M", "L"], colors: ["Blue"], image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80", createdAt: 4 },
  { id: 10, name: "Casual Kurti — White", category: "kurti", price: 990, rating: 4.4, reviews: 22, sizes: ["S", "M", "L", "XL"], colors: ["White"], image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&q=80", badge: "New", createdAt: 12 },
  { id: 19, name: "Embroidered Kurti — Red", category: "kurti", price: 1590, oldPrice: 2000, rating: 4.7, reviews: 88, sizes: ["M", "L"], colors: ["Red"], image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", createdAt: 8 },
  { id: 20, name: "Printed Kurti — Green", category: "kurti", price: 1190, rating: 4.3, reviews: 31, sizes: ["S", "M", "L"], colors: ["Green"], image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80", createdAt: 5 },
];

const categoryMeta = {
  saree: { title: "Saree Collection", subtitle: "ঐতিহ্যবাহী ও আধুনিক ডিজাইনের শাড়ি" },
  borka: { title: "Borka Collection", subtitle: "এলিগেন্ট ও আরামদায়ক বোরকা" },
  "womens-dress": { title: "Women's Dress", subtitle: "পার্টি, ক্যাজুয়াল ও ফরমাল ড্রেস" },
  "three-piece": { title: "Three Piece", subtitle: "সুতি, সিল্ক ও এমব্রয়ডারি থ্রি-পিস" },
  kurti: { title: "Kurti Collection", subtitle: "প্রতিদিনের আরামদায়ক কুর্তি" },
};

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: `${meta.title} — Aloreen Fashion`,
    description: meta.subtitle,
  };
}

// ✅ নতুন: child component যা params পড়বে (Suspense-এর ভিতরে)
async function CategoryPageContent({ params }) {
  const { category } = await params;
  const meta = categoryMeta[category];

  if (!meta) {
    notFound();
  }

  const products = allProducts.filter((p) => p.category === category);

  return (
    <>
      <CategoryHero
        title={meta.title}
        subtitle={meta.subtitle}
        category={category}
        productCount={products.length}
      />
      <CategoryContent products={products} />
    </>
  );
}

// ✅ মূল page এখন Suspense দিয়ে wrap করা
export default function CategoryPage({ params }) {
  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <CategoryPageContent params={params} />
    </Suspense>
  );
}

// ✅ Loading skeleton
function CategoryPageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-4 w-32 rounded bg-gray-200"></div>
        <div className="mt-6 h-10 w-64 rounded bg-gray-200"></div>
        <div className="mt-3 h-4 w-96 rounded bg-gray-200"></div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[4/5] rounded-2xl bg-gray-200"></div>
            <div className="mt-3 h-3 w-16 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-full rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-20 rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}