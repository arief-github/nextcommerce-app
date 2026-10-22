import { PERKS } from "@/lib/home-data";

export function PerkStrip() {
  return (
    <section className="border-b border-border bg-muted/40">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-3 sm:px-6">
        {PERKS.map((perk) => (
          <li key={perk.title} className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              ✓
            </span>
            <div>
              <p className="text-sm font-semibold">{perk.title}</p>
              <p className="text-sm text-muted-foreground">{perk.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
