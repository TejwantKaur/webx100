const express = require('express')
const app = express()
const axios = require('axios')
const url = "https://httpdump.app/dumps/37bb7bbf-7535-44aa-9869-5e1720eb5250"


// for post 1st arg: url => 2nd: body => headers;
// for get 1st arg: url; 2nd header

// async function main(){
//     // get post put
//     const response = axios.put( // put, post delt
//         url,
//         { "username": "hloo", "password": "2345" }, // body
//         { headers: { "Authorization": "Bearer 123" } }
//     )
//     // const response = axios.get( // put, post delt
//     //     url,
//     //     { headers: { "Authorization": "Bearer 123" } }
//     // )
//     console.log(response.data)
// }

async function main(){
    const response = axios({
        url: "https://httpdump.app/dumps/37bb7bbf-7535-44aa-9869-5e1720eb5250",
        method: "PUT",
        headers: { 
            "Authorization": "Bearer 123" 
        },
        data: {
            username: "tejwant"
        } // body
    })
}

main()

app.listen(3003)