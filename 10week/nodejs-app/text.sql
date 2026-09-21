CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    passwrd VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
-- increase pass; len for hashed pass;

INSERT INTO users (username, email, passwrd)
VALUES ('usernmae', 'user@gmail.com', 'pass')

UPDATE users
SET passwrd = 'new Passwrd'
WHERE email = 'user@gmail.com'

DELETE FROM users
WHERE id = 1

SELECT * FROM users
