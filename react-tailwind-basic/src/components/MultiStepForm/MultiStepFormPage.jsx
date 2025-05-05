import React, { useState } from 'react'

export default function MultiStepFormPage() {
    const data=[
        {
            id:"name",
            label:"Name",
            inputType:"text",
            buttonName:"Next",
            placeholder:"Name...",
        },
        {
            id:"email",
            label:"Email",
            inputType:"email",
            buttonName:"Next",
            placeholder:"Email...",
        },
        {
            id:"dob",
            label:"Date of Birth",
            inputType:"date",
            buttonName:"Next",
            placeholder:"",
        },
        {
            id:"password",
            label:"Password",
            inputType:"password",
            buttonName:"submit",
            placeholder:"Password...",
        },
    ]
    const [forms,setforms] = useState(data);
    const [index,setIndex] = useState(0);
    const [showData,setShowData] = useState(false);
    const [formsData,setFormsData] = useState({
        name:'',
        email:'',
        dob:'',
        password:'',
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(index == forms.length-1){
            console.log("form submitted");
            setShowData(true);
        }
        else
        setIndex((prevIndex=>prevIndex+1));
}
    const handleBack=(e)=>{
        e.preventDefault();
        setIndex((prevIndex)=>prevIndex-1);    
    }
    const handleInputChange=(e)=>{
        const id = e.target.id;
        const val = e.target.value;
        if(val.trim() !== " "){
            // console.log(id,val)
            const copyFormData = {...formsData};
            copyFormData[id] = val;
            setFormsData(copyFormData);
        }
        else{
            alert("Empty fields");
        }
    }
    console.log("formData->",formsData)
    return (
        <div className='min-h-screen flex flex-col bgGrid justify-center items-center'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold'>MultiStepFormPage</h1>
            </div>
            { 
                !showData ?<form 
                className='flex flex-col w-[400px] h-[250px] bg-white gap-2 justify-center items-center border-2 border-black p-4 m-4 text-xl rounded-xl shadow-lg'
                onSubmit={handleSubmit}
                >
                {
                    index>0 && 
                    <a 
                        href="/"
                        onClick={handleBack}
                        className='text-blue-600 underline italic'
                    >👈Back</a>
                }
                <label htmlFor=""
                    className='text-2xl font-bold'
                >{forms[index].label}</label>
                <input
                    value={formsData[forms[index].id]}
                    type={forms[index].inputType}
                    id={forms[index].id}
                    onChange={handleInputChange}
                    className='text-2xl border-2 border-blue-400 p-2 m-1'
                    placeholder={forms[index].placeholder}
                    required
                    autoFocus
                />
                <button
                    // onClick={handleNext}
                    className='border-2 border-black p-3 m-2 hover:bg-red-500 duration-200 hover:text-white
                    w-[100px] rounded-lg'
                >{forms[index].buttonName}</button>
            </form>
            :
            <div className='text-3xl flex flex-col'>
                <h1 className='text-green-500 text-3xl font-bold'>Success!!</h1>
                <div className='border-2 border-blue-600 p-4 m-4 h-auto w-auto rounded-lg shadow-xl'>
                    Name:<span className='text-green-600'>{formsData.name}</span>
                    <hr />
                    Email:<span className='text-green-600'>{formsData.email}</span>
                    <hr />
                    Date-of-Birth:<span className='text-green-600'>{formsData.dob}</span>
                    <hr />
                    Password:<span className='text-green-600'>{formsData.password}</span>
                </div>
            </div>
            }
        </div>
    )
}
