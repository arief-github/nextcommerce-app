import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "nextcommerce",
  description: "Everyday essentials, delivered across Indonesia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: class .dark di <html> diubah di client oleh ThemeToggle
    <html lang="id" suppressHydrationWarning className={geist.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
