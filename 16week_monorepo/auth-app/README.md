### next auth;

https://next-auth.js.org/getting-started/example

- npm install next-auth

https://next-auth.js.org/configuration/providers/credentials

#### in client component
- .env
- route.ts => secret: process.env.NEXTAUTH_SECRET
- layout => < body>< Providers> {children} </ Providers></>
- appbar =>  const session = useSession();
- providers => < SessionProvider>{children}< SessionProvider/>


#### in server component

#### how to see id;
