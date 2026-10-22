"use client";

import { useEffect, useState } from "react";

/**
 * Toggle class .dark di <html>.
 * Karena globals.css memakai `@custom-variant dark (&:where(.dark, .dark *))`,
 * semua token (.dark { --background: ... }) dan class `dark:` ikut berubah.
 *
 * Kalau nanti butuh simpan preferensi + hindari "flash", ganti dengan next-themes.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function run() {
      setIsDark(document.documentElement.classList.contains("dark"));
    }

    run();
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span aria-hidden className="text-lg">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
