import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_jWi31gImxKwR@ep-fancy-base-ai6mcxpd-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY NOT NULL,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      passwrd VARCHAR(255) NOT NULL, 
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log(result);
}
// // createUsersTable();

async function insertIntoTable(){
  try{
    await client.connect();
    const insertQuery = `
      INSERT INTO users (username, email, passwrd)
      VALUES ('tejwant', 'tejwant@gmail.com', 'pass')
    ` // user provided strings;
    const result = await client.query(insertQuery);
    console.log(result);
  } 
  catch (err){
    console.log(err);
  }
  finally {
    await client.end();
  }
}
// insertIntoTable();


// dont paste user provided strings directly;
async function insertIntoTable1(username:string, email:string, passwrd:string){
  try{
    await client.connect();
    const insertQuery = `
      INSERT INTO users (username, email, passwrd)
      VALUES ($1, $2, $3)
    ` 
    const values = [username, email, passwrd];
    const result = await client.query(insertQuery, values);
    console.log(result);
  } 
  catch (err){
    console.log(err);
  }
  finally {
    await client.end();
  }
}
// insertIntoTable1("Sahibnoor", "sahib@gmail.com", "1234");

// update
async function getUser(email: string){
  try{
    await client.connect();
    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [email];
    const result = await client.query(query, values);

    if(result.rows.length > 0){ // log 1st user; either 1 user or null; coz we have added unique email; 
      console.log(`User found: `, result.rows[0]);
      return result.rows[0];
    } else {
      console.log("User Not Found!")
      return null;
    }
  } catch(err) {
    console.log(err);
  } finally {
    await client.end();
  }
}
// getUser("sahib@gmail.com")


async function createAddressTable() {
  await client.connect();
  const result = await client.query(`
    CREATE TABLE addresses (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER NOT NULL,
      city VARCHAR(100) NOT NULL,
      country VARCHAR(100) NOT NULL,
      street VARCHAR(100) NOT NULL,
      pincode VARCHAR(20) NOT NULL, 
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
  console.log(result);
}
// createAddressTable();

async function insertIntoAddressTable(
  user_id:number, city:string, country:string, street: string, pincode:string){
  try {
    await client.connect();
    const query = `
      INSERT INTO addresses (user_id, city, country, street, pincode)
      VALUES ($1, $2, $3, $4, $5)
    ` 
    const values = [user_id, city, country, street, pincode];
    const result = await client.query(query, values);
    console.log(result);
  } 
  catch (err){
    console.log(err);
  }
  finally {
    await client.end();
  }
}
// insertIntoAddressTable(1, "New York", "USA", "123 Broadway St", "10001");
// insertIntoAddressTable(1, "Amritsar", "Punjab", "Punjabi Bagh", "143001");


// Join table;
async function getUserJoin(id: number){
  try{
    await client.connect();
    // defining users as u; and addresses as a;
    const query = `
      SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
      FROM users u
      JOIN addresses a ON u.id = a.user_id
      WHERE u.id = $1
    `;

    const values = [id];
    const result = await client.query(query, values);

    if(result.rows.length > 0){ // log 1st user; either 1 user or null; coz we have added unique email; 
      console.log(`User found: `, result.rows[0]); // only 1st address came;
      return result.rows[0];
    } else {
      console.log("User Not Found!")
      return null;
    }
  } catch(err) {
    console.log(err);
  } finally {
    await client.end();
  }
}
getUserJoin(1);



