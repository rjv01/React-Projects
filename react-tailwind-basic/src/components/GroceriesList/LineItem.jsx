import React from 'react'

export default function LineItem({item,handleCheck,handleDelete}) {
  return (
    <div>
        <li>
            <input
                type='checkbox'
                onChange={()=> handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={item.checked ? {'textDecoration':'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>  
            <button onClick={()=> handleDelete(item.id)}>Delete</button>
        </li>
    </div>
  )
}
