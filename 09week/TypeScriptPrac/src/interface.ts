interface User{
    firstName: string, 
    lastName: string, 
    // email: string,
    email?:string, // if i dont want to keep it required
    age: number,
}

function isLegal(user: User){
    return user.age>18;
}

function greet(user: User){
    return "HI " + user.firstName + " " + user.lastName;
}

let user: User = {
    firstName: "Tejwant",
    lastName: "Kaur",
    age: 45,
    email: "df@a.hif"
}

let eligible = isLegal(user);
let greetPerson = greet(user);

console.log(eligible);
console.log(greetPerson);