import { Hono } from 'hono'

const app = new Hono()

// authenticate middleware; express()
// function authMiddleware(req, res, next){ }

async function authMiddleware(c: any, next: any){ // context c; has req, and response
  if(c.req.header("Authorization")){
    // validation
    next();
  } else {
    return c.text("You don't have access!");
  }
}
// app.use(authMiddleware);

app.post('/', authMiddleware, async (c) => {
    const body = await c.req.json();
    // always await; kioki jido apn fetch kerde c; ode ch vi await res.json e kerde c

    console.log(body);
    console.log(c.req.header("Authorization"))
    console.log(c.req.query("params"))

    return c.text('Hello Hono!')
})

export default app;
