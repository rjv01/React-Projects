import React, { useState,createContext } from 'react';
import ComponentB from './ComponentB';

export const UserContext = createContext();


export default function ComponentA() {
    const [user,setUser] = useState('');
  return (
    <div className='min-h-screen flex flex-col items-center m-5 bgGrid'>
        <div className='border border-black p-4'>
            <button 
                className='text-orange-600 font-semibold hover:text-2xl duration-200'
                onClick={()=>alert('Visit My GitHub https://github.com/rjv01')}>
            Raj Shekhar Verma
            </button>
            <h1 className='m-5 p-5 text-4xl font-semibold font-mono'>ComponentA</h1>
            <p>Hello</p>
            <input 
                type="text"
                value={user}
                placeholder='Enter Name'
                onChange={(e) => setUser(e.target.value)}
            />
            {console.log("Learning Context Hook")}
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>

        </div>
    </div>
  )
}
