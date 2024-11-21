import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos([...todos , todo]);
  }
  const removeTodo = (index)=>{
    setTodos(todos.filter((_ , i)=> i !== index))
  }
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => addTodo("New Task")}>Add Task</button>
    
      <ul>
        {todos.map((todo, index)=>{
          <li key={index}>
{todo}
<button onClick={()=> removeTodo(index)}>Remove</button>

          </li>
        })}
      </ul>
    </div>
  );
}

export default TodoList;
