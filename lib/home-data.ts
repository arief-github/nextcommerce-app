/* Data contoh untuk slicing. Nanti diganti dengan data dari database / API. */

export type Category = {
  slug: string;
  name: string;
  itemCount: number;
  /** Gradient placeholder pengganti gambar */
  tone: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: "New" | "Sale" | "Best Seller";
  tone: string;
};

export const CATEGORIES: Category[] = [
  { slug: "electronics", name: "Electronics", itemCount: 128, tone: "from-violet-500/80 to-indigo-500/80" },
  { slug: "fashion", name: "Fashion", itemCount: 342, tone: "from-pink-500/80 to-rose-500/80" },
  { slug: "home-living", name: "Home & Living", itemCount: 96, tone: "from-amber-500/80 to-orange-500/80" },
  { slug: "sports", name: "Sports", itemCount: 74, tone: "from-emerald-500/80 to-teal-500/80" },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 1_899_000,
    compareAtPrice: 2_299_000,
    rating: 4.8,
    reviewCount: 214,
    badge: "Sale",
    tone: "from-slate-700 to-slate-900",
  },
  {
    id: "p2",
    name: "Minimalist Leather Backpack",
    category: "Fashion",
    price: 749_000,
    rating: 4.6,
    reviewCount: 88,
    badge: "New",
    tone: "from-amber-700 to-amber-900",
  },
  {
    id: "p3",
    name: "Ceramic Pour-Over Coffee Set",
    category: "Home & Living",
    price: 389_000,
    rating: 4.9,
    reviewCount: 341,
    badge: "Best Seller",
    tone: "from-stone-400 to-stone-600",
  },
  {
    id: "p4",
    name: "Lightweight Running Shoes",
    category: "Sports",
    price: 1_249_000,
    compareAtPrice: 1_499_000,
    rating: 4.7,
    reviewCount: 156,
    badge: "Sale",
    tone: "from-sky-500 to-blue-700",
  },
];

export const PERKS = [
  { title: "Free shipping", description: "On orders over Rp 500.000" },
  { title: "30-day returns", description: "No questions asked" },
  { title: "Secure payment", description: "Bank transfer, e-wallet & cards" },
];
