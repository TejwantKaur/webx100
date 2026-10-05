Init a new TS Express project 
(npm init, tsconfig, express, @prisma/client, prisma, zod, jsonwebtoken, dotenv, types for all).

### prisma
- npm init -y
- npm pkg set type=module
- npm install @prisma/orm-postgres dotenv
- npm install --save-dev prisma tsx typescript @types/node

- npx tsc --init

- tsconfig.json: "types": ["node"]
- // add "include": ["src/**/*"]
- "types": ["node"],
    "noEmit": true,
    "allowImportingTsExtensions": true,

- create src > index.ts;

- create .env: 
- DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/crud-app?sslmode=disable"

### connection docker
- docker ps;

- docker run --name crud-app-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -e POSTGRES_DB=crud-app -d postgres

- docker rm crud-app-db
- docker rm my-postgres

- docker stop my-postgres
- docker run --name crud-app-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -e POSTGRES_DB=crud-app -d postgres

- docker exec -it crud-app-db psql -U postgres -d crud-app
- \dt (view all tables);
- exit

### Schema;
- create models;
- this comment is necessary at the very top; // use prisma-8
- create prisma.config.ts

### tables created;
- docker exec -it crud-app-db psql -U postgres -d crud-app -c "\dt"

### Task 2: Auth routes — Signup & Login
- index.js;
- apply zod
- npm i express jsonwebtoken zod uuid bcrypt
- npm i --save-dev @types/express @types/jsonwebtoken @types/bcrypt
- npx tsx index.ts

{
  "email" : "testing2@gmail.com",
  "password" : "123456",
  "username" : "user"
}

- docker exec -it crud-app-db psql -U postgres -d crud-app
- \dt
- Select * from "User"
- q
- \pset pager off

- jwt.sign()
 
- middleware

### Task 3, Part B: Protected Todo routes
- npx tsx watch index.ts

- npm i cors
- npm i -D @types/cors

### Front-end;
- npm create vite@latest client
- npm i axios react-router-dom recoil
- App.css @import "tailwindcss";