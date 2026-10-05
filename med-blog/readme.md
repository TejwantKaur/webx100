- npm create hono@latest hono-app;
- cloudflare worker;
- npm run dev;

- (c) means context; that have (req, res, next);

- aiven: get url;

- 

we create connection pool; 
that makes single connection to it;
instead of many connections;

connection pool url;


- prisma
- npm init -y
- npm pkg set type=module
- npm install @prisma/orm-postgres dotenv
- npm install --save-dev prisma tsx typescript @types/node
- // use prisma-8


- pool
- wrangler -> "compatibility_flags": [ "nodejs_compat" ],
- index.ts
    import postgres from "@prisma/orm-postgres/runtime";
    import type { Contract } from "../prisma/contract.d";
    import contractJson from "../prisma/contract.json" with { type: "json" };


import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract.d";
import contractJson from "../prisma/contract.json" with { type: "json" };
type Bindings = { DATABASE_URL: string };
const app = new Hono<{ Bindings: Bindings }>();
app.get("/users", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });
})

- npx wrangler secret put DATABASE_URL
- secret value => ""

- create .dev.vars => add DATABASE_URL=""   jwt_secret
- index.ts; route 1
- npx wrangler secret put JWT_SECRET // do get on worker
- then in bindings; 

- signup/ signin;
- create middlewares;


### Deploy
- npx wrangler secret list // both secrets exists
- npx wrangler deploy

### zod
- in common
- how will backend accend zod present in common

- npm install flowbite
- npm install flowbite-react
- flowbite docs and then paste;

### axios
- npm i axios

### hono cors

- npm run deploy
- set jwt in local storage;