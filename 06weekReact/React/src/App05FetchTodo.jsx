
import { useEffect, useState } from "react";

function App05FetchTodo() {
  const [todos, setTodos] = useState([]);

 
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(async function(res) {
        const json = await res.json()
        console.log(json)
        setTodos(json.todos)
      })
  }, []); // [] kdo we want eh run kre, if we add count, whenever count gets rerendered it will call this function also; 
  // till now [] empty means run only once;
  

  // send req after every 10 secs => set interval
  // useEffect(()=>{
  //   // setInterval(()=>{
  //     fetch("https://randomuser.me/api/?results=8")
  //       .then(async function(res){
  //         const json = await res.json();
  //         console.log(json);
  //       })
  //   // })
  // }, [])

  return (
    <div>
      {todos.map(item => 
        <Todo key= {item.id} todo={item.todo} completed={item.completed}/>
      )}
    </div>
  )
}
function Todo({todo, completed}){
  return (
    <div>
        <h4>{todo}</h4>
        <p>{completed==true? "Completed":"Pending"}</p>
    </div>
  )
}

export default App05FetchTodo;
