import Link from "next/link";

import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/home-data";

/* Warna badge tetap dari token: Sale = destructive, sisanya primary/secondary */
const BADGE_STYLE: Record<NonNullable<Product["badge"]>, string> = {
  Sale: "bg-destructive text-destructive-foreground",
  New: "bg-primary text-primary-foreground",
  "Best Seller": "bg-secondary text-secondary-foreground",
};

export function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <div
          className={cn(
            "size-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
            product.tone,
          )}
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-md px-2 py-1 text-xs font-semibold",
              BADGE_STYLE[product.badge],
            )}
          >
            {product.badge === "Sale" && discount > 0 ? `-${discount}%` : product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>

        <h3 className="mt-1 line-clamp-2 font-semibold">
          <Link href={`/products/${product.id}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          <span aria-hidden className="text-primary">★</span> {product.rating}{" "}
          <span className="text-xs">({product.reviewCount})</span>
        </p>

        <div className="mt-auto flex items-baseline gap-2 pt-4">
          <p className="text-lg font-bold">{formatPrice(product.price)}</p>
          {product.compareAtPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
