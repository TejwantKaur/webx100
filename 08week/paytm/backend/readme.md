## UserSchema
- connect to mongoose

## Router
- all requests will go to api/v1 route

### cors
- npm i cors; frontend and backend are on different urls;

### body-parser 
- app.use(express.json())

### jwt
- jsonwebtoken
- export jwt secret from config.js

## backend Routes
- Signup
- npm i zod
- signupSchema => safeParse; restrict again signup; User.create; send token; 
- signinSchema, updateOne
- middleware 
- getting data for the users from backend; filterble via first and lastNames;
- $or for doing 2 queries together and $regex for using like => like operator; %har% 

## bank related schema
- accounts table; 
- ref to User table so that; cannot create balance for the user who doesnt exists in the table;

## Transactions in Dbs; balance and transfer endpoints
- whenever user signup; add some dummy amount to their account
- POST /api/v1/account/transfer
- Body { to: string, amount: number }
- response 200; 400(Insufficient balance, Invalid account); 

## session
- starting point (session.startTransaction())
- everything between this either happen together, or nthing happens; transaction fails;
- ending point (await session.commitTransaction()); doesnt execute btw; untill commited;
- if 2 request came together at same time; tado vi; it has to process; 2 requests will not create a deadlock
- we hve 100 rs; send 100 to p1 and p2 simultaneously; but this will be controlled by sessions; 

### how to create error
- if we did transfer logic in function and call them twice right after 1; it will not show -ve balance;


### user1 token:
- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWE5ZWZjYjhlMmE1MDUwMzZlMmM4YWQiLCJpYXQiOjE3ODk1MjI4NDB9.j6XaiherXx3ohlzPGT7enx3TZWtWvNOiOPzlwA8MN1M

### user2 token:
- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWE5ZjIwYmI3YWZlMGU1NTZjYThiNDciLCJpYXQiOjE3ODk1MjI2MTh9.fjOvgb0ctNDVN3FEybXiHnJK9aJmjHqJS48r77DPv2w

## tillnow:
- we can create user; signin; get token and add to headers; check balance and transfer money;
