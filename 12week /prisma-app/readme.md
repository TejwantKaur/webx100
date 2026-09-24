npm init -y;
npm create prisma@latest -- --provider postgres
ls

export DATABASE_URL="postgresql://postgres:mySecretPassword@localhost:5432/prisma_app"
docker run -e POSTGRES_PASSWORD=mySecretPassword -d -p 5432:5432 postgres

npm run db:init

- https://docs.prisma.io/docs/orm/contract-authoring/typescript-schema-builder?utm_source=chatgpt.com

- https://docs.prisma.io/docs/orm/migrations/how-migrations-work?utm_source=chatgpt.com


- edit contract.prisma, then run (npx prisma contract emit) which replaces prisma generate

- npx prisma contract emit
- npx prisma migration plan --name add-todo
- npx prisma db migrate

- docker exec -it my-postgres psql -U postgres -d prisma_app
- export DATABASE_URL="postgresql://postgres:mySecretPassword@localhost:5432/prisma_app"
- npm run db:verify

- npm run db:init; ede naal mig folder bnda;


#### generate
- npx prisma contract emit | npm run contract:emit




