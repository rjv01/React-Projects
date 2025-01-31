import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Tasks from './Tasks'

export default function Column({tasks,handleClick}) {
  return (
    // <div className='grid grid-cols-4 text-xl font-semibold gap-3'>
    <div className='flex flex-col justify-center items-center text-xl font-semibold gap-3'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
                <Tasks  key={task.id} id={task.id} title={task.title} imgPic={task.imgPic} handleClick={handleClick} />
            ))}
        </SortableContext>
    </div>
  )
}
