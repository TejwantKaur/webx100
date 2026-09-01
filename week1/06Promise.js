// 3 types of promises;
// pending, resolve, rejected

const d = new Promise(function(resolve){
    resolve("Resolved"); // done; calls read;
})

function read(){
    console.log(d);
}

console.log(d)
d.then(read);
console.log(d)

// pehle sanu file read ja timeout te time lgg reaa c 
// thats why we were getting; pending;
// hun no time so always resolved;