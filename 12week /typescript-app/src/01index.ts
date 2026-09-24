interface User {
    name: string,
    age: number
};

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}

const age = sumOfAge({name: "Tejwant", age: 23},{name: "Harcharan", age: 23} )
console.log(age);