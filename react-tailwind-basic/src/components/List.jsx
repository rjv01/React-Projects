import React from 'react'

export default function List() {
    const fruits = ['apple','orange','pineapple','banana','coconut'];

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1>My List</h1>
        {fruits.map((fruit,index)=>
            <ul>
                <li key={index}>
                    {fruit}
                </li>
            </ul>
        )}
    </div>
  )
}
