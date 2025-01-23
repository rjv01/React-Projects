import React from 'react'
import LineItem from './LineItem'

export default function ItemList({items,handleCheck,handleDelete}) {
  return (
    <div className='flex flex-col mt-2 font-sans capitalize'>
        <ul>
            {items.map((item)=>(
                <LineItem 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    </div>
  )
}
