import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

// drizzle-kit tidak membaca .env.local sendiri; pakai loader resmi Next.js
loadEnvConfig(process.cwd());

/*
 * Migration memakai koneksi DIRECT (tanpa -pooler), sesuai anjuran Neon:
 * "Use a direct (non-pooled) connection when running Drizzle Kit migrations."
 * Aplikasi tetap memakai DATABASE_URL (pooled) di db/index.ts.
 */
const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!url) {
  throw new Error(
    "Missing DATABASE_URL_UNPOOLED (atau DATABASE_URL) environment variable",
  );
}

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url },
});
