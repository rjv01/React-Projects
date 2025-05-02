import React, { useState } from 'react'
import ShowModal from './ShowModal';

export default function Modal() {
    const [IsShow,setIsShow] = useState(true);
    const [IsShowModal,setIsShowModal] = useState(false);
    const [IsAOffer,setAOffer] = useState(false);

    const handleShowOffer = ()=>{
        setIsShow(false);
        setIsShowModal(true);
    }
    const handleClose = ()=>{
        setIsShow(true);
        setIsShowModal(false);
    }
    const handleOffer = ()=>{
        setIsShow(false);
        setIsShowModal(false);
        setAOffer(true);
    }
    return (
        <div className='min-h-screen bgGrid flex justify-center items-center'>
            {
                IsShow && 
                <button 
                className='bg-pink-500 text-2xl p-5 m-2 rounded-md text-white font-serif hover:bg-pink-600 duration-200'
                onClick={handleShowOffer}
                >        
                Show Offer</button>
            }
            {
                IsShowModal && <ShowModal handleClose={handleClose} handleOffer={handleOffer}/>
            }
            {
                IsAOffer && <div className='text-green-600 font-bold text-4xl font-sans'>Offer Accepted</div>
            }
        </div>
    )
}