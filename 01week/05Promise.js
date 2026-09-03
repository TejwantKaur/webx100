// Promise are just used to make are async func look good;
// they are just a class that make callback and asyn funcs more readable;

// wrappes up or func; make it good from our ugly one;

// apn apne e async func likhne aa, but will use js da provided promise class; to wrap up our async func, so that it looks good

const fs = require("fs");

// async func;
// function func(callback){ // kise hor; func da naam ayega
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         callback(data); // calling read(data);
//     });
// }

function func(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", 
            function(err, data){
                console.log("Not resolved yet") // 3;
                resolve(data); // sync returns promise not data
                // hun resolve hon to baad calling; read(data)
                // just like callback(data); read(data);
                // resolve will now call read(data);
                // coz we send read to Promise.then(read);
                console.log("after resolve"); // 4;
            }
        );
    });
}

function read(data){
    console.log("Resolved :)") // 5;
    console.log(a); // returns promise is resolved here
    // display
    console.log(data);
}

let a = func();
console.log(a); // 1;
a.then(read);  // pehle called func; 
               // returns promise that it is resolved
                // now calling our read func;

console.log(a); // 2; still pending; coz, func() is onGoing;