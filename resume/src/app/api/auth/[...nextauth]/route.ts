import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utls/db";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing email or password.");
        }

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("User not found.");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password || ""
        );
        if (!isPasswordCorrect) throw new Error("Invalid credentials.");

        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connect();
      if(account===null){
          return false;
      }

      if (account.provider === "github") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await new User({ email: user.email }).save();
        }
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
