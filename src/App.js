import React from "react";
import TodoList from "./component/TodoList";

import './App.css'


function App(){ 
  return (
    <div className="todoApp">
      <h2>Simple Todo App</h2>
      <TodoList/>
    </div>
  );
}

export default App;
