import React from 'react'

export default function Posts(props) {
    const {post} = props
    return (
        <div className='bg-blue-500 m-2 p-2 border rounded-xl'>
            <h2 className='text-lg font-semibold font-mono'>{post.title} </h2>
            <h2 className='font-sans'>{post.body} </h2>
            <p className='font-bold'>Post ID:{post.id}</p>
        </div>
    )
}
