// src/lib/products.js
export const allProducts = [
  // Saree
  { id: 1, name: "Katan Silk Saree — Deep Red", category: "saree", price: 3450, oldPrice: 4200, rating: 4.8, reviews: 124, sizes: ["Free"], colors: ["Red"], colorHex: { Red: "#dc2626" }, images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80", "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80", "https://images.unsplash.com/photo-1610189002861-14c34a1e30d1?w=800&q=80"], badge: "Best Seller", description: "ঐতিহ্যবাহী কাতান সিল্ক শাড়ি — গভীর লাল রঙে। হাতে বোনা সোনালী জরি কাজ। বিয়ে, পূজা বা যেকোনো উৎসবে পরার জন্য পারফেক্ট।", details: ["Pure Katan Silk", "Handwoven Zari work", "5.5 meter + blouse piece", "Dry clean only"], createdAt: 8 },
  { id: 6, name: "Georgette Saree — Royal Blue", category: "saree", price: 2990, oldPrice: 3800, rating: 4.8, reviews: 156, sizes: ["Free"], colors: ["Blue"], colorHex: { Blue: "#2563eb" }, images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80", "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"], badge: "Hot", description: "রয়্যাল ব্লু জর্জেট শাড়ি — হালকা ও আরামদায়ক। পার্টি বা ক্যাজুয়াল উভয়ের জন্য উপযুক্ত।", details: ["Georgette fabric", "Lightweight", "5.5 meter", "Hand wash"], createdAt: 10 },

  // Borka
  { id: 2, name: "Embroidered Borka — Black", category: "borka", price: 2890, oldPrice: 3500, rating: 4.7, reviews: 89, sizes: ["M", "L", "XL"], colors: ["Black"], colorHex: { Black: "#111827" }, images: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"], badge: "New", description: "কালো রঙের এমব্রয়ডারি বোরকা — এলিগেন্ট ও আরামদায়ক। প্রতিদিন বা বিশেষ অনুষ্ঠানে পরার জন্য।", details: ["Premium fabric", "Hand embroidery", "Full coverage", "Machine wash"], createdAt: 9 },
  { id: 7, name: "Designer Borka — Maroon", category: "borka", price: 3290, oldPrice: 4100, rating: 4.7, reviews: 92, sizes: ["M", "L"], colors: ["Red"], colorHex: { Red: "#991b1b" }, images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80", "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"], description: "মেরুন রঙের ডিজাইনার বোরকা — সূক্ষ্ম কাজ ও প্রিমিয়াম ফ্যাব্রিক।", details: ["Designer series", "Premium quality", "Comfortable fit"], createdAt: 7 },

  // Women's Dress
  { id: 4, name: "Party Wear Women's Dress", category: "womens-dress", price: 2490, oldPrice: 3200, rating: 4.6, reviews: 67, sizes: ["S", "M", "L"], colors: ["Black"], colorHex: { Black: "#111827" }, images: ["https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"], description: "পার্টি পরার জন্য পারফেক্ট ব্ল্যাক ড্রেস — মডার্ন স্টাইল।", details: ["Party wear", "Modern design", "Comfortable"], createdAt: 6 },

  // Three Piece
  { id: 3, name: "Floral Three Piece — Pastel", category: "three-piece", price: 1990, oldPrice: 2500, rating: 4.9, reviews: 210, sizes: ["M", "L", "XL"], colors: ["Pink"], colorHex: { Pink: "#ec4899" }, images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80", "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"], badge: "Sale", description: "প্যাস্টেল রঙের ফ্লোরাল থ্রি-পিস — সুতি কাপড়, আরামদায়ক।", details: ["Cotton fabric", "Floral print", "3 pieces included"], createdAt: 10 },

  // Kurti
  { id: 5, name: "Cotton Kurti — Sky Blue", category: "kurti", price: 1290, oldPrice: 1600, rating: 4.5, reviews: 45, sizes: ["S", "M", "L"], colors: ["Blue"], colorHex: { Blue: "#0ea5e9" }, images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80", "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=800&q=80"], description: "স্কাই ব্লু সুতি কুর্তি — প্রতিদিন পরার জন্য আরামদায়ক।", details: ["100% Cotton", "Machine washable", "Regular fit"], createdAt: 4 },
];

export function getProductById(id) {
  return allProducts.find((p) => p.id === Number(id));
}

export function getRelatedProducts(product, limit = 4) {
  return allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}