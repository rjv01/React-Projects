import React, { useState } from 'react';

export default function StackIm() {
  const [stackArray, setStackArray] = useState([0, 1, 2]);
  const [number, setNumber] = useState('');

  const handlePush = () => {
    if (number.trim() !== '') {
      setStackArray([...stackArray, number]);
      setNumber('');
    } else {
      alert('Empty field');
    }
  };

  const handlePop = () => {
    if (stackArray.length === 0) {
      alert('Stack is Empty');
      return;
    }
    setStackArray(stackArray.slice(0, -1));
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-500 to-slate-900 text-white flex justify-center items-start p-4">
      <div className="bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-md mt-8">
        <h1 className="text-4xl font-bold font-mono text-center mb-4">Stack Visualizer</h1>
        <p className="text-center text-gray-300 mb-6 italic">First-In Last-Out (FILO)</p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <input
            type="number"
            placeholder="Enter number"
            value={number}
            className="p-2 rounded-md text-black w-full max-w-[180px]"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            onClick={handlePush}
            className="bg-green-600 hover:bg-green-700 text-white duration-200 px-4 py-2 rounded-md"
          >
            Push
          </button>
          <button
            onClick={handlePop}
            className="bg-red-600 hover:bg-red-700 text-white duration-200 px-4 py-2 rounded-md"
          >
            Pop
          </button>
        </div>

        <div className="bg-gray-100 text-black rounded-lg max-h-[300px] overflow-y-auto shadow-inner p-4">
          {stackArray.length === 0 ? (
            <p className="text-center text-gray-500 italic">Stack is empty</p>
          ) : (
            [...stackArray].reverse().map((num, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 my-2 rounded-md shadow-md text-center`}
              >
                {num}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
