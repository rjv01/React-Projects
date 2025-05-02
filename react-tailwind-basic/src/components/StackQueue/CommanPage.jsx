import React from 'react'
import StackIm from './StackIm'
import QueueIm from './QueueIm'

export default function CommanPage() {
  return (
    <div className='min-h-screen bgGrid flex flex-col justify-start items-center'>
        <div className='text-2xl font-bold font-sans'>
            <h1 className='m-2'>Welcome to Virtual Representation </h1>
            <h1 className=''> Of <span className='text-red-500 font-semibold shadow-xl p-2 m-2'>Stack</span> and <span className='text-red-500 font-semibold shadow-xl p-2 m-2'>Queue</span> Data Structure</h1>   
        </div>
        <div className='grid grid-cols-2 gap-4 text-center h-[800px] w-[80%] p-4 m-2'>
            <StackIm />
            <QueueIm />
        </div>
    </div>
  )
}
