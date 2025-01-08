import React, { useState } from 'react'

export default function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF");
    function handleColorChange(e){
        setColor(e.target.value);
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1 className='text-5xl m-5'>Color Picker</h1>
        <div style={{background:color}} className='flex flex-col justify-center items-center text-xl border border-black rounded-2xl  m-5 w-[450px] h-[300px]' >
            <p >Selected Color {color}</p>
        </div>
        <div className='flex'>
            <label className='text-2xl' >Select a color: </label>
            <input type="color" name="" id="colorpick" value={color} onChange={handleColorChange}/>
        </div>
    </div>
  )
}
