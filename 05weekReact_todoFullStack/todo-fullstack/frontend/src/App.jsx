import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  // const todos = [
  //   { title: "donalila", description: "tralalala"},
  //   { title: "skibidy", description: "weired"},
  //   { title: "6 7", description: "nthing"},
  //   { title: "sick", description: "good"},
  // ]

  // recieves {"todos":[{},{}]}
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const response = await res.json(); 
        setTodos(response.todos)
      })
  }, [])
  
  // cannot hit another link with one link;
  // npm install cors in backend;
  
  return (
    <div className="outer-div">
    <div className='container'>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
    </div>
  )
}

export default App
