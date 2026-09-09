import { useState} from "react";
import Todo from "./components/Todo";

let counter = 6
function App03Todo() { 
  // TODO Application;
  const todoArr = [
    {id: 1, title: "Goto GYMs", desc:"6-7"},
    {id: 2, title: "Goto Lunch", desc:"1-2"},
    {id: 3, title: "Goto Market", desc:"5-6"},
    {id: 4, title: "Goto Play", desc:"6-7"},
    {id: 5, title: "Goto Sleep", desc:"9-7"},
  ]

  const [todos, setTodos] = useState(todoArr)
  function addTodo(){
    console.log("Add")
    setTodos([...todos, 
      { id:counter++, title:"Goto GYMs", desc:"6-7" }
    ])
  }
  return (
    <div>
      <button onClick={addTodo}>Add+</button>
      { todos.map(todo => {
        return (
          <Todo key={todo.id} title={todo.title} desc = {todo.desc}/>
        )
      })}
    </div>
  );
}

export default App03Todo;
