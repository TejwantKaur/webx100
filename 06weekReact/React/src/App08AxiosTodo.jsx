import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios"

// fetch data of person with provided id;
function App08AxiosTodo() {
    const [btnCount, setBtnCount] = useState(1);
    
    // function clickedBtn(id){
    //     setBtnCount(id);
    //     // console.log(btnCount)
    // }
    
    return ( 
        <div> 
            <button onClick={()=> setBtnCount(1)}>1</button>
            <button onClick={()=> setBtnCount(2)}>2</button>
            <button onClick={()=> setBtnCount(3)}>3</button>
            <button onClick={()=> setBtnCount(4)}>4</button>
            <Todo id={btnCount}/>
        </div>
     );
}

function Todo({id}){
    console.log("id recieved by todo "+id)
    const [todos, setTodos] = useState(null);

    useEffect(()=>{
        {console.log("id in Effect "+id)}
        axios.get("https://dummyjson.com/todos/" + id)
        .then(function(res){
            setTodos(res.data) // res.json().results
        })
    }, [id]) // useEffect was running once only, now whenever id changes, it reruns

    if (!todos) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        <h4>{todos.todo}</h4>
        {/* <p>{todos.completed==true? "Completed": "Pending"}</p> */}
    </div>
  )
}

export default App08AxiosTodo;