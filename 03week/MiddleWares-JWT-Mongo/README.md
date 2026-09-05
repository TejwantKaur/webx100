npm install zod
npm install jsonwebtoken


# mongo
mongodb+srv://kaurtejwant998_db_user:U3uPov2YnaKHAU6A@cluster0.1vfzbyb.mongodb.net/

# JWT's
1. func that takes username and pass; returns jwt token, with username encoded in object;
return null for invalid username, that doesnt exist; or pass<6;
username should be valid emaid; validate using zod

2. func that returns true; if jwt token can be decoded; not verified
