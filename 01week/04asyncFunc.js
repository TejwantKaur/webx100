// creating our own async func

// ugly way to write func

const fs = require("fs");

function func(callback){ // kise hor; func da naam ayega
    fs.readFile("a.txt", "utf-8", function(err, data){
        // console.log(data);
        callback(data); // calling read(data);
    });
}

function read(data){
    console.log(data);
}

// calling func;
func(read);