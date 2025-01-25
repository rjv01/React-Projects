import React from 'react'

export default function Comments({comments}) {
  return (
      <div className='border-2 border-black m-5 p-5'>
        <h1>Fetched Comments</h1>
        <ul>
            <p className='text-red-600 text-xl'>&nbsp; Total {comments.length} comments</p>
            {comments.map((comment) => (
                <li 
                    className='border-4 rounded-lg border-blue-500 p-4  m-2 capitalize text-lg font-mono'
                    key={comment.id}>
                    <span className='underline'>Id:</span> {comment.id}
                    <br />
                    <span className='underline'>Name:</span> {comment.name}
                    <br />
                    <span className='underline'>Email:</span> {comment.email}
                    <br />
                    <span className='underline'>Body:</span> {comment.body}
                </li>
            ))}
        </ul>
    </div>
  )
}
