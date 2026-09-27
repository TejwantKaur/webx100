const axios = require('axios');
const express = require('express')

const app = express();


// GET
async function getmain(){
    // axios.get/ axios.post
    const response = await axios.get("http://localhost:3000/todos")
    // recieves response.data;
    console.log("Number of Tasks", response.data.todos.length);

}
// POST
async function postmain(){
    const response = await axios.post("http://localhost:3000/todos")
    console.log(response.data)
}

getmain()
postmain()

app.listen(3002, () => { console.log("Listening at 3002") })