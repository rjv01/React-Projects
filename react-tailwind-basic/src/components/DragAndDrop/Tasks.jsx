import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Tasks({ id, title, imgPic, handleDelete }) {
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
            className='flex flex-col justify-center items-center m-3 p-3 gap-3 bg-blue-300/50 hover:bg-blue-600 hover:text-white border rounded-xl'
        >   
            <h3>{id} {title}</h3>
            <button 
                onClick={()=> console.log('p')}
                className='text-red-600 hover:bg-red-600 hover:text-white m-2 p-3 rounded-xl'    
            >
                Delete
            </button>
        </div>
    );
}
