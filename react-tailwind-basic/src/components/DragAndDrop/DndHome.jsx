import React, { useEffect, useState } from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Column from './Column';

const profilePic = "profilePic/raj-profile.jpg";

export default function DndHome() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('taskList');
        return storedTasks ? JSON.parse(storedTasks) : [
            { id: 1, title: "Raj Shekhar Verma", imgPic: profilePic },
            { id: 2, title: "Anshul Sarathe", imgPic: profilePic },
            { id: 3, title: "Aviral Mishra", imgPic: profilePic },
            { id: 4, title: "Milan Gour", imgPic: profilePic },
            { id: 5, title: "Ambrish Kumar Rai", imgPic: profilePic },
            { id: 6, title: "Rohan Wetal", imgPic: profilePic },
            { id: 7, title: "Gyan Parkash Barik", imgPic: profilePic },
            { id: 8, title: "Abhishek", imgPic: profilePic },
        ];
    });

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(tasks));
    }, [tasks]);

    const [textInput, setTextInput] = useState('');

    const getTaskPos = id => tasks.findIndex(task => task.id === id);

    function handleDragEnd(e) {
        const { active, over } = e;

        if (!over || active.id === over.id) return;

        setTasks(tasks => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks, originalPos, newPos);
        });
    }

    function handleAdd() {
        const newTitle = textInput.trim();
        if (newTitle !== "") {
            const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
            const newItem = { id: newId, title: newTitle, imgPic: profilePic };
            setTasks(prevTasks => [...prevTasks, newItem]);
            setTextInput('');
        }
    }

    function handleDelete(id) {
        console.log('ok');
        setTasks(prevTasks => {
            const updatedArr = prevTasks.filter(task => task.id !== id);
            localStorage.setItem('taskList', JSON.stringify(updatedArr)); // Store updated array immediately
            return updatedArr;
        });
    }
    

    return (
        <div className='min-h-screen bgGrid'>
            <div className='text-4xl m-2 p-3 font-bold flex flex-col items-center'>
                <h1>Drag And Drop</h1>
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Enter Name' 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button onClick={handleAdd}>Submit</button>
            </div>
            <div className='flex justify-center items-center'>
                <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <Column tasks={tasks} handleDelete={handleDelete} />
                </DndContext>
            </div>
        </div>
    );
}
