import React from 'react'

export default function ShowModal({handleClose,handleOffer}) {
  return (
    <div onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
        <div
            onClick={(e) => e.stopPropagation()}
            className='relative bg-pink-500 p-6 m-4 w-[90%] max-w-md h-[350px] rounded-xl flex flex-col justify-between'>
            <button 
                className='border-2 rounded-full border-black text-white p-2 hover:bg-red-500 absolute top-2 left-2 text-2xl hover:font-bold duration-200'
                onClick={handleClose}>X</button>

            <div className='text-center text-xl font-semibold font-sans p-4 m-6'>
                Click the button below
                to accept our offer.
            </div>

            <button 
                className='rounded-lg hover:bg-pink-600 duration-200 text-white p-4 text-xl font-sans font-semibold self-center mb-2'
                onClick={handleOffer}>
                Accept Offer
            </button>
        </div>
    </div>
  )
}