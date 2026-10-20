import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/*
 * Contoh pola "apply token di component":
 * setiap varian hanya memakai class dari token (bg-primary, text-primary-foreground, dst),
 * TIDAK ada warna mentah seperti bg-violet-600. Ganti warna brand cukup di globals.css.
 */
const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
} as const;

const SIZES = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

type Props = ComponentProps<typeof Link> & {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
};

export function ButtonLink({ variant = "primary", size = "md", className, ...props }: Props) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
