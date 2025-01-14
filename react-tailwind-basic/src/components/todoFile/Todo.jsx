import React, { useState } from 'react';

export default function Todo() {
  const [tasks,setTasks] = useState(['Code','Sleep','Regret']);
  const [newTasks,setNewTasks] = useState('');

  function handleInputChange(e){
    setNewTasks(e.target.value);
  }

  function handleAdd(e){
    if(newTasks.trim() !== ""){
      setTasks(t=> [...t,newTasks]);
      setNewTasks("");
    }
  }

  function handleDelete(index){
    console.log(index);
    const updatedTask = tasks.filter((_,i)=> i !== index);
    setTasks(updatedTask);
  }

  function handleUp(index){
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  function handleDown(index){
    if(index < tasks.length-1){
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
      setTasks(updatedTask);
    }
  }


  return (
    <div className='min-h-screen flex flex-col items-center p-5 bgGrid'>
      <h1 className='text-4xl font-bold mb-5'>To Do List</h1>
      <div className='flex flex-col items-center gap-3 mb-5'>
        <input
          value={newTasks}
          type="text"
          onChange={handleInputChange}
          placeholder='Enter task'
          className='w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
        <button
          onClick={handleAdd}
          className='px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200'
        >
          Add
        </button>
      </div>
      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-5'>
        <ol className='space-y-3'>
          {tasks.map((task, index) => (
            <li
              key={index}
              className='flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm'
            >
              <span className='text-lg font-medium'>{task}</span>
              <div className='flex gap-2'>
                <button
                  className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className={`px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ${
                    index === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => handleUp(index)}
                  disabled={index === 0}
                >
                  Up
                </button>
                <button
                  className={`px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ${
                    index === tasks.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => handleDown(index)}
                  disabled={index === tasks.length - 1}
                >
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
  
}
