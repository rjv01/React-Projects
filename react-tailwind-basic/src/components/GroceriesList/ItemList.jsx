import React from 'react'
import LineItem from './LineItem'

export default function ItemList({items,handleCheck,handleDelete}) {
  return (
    <div>
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
