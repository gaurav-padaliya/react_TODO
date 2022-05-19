import './App.css';
import React, { useState} from 'react';
import {TodoForm} from './component/TodoForm'
import {Todos} from './component/Todos'

const App = ()=>{
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([...JSON.parse(localStorage.getItem("user"))]);
  const [editId, setEditId] = useState('');
  // const localS = [];  


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(editId !== ''){

      let arr = todos.filter((t)=>editId !== t.id);

      if(todo !== ""){
        setTodos([{id:`${todo}-${Date.now()}`,todo},...arr]);
        setTodo("");
      }
      setEditId('');
      localStorage.clear();
      localStorage.setItem("user",JSON.stringify([{id:`${todo}-${Date.now()}`,todo},...arr]));
      return;
    }

    if(todo !== ""){
      // console.log(todos);
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
      setTodo("");
    }
      localStorage.clear();
      const arr1 = todos;
      localStorage.setItem("user",JSON.stringify([{id:`${todo}-${Date.now()}`,todo},...todos]));

  }
  
  const handleDelete = (id)=>{
    const newTodos = todos.filter((t) => {
      return (t.id !== id)
    })
    setTodos(newTodos);
    localStorage.clear();
    const arr1 = newTodos;
    localStorage.setItem("user",JSON.stringify(arr1));
  }


  const handleEdit = (id)=>{
    console.log("Edit");
    todos.reduce((acc , curr)=>{
      if(id === curr.id){
       setEditId(curr.id);
       setTodo(curr.todo);
      }
      return acc;
    },0)
  }


  return (
    <div className='mainC'>
      <div className="innerM">
        <div className="title">
          TODO LIST OF GAURAV
        </div>
        <TodoForm
        handleSubmit = {handleSubmit}
        setTodo = {setTodo} 
        todo = {todo}
        // editId = {editId}
        />
        <Todos
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}
        todos = {todos}
        />
      </div>

    </div>
  );
}

export default App;
