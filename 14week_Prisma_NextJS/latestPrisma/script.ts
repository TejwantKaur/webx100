import { db } from "./src/prisma/db";

async function main() {
  const created = await db.orm.public.Person.create({
    email: "alice@example.com",
    username: "Alice",
  });
  console.log("Created:", created);

  const users = await db.orm.public.Person.all();
  console.log("All users:", users);

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});