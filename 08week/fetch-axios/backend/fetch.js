const express = require("express");
const app = express();
co

function main(){
    fetch("http://localhost:3000/todos")
    .then(async response => {
        const json = await response.json()
        console.log("Number of Tasks", json.todos.length);
    })
}

// POST
async function asyncMain(){
    const response = await fetch("http://localhost:3000/todos", 
        { 
            method: "POST" ,
            body: {
                "username": "hello",
                "password": "1234"
            },
            headers: { "Authorization": "Bearer 123" }
        }
    );
    
    const json = await response.json();
    console.log("Number of Tasks", json.todos.length)
}

main()
asyncMain()



app.listen(3001, ()=>{
    console.log('Listening at 3001')
})