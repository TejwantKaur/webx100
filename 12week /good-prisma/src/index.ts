// ho can we talk to our database 

import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract.js";
import contractJson from "../prisma/contract.json" with { type: "json" };

const db = postgres<Contract>({  
		contractJson,  
		url: process.env["DATABASE_URL"]!,
});

// async function main(){
//     await db.orm.public.User.where({}).deleteAll();

//     //  create user
//     const alice = await db.orm.public.User.create({
//         username: "John_doe",
//         password: "1234",
//         firstName: "John",
//         lastName: "Doe",
//         email: "alice@123"

//     })
//     console.log("user created! ", alice)
// }

async function createUser (
        username: string ,
        password: string,
        firstName: string ,
        lastName: string ,
        email: string ){

    // await db.orm.public.User.where({}).deleteAll();

    //  create user
    const alice = await db.orm.public.User.create({
        username,
        password,
        firstName,
        lastName,
        email,
    })
    console.log("user created! ", alice);
    await db.close();
}
// createUser("john_doe", "1234", "John", "Doe", "john@123")
// createUser("user", "1234", "user", "name", "user@123")
// createUser("alice_bob", "1234", "Alice", "Bob", "alice@123")

// npx tsx src/index.ts  
// docker exec -it my-postgres psql -U postgres
// postgres=# \dt
// SELECT * from "user";

async function createTodo(userId: number, title: string, description: string) {
    const todo = await db.orm.public.Todo.create({
        userId, title, description
    })
    console.log("Todo created!", todo);
}
async function todoCreation(){
    await createTodo(3, "Goto Gym", "2 hrs");
    await createTodo(3, "Have Lunch", "1 hr");
    await createTodo(3, "Running", "20 mins");
    await createTodo(3, "Walk", "20 mins");

    await db.close();
}
// todoCreation();

async function getTodoNdUser(userId: number){
    const response = await db.orm.public.Todo
    .where({ userId: userId })
    .select("id", "title", "description")
    .include("user")
    .all()
    // .include("user", (user) =>
    //     user.select("id", "username", "firstName", "lastName", "email")
    // ).all();

    console.log(response)
    await db.close();
}
// getTodoNdUser(3);

async function getUserAndTodos(id: number) {
    const user = await db.orm.public.User
        .where({id: id})
        .select(
            "id",
            "username",
            "email",
            "firstName",
            "lastName"
        )
        .include("todos", (todo)=> {
            return todo.select(
                "id", 
                "title",
                "description",
                "done"
            )
        })
        // .all()
        .first()

    console.log(user);
    db.close()
}
getUserAndTodos(3);
