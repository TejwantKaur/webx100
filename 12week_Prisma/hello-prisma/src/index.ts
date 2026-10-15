import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract.js";
import contractJson from "../prisma/contract.json" with { type: "json" };

const db = postgres<Contract>({
  contractJson,
  url: process.env["DATABASE_URL"]!,
});


// async function main() {
//   // Create a user
//   const user = await db.orm.public.User.create({
//     username: "admin1",
//     password: "123456",
//     firstName: "harkirat",
//     lastName: "singh",
//   });
//   console.log("Created:", user);

//   // Fetch all users
//   const users = await db.orm.public.User.all();
//   console.log("All users:", users);
//   await db.close();
// }
// main().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });


async function createTodo(userId: number, title: string, description: string) {
  const todo = await db.orm.public.Todo.create({
    title,
    description,
    userId,
  });
  console.log("Created todo:", todo);
}
// createTodo(1, "Running time", "20 mins");

// prisma.todo.findMany({ where: { userId } }), 
// it's now db.orm.public.Todo.where({ userId }).all().

async function getTodos(userId: number) {
  const todos = await db.orm.public.Todo.where({ userId }).all();
  console.log("Todos:", todos);
}
// getTodos(1);

async function getUserWithTodos(userId: number) {
  const user = await db.orm.public.User
    .where({ id: userId })
    .include("todos") // .include("relationName")
    .first();
  console.log("User with todos:", user);
}

async function updateUser(userId: number, firstName: string, lastName: string) {
  const updated = await db.orm.public.User.where({ id: userId }).update({
    firstName,
    lastName,
  });
  console.log("Updated:", updated);
}

// updateUser(1, "New", "Name");

async function main(){
  await createTodo(1, "Brunch", "Have your lunch");
  await getTodos(1);
  await getUserWithTodos(1);
  await updateUser(1, "First Name", "Last Name");
  await db.close();
}
main().catch((err)=>{
  console.log(err);
  process.exit(1);
})

// npx tsx src/index.ts 