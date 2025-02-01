import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Tasks from './Tasks';

export default function Column({ tasks, handleDelete }) {
  return (
    <div className='flex flex-col justify-center items-center text-xl font-semibold gap-3'>
        <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
                <Tasks key={task.id} id={task.id} title={task.title} imgPic={task.imgPic} handleDelete={handleDelete} />
            ))}
        </SortableContext>
    </div>
  );
}
