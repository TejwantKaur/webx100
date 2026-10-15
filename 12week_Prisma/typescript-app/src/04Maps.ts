type UsersAge = Record<string, number>;
const users: UsersAge = {
    "rage@234":21,
    "bait@34":89
}

type Users = Record<string, {age: number, name: string}>;
const user: Users = {
    "rage@234": {age: 54, name: "Hello"},
    "bait@34": {age: 41, name: "Bridge"},
}


// Maps
type User = {
    name: string,
    age: number,
    email: string,
}
const map = new Map<string, User>();
map.set("rage", { age: 54, name: "range", email: "" })
map.set("shahi", { age: 54, name: "kapoor", email: ""})

const userMap = map.get("rage");