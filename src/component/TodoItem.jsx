import React, { useState } from "react";
import Todo from "./Todo"

function Todoitem({todos,completeTodo,removeTodo, updateTodo}){
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:'',
        })
    }
    if (edit.id){
        return <Todo edit={edit} onSubmit={submitUpdate}/>
    }
    
    
return todos.map((todo,index) => ( 
    <li className={todo.completed ? 'completed' :'active'} key={index}>
        <div className="view">
            <input 
            className="toggle" 
            type="checkbox"
            checked={todo.completed} 
            onChange={()=> completeTodo(todo.id)}
            />
            <label
            onClick={()=> setEdit({id: todo.id, value: todo.text})}
            >{todo.text}</label>
            <button 
            className="destroy"
            onClick={()=> removeTodo(todo.id)}
            >x</button>
        </div>
        </li>
    ))
    }
export default Todoitem;