import React from 'react'

export default function Albums({albums}) {
  return (
    <div className='border-2 border-black m-5 p-5'>
        <h1>Fetched Albums</h1>
        <ul>
            <p className='text-red-600 text-xl'>&nbsp; Total {albums.length} albums</p>
            {albums.map((album) => (
                <li 
                    className='border-4 rounded-lg border-blue-500 p-4  m-2 capitalize text-lg font-mono'
                    key={album.id}>
                    <span className='underline'>Id:</span> {album.id}
                    <br />
                    <span className='underline'>Title:</span> {album.title}
                </li>
            ))}
        </ul>
    </div>
  )
}
