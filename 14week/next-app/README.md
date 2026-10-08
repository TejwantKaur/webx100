https://nextjs.org/docs/app/getting-started/installation


- bun create next-app@latest next-app

Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use React Compiler? … No
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Cache Components? … No 
✔ Would you like to customize the import alias (`@/*` by default)? … No 
✔ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? … No
✔ Would you like to help improve Next.js by letting agents prepare anonymized feedback for your review as you code? (Disable anytime with `experimental.agentFeedback: false`.) … No / Yes


- cd next-app 
- bun dev
- bun create next-app@latest my-app --yes
cd my-app


- add next js files;

### Prisma
https://www.prisma.io/docs/prisma-orm/quickstart/existing-app/postgresql?utm_source=chatgpt.com

- npm install --save-dev tsx typescript.
- bunx prisma@latest orm init --yes --target postgres --authoring psl --write-env
DATABASE_URL=""

- model

- bunx prisma contract emit
- bunx prisma db init