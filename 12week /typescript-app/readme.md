npm init -y
npx tsc --init

tsconfig => "rootDir": "./src", "outDir": "./dist",
create src > index.ts

tsc -b
node dist/index.js

npm install expree @types/express zod
package.json => "type": "module",
