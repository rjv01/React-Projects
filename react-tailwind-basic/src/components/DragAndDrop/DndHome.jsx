import React, { useState } from 'react'
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './Column';
import { arrayMove } from '@dnd-kit/sortable';
const profilePic = "profilePic/raj-profile.jpg";

export default function DndHome() {
    const [tasks,setTasks] = useState([
    { id: 1, title: "Raj Shekhar Verma",imgPic:profilePic },
    { id: 2, title: "Anshul Sarathe",imgPic:profilePic },
    { id: 3, title: "Aviral Mishra",imgPic:profilePic },
    { id: 4, title: "Milan Gour",imgPic:profilePic },
    { id: 5, title: "Ambrish Kumar Rai",imgPic:profilePic },
    { id: 6, title: "Rohan Wetal",imgPic:profilePic },
    { id: 7, title: "Gyan Parkash Barik",imgPic:profilePic },
    ]);

    function handleClick(id){
        console.log("clickedL: ",id)
    }
    
    const getTaskPos = id => tasks.findIndex(task => task.id === id);

    function handleDragEnd(e){
        const {active,over} = e;

        if(!over || active.id === over.id)
            return ;
        setTasks(tasks => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks,originalPos,newPos);
        })
    }


    return (
        <div className='min-h-screen bgGrid'>
            <div className='text-4xl m-2 p-3 font-bold flex flex-col items-center'>
                <h1>Drag And Drop</h1>
            </div>

            <div className='flex justify-center items-center'>
                <DndContext
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCorners}>
                    <Column tasks={tasks} handleClick={handleClick}/>
                </DndContext>
            </div>
        </div>
    )
}
