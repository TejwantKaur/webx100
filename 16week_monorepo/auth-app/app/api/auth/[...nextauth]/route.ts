// import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   req: NextRequest,
//   {params}: { params: Promise<{ authRoutes: string[]}> },
// ) {
//     const authRoutes = await params;
//   console.log(authRoutes);
//   return NextResponse.json({ msge: "routes" });
// }

// export function GET( req: NextRequest, arg: any) {
//   console.log(arg.params.authRoutes);
//   return NextResponse.json({ msge: "routes" });
// }

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// https://next-auth.js.org/configuration/providers/credentials

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "kaur" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // validation
        console.log(credentials);
        return {
          id: "1",
          name: "tejwant",
          email: "kaur@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
