import React from 'react'
import {useRef} from 'react';

export default function AddItems({newItem,setNewItem,handleSubmit}) {
    const inputRef = useRef();

    return (
        <div className='flex justify-center items-center'>
            <form
                className=''
                onSubmit={handleSubmit}>
                <input
                    className='w-[310px] h-[51px] text-xl rounded-lg border shadow-lg'
                    autoFocus
                    ref={inputRef}
                    type="text"
                    id='addItem'
                    placeholder=' Add Item'
                    required
                    value={newItem}
                    onChange={(e)=> setNewItem(e.target.value)}
                />
                <button
                    className='border m-2 p-3 bg-white font-semibold text-xl hover:bg-blue-500 duration-200 hover:text-white rounded-xl shadow-lg'
                    type='submit'
                    onClick={()=> inputRef.current.focus()}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
