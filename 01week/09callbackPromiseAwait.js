const fs = require("fs");

function func(callback){ 
    fs.readFile("a.txt", "utf-8", 
        function(err, data){ // some async logic
            callback(data); 
        }
    );
}
async function main(data){
    console.log(data);
}

func(main);

// CallBAck
// ---------------------------------------- //
function AsyncFunc(cb){
    cb("AsyncFunction"); // async logic
}
function mainn(){
    AsyncFunc(function(value){
        console.log(value);
    })
}
mainn();

// ---------------------------------------- //
// Promise 
function PromiseFunc(){
    // let p = new Promise(function(resolve){
    //     resolve("");
    // });
    // return p;

    return new Promise(function(resolve){
        resolve("Promise");
    });
}
function main2(){
    PromiseFunc().then(function(value){
        console.log(value);
    })
}
main2();

// ---------------------------------------- //
// Async await 

function AwaitFunc(){
    return new Promise(function(resolve){
        resolve("Await");
    });
}
async function main3() {
    const val = await AwaitFunc();
    console.log(val);
}
main3();