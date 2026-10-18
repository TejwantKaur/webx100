### Clone
https://github.com/100xdevs-cohort-2/paytm-project-starter-monorepo


### turbo

https://turborepo.dev/docs/guides/tools/tailwind#create-a-shared-tailwind-css-configuration-package

- yarn dlx create-turbo@latest -e with-tailwind

### Prisma 

from prisma 7 to 8;
https://www.prisma.io/docs/orm/coming-from-prisma-orm-7#not-available-yet


yarn add temporal-polyfill
packages/db/package.json => Set "name": "@repo/db"
cd ../..
my-turborepo => yarn install

.env => ...

src/prisma/db.ts => DATABASE_URL_POOLED


in app;
- import { db } from "@repo/db"

apps/user-app/next.config.*
- transpilePackages: ["@repo/db"],

=> create model
- yarn prisma contract emit
- yarn prisma db init

- src => index.ts => export;
packages/db/package.json
  "exports": {
  ".": "./src/index.ts"
}


### in app:
apps/user-app/package.json
"dependencies": {
  "@repo/db": "*",
  "@repo/ui": "*"
}

### my-turborepo => yarn install
- cd ~/Desktop/90-days/Projects/Paytm/my-turborepo
- yarn install

<!-- npm install --save-dev tsx typescript -->

### env
- env in both merchant and user-app;
- add url and secret;

### user-app
- yarn workspace user-app add next-auth
- package.json => "name": "user-app",

yarn add bcrypt
yarn add -D @types/bcrypt

### seed.ts
packages/db: yarn add bcryptjs

### prisma studio
https://www.prisma.io/docs/studio/prisma-next


### app>lib>actions


### Date()
import { Temporal } from "temporal-polyfill";
startTime: Temporal.Now.instant(), 



## phase 1:
- we can transfer money; but out balance donot changes;

## create webhook;