import React, { useEffect, useState } from 'react';

export default function DataStore() {
  const [names, setNames] = useState(() => {
    const savedNames = localStorage.getItem('names');
    return savedNames ? JSON.parse(savedNames) : ['raj'];
  });

  const [newName, setNewName] = useState('');

  function handleName(e) {
    setNewName(e.target.value);
  }

  function handleAdd() {
    if (!newName.trim()) return;
    setNames((n) => [...n, newName]);
    setNewName('');
  }

  function handleDelete(index) {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  }
  
  function ClearALLMAIN(){
    localStorage.clear();
  }

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bgGrid">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Name Storage</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={newName}
            placeholder="Enter Name"
            onChange={handleName}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ol className="list-decimal list-inside mb-4 text-gray-700">
          {names.map((name, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-1 border-b border-gray-200"
            >
              <span>{name}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-sm text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
        <button 
          onClick={ClearALLMAIN}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mt-4"
          >
          Clear ALL
        </button>
      </div>
    </div>
  );
}
