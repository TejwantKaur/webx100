// readonly: 
// when we want ke internal vals v na change hon;

type User = {
   readonly name: string,
   readonly age: number
}
const user: User = {
    name: "John",
    age: 56
}
// user["name"] = "tejeant"; couldn't; as it is read-only;

type User1 = {
   name: string,
   age: number
}
const user1: User1 = {
    name: "John",
    age: 56
}
// user1["name"] = "tejeant"
user1.name = "Hello!"
console.log(user1.name)


// or

type Config = {
   endpoint: string,
   apiKey: string
}
const config: Readonly <Config> = {
    endpoint: "https://api.example.com",
    apiKey: "56avfg78"
}
// config.endpoint = "endpoint"; // err

const looseConfig: Config = {
    endpoint: "https://api.example.com",
    apiKey: "56avfg78"
}
looseConfig.endpoint = "endpoint";
