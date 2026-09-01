const fs = require("fs");

// async func, so will come later;
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data); // 2nd; now 3rd;
})

console.log("Mid") // 1st;

let a = 0;
for(let i=0; i<1000000000; i++){
    a++;
}

console.log("End") // 2nd;

// now go to pending callbacks;