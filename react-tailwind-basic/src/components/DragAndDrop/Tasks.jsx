import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Tasks({ id, title, imgPic,handleClick }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: transform ? CSS.Transform.toString(transform) : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            // className='flex flex-col justify-center items-center m-3 p-3 w-[300px] h-[420px] gap-3 bg-blue-300/50 hover:bg-blue-600 hover:text-white border rounded-xl'
            className='flex flex-col justify-center items-center m-3 p-3 gap-3 bg-blue-300/50 hover:bg-blue-600 hover:text-white border rounded-xl'
            key={id}
        >   
            <h3>{id} {title}</h3>
            {/* <img 
                src={imgPic}
                alt="Profile pic"
                className="gap-3 mt-5 w-[150px] h-[150px] rounded-full"
            />
            <button
                onClick={()=> handleClick(id)}
                className='border m-3 p-2 rounded-lg hover:text-white hover:bg-blue-800 duration-200 font-mono text-2xl'
            >
                Click me
            </button> */}
        </div>
    );
}
