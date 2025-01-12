import React from 'react';

export default function Flexdir() {
  return (
    <div className='min-h-screen bgGrid flex justify-center items-center'>
      {/* <div className='flex items-center'>
        <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>1</p>
        <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>2</p>
        <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>3</p>
        <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>4</p>
      </div> */}
        <div className='grid grid-cols-2 gap-4'>
            <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>1</p>
            <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>2</p>
            <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>3</p>
            <p className='bg-red-600 w-16 h-16 m-5 flex justify-center items-center text-white'>4</p>
        </div>
    </div>
    
  );
}
