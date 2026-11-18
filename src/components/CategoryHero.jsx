import Link from "next/link";

export default function CategoryHero({ title, subtitle, category, productCount }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-rose-700">Home</Link>
          <span>/</span>
          <span className="capitalize text-gray-900">{category.replace("-", " ")}</span>
        </nav>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
            {productCount} Products
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}