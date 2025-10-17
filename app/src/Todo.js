import React,{useState} from "react";
function ToDo(){
    const[todos,setTodos] =useState([]);
    const[input,setInput] =useState('');
    const addTodo=(e)=>{
        e.preventDefault();
        if(!input) return;
        setTodos([...todos,input]);
        setInput('');
    };
    const deleteTodo=(index)=>{
        const newTodos=[...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };
    return(<div style={{maxWidth:'400px',margin:'auto',padding:'20px',border:'5px solid yellow'}}>
        <div className="App"> 
            <h1>Todo list</h1>
            <form onSubmit={addTodo}>
                <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    />
        <button type="submit">Add</button>
            </form>
        </div>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    {todo}
                <button onClick={()=>deleteTodo(index)}>Delete</button>
                    
                </li>
            ))}
        </ul>
    </div>
            );
}
export default ToDo;