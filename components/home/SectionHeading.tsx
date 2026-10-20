import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({ title, description, href, linkLabel = "View all" }: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {description && <p className="mt-1 text-muted-foreground">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="shrink-0 text-sm font-medium text-primary hover:underline">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
