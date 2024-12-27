import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos,todoValues,settodoValues} = props;
  // const [todoValues,settodoValues] = useState('');

  return (
    <header>
      <input value={todoValues} onChange={(e)=>{
        settodoValues(e.target.value);
      }} type="text" placeholder='Enter Todo ....' />
      <button onClick={()=>{
        handleAddTodos(todoValues);
        settodoValues('');
      }}>Add</button>
    </header>
  )
}
