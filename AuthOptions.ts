import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./lib/db";
import bcrypt from "bcryptjs";

export const AuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields: any = credentials;

        if (validatedFields) {
          const { email, password } = validatedFields;
          const user = await db.user.findUnique({
            where: {
              email,
            },
          });
          if (!user || !user.password) {
            throw new Error("Email and password are required");
            return user;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
        // if (user) {
        // return user;
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
};
