console.log("Beginning") // 1

function proTimeout(){
    console.log("inside top proTimeout") // 3

    return new Promise(
        function(resolve){
            console.log("Inside Promise") // 4
            setTimeout(function(){
                console.log("setTimeout called") // 5 after 2 secs
                resolve("Resolved"); //7
            }, 2000)
        }
    )
}

console.log("Middle") // 2

proTimeout() // 3.0
.then(function(val){ 
    console.log("Then statement"); // 6
    console.log(val); // 7.0
})