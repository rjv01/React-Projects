import React, { useEffect, useState } from 'react'

export default function ImgCarousel() {
    const [images,setImages] = useState([]);
    const [index,setIndex] = useState(0);
    const [Isloading,setIsLoading] = useState(false);

    const FetchData= async ()=>{
        try{
            setIsLoading(true);
            const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
            const res = await fetch(url);
            const result = await res.json();
            const data = result.data.children;
            console.log(data);
            const list = data.filter(
                (item)=>
                    item.data.url_overridden_by_dest.includes('.jpg'))
                .map((item)=> item.data.url_overridden_by_dest);
            console.log(list);
            setImages(list);
            setIsLoading(false)
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        FetchData();
        const tid=setInterval(()=>{
            handleNext();
        },3000);
        return ()=>{
            clearInterval(tid);
        }
    },[index]);

    const handleNext=()=>{
        setIndex((prevIndex)=>prevIndex+1);
    }

    const handleBack=()=>{
        const lastIndex = images.length-1;
        if(index === 0)
            setIndex(lastIndex);
        else{
            setIndex((prevIndex)=>prevIndex-1);
        }
    }

    return (
        <div className="min-h-screen bgGrid flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-4">Image Carousel</h1>

            <div className="relative w-full max-w-xl flex justify-center items-center">
                <button
                    onClick={handleBack}
                    className="absolute left-0 bg-white border rounded-full p-2 shadow hover:bg-gray-200"
                >
                    ⬅
                </button>

                {Isloading ? (
                    <p className="text-lg">Loading...</p>
                ) : (
                    <img
                        src={images[index]}
                        alt="not-found"
                        className="rounded-xl border shadow max-h-[750px] object-contain"
                    />
                )}

                <button
                    onClick={handleNext}
                    className="absolute right-0 bg-white border rounded-full p-2 shadow hover:bg-gray-200"
                >
                    ➡
                </button>
            </div>

            {/* <p className="mt-4 text-gray-500 text-sm">Image {index + 1} of {images.length}</p> */}
        </div>
    );
}