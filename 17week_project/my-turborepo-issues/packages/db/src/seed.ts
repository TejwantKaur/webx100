import bcrypt from "bcryptjs";
import { db } from "./prisma/db";
import { Temporal } from "temporal-polyfill";

async function seedUser(opts: {
  number: string;
  email: string;
  name: string;
  password: string;
  amount: number;
  status: "Success" | "Failure";
  token: string;
}) {

  const existingUser = await db.orm.public.User.upsert({ 
      create: { 
        number: opts.number,
        email: opts.email,
        name: opts.name,
        password: await bcrypt.hash(opts.password, 10),
      },
      update: { name: opts.name },
      conflictOn: { number: opts.number, } 
  })

  await db.orm.public.Balance.upsert({
      create: {
        userId: existingUser.id,
        amount: opts.amount,
        locked: 0,
      },
      update: { amount: opts.amount },
      conflictOn: { userId: existingUser.id } 
  });

  await db.orm.public.OnRampTransaction.upsert({
      create: {
        userId: existingUser.id,
        startTime: Temporal.Now.instant(),  // was: new Date()
        status: opts.status,
        amount: opts.amount,
        token: opts.token,
        provider: "HDFC Bank",
      },
      update: { status: opts.status },
      conflictOn: { token: opts.token, },
  })
  return existingUser;
}

async function main() {
  const alice = await seedUser({
    number: "1111111111",
    email: "alice@example.com",
    name: "alice",
    password: "alice",
    amount: 20000,
    status: "Success",
    token: "token__1",
  });
  const bob = await seedUser({
    number: "2222222222",
    email: "bob@example.com",
    name: "bob",
    password: "bob",
    amount: 2000,
    status: "Failure",
    token: "token__2",
  });
  console.log({ alice, bob });
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });


//   packages/db/package.json:
//   "scripts": {
//   "db:seed": "bun src/seed.ts"
// }

// yarn db:seed

// bun src/seed.ts
// npx tsx src/seed.ts