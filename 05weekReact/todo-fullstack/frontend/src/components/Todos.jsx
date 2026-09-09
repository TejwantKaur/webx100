import "./Todos.css"
// array of objects
// todos = [{}, {}]

function Todos({ todos }) {
    return ( 
        <div>
        { todos.map(function(todo) {
          return (
            <div className="display-todos" >
                <div className="text">
                    <h4>{ todo.title }</h4>
                    <p>{ todo.description }</p>
                </div>
                <button className="todoBtn">{ todo.completed == true? "Done": "Mark as Done" }</button>
            </div>
          )
        })}
        </div>
     );
}

export default Todos;