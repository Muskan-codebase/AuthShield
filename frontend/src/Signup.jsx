import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import useSignup from './custom-hooks/useSignup';

function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const { signup } = useSignup();

    useEffect(() => {
        // Initialize Google Sign-In
        google.accounts.id.initialize({
            client_id: "447769262246-ic62bekl2etfnia24afv2b8p51jompnq.apps.googleusercontent.com", // replace with your Google Client ID
            callback: handleGoogleResponse,
        });

        // Render the button in the container
        google.accounts.id.renderButton(
            document.getElementById("googleSignIn"),
            { theme: "outline", size: "large", width: "100%" }
        );
    }, []);

    // Handle Google response
    const handleGoogleResponse = async (response) => {
        try {
            // Send Google ID token to your backend
            const res = await axios.post("http://localhost:3000/api/auth/google", {
                token: response.credential,
            });

            // Save JWT
            localStorage.setItem("Token", res.data.token);
            toast.success("Logged in successfully with Google!");
            navigate("/profile"); // redirect after login
        } catch (err) {
            console.error(err);
            toast.error("Google login failed. Try again.");
        }
    };

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    function handleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function updateConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    const userSignup = async (e) => {
        e.preventDefault();
        signup({ name, email, password, confirmPassword })

    }

    return (
        <>
            <div style={{
                backgroundImage: "url('/src/assets/blue-bg.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                minHeight: "100vh"
            }} className='flex justify-center items-center'>

                <form onSubmit={userSignup} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-5 h-auto w-100 space-y-2'>
                    <h1 className='text-center text-3xl font-bold text-blue-700'>Signup</h1>

                    <label className='text-lg'>Name</label><br></br>
                    <input type="text" value={name} onChange={updateName} placeholder="fullname" className="input w-full" />

                    <br></br>

                    <label className='text-lg'>Email</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="mail@site.com" className="input w-full" />

                    <br></br>

                    <div className="relative">
                        <label className='text-lg'>Password</label><br></br>
                        <input type={showPassword ? "text" : "password"} value={password} onChange={updatePassword} placeholder="password" className="input w-full" />
                        {showPassword ?
                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEye onClick={handleShowPassword}></FaRegEye>
                            </span>)
                            :
                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEyeSlash onClick={handleShowPassword}></FaRegEyeSlash>
                            </span>)
                        }
                    </div>

                    <div className="relative">
                        <label className='text-lg'>Confirm Password</label><br></br>
                        <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={updateConfirmPassword} placeholder="confirm password" className="input w-full" />
                        {showConfirmPassword ?
                            (<span onClick={handleShowConfirmPassword} className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEye></FaRegEye>
                            </span>)
                            :
                            (<span onClick={handleShowConfirmPassword} className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEyeSlash></FaRegEyeSlash>
                            </span>)
                        }
                    </div>

                    <button className='text-lg p-2 mt-2 w-full bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer active:bg-blue-700'>Sign up</button>
                    {/* Google Sign-In container */}
                    <div id="googleSignIn">
                        <button type="button" className='flex items-center justify-center border-2 border-black text-lg p-2 w-full bg-white text-black rounded cursor-pointer'><FcGoogle /> Sign in with Google</button>
                    </div>
                    <p className='text-center'>Already have an account? <span className='font-semibold text-blue-600 cursor-pointer'>
                        <Link to="/login">Login</Link>
                    </span></p>

                </form >
            </div >

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Signup
