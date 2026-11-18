import { notFound } from "next/navigation";
import { allProducts, getProductById, getRelatedProducts } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/ProductGrid";

export function generateStaticParams() {
  return allProducts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — Aloreen Fashion`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div>
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
              You May Also Like
            </p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
              Related Products
            </h2>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}