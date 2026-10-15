import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:mySecretPassword@localhost:5432/postgres",
});

async function createTable() {
  try {
    await client.connect();
    const result = await client.query(`
            CREATE TABLE users2 (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            ); 
        `);
    console.log(result);
  } finally {
    client.end();
  }
}
// createTable();

async function insertData(username: string, password: string, email: string) {
  try {
    await client.connect();

    // SQL Injection
    const result = await client.query(`
        INSERT INTO users2 (username, password, email)
        VALUES ($1, $2, $3)
    `,
      [username, password, email],
    );
    console.log(result);
  } finally {
    client.end();
  }
}
// insertData("Tejwant24", "123427", "tej23@book.com");

async function createAddressTable() {
  try {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
        );
    `);
  } finally {
    client.end();
  }
}
// createAddressTable();

async function addAddress(
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string,
) {
  try {
    await client.connect();
    const result = await client.query(`
        INSERT INTO addresses (user_id, city, country, street, pincode)
        VALUES ($1, $2, $3, $4, $5)
    `, [user_id, city, country, street, pincode]);
  } finally {
    client.end();
  }
}
// addAddress(1, 'New York', 'USA', '123 Broadway St', '10000');
addAddress(1, 'Amritsart', 'India', 'Punjabi bagh', '143001');

// DELETE * from users2 where id=1
// deleted all addresses of id=1; 

// See all tables;
// docker ps;
// docker exec -it my-postgres psql -U postgres
// \dt