type input = number | string;

function print(arr: input[]){ // output is number | string
    return arr[0];
}

const value = print(["Tejwant", "Kaur"]);
// 1.
// value.toUpperCase(); // though we passed strings; 
//  but typscript says string or number; so num.toUpperCase; throwing err;

// 2.
const value2 = print(["Tejwant", "Kaur", 1, 5 ,6]);
// we r sending mix of arrays which is not good; 
// so 1 way to do is:
function print2(arr: string[] | number[]){ 
    return arr[0];
}
// const value3 = print2(["Tejwant", "Kaur", 1, 5 ,6]); // now showing err;

console.log("----------------------------------------------");

// to overcome generics;
function identity1(arg: number){
    return arg;
}
function identity2(arg: string){
    return arg;
}
let out1 = identity1(123);
let out2 = identity2("My String!")

console.log("----------------------------------------------");

function identity<T>(arg: T){ // dont know type yet! ;
    return arg;
}
let output1 = identity<string>("Tejwant"); // telling which type;
let output2 = identity<number>(12356); // return type number not (string | number)

console.log("----------------------------------------------");

function printVal<T>(arr: T[]){
    return arr[2];
}
interface User { name: string}

const el1 = printVal<User> ([{name:"Tej"}, {name: "Sahibnoor"}]) // pass array of users,

const el3 = printVal<boolean> ([true, false]);
const el4 = printVal([9,65,"yield",7]); // number|string


const el2 = printVal(["Hi", "Hello", "Good"]);
console.log(el2.toUpperCase());
// const upp = el4.toUpperCase();
