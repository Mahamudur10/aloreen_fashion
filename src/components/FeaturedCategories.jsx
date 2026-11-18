import Link from "next/link";

const categories = [
  {
    name: "Saree",
    href: "/saree",
    count: "120+ Designs",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
  },
  {
    name: "Borka",
    href: "/borka",
    count: "80+ Designs",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
  },
  {
    name: "Women's Dress",
    href: "/womens-dress",
    count: "95+ Designs",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
  },
  {
    name: "Three Piece",
    href: "/three-piece",
    count: "150+ Designs",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
  },
  {
    name: "Kurti",
    href: "/kurti",
    count: "70+ Designs",
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
  },
  {
    name: "Party Wear",
    href: "/party-wear",
    count: "50+ Designs",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
          Explore
        </p>
        <h2 className="mt-1 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          আপনার পছন্দের ক্যাটাগরি বেছে নিন
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-white/80">{cat.count}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}