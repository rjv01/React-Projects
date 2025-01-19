import React, { useRef, useEffect, useState } from 'react';

export default function FoucsEg() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  // const times     = useRef();

  const [count,setCount] = useState(0);

  //for useRef
  useEffect(() => {
    console.log("Component Render using useRef: ");
    // const alltext = document.getElementById("alltext");
    // const p = document.createElement("p");
    // p.textContent = "Component Render using useRef "+times;
    // alltext.appendChild(p);
  });

  //for useState
  useEffect(()=>{
    console.log("Component Render using useState: ",count);
    // const p = document.createElement("p");
    // p.textContent = "Component Rendered using useState "+count;
    // alltext.appendChild(p);
  },[]);
  
  function handleInput1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
    // times++;
  }
  function handleInput2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
    // times++;
  }
  function handleInput3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
    // times++;
  }
  function handleCount(){
    setCount(c => c+1);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bgGrid">
      <div id='alltext'>
        <h1>All Render Messages</h1>
      </div>
      <button 
        onClick={handleCount}
        className='border m-2 p-2 text-xl font-mono hover:bg-blue-500 hover:text-white duration-200 '
        >
        Click Me 0
        </button>
      <p>{count}</p>
      <h1 className='m-5 text-xl font-bold '>Using useRef Avoiding-Renedering</h1>
      <div className='flex flex-col border-8 border-blue-500'>
        <button 
          className="border m-2 p-2 text-xl font-mono hover:bg-blue-500 hover:text-white duration-200" 
          onClick={handleInput1}>
          Click Me 1
        </button>
        <input
          type="text"
          placeholder="Enter"
          className='m-5 p-5 text-lg font-serif font-black'
          ref={inputRef1}
        />
        <button 
          className="border m-2 p-2 text-xl font-mono hover:bg-blue-500 hover:text-white duration-200"
          onClick={handleInput2}>
          Click Me 2
        </button>
        <input
          type="text"
          placeholder="Enter"
          className='m-5 p-5 text-lg font-serif font-black'
          ref={inputRef2}
        />
        <button 
          className="border m-2 p-2 text-xl font-mono hover:bg-blue-500 hover:text-white duration-200" 
          onClick={handleInput3}>
          Click Me 3
        </button>
        <input
          type="text"
          placeholder="Enter"
          className='m-5 p-5 text-lg font-serif font-black'
          ref={inputRef3}
        />
      </div>
    </div>
  );
}
