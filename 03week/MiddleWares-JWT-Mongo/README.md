- npm install zod
- npm install jsonwebtoken


# JWT's
1. func that takes username and pass; returns jwt token, with username encoded in object;
return null for invalid username, that doesnt exist; or pass<6;
username should be valid emaid; validate using zod

2. func that returns true; if jwt token can be decoded; not verified
