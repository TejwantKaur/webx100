function func(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there");
        }, 2000)  
    });
    return p;
}

// function main(){
//     let value = func();
//     console.log(value); // not returning value;
// }

// adding async and await we got the value;
async function main(){
    let value = await func(); 
            // without await we recieve; promise;
    console.log(value); 
}

// this is same as
// function main(){
//     func().then(function(value) { 
//         console.log(value);
//     });
//     // console.log(value); 
// }

main();