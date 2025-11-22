import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

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

        try {

            const response = await axios.post("http://localhost:3000/api/signup", {
                name,
                email,
                password,
                confirmPassword
            })

            console.log(response);
            localStorage.setItem("Token", response.data.token);

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            toast.success(response.data.message);
            navigate("/profile");
            window.location.reload();

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
                    <button className='flex items-center justify-center border-2 border-black text-lg p-2 w-full bg-white text-black rounded'><FcGoogle /> Sign in with Google</button>
                    <p className='text-center'>Already have an account? <span className='font-semibold text-blue-600 cursor-pointer'>
                        <Link to="/login">Login</Link>
                    </span></p>

                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Signup
