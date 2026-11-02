import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";

import { db } from "@/db";

import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

import {
  accounts,
  authenticators,
  sessions,
  users,
  verificationTokens,
} from "@/db/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
});
