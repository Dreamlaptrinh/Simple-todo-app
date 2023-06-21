import React,{useState} from "react";
import Todo from "./Todo"
import Todoitem from "./TodoItem";
import TodoTasks from "./TodoTasks";
// import Todoitem from "./TodoItem";




function TodoList(){
    const [todos, setTodos] = useState([]);
    const [status,setStatus] = useState('');

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){ //thảm khảo google, có chức năng là khi không nhập mà add sẽ không nhận ký tự
            return todos;
        }
        const newTodos = [todo,...todos];
        
        setTodos(newTodos)
    }
    
    const completeTodo = id =>{   //Xử lý khi việc hoàn thành sẽ thêm completed
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
            todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodos)  
    }
    
    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){ //thảm khảo google, có chức năng là khi không nhập mà add sẽ không nhận ký tự
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item)))
    }


    const removeTodo = id =>{  //Xóa việc
        const remove = [...todos].filter(todo => todo.id !== id);
        setTodos(remove);
    }

    const filterTodosleft = (todos= []) =>{
        return todos.filter(todo => !todo.completed)
    }

    const filterByStatus = (todos = [], status = '', id) => {
        switch (status) {
          case 'active':
            return todos.filter(todo => !todo.completed)
          case 'completed':
            return todos.filter(todo => todo.completed)
          default:
            return todos
        }
      }
      console.log(filterByStatus)   


return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Todo onSubmit={addTodo}/>
        <ul>
        <Todoitem 
        todos={filterByStatus(todos,status)} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}/>
        </ul>
        <TodoTasks 
        numOfTodosLeft={filterTodosleft(todos).length}
        // activeButton={status}
        setStatusFilter={(status) => setStatus( status )}
        status={status}
        />
    </div>
    )
    }

export default TodoList;