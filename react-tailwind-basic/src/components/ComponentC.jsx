import React from 'react';
import ComponentD from './ComponentD';

export default function ComponentC() {
  return (
      <div className=''>
        <div className='border border-black p-4'>
          <h1 className=' m-5 p-5 text-4xl font-semibold font-mono'>ComponentC</h1>
          <ComponentD/>
        </div>
      </div>
    )
}
