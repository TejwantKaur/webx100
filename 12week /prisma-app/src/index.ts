// import { PrismaClient } from "../prisma/generated/client";
// const prisma = new PrismaClient();

import postgres from "@prisma/orm-postgres/runtime";
import contract from "./prisma/generated/contract.json" with { type: "json" };

export const db = postgres({
  contractJson: contract,
  url: process.env.DATABASE_URL!,
});

// async function insertUser(username:string, password:string, firstName:string, lastName:string){
//   prisma.user.create({
    
//   })

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
  const res = await db.orm.public.User.create({
    username, password, firstName, lastName, email
  });
  return res;
}
insertUser('userName', 'userPass', 'FirstUser', 'userLast', 'user@gmail.com')

// tsc -b
// node dist/index.js