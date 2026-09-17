import axios from "axios";
import { useEffect, useState } from "react";

// custom hook star with use
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(()=>{
    //     axios.get("http://localhost:3000/todos").then((res) => {
    //     setTodos(res.data.todos);
    //     setLoading(false);
    //     });
    // }, 3000)

    // const value = setInterval(()=>{
    //     axios.get("http://localhost:3000/todos")
    //     .then((res)=>{
    //         setTodos(res.data.todos);
    //         setLoading(false);
    //     })
    // }, n * 1000);

    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
        // this is how we can stop the clock;
        clearInterval(value);
    }

  }, [n]);
  return { todos, loading };
}

function FetchTodos() {
  // get todos simply by calling hook;
  const { todos, loading } = useTodos(5);

  if (loading) return <div>Loading....</div>;

  // else
  return (
    <div>
      {todos.map((todo) => (
        <Display key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Display({ todo }) {
  return (
    <div>
      <h4> {todo.description} </h4>
      <p>Id: {todo.id} </p>
      <p>Title: {todo.title} </p>
      <p>Completed: {todo.completed} </p>
    </div>
  );
}

export default FetchTodos;
