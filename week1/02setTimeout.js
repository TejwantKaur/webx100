// timeout is async func;
// eh ape chlda rhu, and print after all done;
// but baki progm doesnt wait for it
// 

console.log("Begining!") // 1

function greet() { 
    console.log(`Inside function; Hi there!`) 
}

console.log("Mid"); // 2

let a=0;
for(let i=0; i<3000000000; i++) a++;

setTimeout(greet, 3000); // 7; will executed after 1000 timeout 

console.log("Mid2"); // 3
a=0;
for(let i=0; i<3000000000; i++) a++;

setTimeout(greet, 1000); // 6; will get executed b4 3000 vala;

console.log("Hi")  // 4
console.log("End")  // 5