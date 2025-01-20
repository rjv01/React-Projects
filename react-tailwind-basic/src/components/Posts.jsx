import React from 'react'

export default function Posts(props) {
    const {post} = props
    return (
        <div>
            <h2>{post.title} </h2>
            <h2>{post.body} </h2>
            <p>Post ID:{post.id}</p>
        </div>
    )
}
