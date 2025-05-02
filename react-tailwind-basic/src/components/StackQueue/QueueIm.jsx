import React, { useState } from 'react';

export default function QueueIm() {
  const [queueArray, setQueueArray] = useState([0, 1, 2]);
  const [number, setNumber] = useState('');

  const handlePush = () => {
    if (number.trim() !== '') {
      setQueueArray([...queueArray, number]);
      setNumber('');
    } else {
      alert('Empty Field');
    }
  };

  const handlePop = () => {
    if (queueArray.length === 0) {
      alert('Queue is Empty');
      return;
    }
    setQueueArray(queueArray.slice(1));
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-500 text-white flex justify-center items-start p-4">
      <div className="bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-md mt-8">
        <h1 className="text-4xl font-bold font-mono text-center mb-4">Queue Visualizer</h1>
        <p className="text-center text-gray-300 mb-6 italic">First-In First-Out (FIFO)</p>

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
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Push
          </button>
          <button
            onClick={handlePop}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Pop
          </button>
        </div>

        <div className="bg-gray-100 text-black rounded-lg max-h-[300px] overflow-y-auto shadow-inner p-4">
          {queueArray.length === 0 ? (
            <p className="text-center text-gray-500 italic">Queue is empty</p>
          ) : (
            queueArray.map((num, idx) => (
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
