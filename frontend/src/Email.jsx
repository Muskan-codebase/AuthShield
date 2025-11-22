import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"

function Email() {

    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const forgotPassword = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3000/api/forgotPassword", {
                email
            })

            if (response) {

                toast.success(response.data.message)
                navigate("/verifyOTP")
                window.location.reload();
            }

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }

        }
    }

    return (
        <>
            <div style={{
                backgroundImage: "url('/src/assets/blue-bg.jpg')",
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

                <form onSubmit={forgotPassword} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-5 h-auto w-100 space-y-4'>
                    <h1 className='text-center text-2xl font-bold text-blue-700'>Enter Your Email to Receive OTP</h1>

                    <label className='text-xl'>Email</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="mail@site.com" className="input w-full" />

                    <br></br>

                    <button className='text-lg p-2 w-full bg-blue-600 text-white rounded mt-5 hover:bg-blue-500 cursor-pointer active:bg-blue-700'>send OTP</button>
                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Email
