import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"
import useForgotPassword from './custom-hooks/useForgotPassword';

function Email() {

    const [email, setEmail] = useState();
    const { forgotPassword } = useForgotPassword();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleForgotPassword = async (e) => {

        e.preventDefault();
        forgotPassword({ email });
    }

    return (
        <>
            <div style={{
                backgroundImage: "url('/src/assets/blue-bg.avif')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                minHeight: "91vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "50px"
            }} className='flex justify-center items-center'>

                <form onSubmit={handleForgotPassword} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-10 h-auto w-auto space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer'>
                    <h1 className='text-center text-3xl font-bold text-blue-700 mb-10'>Enter Your Email to Receive OTP</h1>
                    <label className='text-lg'>Enter your Email Id</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="email" className="input w-full text-lg" />

                    <br></br>

                    <button className='text-lg p-2 w-full bg-blue-600 text-white rounded mt-5 hover:bg-blue-500 cursor-pointer active:bg-blue-700'>send OTP</button>
                </form>
            </div>

            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
        </>
    )
}

export default Email
