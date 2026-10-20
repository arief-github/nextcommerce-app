import Link from "next/link";

const FOOTER_LINKS = {
  Shop: ["All products", "New arrivals", "Best sellers", "Deals"],
  Support: ["Help center", "Shipping", "Returns", "Contact"],
  Company: ["About", "Careers", "Privacy", "Terms"],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">
            next<span className="text-primary">commerce</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Everyday essentials, delivered across Indonesia.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold">{title}</p>
            <ul className="mt-3 space-y-2">
              {links.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} nextcommerce. All rights reserved.
      </div>
    </footer>
  );
}
