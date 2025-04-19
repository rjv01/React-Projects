import React, { useState } from 'react'

export default function SendOTPandCopy() {
    const [otpnumber, setOtpNuNumber] = useState("");
    const [copied, setCopied] = useState(false);
    const [inputBoxValue1, setInputBoxValue1] = useState("");
    const [inputBoxValue2, setInputBoxValue2] = useState("");
    const [inputBoxValue3, setInputBoxValue3] = useState("");
    const [inputBoxValue4, setInputBoxValue4] = useState("");
    const [inputBoxValue5, setInputBoxValue5] = useState("");
    const [numSubmited,setNumSubmited] = useState(false);
    const [correctOpt, setCorrectOtp] = useState(false);

    const handleSendOtp = () => {
        const randomNumber = Math.floor(10000 + Math.random() * 90000);
        setOtpNuNumber(randomNumber);
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(otpnumber)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
    }

    const handlePaste = () => {
        if(copied === true){
            const StringOtpNumber = otpnumber.toString();
            setInputBoxValue1(StringOtpNumber[0]);
            setInputBoxValue2(StringOtpNumber[1]);
            setInputBoxValue3(StringOtpNumber[2]);
            setInputBoxValue4(StringOtpNumber[3]);
            setInputBoxValue5(StringOtpNumber[4]);
        }
        else
            alert("Copy OTP First");
    }

    const handleSubmit = () => {
        const StringOtpNumber = otpnumber.toString();
        if(inputBoxValue1.trim() === "" && inputBoxValue2.trim() === "" && inputBoxValue3.trim() === "" 
        && inputBoxValue4.trim() === "" && inputBoxValue5.trim() === ""){
            alert("Please fill all the Fields");
            return;
        }
        else{
            const StringInputValue = inputBoxValue1 + inputBoxValue2 + inputBoxValue3 + inputBoxValue4 + inputBoxValue5;
            setNumSubmited(true);
            setCorrectOtp(StringOtpNumber === StringInputValue);
        }
    }

    const handleReset = ()=>{
        setOtpNuNumber("");
        setCopied(false);
        setInputBoxValue1("");
        setInputBoxValue2("");
        setInputBoxValue3("");
        setInputBoxValue4("");
        setInputBoxValue5("");
        setNumSubmited(false);
        setCorrectOtp(false);
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 flex flex-col justify-center items-center p-6'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>Send OTP and Copy</h1>

            <div className='flex flex-wrap gap-4 items-center mb-6'>
                <button
                    className='bg-purple-600 hover:bg-purple-700 duration-200 text-white px-6 py-3 rounded-md shadow-md'
                    onClick={handleSendOtp}
                >
                    Send OTP
                </button>

                {otpnumber && (
                    <div className='flex items-center space-x-4'>
                        <span className='text-xl font-mono bg-white px-4 py-2  rounded-md shadow-sm border border-gray-400'>
                            {otpnumber}
                        </span>
                        <button
                            className={`px-6 py-3 duration-200 rounded-md shadow-md ${
                                copied ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
                            } text-white`}
                            onClick={handleCopyText}
                        >
                            {copied ? 'Copied' : 'Copy Text'}
                        </button>
                    </div>
                )}
            </div>

            <div className='flex flex-wrap justify-center items-center gap-3 mb-6'>
                {[inputBoxValue1, inputBoxValue2, inputBoxValue3, inputBoxValue4, inputBoxValue5].map((val, idx) => {
                    const setters = [
                        setInputBoxValue1, setInputBoxValue2,
                        setInputBoxValue3, setInputBoxValue4, setInputBoxValue5
                    ];
                    return (
                        <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            value={val}
                            onChange={(e) => setters[idx](e.target.value)}
                            className='text-center border-2 border-gray-700 text-2xl font-bold p-4 w-[60px] h-[60px] rounded-lg shadow-md bg-white'
                        />
                    );
                })}
            </div>

            <div className='flex flex-wrap gap-4 items-center'>
                {otpnumber && (
                    <button
                        className='bg-yellow-500 duration-200 hover:bg-yellow-600 text-white px-6 py-3 rounded-md shadow-md'
                        onClick={handlePaste}
                    >
                        Paste
                    </button>
                )}

                {otpnumber && (
                    <button
                        className='bg-green-600 duration-200 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </div>

            {otpnumber && numSubmited && (
                <div className='mt-4'>
                    {correctOpt ? (
                        <p className='text-green-800 font-semibold text-lg'>✅ OTP Matched!</p>
                    ) : (
                        <p className='text-red-600 font-semibold text-lg'>❌ OTP is incorrect. Try again.</p>
                    )}
                    <button
                        className='bg-red-600 duration-200 hover:bg-red-700 m-4 p-4 text-white px-6 py-3 rounded-md shadow-md'
                        onClick={handleReset}>Reset</button>
                </div>
            )}
        </div>
    );
}
