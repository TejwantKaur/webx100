// https://www.prisma.io/docs/guides/frameworks/hono?utm_source=chatgpt.com

import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../../prisma/contract.d";
import contractJson from "../../prisma/contract.json" with { type: "json" };
import { verify } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: { 
    userId: string,
}
}>();

// middleware
// /api/v1/blog/
blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    c.status(403);
    return c.json({ error: "unauthorized - no token" });
  }

  try {
    const user = await verify(token, c.env.JWT_SECRET, "HS256");
    console.log("JWT payload:", user); 

    c.set('userId', user.id as string) // add type in Variables
    await next();
  } 
  catch (err) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

// /api/v1/blog/

// create
blogRouter.post("/", async(c) => {
    const body = await c.req.json();
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });
  
    const authorId = c.get("userId")
    const blog = await db.orm.public.Blog
    .create({
        title: body.title,
        content: body.content,
        authorId, // number ni string aa eh
    })
    return c.json({ msge: "blog created!", blog });
});

blogRouter.get('/', async(c) => { // all blogs
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });

    try{
        const blogs = await db.orm.public.Blog.all();
        return c.json({ allBlogs: blogs })
    }
    catch(e){
        return c.json({err: e});
    }
})

blogRouter.get("/:id", async(c) => {
    const id =  c.req.param("id")
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });

    try {
        const blog = await db.orm.public.Blog
            .where({ id })
            .first()
        return c.json({ msge: "Here's your blog!" , blog});
    }
    catch(err){
        c.status(411);
        return c.json({ msge: "Could nt load blog" });
    }
});

blogRouter.put("/:id", async(c) => {
    const body = await c.req.json();
    const id = c.req.param("id")
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });

  const blog = await db.orm.public.Blog
    .where({ id })
    .update({
        title: body.title,
        content: body.content,
    })
  return c.json({ msge: "blog updated!", blog });
});

blogRouter.put("/:id/published", async(c) => {
    const db = postgres<Contract>({
        contractJson,
        url: c.env.DATABASE_URL,
    });
    const id = c.req.param("id")
    const blog = await db.orm.public.Blog
    .where({id})
    .update({published: true});

    return c.json({msge: "Blog Published!", blog})
})


blogRouter.delete("/:id", (c) => {
  return c.json({ msge: "blog deleted!" });
});
