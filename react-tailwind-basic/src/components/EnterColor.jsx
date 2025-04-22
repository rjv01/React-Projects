import React, { useState } from 'react'

export default function EnterColor() {
    const [color,setColor] = useState('');
    
    function handleSetColor(e){
        const colorName = e.target.value;
        setColor(colorName);
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
            <h1 className='text-2xl font-mono p-3'>Color <span className='underline text-blue-500'>Display</span></h1>
            <div className='flex flex-col justify-center'>
                <p 
                id="area"
                className='flex justify-center items-center border border-black shadow-2xl rounded-xl font-mono text-2xl capitalize h-[450px] w-[450px] duration-700'
                style={{backgroundColor:color|| 'white'}}
                >
                {color || 'Color Name'}
                </p>
                <input 
                    type="text"
                    className='m-5 p-5 border border-black shadow-xl'
                    placeholder='Enter Color Name'
                    value={color}
                    onChange={handleSetColor}
                />
            </div>
        </div>
    )
}
