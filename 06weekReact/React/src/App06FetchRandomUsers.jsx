import { useEffect, useState } from "react";
import "./App.css"

let id=1;
function App06FetchRandomUsers() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        // setInterval(()=>{
            fetch("https://randomuser.me/api/?results=10")
            .then(async function(res){
                const json = await res.json()
                console.log(json.results)
                setUsers(json.results)
            })
        // },5000)
    }, [])

    return ( 
        <div>
            {/* {users.map((user)=> 
                <User key={id++} name={user.name.first} email={user.email} gender={user.gender} />
            )} */}

            {users.map(({name, email, gender})=>(
                <User key={id++} name={name.first} email={email} gender={gender}/>
            ) )}
        </div>
     );
}

function User({name, email, gender}){
    return (
        <div className="box">
            <h4> {name} </h4>
            <p> {email} </p>
            <p> {gender} </p>
        </div>
    )
}

export default App06FetchRandomUsers;