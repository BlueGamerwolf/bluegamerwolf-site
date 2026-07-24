import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  providers: [],
  pages: {
    signIn: "/login",
  },
};