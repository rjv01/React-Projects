import React from 'react';
import ComponentC from './ComponentC';

export default function ComponentB() {
  return (
      <div className=''>
        <div className='border border-black p-4'>
            <h1 className=' m-5 p-5 text-4xl font-semibold font-mono'>ComponentB</h1>
            <ComponentC />
        </div>
      </div>
    )
}
