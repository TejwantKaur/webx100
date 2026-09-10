import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios"

let id=1;
function App07AxiosFetch() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=10")
        .then(function(res){
            setUsers(res.data.results) // res.json().results
        })
    }, [])
    return (
        <div>
            { users.map(({name, email, gender}) =>( 
                <User key={id++} name={name.first} email={email} gender={gender}/>
            ))}
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

export default App07AxiosFetch;