import "server-only";

import { db } from "@repo/db";
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Phone Number",
      credentials: {
        phone: { label: "Phone Number", type: "text", placeholder: "986023..", required:true},
        password: { label: "Password", type: "password", required:true}
      },
      // TODO
      async authorize(credentials, req) {
          if (!credentials?.phone || !credentials?.password) return null;

          const existingUser = await db.orm.public.User
          .where({number: credentials.phone})
          .first()

        if(existingUser) {
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
          if(passwordValidation){
              return {
                  id: existingUser.id.toString(),
                  name: existingUser.name, 
                  email: existingUser.number
              }
          }
          return null;
          // pass is incorrect; dont let user login;
        } 
        try {
          const user = await db.orm.public.User
          .create({
              number: credentials.phone,
              password: await bcrypt.hash(credentials.password, 10),
          });

          return {
              id: user.id.toString(),
              name: user.name, 
              email: user.number
          }
        }
          catch(e){
              console.error(e)
          }
          return null;
      }
    })
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
      // TODO: can u fix the type here? Using any is bad
      async session({ token, session }: any) {
          session.user.id = token.sub

          return session
      }
  }
}
