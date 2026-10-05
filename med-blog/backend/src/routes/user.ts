import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../../prisma/contract.d";
import contractJson from "../../prisma/contract.json" with { type: "json" };

import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();

// /api/v1/signup
userRouter.post("/signup", async (c) => {
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });

  const body = await c.req.json();
  try {
    const user = await db.orm.public.User.create({
      email: body.email, // unique
      username: body.username,
      password: body.password,
    });
    // await db.close(); // donot close; as clients cnnection pool is shared;
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      msge: "Signup successfully!",
      Details: user,
      jwt: token,
    });
  } catch (e) {
    return c.json({ msge: "email already registered | Try login" });
  }
});

userRouter.post("/signin", async (c) => {
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });
  const body = await c.req.json();
  try {
    const user = await db.orm.public.User.where({ email: body.email }).first();
    // await db.close();
    if (!user || user.password !== body.password) {
        return c.json(
            { msge: "user not found | incorrect username, password" }, 401,
        );
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
        msge: "Login Successfull!",
        Details: user,
        jwt: token,
    });
    } catch (e) {
        c.status(411)
        return c.json({ msge: e });
    }
});