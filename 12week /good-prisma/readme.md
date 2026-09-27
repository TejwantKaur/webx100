- https://www.prisma.io/docs/prisma-orm/from-scratch

- npm init -y
- npm pkg set type=module

- npm install @prisma/orm-postgres dotenv
- npm install --save-dev prisma tsx typescript @types/node

- npx tsc --init

- tsconfig.json: "types": ["node"]
- add "include": ["src/**/*"]

- create src > index.ts;
 
- create .env: 
- DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
- docker ps;

- create prisma/contract.prisma;
- no datasource block, no generator block. 

- model in contract.prisma
- npx prisma contract emit
- npx prisma db init

- docker rm -f $(docker ps -aq); delete all containers
- docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

- docker ps
<!-- psql -->
- docker exec -it my-postgres psql -U postgres

#### after applying change
- npx prisma contract emit
- npx prisma migration plan --name added_email
- npx prisma db migrate --advance-ref db


### delt migration
- docker rm -f my-postgres  
- rm -rf migrations/app
- rm -f prisma/contract.json prisma/contract.d.ts
- docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

- npx prisma contract emit
- npx prisma migration plan --name initial
- npx prisma db migrate --advance-ref db


<!-- psql -->
- docker exec -it my-postgres psql -U postgres

postgres=# \dt

          List of tables
 Schema | Name | Type  |  Owner   
--------+------+-------+----------
 public | todo | table | postgres
 public | user | table | postgres
(2 rows) 

postgres=# 

- write in src > index.ts
