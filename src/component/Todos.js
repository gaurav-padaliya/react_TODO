import React from 'react'
import '../App.css'
export const Todos = ({todos,handleEdit,handleDelete}) => {

  return (
    <>
  {
      todos.map((t) => (
        <div className='item' key={t.id}>
          <p >{t.todo}</p>
          <button  onClick={() => handleEdit(t.id)}>Edit</button>
          <button  onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))
  }
    </>
  );
};

export default Todos