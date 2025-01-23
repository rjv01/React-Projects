import React from 'react'

export default function Footer({length}) {
  return (
    <div className='flex justify-center items-center m-2 p-2'>
        <p>{length} List {length === 1 ? "Item":"Items"}</p>
    </div>
  )
}