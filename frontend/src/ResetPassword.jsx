import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useSearchParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"
import useResetPassword from './custom-hooks/useResetPassword';

function ResetPassword() {

    const [searchParams] = useSearchParams();
    const tokenFromURL = searchParams.get("token");
    const emailFromURL = searchParams.get("email");

    // const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const navigate = useNavigate();
    const { resetPassword } = useResetPassword();


    const handlePasswordChange = function () {
        setShowNewPassword(!showNewPassword)
    }

    const handleConfirmPasswordChange = function () {
        setShowConfirmNewPassword(!showConfirmNewPassword)
    }

    // const updateEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    function updatePassword(e) {
        setNewPassword(e.target.value)
    }

    function updateConfirmNewPassword(e) {
        setConfirmNewPassword(e.target.value)
    }

    const handleResetPassword = async function (e) {

        e.preventDefault();
        if (!tokenFromURL || !emailFromURL) {
            toast.error("OTP Verification required!");
            return;
        }

        await resetPassword({
            email: emailFromURL,
            resetToken: tokenFromURL,
            newPassword,
            confirmNewPassword
        });

        setNewPassword("");
        setConfirmNewPassword("");

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

                <form onSubmit={handleResetPassword} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-5 h-auto w-100 space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer'>
                    <h1 className='text-center text-2xl font-bold text-blue-700'>Reset Password</h1>

                    {/* <label className='text-lg'>Email</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="mail@site.com" className="input w-full" /> */}

                    <br></br>

                    <div className="relative">
                        <label className='text-lg text-blue-600 font-semibold'>New password</label><br></br>
                        <input type={showNewPassword ? "text" : "password"} value={newPassword} onChange={updatePassword} placeholder="new password" className="input w-full" />
                        {showNewPassword ?
                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEye onClick={handlePasswordChange}></FaRegEye>
                            </span>)

                            :

                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEyeSlash onClick={handlePasswordChange}></FaRegEyeSlash>
                            </span>)
                        }
                    </div>

                    <div className="relative">
                        <label className='text-lg text-blue-600 font-semibold'>Confirm New Password</label><br></br>
                        <input type={showConfirmNewPassword ? "text" : "password"} value={confirmNewPassword} onChange={updateConfirmNewPassword} placeholder="confirm new password" className="input w-full" />
                        {showConfirmNewPassword ?
                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEye onClick={handleConfirmPasswordChange}></FaRegEye>
                            </span>)

                            :

                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEyeSlash onClick={handleConfirmPasswordChange}></FaRegEyeSlash>
                            </span>)
                        }
                    </div>

                    <button className='text-lg p-2 w-full bg-blue-600 text-white rounded mt-5 hover:bg-blue-500 cursor-pointer active:bg-blue-700'>Reset</button>
                </form>
            </div>

            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
        </>
    )
}

export default ResetPassword
