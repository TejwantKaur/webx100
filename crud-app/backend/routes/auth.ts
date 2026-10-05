import { Router } from "express";
import type { Request, Response } from "express";

import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { db } from "../db.ts";
const JWT_SECRET = process.env.JWT_SECRET;

const router = Router();

// signup
const signupSchema = z.object({
  email: z.email(),
  username: z.string().min(3),
  password: z.string().min(6),
});
// http://localhost:3000/auth/signup
router.post("/signup", async (req: Request, res: Response) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success)
    return res.status(402).json({
      msge: "email | username must be atleast 3 letters | password must be atleast 6 letters",
    });

  console.log(result);
  const data = result.data;

  // make sure user not already exist;
  const existingUser = await db.orm.public.User.where({
    email: data.email,
  }).first();

  if (existingUser)
    return res.status(409).json({ msge: "User already exists!" });

  // if not exists;
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const newUser = await db.orm.public.User.create({
    email: data.email,
    username: data.username,
    password: hashedPassword,
  });
  // const newUser = await db.orm.public.User.create(result.data);

  // create token
  if (!JWT_SECRET) throw new Error("Invalid JWT_SECRET");
  const token = jwt.sign({ id: newUser.id }, JWT_SECRET);

  return res.json({
    msge: "Profile created successfully",
    token: token,
  });
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});
router.post("/login", async (req: Request, res: Response) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) return res.json({ msge: "Incorrect data!" });

  const data = result.data;
  const existingUser = await db.orm.public.User.where({
    email: data.email,
  }).first();

  if (!existingUser) return res.json({ msge: "User does'nt Exists!" });

  const passwordMatch = await bcrypt.compare(
    data.password,
    existingUser.password,
  );
  if (!passwordMatch)
    return res.status(401).json({ msge: "Invalid Password!" });

  // created token for further routes; taki bar bar login na kerna pve;
  // my signature; unique always;
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");
  const token = jwt.sign({ id: existingUser.id }, JWT_SECRET);

  return res.json({
    msge: "Login successfull!",
    token,
  });
});

export default router;

