import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { title: "Go to gym", desc: "6-7", completed: false },
    { title: "Go to Uni", desc: "9-5", completed: false },
    { title: "Go to park", desc: "5-6", completed: false },
  ])

  function addTodo(){
    // purane todos nu spread mtlb oldTodo + hun jo add kita
    setTodos([...todos, // +
      { title: "Go to hell", desc: "everlasting", completed: false }
    ])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      { todos.map(function(todo){
        return <Todo title={todo.title} desc={todo.desc} completed={todo.completed}/>
      })}
    </div>
  )
}

function Todo(props){
  return (
    <div className="">
      <h4>{ props.title }</h4>
      <p> {props.desc} </p>
    </div>
  )
}

export default App
