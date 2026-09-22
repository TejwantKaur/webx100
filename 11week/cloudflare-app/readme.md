## Coudflare
npm create cloudflare -- my-app

npm run dev

npx wrangler login
npm run deploy;

if we waana change app name from my-app to ....
go to wrangler.jsonc; change there; deploy again;

npx wrangler deploy
npm run deploy;

very ugly syntax in only cloudflare;

## hono
npm create hono@latest hono-app;
select cloudflare workers

- console err => npm install -D @cloudflare/workers-types
- tsconfig.json => "types": ["@cloudflare/workers-types"],

post http://localhost:8787/?param=2
### POST 
- Query => params: 543
- Headers => Authorization: 215
- body => { "msge": "Hi there" }

npx wrangler login
npm run deploy
npm run dev