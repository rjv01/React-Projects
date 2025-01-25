import React from 'react'

export default function Users({users}) {
  return (
    <div className='border-2 border-black m-5 p-5'>
        <h1>Fetched users</h1>
        <ul>
            <p className='text-red-600 text-xl'>&nbsp; Total {users.length} users</p>
            {users.map((user) => (
                <li 
                    className=' border-4 rounded-lg border-blue-500 p-4  m-2 capitalize text-lg font-mono'
                    key={user.id}>
                    <span className='underline'>Id:</span> {user.id}
                    <br />
                    <span className='underline'>Name:</span> {user.name}
                    <br />
                    <span className='underline'>Body:</span> {user.username}
                    <br />
                    <span className='underline'>Email:</span> {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}
