// introducing set Timeout;

// syntax: promise; function; resolve;
// create a func that takes 2 secs then resolve 
const d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Resolved"); 
    }, 2000)
    
})

function read(){
    console.log(d);
}

console.log(d);
d.then(read);

// promise(function(resolve){
//      async task; fetching data from db etc;
// })

