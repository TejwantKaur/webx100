npm init -y
npx tsc --init

npm install pg;
npm install @types/pg; 
<!-- @types/pg; postsql vste pg; pg (node-postgres):
installs the official PostgreSQL client for Node.js (pg) along with its TypeScript type definitions (@types/pg).

This command prepares your backend environment (Node.js or Express) to communicate directly with the PostgreSQL database you just set up.

typescript nu pta nhi chlda; 
so @types/mongoose; @types/express; vi kerde apn kyi wri-->


tsc -b
node dist/index.js

package.json;
"type": "module", 

### sql injection
- user typed in input forms; send to backend; we without verifying; send to db; called sql injection;


### Relationships: foreign key
- hun we have users table; ans want to add (2 address); 2 entry ni pavage aapn users che;
- ek hor table jide ch user_id is foreign key; from 1st table; which tells; ke odo e add kerna data if o vli id users table ch exist kerdi hoyegi;
- donot allow address for user that doesnt exists;

### Joins
