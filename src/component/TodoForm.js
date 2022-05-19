import React from 'react'

export const TodoForm = ({handleSubmit,setTodo,todo}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputF'>
        <input type="text" placeholder='Enter Todo' 
        onChange={(e)=>setTodo(e.target.value)} 
        value = {todo}/>
        <button type="submit" >GO</button>
      </div>
    </form>
  );
};

export default TodoForm