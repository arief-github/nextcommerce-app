import "server-only";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Missing DATABASE_URL environment variable");
}

/*
 * Neon HTTP driver: setiap query = 1 request HTTP ke Neon.
 * - Tidak ada koneksi TCP/pool yang perlu dijaga → aman untuk serverless (Vercel)
 *   dan Edge runtime, dan tidak perlu cache di globalThis.
 * - Keterbatasan: tidak mendukung db.transaction() interaktif.
 *   Untuk beberapa query yang harus atomik, pakai db.batch([...]).
 */
const sql = neon(connectionString);

export const db = drizzle({ client: sql, schema });
