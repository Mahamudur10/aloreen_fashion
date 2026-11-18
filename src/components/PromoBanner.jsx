import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        {/* Decorative */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-100">
            Limited Time Offer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">
            ঈদ কালেকশনে <span className="text-amber-300">৩০% ছাড়</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-rose-50 sm:text-base">
            সীমিত সময়ের জন্য সব শাড়ি, বোরকা ও থ্রি-পিসে বিশেষ ছাড়। এখনই
            অর্ডার করুন!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-50 sm:w-auto"
            >
              Shop the Sale
            </Link>
            <Link
              href="/eid-collection"
              className="w-full rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              View Eid Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}