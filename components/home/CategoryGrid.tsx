import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Category } from "@/lib/home-data";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            href={`/categories/${category.slug}`}
            className="group block overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Placeholder gambar: gradient per kategori */}
            <div
              className={cn(
                "aspect-[4/3] bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
                category.tone,
              )}
            />
            <div className="p-4">
              <p className="font-semibold">{category.name}</p>
              <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
