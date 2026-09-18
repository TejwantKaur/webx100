// let x: number = 3;
// // x = "hr"
// console.log(x);

// // types: any, string, boolean 
// function greet(firstName: any){
//     console.log("Hello + ", firstName)
// }

// greet("Hi")
// greet(123)
// greet(true)

// function greet2(firstName: string){
//     console.log("Hello + ", firstName)
// }

// // greet2(123)
// greet2("hi")

// // a: number; b: number; output:number
// function sum(a: number, b: number): number {
//     return a+b;
// }

// const value = sum(3,4)
// console.log(value);

function isLegal(age: number): boolean{
    // return age>18? true: false;
    console.log(age>18);
    return age > 18;
}

// let h = isLegal(4);
// console.log(isLegal(4));
// console.log(isLegal(41));


// function that takes another func as input and runs after 1 sec;
function fn1(fn: () => boolean){
    // setTimeout(()=>{
    //     console.log(fn);
    // },3000)
    setTimeout(fn, 3000);
}

fn1(() => isLegal(4))

// fn1(isLegal(4)); // returning false so fn1(false);


