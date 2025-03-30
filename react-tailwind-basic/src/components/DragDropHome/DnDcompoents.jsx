import React, { useRef, useState } from 'react'

export default function DnDcompoents({initialData}) {
    // console.log(initialData);
    const [data,setData] = useState(initialData);
    const dragItem = useRef();
    const dragContainer = useRef();

    const handleDragStart = (e,item,container)=>{
        dragItem.current = item;
        dragContainer.current = container;
        e.target.style.opacity = "0.5"
    };

    const handleDragEnd = (e)=>{
        e.target.style.opacity = "1";
    };

    const handleOnDrop = (e,tragetContainer)=>{
        const item = dragItem.current;
        const sourceContainer = dragContainer.current;

        setData((prev)=>{
            const newData = {...prev};

            newData[sourceContainer] = newData[sourceContainer].filter((i)=> i!== item);
            newData[tragetContainer] = [...newData[tragetContainer],item];

            return newData;
        })
    }

    const handleOnDragOver = (e)=>{
        e.preventDefault();
    }

    return (
        <div className='min-h-screen bg-slate-800'>
            <div className='flex justify-center items-center text-yellow-500 text-center'>
                {Object.keys(data).map((container,index)=>(
                    <div
                        className='text-3xl m-6 p-6 border-4 rounded-2xl'
                        onDragOver={handleOnDragOver}
                        onDrop={(e)=>handleOnDrop(e,container)}
                        key={index}
                    >
                        {container}
                        <ul>
                            {data[container].map((item,ind)=>(
                                <li 
                                    onDragStart={(e)=>handleDragStart(e,item,container)}
                                    onDragEnd={(e)=>handleDragEnd(e,item,handleDragEnd)}
                                    draggable
                                    className='hover:bg-blue-400 duration-200 text-xl m-3 p-3 bg-slate-950 text-white rounded-xl cursor-move'
                                    key={ind}
                                >
                                    {item}
                                </li>
                            ))}
                            {/* <input 
                                type="text"
                                placeholder='Enter Task'
                                onChange={(e)=>handlChange(e.target)}
                                className='m-3 p-2 rounded-xl '
                                /> */}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
