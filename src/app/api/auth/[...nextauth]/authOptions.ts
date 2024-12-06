import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { frontendApi } from "../../frontendApi";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any):Promise<any> {
        const response = await frontendApi.userSignIn({
            email: credentials?.email,
            password: credentials?.password,
          });
          console.log("responseeeeeeeeeee::::::::::", response.data.userData);  
  
          return response.data.userData;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.email = user.email;
        token.id = user.userId;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.accessToken = token.accessToken ?? "";
        session.email = token.email ?? "";
        session.id = token.id ?? "";
      }
      return session;
    },
  },
};
