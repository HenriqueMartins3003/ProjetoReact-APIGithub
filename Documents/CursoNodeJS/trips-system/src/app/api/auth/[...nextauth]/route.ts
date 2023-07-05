import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId:
        "260446187627-fdg8ote3urjn1dg9ffljjctfsalocrcv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
