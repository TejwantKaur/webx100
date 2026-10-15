- No more @prisma/client package — now @prisma/orm-postgres (per-database package)
- schema.prisma is now called a contract (prisma/contract.prisma) — same syntax mostly, but no datasource/generator blocks anymore
- Connection string lives in a new prisma.config.ts file, not the schema
- prisma generate → now prisma contract emit
- prisma migrate dev → now two steps: prisma migration plan then prisma db migrate
- Client usage changed: instead of prisma.user.create(...), it's now db.orm.public.User.create(...)


### Step 1 — Create the project

mkdir hello-prisma
cd hello-prisma
npm init -y
npm pkg set type=module

### Step 2 — Install packages

- No more @prisma/client package — now @prisma/orm-postgres (per-database package)

- npm install @prisma/orm-postgres dotenv
- npm install --save-dev prisma tsx typescript

@prisma/orm-postgres = (this replaced @prisma/client)
prisma = the CLI
tsx = runs TypeScript files without compiling
dotenv = loads your .env file

- create .env
- npx tsc --init
- npx prisma init | prisma.config.ts


- npm install --save-dev @types/node
- tsconfig; "types": ["node"], 
- "compilerOptions": {}, "include": ["src/**/*"]


- create prisma/contract.prisma;
- npx prisma contract emit;
- npx prisma db init
- npx prisma migration status

- npx tsx src/index.ts

### Step 3 — Add the Todo model with a relation

- npx prisma contract emit
- npx prisma migration plan --name add_todo ()
- 
- npx prisma db migrate --advance-ref db


schema.prisma	                       contract.prisma
prisma generate	                       prisma contract emit
prisma migrate dev	                   prisma migration plan + prisma db migrate
prisma.user.create()	               db.orm.public.User.create()
prisma.user.findMany({where})	       db.orm.public.User.where({...}).all()
prisma.user.update({where, data})	   db.orm.public.User.where({...}).update({...})
select: { user: true } for joins	   .include("relationName")


- https://app.notion.com/p/Prisma-3e5bb98ae94480289bdeee57a3fc9990?source=copy_link