import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Glow dekoratif dari token primary */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            New season · Up to 30% off
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Shop smarter, <span className="text-primary">live better.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Curated products from trusted local sellers, with fast delivery and easy returns.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/products" size="lg">
              Shop now
            </ButtonLink>
            <ButtonLink href="/deals" variant="outline" size="lg">
              View deals
            </ButtonLink>
          </div>
        </div>

        {/* Visual placeholder — ganti dengan next/image saat aset siap */}
        <div className="relative hidden aspect-square rounded-xl border border-border bg-card p-6 shadow-sm lg:block">
          <div className="h-full rounded-lg bg-gradient-to-br from-primary/80 to-primary/30" />
          <div className="absolute -bottom-6 -left-6 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg">
            <p className="text-xs text-muted-foreground">Orders shipped today</p>
            <p className="text-2xl font-bold">1,284</p>
          </div>
        </div>
      </div>
    </section>
  );
}
