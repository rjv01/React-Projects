import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeIcon() {
  return (
    <div className='flex flex-col justify-center items-center text-5xl bgGrid'>
        <Link to={'/'}><i className="fa-solid fa-house"></i></Link>
    </div>
  )
}
