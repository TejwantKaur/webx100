const jwt = require("jsonwebtoken");

const value = {
    name: "Tejwant",
    acc_num : 12313242
}

console.log("")

// jwt token;
const token = jwt.sign(value, "string"); 
// this string is used to verify only; 
// called secret; so we have to keep it safe; if lost; anyone who finds it can verify 
console.log(token)
console.log("")

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqd2FudCIsImFjY19udW0iOjEyMzEzMjQyLCJpYXQiOjE3ODg1OTIyNTd9.IrnjTSvQ1HKpQ4A-P5M904rSPEBxu_yL6E50HdKmQfM


// decoded using jwt.io
const contents = {
  "name": "Tejwant",
  "acc_num": 12313242,
  "iat": 1788592257
}// shook; recieved it; decoded it on jwt.io
// but cant verify without using the [string]

// if someone tries to make new jwt token from the info he recieves;
// he could'nt; coz he don't know the string we used to create it;
// so can't verify;

const sus_token = jwt.sign(contents, "dontknow");

console.log(sus_token)
console.log("")

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqd2FudCIsImFjY19udW0iOjEyMzEzMjQyLCJpYXQiOjE3ODg1OTIyNTd9._-6SvC6I6iDukQ1_hfrCV_4u4Cg9kKrpYb9MctFCNOU

// verification time;
try{
  const sus_verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqd2FudCIsImFjY19udW0iOjEyMzEzMjQyLCJpYXQiOjE3ODg1OTIyNTd9._-6SvC6I6iDukQ1_hfrCV_4u4Cg9kKrpYb9MctFCNOU", "string") // match with og token
  console.log(sus_verify)
} catch(err){
  console.log("token doesnt matched")
  console.log("")
}

// JsonWebTokenError: invalid signature

const og_verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqd2FudCIsImFjY19udW0iOjEyMzEzMjQyLCJpYXQiOjE3ODg1OTIyNTd9.IrnjTSvQ1HKpQ4A-P5M904rSPEBxu_yL6E50HdKmQfM", "string");
console.log(og_verify);
console.log("")
// clocked it; verified