import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

export default function ComponentD() {
    const user = useContext(UserContext);
    return (
        <div className=''>
            <div className='border border-black p-4'>
            <h1 className='m-5 p-5 text-4xl font-semibold font-mono'>ComponentD</h1>
            <p>{`Bye ${user}`}</p>
            </div>
        </div>
        )
}
