import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1 className='text-4xl mt-10'>Simple Counter Application</h1>
        <div className='flex flex-col items-center mt-10'>
            <div className='flex'>
                <button 
                    className='text-2xl m-5 p-5 text-white bg-green-500 hover:bg-green-700 border rounded-full'
                    onClick={()=> setCount((count)=> count+1)}
                >
                    +
                </button>
                <button 
                    className='text-2xl m-5 p-5 text-white bg-red-500 hover:bg-red-700 border rounded-full' 
                    onClick={()=> setCount((count)=> count-1)}
                >
                    -
                </button>
                </div>
                <p className='text-3xl'>Count: {count}</p>
                <button
                    className='text-2xl m-5 p-5 text-white bg-blue-500 hover:bg-blue-700 border rounded-full' 
                    onClick={()=> setCount(0)}
                >
                    Reset
                </button>
        </div>
    </div>
  )
}
