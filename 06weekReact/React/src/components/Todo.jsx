import "./Style.css"

function Todo({ title, desc }) {
    return ( 
        <div className="todo-box">
            {/* <p>id: {id}</p> */}
            <p>Title: {title}</p>
            <p>Description: {desc}</p>
        </div>
     );
}

export default Todo;