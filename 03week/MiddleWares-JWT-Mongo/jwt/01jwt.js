const jwt = require('jsonwebtoken')
const jwtPass = "string-secret"
const zod = require("zod");

const emailSchema = zod.email();
const passSchema = zod.string().min(6);

function encode(email, password){
    const emailVerify = emailSchema.safeParse(email);
    const passVerify = passSchema.safeParse(password);

    // console.log(emailVerify)
    // console.log(passVerify)
    
    if(!emailVerify.success || !passVerify.success) {
        if(!emailVerify.success)
            return emailVerify.error.issues[0].message
        else
            return passVerify.error.issues[0].message
    }

    return jwt.sign({ email }, jwtPass);
    // const signature = jwt.sign({ username }, jwtPass);
    // return signature
}

const ans = encode("harshit@ahm.vf", "yjJ568ubg5g")
// Too small: expected string to have >=6 characters
console.log(ans);


// decoded string is correct; 
// if we replace even a single char in toke; its invalid
function decode(token){ // jwt.io
    const decoded = jwt.decode(token); // returns null
    if(decoded) return true;
    return false;
}

const sus = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnN"
const og = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoaXRAYWhtLnZmIiwiaWF0IjoxNzg4NTk2MjQxfQ.gQCWX1XBVGPwixwgzdXB4zGSUVMgTa7T-0cmCx-l8Ak"
 
const decodeString = decode(og);
console.log(decodeString)

// verify;
function verify(token, secret){
    try {
        return jwt.verify(token, secret); // throws err
    } catch(e) {
        return e.message
        // return e
    }
    // const verified =
    // if(verified) return true;
}

const verifyString = verify(og, jwtPass);
console.log(verifyString)