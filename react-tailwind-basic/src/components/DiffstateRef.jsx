import React, { useEffect, useState, useRef } from "react";

export default function DiffstateRef() {
  const [count, setCount] = useState(0); 
  const times = useRef(0); 

  function handleCount() {
    setCount((prev) => prev + 1); 
  }

  function handleTimes() {
    times.current += 1;
    console.log(`Current times: ${times.current}`);
  }

  useEffect(() => {
    console.log("Component re-rendered due to `count` (useState).");
  }, [count]);

  useEffect(() => {
    console.log("Component rendered once (useRef).");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bgGrid">
      <h1 className="text-2xl font-bold font-mono text-blue-400">UseState and UseRef</h1>
      <p>See Inspect for detail</p>
      <div className="grid grid-cols-2 border border-blue-500 m-5 p-5">
        <div className="border border-blue-800 p-3">
          <h1>Using useState</h1>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-500"
            onClick={handleCount}
          >
            Click
          </button>
          <p>Count: {count}</p>
        </div>

        <div className="border border-blue-800 p-3 ">
          <h1>Using useRef</h1>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-500"
            onClick={handleTimes}
          >
            Click
          </button>
          <p>Times: {times.current}</p>
        </div>
      </div>
    </div>
  );
}
