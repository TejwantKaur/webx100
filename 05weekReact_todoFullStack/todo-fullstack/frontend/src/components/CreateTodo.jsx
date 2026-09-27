import "./CreateTodo.css"

function CreateTodo() {
    return ( 
        <div className="container">
            <input type="text" placeholder="title"/> 
            <input type="text" placeholder="description"/> 
            <button className="addBtn">Add+</button>
        </div>
     );
}

export default CreateTodo;