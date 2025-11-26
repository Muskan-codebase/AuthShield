import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios"
import useVerifyOTP from './custom-hooks/useVerifyOTP';

function VerifyOTP() {
    const [email, setEmail] = useState();
    const [otp, setOTP] = useState();
    // const navigate = useNavigate();
    const { verifyOTP } = useVerifyOTP();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updateOTP = (e) => {
        setOTP(e.target.value);
    }

    const handleVerifyOTP = async function (e) {

        e.preventDefault();
        verifyOTP({ email, otp })

        setEmail("")
        setOTP("")
    }

    return (
        <>
            <div style={{
                backgroundImage: "url('/src/assets/blue-bg.avif')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "50px"
            }} className='flex justify-center items-center'>

                <form onSubmit={handleVerifyOTP} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-5 h-auto w-100 space-y-4'>
                    <h1 className='text-center text-4xl font-bold text-blue-700'>Verify OTP</h1>

                    <label className='text-xl'>Email</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="mail@site.com" className="input w-full" />

                    <label className='text-xl'>OTP</label><br></br>
                    <input type="text" inputMode="numeric" pattern="\d*" value={otp} onChange={updateOTP} maxLength={6} placeholder="OTP" className="input w-full" />

                    <br></br>

                    <button className='text-lg p-2 w-full bg-blue-600 text-white rounded mt-5 hover:bg-blue-500 cursor-pointer active:bg-blue-700'>verify</button>
                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default VerifyOTP
