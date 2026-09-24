- npm init -y; npx tsc --init;
- src, dist; package => type: module;
- npm i pg
- npm i @types/pg

postgress docker image;
mongo db docjer image;

docker run mongo;
docker run -p 27015:27017 mongo; || 27017:27017 default port of mongo;
any request on localhost:27015 will redirect to mongo's url 27017;
if we try to connect with url localhost:27015 in mongo db compass; it will connect;

docker run -d -p 27017:27017 mongo
to ensure background run also;

docker ps; shows id, command, status vgera;

doxker kill; then docker ps; shows nthing;
docker rm my-postgres


docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mySecretPassword -d postgres

docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=123 -d postgres
            └──────┬──────┘   └────┬────┘      └─────────┬────────┘ └┬┘ └───┬────┘
      Container Nickname      Port Mapping        Secret Password   │   Image Name
     (Name it anything)     (Bridge to Mac)     (Match your string) │ (Must be "postgres")
                                                                    │
                                                              Background Mode
                                                             (Runs in secret)

docker ps; to look it;
docker kill; || docker stop my-postgres
docker rm my-postgres


### connection string
- postgresql://postgres:mySecretPassword@localhost:5432/postgres

postgresql:// postgres : mysecretpassword @ localhost : 5432 / postgres
  └───┬────┘   └───┬──┘   └──────┬───────┘   └───┬───┘  └─┬──┘   └───┬────┘
   Protocol     User       Password        Host Server   Port   Database Name
 (Postgres SQL) (Default) (Match Docker env)  (Your Mac) (Opened door) (Default)

### gitting into container;
- docker exec -it my-postgres psql -U postgres; -U for user
- now can type Insert/update etc queries;
- exit 

### psql
- terminal based component


- CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
- \dt;
- update; delete; select;


### transactions; session;
- either do all or do nthing; only then success; sessions in mongo;
- (-50 | +50)
- if we want to insert both; user credentials and adresses; w8 until both are added;

#### psql 
- BEGIN;

- INSERT INTO users (username, email, password) VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123'); 
- values not added yet in the table;

- INSERT INTO addresses (user_id, city, country, street, pincode) VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001'); 

- COMMIT;
- now added;

SELECT * from users;

### joins;
- give me all users credentials; all addresses;
- SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';

- SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;


### Joins | inner join
- appears when there exists entries in both; users table and address table; if anyone empty; give err; need to shoe all; username; email; country; street; etc..

#### Left join;
- will give left tables; entry and keep right table's entries null;
- if there's no entry in address ja fer in users; it will show; half enteries jo v present ne like; username; email; etc..
- want to see all users; inspite og being they are having address or not;

#### right join;
- shows all addresses; irrespective of user present or not;
- in our case; we are having foreign key; so only right entry exists; left not; not possible; 


#### full join;
- combine left and right;
- we have 2 users; with no corresponding addresses;
- have 3 addresses but not user linked;
- this will show 5 entries;


