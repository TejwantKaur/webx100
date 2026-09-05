const z = require("zod");

function validateInput(obj){

    const schema = z.object({
        email : z.email(),
        password : z.string().min(8), // min 8 chars req;
    })

    const response = schema.safeParse(obj);
    if(response.success)
        console.log(response);
    else {
       console.log(response.error.issues[0].message);
    }
}

let obj = {
    email: "tej@kaur.nj",
    password : "1245799"
}

validateInput(obj)