import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-700">
            নতুন কালেকশন ২০২৬
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Elegance in Every{" "}
            <span className="text-rose-700">Thread</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-gray-600 sm:text-lg mx-auto lg:mx-0">
            প্রিমিয়াম শাড়ি, বোরকা, থ্রি-পিস ও উইমেনস ড্রেসের এক্সক্লুসিভ
            কালেকশন। সারা বাংলাদেশে দ্রুত ডেলিভারি।
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/shop"
              className="w-full rounded-full bg-rose-700 px-8 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-rose-800 sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              href="/saree"
              className="w-full rounded-full border border-gray-300 bg-white px-8 py-3.5 text-center text-sm font-medium text-gray-900 transition-colors hover:border-rose-700 hover:text-rose-700 sm:w-auto"
            >
              Explore Saree
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-rose-200/60 pt-6">
            <div>
              <p className="font-serif text-2xl font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-600">Products</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gray-900">10K+</p>
              <p className="text-xs text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gray-900">4.8★</p>
              <p className="text-xs text-gray-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
              alt="Aloreen Fashion featured saree"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="font-serif text-xl font-bold text-gray-900">৳ 990</p>
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl bg-rose-700 px-4 py-2 text-white shadow-xl sm:-right-4">
            <p className="text-xs">Free Delivery</p>
            <p className="text-sm font-bold">৳2000+</p>
          </div>
        </div>
      </div>
    </section>
  );
}