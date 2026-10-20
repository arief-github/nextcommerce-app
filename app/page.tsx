import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Hero } from "@/components/home/Hero";
import { PerkStrip } from "@/components/home/PerkStrip";
import { ProductCard } from "@/components/home/ProductCard";
import { SectionHeading } from "@/components/home/SectionHeading";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ButtonLink } from "@/components/ui/button-link";
import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/home-data";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <PerkStrip />

        {/* Kategori */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            title="Shop by category"
            description="Find what you need, faster."
            href="/categories"
          />
          <CategoryGrid categories={CATEGORIES} />
        </section>

        {/* Produk unggulan */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <SectionHeading
            title="Featured products"
            description="Handpicked favourites this week."
            href="/products"
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA newsletter */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="rounded-xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Get 10% off your first order
            </h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
              Join our newsletter for new arrivals, exclusive deals, and restock
              alerts.
            </p>
            <div className="mt-6">
              <ButtonLink href="/sign-up" variant="secondary" size="lg">
                Create an account
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
